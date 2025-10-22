// /server/api/xml.get.js
export default defineEventHandler(async event => {
  // Используем Nitro storage для кеширования (по умолчанию в файловой системе)
  const storage = useStorage('cache') // 'cache' — это пространство, можно настроить в nuxt.config.ts

  const cacheKey = 'xml-data' // Ключ для хранения XML
  const TTL = 3600000 // Time To Live: 1 час в миллисекундах (измени на нужное, например 86400000 для 24 часов)

  // Пытаемся получить кеш
  let cached = await storage.getItem(cacheKey)

  // Проверяем, есть ли кеш и не истек ли TTL
  if (!cached || Date.now() - cached.timestamp > TTL) {
    try {
      // Fetch XML с внешнего источника (замени на свой URL, если отличается)
      const xmlData = await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
        method: 'GET',
        headers: {
          'User-Agent': 'YourApp/1.0', // Опционально, чтобы избежать блокировок
        },
      })

      // Сохраняем в кеш
      cached = {
        data: xmlData, // XML как строка
        timestamp: Date.now(),
      }
      await storage.setItem(cacheKey, cached)

      console.log('XML обновлен и сохранен в кеш') // Лог для отладки
    } catch (error) {
      console.error('Ошибка при fetch XML:', error)
      if (!cached) {
        // Если кеша нет вообще, бросаем ошибку
        throw createError({
          statusCode: 500,
          statusMessage: 'Не удалось загрузить XML и нет кеша',
        })
      }
      // Иначе используем старый кеш (не обновляем timestamp)
      console.log('Используем старый кеш из-за ошибки fetch')
    }
  } else {
    console.log('XML взят из кеша') // Лог для отладки
  }

  // Возвращаем XML-строку
  return cached.data
})
