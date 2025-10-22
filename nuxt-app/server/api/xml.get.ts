import { XMLParser } from 'fast-xml-parser'
import { fixName } from '@/utils/fixName'

export default defineEventHandler(async event => {
  const storage = useStorage('cache')
  const cacheKey = 'xml-processed-data' // Новый ключ для кеша обработанных данных
  const TTL = 3600000 // 1 час

  let cached = await storage.getItem(cacheKey)

  if (!cached || Date.now() - cached.timestamp > TTL) {
    try {
      // Fetch XML
      const xmlData = await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
        method: 'GET',
        headers: {
          'User-Agent': 'bitrix/1.0',
        },
      })

      // Парсим XML (как в useXmlData)
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
      })
      const parsed = parser.parse(xmlData)

      let categories = parsed.yml_catalog?.shop?.categories?.category || []
      if (!Array.isArray(categories)) categories = [categories]

      let offers = parsed.yml_catalog?.shop?.offers?.offer || []
      if (!Array.isArray(offers)) offers = [offers]

      // Функция buildCategoryMap (копируем из useXmlData)
      function buildCategoryMap(categoriesArray) {
        const map = {}
        categoriesArray.forEach(cat => {
          const id = cat['@_id']
          const title = cat['#text']?.trim() || ''
          const parentId = cat['@_parentId']
          const link = fixName(title)
          map[id] = { id, title, parentId, link, children: [], offers: [] }
        })
        Object.values(map).forEach(cat => {
          if (cat.parentId && map[cat.parentId]) {
            map[cat.parentId].children.push(cat.id)
          }
        })
        return map
      }

      // Функции collectAllIds и collectTree (копируем)
      function collectAllIds(map, rootId, idsSet) {
        if (!map[rootId]) return
        idsSet.add(rootId)
        map[rootId].children.forEach(childId => collectAllIds(map, childId, idsSet))
      }

      function collectTree(map, rootId, result = []) {
        const cat = map[rootId]
        if (!cat) return result
        const treeNode = { ...cat, children: [] }
        cat.children.forEach(childId => {
          const childTree = collectTree(map, childId, [])
          if (childTree.length > 0) {
            treeNode.children.push(...childTree)
          }
        })
        result.push(treeNode)
        return result
      }

      // Функция parseOffer (адаптируем)
      function parseOffer(offerObj, categoryName) {
        const offer = {
          id: offerObj['@_id'],
          available: offerObj['@_available'],
          url: offerObj.url || '',
          link: `/sell/category/${fixName(categoryName)}/product/${fixName(offerObj.name)}`,
          price: parseFloat(offerObj.price || '0'),
          currencyId: offerObj.currencyId || '',
          categoryId: offerObj.categoryId || '',
          pictures: Array.isArray(offerObj.picture) ? offerObj.picture : [offerObj.picture].filter(Boolean),
          title: offerObj.name || '',
          description: offerObj.description || '',
          params: {},
        }
        if (Array.isArray(offerObj.param)) {
          offerObj.param.forEach(param => {
            offer.params[param['@_name']] = param['#text']
          })
        } else if (offerObj.param) {
          offer.params[offerObj.param['@_name']] = offerObj.param['#text']
        }
        return offer
      }

      // Собираем categoryMap
      const categoryMap = buildCategoryMap(categories)

      // Собираем sections
      const sections = {
        electrostancii: { rootId: '156196', ids: new Set(), children: [] },
        'stroitelnoe-oborydovanie': { rootId: null, ids: new Set(), children: [] },
      }

      const electroRootId = sections['electrostancii'].rootId
      if (electroRootId && categoryMap[electroRootId]) {
        collectAllIds(categoryMap, electroRootId, sections['electrostancii'].ids)
        const fullTree = collectTree(categoryMap, electroRootId)
        sections['electrostancii'].children = fullTree[0]?.children || []
      }

      const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
      targetSubIds.forEach(id => {
        collectAllIds(categoryMap, id, sections['stroitelnoe-oborydovanie'].ids)
        const subTree = collectTree(categoryMap, id)
        if (subTree.length > 0) {
          sections['stroitelnoe-oborydovanie'].children.push(...subTree)
        }
      })

      // Парсим offers и добавляем в categoryMap
      const allOffers = offers.map(offerObj => {
        const categoryId = offerObj.categoryId || ''
        const categoryName = categoryMap[categoryId]?.title || ''
        return parseOffer(offerObj, categoryName)
      })

      allOffers.forEach(offer => {
        if (categoryMap[offer.categoryId]) {
          categoryMap[offer.categoryId].offers.push(offer)
        }
      })

      // Кешируем обработанный объект
      cached = {
        data: { sections }, // Готовый объект
        timestamp: Date.now(),
      }
      await storage.setItem(cacheKey, cached)

      console.log('Обработанные данные обновлены и сохранены в кеш')
    } catch (error) {
      console.error('Ошибка при fetch/парсинге XML:', error)
      if (!cached) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Не удалось загрузить и обработать данные',
        })
      }
      console.log('Используем старый кеш из-за ошибки')
    }
  } else {
    console.log('Обработанные данные взяты из кеша')
  }

  // Возвращаем готовый объект
  return cached.data
})
