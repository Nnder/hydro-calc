// server/api/send-email.post.ts
import { defineEventHandler, readMultipartFormData, createError } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async event => {
  try {
    // Читаем multipart form data
    const formData = await readMultipartFormData(event)

    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No form data provided',
      })
    }

    console.log('Raw form data:', JSON.stringify(formData, null, 2))

    // Парсим данные формы
    const fields: any = {}

    for (const field of formData) {
      if (field.name && field.data) {
        // Для всех полей (и текстовых и файлов) сохраняем значение
        fields[field.name] = field.data.toString('utf-8')

        // Логируем каждое поле для отладки
        console.log(`Field: ${field.name} = ${fields[field.name]}`)
      }
    }

    console.log('Parsed fields:', fields)

    const { fio, phone, text, email, company } = fields

    // Валидация
    if (!fio || !phone || !text) {
      throw createError({
        statusCode: 400,
        statusMessage: `Missing required fields. fio: ${!!fio}, phone: ${!!phone}, text: ${!!text}. Fields: ${Object.keys(fields).join(', ')}`,
      })
    }

    // Проверяем наличие переменных окружения
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials missing:', {
        user: process.env.SMTP_USER ? 'set' : 'missing',
        pass: process.env.SMTP_PASS ? 'set' : 'missing',
      })
      throw createError({
        statusCode: 500,
        statusMessage: 'SMTP configuration error ' + process.env.SMTP_USER + process.env.SMTP_PASS,
      })
    }

    // Создаем транспортер
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.ru',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Проверяем подключение
    await transporter.verify()

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'egoravyyy@yandex.ru',
      subject: `Новая заявка от ${fio}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>ФИО:</strong> ${fio}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Не указан'}</p>
        <p><strong>Компания:</strong> ${company || 'Не указана'}</p>
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
      statusMessage: errorMessage,
    })
  }
})
