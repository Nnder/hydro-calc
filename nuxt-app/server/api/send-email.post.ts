// server/api/send-email.post.ts
import { defineEventHandler, readMultipartFormData, createError } from 'h3'
import nodemailer from 'nodemailer'

const mailType = {
  'Kyzma-Ivakin@AThydro-nt.ru': ['Изготовление', 'Продажа', 'Ремонт', 'Консультация', 'Выездная служба'],
  'absoluttehnodir@gmail.com': ['Продажа запасных запчастей'],
  'a6623142903@yandex.ru': ['Продажа TSS', 'Коммерческое предложение'],
}

function findMailByType(mailType, type) {
  for (const key in mailType) {
    if (mailType[key].includes(type)) {
      return key
    }
  }
  return null
}

export default defineEventHandler(async event => {
  try {
    // Читаем multipart form data
    const formData = await readMultipartFormData(event)
    const config = useRuntimeConfig()

    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No form data provided',
      })
    }

    // console.log('Raw form data:', JSON.stringify(formData, null, 2))

    // Парсим данные формы
    const fields: any = {}

    for (const field of formData) {
      if (field.name && field.data) {
        // Для всех полей (и текстовых и файлов) сохраняем значение
        fields[field.name] = field.data.toString('utf-8')

        // Логируем каждое поле для отладки
        // console.log(`Field: ${field.name} = ${fields[field.name]}`)
      }
    }

    const { fio, phone, text, email, company, type } = fields

    const to = findMailByType(mailType, type)

    console.log('Parsed fields:', to, fields)

    // Валидация
    if (!fio || !phone || !text) {
      throw createError({
        statusCode: 400,
        statusMessage: `Missing required fields. fio: ${!!fio}, phone: ${!!phone}, text: ${!!text}. Fields: ${Object.keys(fields).join(', ')}`,
      })
    }

    // Проверяем наличие переменных окружения
    if (!config.smtpUser || !config.smtpPass) {
      console.error('SMTP credentials missing:', {
        user: config.smtpUser ? 'set' : 'missing',
        pass: config.smtpPass ? 'set' : 'missing',
      })
      throw createError({
        statusCode: 500,
        statusMessage: 'SMTP configuration error ' + config.smtpUser + config.smtpPass,
      })
    }

    // Создаем транспортер
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Проверяем подключение
    await transporter.verify()
    // to ||
    const mailOptions = {
      from: config.smtpUser,
      to: 'egoravyyy@yandex.ru',
      subject: `Новая заявка от ${fio}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>ФИО:</strong> ${fio}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Тип:</strong> ${type}</p>
        <p><strong>кому:</strong> ${to}</p>
        <p><strong>Сообщение:</strong></p>
        <p style="white-space: pre-line;">${text}</p>
        <hr>
        <p><small>Отправлено: ${new Date().toLocaleString('ru-RU')}</small></p>
      `,
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return {
      success: true,
      message: 'Email sent successfully',
      messageId: result.messageId,
    }
  } catch (error: any) {
    console.error('Error sending email:', error)

    // Более информативное сообщение об ошибке
    let errorMessage = 'Failed to send email'
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Check your email and password.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection to SMTP server failed.'
    } else {
      errorMessage = error.message
    }

    throw createError({
      statusCode: 500,
      statusMessage: errorMessage + ' | ' + JSON.stringify(error),
    })
  }
})
