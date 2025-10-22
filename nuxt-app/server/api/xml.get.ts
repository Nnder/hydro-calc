// ~/server/api/xml.get.ts
export default defineEventHandler(async event => {
  try {
    // Фетчим XML с tss.ru на сервере (здесь CORS не мешает)
    const response = await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
      headers: {
        'User-Agent': 'HydroCalc/1.0', // Твой User-Agent, если нужно
      },
    })
    // Возвращаем XML как строку (или объект, если хочешь парсить здесь)
    return response
  } catch (error) {
    // Логируем ошибку и возвращаем fallback
    console.error('Ошибка при фетче XML:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch XML from tss.ru',
    })
  }
})
