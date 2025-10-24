import { XMLParser } from 'fast-xml-parser'
import { fixName } from '@/utils/fixName'

let isStarted = false

export default defineEventHandler(async event => {
  const storage = useStorage('cache')
  const cacheKeyRaw = 'xml-raw-data' // Кеш для сырых данных (категории + офферы)
  const TTL = 3600000 // 1 час

  // Получаем параметры запроса для фильтрации
  const query = getQuery(event)
  const section = query.section || 'electrostancii' // По умолчанию electrostancii
  const depth = parseInt(query.depth) || 1 // Глубина

  // Ключ для кеша фильтрованных данных
  const cacheKeyFiltered = `xml-filtered-${section}-${depth}`
  let filteredCached = await storage.getItem(cacheKeyFiltered)

  // Если фильтрованные данные в кеше и свежие, возвращаем их
  if (filteredCached && Date.now() - filteredCached.timestamp < TTL) {
    console.log(`Фильтрованные данные для ${section} (глубина ${depth}) взяты из кеша`)
    return filteredCached.data
  }

  // Иначе загружаем/кешируем сырые данные
  let rawCached = await storage.getItem(cacheKeyRaw)
  let categoryMap, allOffers

  if (!rawCached || Date.now() - rawCached.timestamp > TTL) {
    // Загружаем начальный JSON, если не запущено
    if (!isStarted) {
      try {
        const {
          public: { baseURL },
        } = useRuntimeConfig()
        const xmlParsed = await $fetch('/xml.json', {
          responseType: 'json',
          baseURL,
        })
        rawCached = {
          data: xmlParsed,
          timestamp: Date.now(),
        }
        await storage.setItem(cacheKeyRaw, rawCached)
        isStarted = true
      } catch (error) {
        isStarted = true
        console.error('Ошибка при загрузке JSON:', error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Не удалось загрузить начальные данные из JSON',
        })
      }
    }

    // Парсим XML
    try {
      const xmlData = await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
        method: 'GET',
        headers: {
          'User-Agent': 'bitrix/1.0',
        },
      })

      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '@_',
      })
      const parsed = parser.parse(xmlData)

      let categories = parsed.yml_catalog?.shop?.categories?.category || []
      if (!Array.isArray(categories)) categories = [categories]

      let offers = parsed.yml_catalog?.shop?.offers?.offer || []
      if (!Array.isArray(offers)) offers = [offers]

      // Функция buildCategoryMap
      function buildCategoryMap(categoriesArray) {
        const map = {}
        categoriesArray.forEach(cat => {
          const id = cat['@_id']
          const rawTitle = cat['#text']?.trim() || ''
          const title = rawTitle
          const parentId = cat['@_parentId']
          const link = fixName(rawTitle)
          map[id] = { id, title, parentId, link, children: [], offers: [] }
        })
        Object.values(map).forEach(cat => {
          if (cat.parentId && map[cat.parentId]) {
            map[cat.parentId].children.push(cat.id)
          }
        })
        return map
      }

      // Функция parseOffer
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
          title: fixName(offerObj.name || ''),
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
      categoryMap = buildCategoryMap(categories)

      // Парсим offers
      allOffers = offers.map(offerObj => {
        const categoryId = offerObj.categoryId || ''
        const categoryName = categoryMap[categoryId]?.title || ''
        return parseOffer(offerObj, categoryName)
      })

      allOffers.forEach(offer => {
        if (categoryMap[offer.categoryId]) {
          categoryMap[offer.categoryId].offers.push(offer)
        }
      })

      // Кешируем сырые данные
      rawCached = {
        data: { categoryMap, allOffers },
        timestamp: Date.now(),
      }
      await storage.setItem(cacheKeyRaw, rawCached)
      console.log('Сырые данные обновлены и сохранены в кеш')
    } catch (error) {
      console.error('Ошибка при fetch/парсинге XML:', error)
      if (!rawCached) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Не удалось загрузить и обработать данные',
        })
      }
      console.log('Используем старый кеш из-за ошибки')
    }
  } else {
    console.log('Сырые данные взяты из кеша')
    if (rawCached && rawCached.data && rawCached.data.categoryMap) {
      categoryMap = rawCached.data.categoryMap
      allOffers = rawCached.data.allOffers
    } else {
      console.error('Данные в кеше повреждены, перезагружаем')
      await storage.removeItem(cacheKeyRaw)
      throw createError({
        statusCode: 500,
        statusMessage: 'Данные в кеше повреждены, попробуйте ещё раз',
      })
    }
  }

  // Находим категорию по link (section)
  const rootCat = Object.values(categoryMap).find(cat => cat.link === section)
  if (!rootCat) {
    throw createError({
      statusCode: 404,
      statusMessage: `Категория '${section}' не найдена`,
    })
  }

  // Функция collectTree (адаптирована для глубины)
  function collectTree(map, rootId, result = [], currentDepth = 0, maxDepth = depth) {
    const cat = map[rootId]
    if (!cat || currentDepth > maxDepth) return result
    const treeNode = { ...cat, children: [] }
    if (currentDepth < maxDepth) {
      cat.children.forEach(childId => {
        const childTree = collectTree(map, childId, [], currentDepth + 1, maxDepth)
        if (childTree.length > 0) {
          treeNode.children.push(...childTree)
        }
      })
    }
    result.push(treeNode)
    return result
  }

  // Собираем дерево
  const tree = collectTree(categoryMap, rootCat.id, [], 0, depth)

  // Функция для сбора всех категорий и офферов из дерева
  function getCategoriesAndOffers(treeNode, allCats = [], allOffs = []) {
    allCats.push({ ...treeNode, children: treeNode.children.map(c => c.id) }) // Дети как массив ID
    treeNode.offers.forEach(offer => allOffs.push(offer))
    treeNode.children.forEach(child => getCategoriesAndOffers(child, allCats, allOffs))
    return { categories: allCats, offers: allOffs }
  }

  const { categories: filteredCategories, offers: filteredOffers } =
    tree.length > 0 ? getCategoriesAndOffers(tree[0]) : { categories: [], offers: [] }

  const filteredData = {
    section,
    depth,
    children: filteredCategories,
    offers: filteredOffers,
  }

  // Кешируем фильтрованные данные
  filteredCached = {
    data: filteredData,
    timestamp: Date.now(),
  }
  await storage.setItem(cacheKeyFiltered, filteredCached)

  console.log(`Фильтрованные данные для ${section} (глубина ${depth}) обработаны и сохранены в кеш`)

  // Возвращаем фильтрованные данные
  return filteredData
})
