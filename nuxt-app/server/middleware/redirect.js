// server/middleware/redirect.js
export default defineEventHandler(event => {
  const host = getHeader(event, 'host') // Получаем домен, например 'hydro-calc.vercel.app'
  const url = getRequestURL(event) // Полная URL запроса

  // Проверяем, если домен — поддомен Vercel (заканчивается на .vercel.app)
  if (host && host.endsWith('.vercel.app')) {
    // Редирект на кастомный домен с тем же путем и параметрами
    const newUrl = `https://athydro.ru${url.pathname}${url.search}`
    throw createError({
      statusCode: 301, // Постоянный редирект (для SEO)
      statusMessage: 'Moved Permanently',
      headers: {
        Location: newUrl,
      },
    })
  }

  // Опционально: дополнительные проверки для других доменов
  // Например, если хотите редиректировать только с определенного поддомена
  // if (host === 'hydro-calc.vercel.app') { ... }
})
