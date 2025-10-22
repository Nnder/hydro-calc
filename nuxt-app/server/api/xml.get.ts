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

      // Используем Map для быстрого доступа по ID (быстрее объектов для больших наборов)
      const fullCategoryMap = new Map()
      categories.forEach(cat => {
        const id = cat['@_id']
        const title = cat['#text']?.trim() || ''
        const parentId = cat['@_parentId']
        const link = fixName(title)
        fullCategoryMap.set(id, { id, title, parentId, link, children: [], offers: [] })
      })
      // Связываем детей (один проход)
      fullCategoryMap.forEach(cat => {
        if (cat.parentId && fullCategoryMap.has(cat.parentId)) {
          fullCategoryMap.get(cat.parentId).children.push(cat.id)
        }
      })

      // Итеративный сбор всех ID подкатегорий (избегаем рекурсии для скорости и памяти)
      function collectIdsIterative(rootId) {
        const ids = new Set()
        const stack = [rootId]
        while (stack.length > 0) {
          const currentId = stack.pop()
          if (ids.has(currentId)) continue
          ids.add(currentId)
          const cat = fullCategoryMap.get(currentId)
          if (cat) {
            stack.push(...cat.children)
          }
        }
        return ids
      }

      // Итеративное построение дерева (избегаем рекурсии)
      function buildTreeIterative(rootId) {
        if (!fullCategoryMap.has(rootId)) return null
        const stack = [{ id: rootId, node: null }]
        const rootNode = { ...fullCategoryMap.get(rootId), children: [] }
        const nodeMap = new Map([[rootId, rootNode]])
        while (stack.length > 0) {
          const { id, node } = stack.pop()
          const currentNode = nodeMap.get(id)
          const cat = fullCategoryMap.get(id)
          cat.children.forEach(childId => {
            const childNode = { ...fullCategoryMap.get(childId), children: [] }
            nodeMap.set(childId, childNode)
            currentNode.children.push(childNode)
            stack.push({ id: childId, node: childNode })
          })
        }
        return rootNode
      }

      // Собираем релевантные ID для секций (чтобы строить только нужные части)
      const relevantIds = new Set()
      const electroRootId = '156196'
      if (fullCategoryMap.has(electroRootId)) {
        collectIdsIterative(electroRootId).forEach(id => relevantIds.add(id))
      }
      const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
      targetSubIds.forEach(id => {
        if (fullCategoryMap.has(id)) {
          collectIdsIterative(id).forEach(subId => relevantIds.add(subId))
        }
      })

      // Строим categoryMap только для релевантных ID (экономим память)
      const categoryMap = new Map()
      relevantIds.forEach(id => {
        categoryMap.set(id, fullCategoryMap.get(id))
      })

      // Собираем секции
      const sections = {
        electrostancii: { rootId: electroRootId, ids: new Set(), children: [] },
        'stroitelnoe-oborydovanie': { rootId: null, ids: new Set(), children: [] },
      }

      // Для electrostancii
      if (categoryMap.has(electroRootId)) {
        sections.electrostancii.ids = collectIdsIterative(electroRootId)
        const tree = buildTreeIterative(electroRootId)
        sections.electrostancii.children = tree.children
      }

      // Для stroitelnoe-oborydovanie
      targetSubIds.forEach(id => {
        if (categoryMap.has(id)) {
          collectIdsIterative(id).forEach(subId => sections['stroitelnoe-oborydovanie'].ids.add(subId))
          const tree = buildTreeIterative(id)
          sections['stroitelnoe-oborydovanie'].children.push(tree)
        }
      })

      // Фильтруем и парсим только релевантные offers (экономим память и время)
      offers.forEach(offerObj => {
        const categoryId = offerObj.categoryId || ''
        if (!relevantIds.has(categoryId)) return // Пропускаем нерелевантные
        const offer = {
          id: offerObj['@_id'],
          available: offerObj['@_available'],
          url: offerObj.url || '',
          link: `/sell/category/${fixName(categoryMap.get(categoryId)?.title || '')}/product/${fixName(offerObj.name)}`,
          price: parseFloat(offerObj.price || '0'),
          currencyId: offerObj.currencyId || '',
          categoryId,
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
        categoryMap.get(categoryId).offers.push(offer)
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
