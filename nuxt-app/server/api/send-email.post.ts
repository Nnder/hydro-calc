import { defineEventHandler, readMultipartFormData, createError, getHeader } from 'h3'
import nodemailer from 'nodemailer'
import { OPERATOR_READY } from '../../shared/privacy'
import { validateApplication, escapeHtml, recordApplication, markApplication } from '../utils/applicationPrivacy'

export default defineEventHandler(async event => {
  const length = Number(getHeader(event, 'content-length'))
  if (!Number.isSafeInteger(length) || length <= 0) throw createError({ statusCode: 411, statusMessage: 'Требуется размер запроса.' })
  if (length > 12 * 1024 * 1024) throw createError({ statusCode: 413, statusMessage: 'Размер запроса превышает 12 МБ.' })
  const parts = await readMultipartFormData(event)
  if (!parts) throw createError({ statusCode: 400, statusMessage: 'Заполните форму.' })
  const fields: Record<string, string> = {}
  const files: { filename: string; content: Buffer }[] = []
  const allowed = new Set(['fio', 'phone', 'text', 'type', 'agreement', 'consentVersion'])
  for (const part of parts) {
    if (part.filename !== undefined) {
      if (part.name !== 'files') throw createError({ statusCode: 400, statusMessage: 'Неизвестное поле файла.' })
      files.push({ filename: part.filename.replace(/[\\/\r\n]/g, '_').slice(0, 150) || 'attachment', content: part.data })
    } else if (part.name && allowed.has(part.name)) {
      if (fields[part.name] !== undefined) throw createError({ statusCode: 400, statusMessage: 'Повторяющееся поле.' })
      fields[part.name] = part.data.toString('utf8')
    }
  }
  validateApplication(fields)
  if (files.length > 5 || files.reduce((sum, f) => sum + f.content.length, 0) > 10 * 1024 * 1024) {
    throw createError({ statusCode: 400, statusMessage: 'Не более 5 файлов общим объёмом до 10 МБ.' })
  }
  const config = useRuntimeConfig()
  const routes: Record<string, string> = {
    'Изготовление': 'Kyzma-Ivakin@AThydro-nt.ru', 'Продажа': 'Kyzma-Ivakin@AThydro-nt.ru',
    'Ремонт': 'Kyzma-Ivakin@AThydro-nt.ru', 'Консультация': 'Kyzma-Ivakin@AThydro-nt.ru',
    'Выездная служба': 'Kyzma-Ivakin@AThydro-nt.ru',
    'Продажа запасных запчастей': String(config.sparePartsMailTo || ''),
    'Продажа TSS': 'a6623142903@yandex.ru', 'Коммерческое предложение': 'a6623142903@yandex.ru',
  }
  const recipient = routes[fields.type || 'Консультация']
  // Черновики с неизвестным оператором нельзя использовать для получения согласия.
  if (!OPERATOR_READY || !recipient || !config.smtpUser || !config.smtpPass || !config.consentStorageDir) {
    throw createError({ statusCode: 503, statusMessage: 'Форма временно недоступна. Позвоните 8 (800) 222-20-31.' })
  }
  try {
    // Первичная запись на сервере в РФ до передачи в почтовый сервис.
    const { record, path } = await recordApplication(String(config.consentStorageDir), fields, files)
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru', port: 465, secure: true,
      auth: { user: String(config.smtpUser), pass: String(config.smtpPass) },
      tls: { rejectUnauthorized: true },
      connectionTimeout: 10000, socketTimeout: 20000,
    })
    try {
      await transporter.sendMail({
        from: String(config.smtpUser), to: recipient, subject: `Заявка athydro.ru ${record.id}`,
        html: `<h2>Новая заявка</h2><p>${escapeHtml(fields.type || '')}</p><p>Имя: ${escapeHtml(fields.fio)}</p><p>Телефон: ${escapeHtml(fields.phone)}</p><p style="white-space:pre-wrap">${escapeHtml(fields.text || '')}</p><hr><p>Заявка: ${record.id}. Согласие: ${record.consent.version}. Получено: ${record.receivedAt}.</p>`,
        attachments: files,
      })
      await markApplication(path, record, 'emailed')
    } catch {
      // Заявка уже сохранена: не предлагаем посетителю отправить её повторно.
      await markApplication(path, record, 'delivery-pending')
      console.error('application_delivery_pending', record.id)
    } finally { transporter.close() }
    return { success: true, requestId: record.id }
  } catch {
    console.error('application_storage_error')
    throw createError({ statusCode: 503, statusMessage: 'Не удалось сохранить заявку. Позвоните 8 (800) 222-20-31.' })
  }
})
