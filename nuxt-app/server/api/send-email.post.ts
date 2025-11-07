import { defineEventHandler, readMultipartFormData, createError } from 'h3'
import * as nodemailer from 'nodemailer'

interface EmailData {
  fio: string
  phone: string
  text: string
  email?: string
  company?: string
  // добавьте другие поля по необходимости
}

export default defineEventHandler(async event => {
  try {
    // Чтение multipart/form-data
    const formData = await readMultipartFormData(event)

    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No form data provided',
      })
    }

    // Парсинг данных формы
    const emailData: Partial<EmailData> = {}
    const files: { filename: string; content: Buffer }[] = []

    for (const field of formData) {
      if (field.name && field.data) {
        if (field.filename) {
          // Это файл
          files.push({
            filename: field.filename,
            content: field.data,
          })
        } else {
          // Это текстовое поле
          emailData[field.name as keyof EmailData] = field.data.toString('utf-8')
        }
      }
    }

    // Валидация обязательных полей
    if (!emailData.fio || !emailData.phone || !emailData.text) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: fio, phone, text',
      })
    }

    // Настройка транспортера для отправки почты
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Подготовка вложений
    const attachments = files.map(file => ({
      filename: file.filename,
      content: file.content,
    }))

    // Формирование содержимого письма
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'egoravyyy@yandex.ru',
      subject: `Новая заявка от ${emailData.fio}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>ФИО:</strong> ${emailData.fio}</p>
        <p><strong>Телефон:</strong> ${emailData.phone}</p>
        <p><strong>Email:</strong> ${emailData.email || 'Не указан'}</p>
        <p><strong>Компания:</strong> ${emailData.company || 'Не указана'}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${emailData.text}</p>
        <hr>
        <p><small>Отправлено: ${new Date().toLocaleString('ru-RU')}</small></p>
      `,
      attachments,
    }

    // Отправка письма
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (error: any) {
    console.error('Error sending email:', error)

    throw createError({
      statusCode: 500,
      statusMessage: `Failed to send email: ${error.message}`,
    })
  }
})
