// server/api/send-email.post.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  // Конфигурация транспорта с исправленными параметрами
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'app.debugmail.io',
    port: parseInt(process.env.MAIL_PORT || '25'),
    secure: false, // false для STARTTLS на порту 25
    requireTLS: true, // принудительно использовать STARTTLS
    tls: {
      rejectUnauthorized: false, // для тестового окружения
    },
    auth: {
      user: process.env.MAIL_USERNAME || '4860b64d-cada-4fb6-971a-2ceacb8535ee',
      pass: process.env.MAIL_PASSWORD || 'd5403f91-2c65-43f3-9e37-166301c869e6',
    },
  })

  try {
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'John Doe'}" <${process.env.MAIL_FROM_ADDRESS || 'john.doe@example.org'}>`,
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('Email sending error details:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
      data: {
        originalError: error.message,
        debugInfo: 'Check your SMTP settings and try again',
      },
    })
  }
})
