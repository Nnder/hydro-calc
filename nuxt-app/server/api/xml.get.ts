import { XMLParser } from 'fast-xml-parser'
import { fixName } from '@/utils/fixName'

export default defineEventHandler(async event => {
  const storage = useStorage('cache')
  const cacheKey = 'xml-processed-data'
  const TTL = 3600000 // 1 час

  let cached = await storage.getItem(cacheKey)

  if (!cached || Date.now() - cached.timestamp > TTL) {
    try {
      // Загружаем XML
      const xmlData = await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
        method: 'GET',
        headers: { 'User-Agent': 'bitrix/1.0' },
      })

      // Парсим XML
      const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
      const parsed = parser.parse(xmlData)

      // Извлекаем категории и предложения, приводим к массивам
      const categories = Array.isArray(parsed.yml_catalog?.shop?.categories?.category)
        ? parsed.yml_catalog.shop.categories.category
        : [parsed.yml_catalog?.shop?.categories?.category].filter(Boolean)
      const offers = Array.isArray(parsed.yml_catalog?.shop?.offers?.offer)
        ? parsed.yml_catalog.shop.offers.offer
        : [parsed.yml_catalog?.shop?.offers?.offer].filter(Boolean)

      // Строим карту категорий (упрощенная версия без отдельной функции)
      const categoryMap = {}
      categories.forEach(cat => {
        const id = cat['@_id']
        const title = cat['#text']?.trim() || ''
        const parentId = cat['@_parentId']
        const link = fixName(title)
        categoryMap[id] = { id, title, parentId, link, children: [], offers: [] }
      })
      // Связываем детей
      Object.values(categoryMap).forEach(cat => {
        if (cat.parentId && categoryMap[cat.parentId]) {
          categoryMap[cat.parentId].children.push(cat.id)
        }
      })

      // Собираем дерево для категории (упрощенная рекурсивная функция, но можно оставить)
      function buildTree(rootId) {
        const cat = categoryMap[rootId]
        if (!cat) return null
        const node = { ...cat, children: [] }
        cat.children.forEach(childId => {
          const childNode = buildTree(childId)
          if (childNode) node.children.push(childNode)
        })
        return node
      }

      // Собираем все ID подкатегорий (упрощенная рекурсивная функция)
      function collectIds(rootId, idsSet = new Set()) {
        if (!categoryMap[rootId]) return idsSet
        idsSet.add(rootId)
        categoryMap[rootId].children.forEach(childId => collectIds(childId, idsSet))
        return idsSet
      }

      // Собираем секции
      const sections = {
        electrostancii: { rootId: '156196', ids: new Set(), children: [] },
        'stroitelnoe-oborydovanie': { rootId: null, ids: new Set(), children: [] },
      }

      // Для electrostancii
      const electroRootId = sections.electrostancii.rootId
      if (electroRootId && categoryMap[electroRootId]) {
        sections.electrostancii.ids = collectIds(electroRootId)
        const tree = buildTree(electroRootId)
        sections.electrostancii.children = tree?.children || []
      }

      // Для stroitelnoe-oborydovanie
      const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
      targetSubIds.forEach(id => {
        sections['stroitelnoe-oborydovanie'].ids = new Set([
          ...sections['stroitelnoe-oborydovanie'].ids,
          ...collectIds(id),
        ])
        const tree = buildTree(id)
        if (tree) sections['stroitelnoe-oborydovanie'].children.push(tree)
      })

      // Парсим предложения и добавляем в категории (упрощенная версия)
      offers.forEach(offerObj => {
        const offer = {
          id: offerObj['@_id'],
          available: offerObj['@_available'],
          url: offerObj.url || '',
          link: `/sell/category/${fixName(categoryMap[offerObj.categoryId]?.title || '')}/product/${fixName(offerObj.name)}`,
          price: parseFloat(offerObj.price || '0'),
          currencyId: offerObj.currencyId || '',
          categoryId: offerObj.categoryId || '',
          pictures: Array.isArray(offerObj.picture) ? offerObj.picture : [offerObj.picture].filter(Boolean),
          title: offerObj.name || '',
          description: offerObj.description || '',
          params: {},
        }
        // Добавляем параметры
        const params = Array.isArray(offerObj.param) ? offerObj.param : [offerObj.param].filter(Boolean)
        params.forEach(param => {
          offer.params[param['@_name']] = param['#text']
        })
        // Добавляем в категорию
        if (categoryMap[offer.categoryId]) {
          categoryMap[offer.categoryId].offers.push(offer)
        }
      })

      // Кешируем
      cached = { data: { sections }, timestamp: Date.now() }
      await storage.setItem(cacheKey, cached)
      console.log('Обработанные данные обновлены и сохранены в кеш')
    } catch (error) {
      console.error('Ошибка при fetch/парсинге XML:', error)
      if (!cached) {
        throw createError({ statusCode: 500, statusMessage: 'Не удалось загрузить и обработать данные' })
      }
      console.log('Используем старый кеш из-за ошибки')
    }
  } else {
    console.log('Обработанные данные взяты из кеша')
  }

  return cached.data
})
