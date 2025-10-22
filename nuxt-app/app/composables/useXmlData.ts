// ~/composables/useXmlData.js (или .ts, в зависимости от твоего проекта)
import { XMLParser } from 'fast-xml-parser'

export const useXmlData = (xmlString: string) => {
  // Парсим XML с помощью fast-xml-parser
  const parser = new XMLParser({
    ignoreAttributes: false, // Чтобы сохранить атрибуты (id, parentId и т.д.)
    attributeNamePrefix: '@_', // Префикс для атрибутов, например @id
  })
  const parsed = parser.parse(xmlString)

  // Доступ к категориям: parsed.yml_catalog.shop.categories.category (может быть массивом или объектом)
  let categories = parsed.yml_catalog?.shop?.categories?.category || []
  if (!Array.isArray(categories)) {
    categories = [categories] // Если один элемент, делаем массивом
  }

  // Доступ к офферам: parsed.yml_catalog.shop.offers.offer (может быть массивом или объектом)
  let offers = parsed.yml_catalog?.shop?.offers?.offer || []
  if (!Array.isArray(offers)) {
    offers = [offers] // Если один элемент, делаем массивом
  }

  // Функция для извлечения всех категорий в карту (id -> объект)
  function buildCategoryMap(categoriesArray) {
    const map = {}
    categoriesArray.forEach(cat => {
      const id = cat['@_id']
      const title = cat['#text']?.trim() || '' // Текст внутри <category>
      const parentId = cat['@_parentId']
      const link = title
      map[id] = { id, title, parentId, link, children: [], offers: [] }
    })
    // Связываем детей с родителями
    Object.values(map).forEach(cat => {
      if (cat.parentId && map[cat.parentId]) {
        map[cat.parentId].children.push(cat.id)
      }
    })
    return map
  }

  // Рекурсивная функция для сбора всех ID категории и её детей
  function collectAllIds(map, rootId, idsSet) {
    if (!map[rootId]) return
    idsSet.add(rootId)
    map[rootId].children.forEach(childId => collectAllIds(map, childId, idsSet))
  }

  // Рекурсивная функция для сбора дерева от корневой категории
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

  // Функция для парсинга одного offer в объект (теперь принимает categoryName как параметр)
  function parseOffer(offerObj, categoryName) {
    const offer = {
      id: offerObj['@_id'],
      available: offerObj['@_available'],
      url: offerObj.url || '',
      link: `/sell/category/${categoryName}/product/${offerObj.name.replace('/', '-')}`, // Используем переданный categoryName
      price: parseFloat(offerObj.price || '0'),
      currencyId: offerObj.currencyId || '',
      categoryId: offerObj.categoryId || '',
      pictures: Array.isArray(offerObj.picture) ? offerObj.picture : [offerObj.picture].filter(Boolean),
      title: offerObj.name || '',
      description: offerObj.description || '',
      params: {},
    }
    // Парсим <param> (предполагаем, что это массив объектов с @_name и #text)
    if (Array.isArray(offerObj.param)) {
      offerObj.param.forEach(param => {
        const name = param['@_name']
        const value = param['#text']
        offer.params[name] = value
      })
    } else if (offerObj.param) {
      // Если один param
      const name = offerObj.param['@_name']
      const value = offerObj.param['#text']
      offer.params[name] = value
    }
    return offer
  }

  // Основная логика: собираем нужные категории
  const categoryMap = buildCategoryMap(categories)

  // Собираем все релевантные ID категорий по секциям
  const sections = {
    electrostancii: {
      rootId: '156196',
      ids: new Set(),
      children: [],
    },
    'stroitelnoe-oborydovanie': {
      rootId: null,
      ids: new Set(),
      children: [],
    },
  }

  // Для Электростанций: собираем только детей root, без самого root в children
  const electroRootId = sections['electrostancii'].rootId
  if (electroRootId && categoryMap[electroRootId]) {
    collectAllIds(categoryMap, electroRootId, sections['electrostancii'].ids)
    const fullTree = collectTree(categoryMap, electroRootId)
    sections['electrostancii'].children = fullTree[0]?.children || []
  }

  // Для Строительного оборудования
  const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
  targetSubIds.forEach(id => {
    collectAllIds(categoryMap, id, sections['stroitelnoe-oborydovanie'].ids)
    const subTree = collectTree(categoryMap, id)
    if (subTree.length > 0) {
      sections['stroitelnoe-oborydovanie'].children.push(...subTree)
    }
  })

  // Теперь парсим offers и добавляем их в соответствующие категории (передаем categoryName в parseOffer)
  const allOffers = offers.map(offerObj => {
    const categoryId = offerObj.categoryId || ''
    const categoryName = categoryMap[categoryId]?.title || '' // Получаем название категории по её id
    return parseOffer(offerObj, categoryName) // Передаём categoryName вместо categoryId
  })

  // Добавляем offers в categoryMap по categoryId
  allOffers.forEach(offer => {
    if (categoryMap[offer.categoryId]) {
      categoryMap[offer.categoryId].offers.push(offer)
    }
  })

  return { sections, categoryMap, allOffers } // Возвращаем всё, что может понадобиться
}
