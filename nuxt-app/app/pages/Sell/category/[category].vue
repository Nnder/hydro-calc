<script setup>
import Consultation from '~/components/Block/Consultation.vue'

definePageMeta({
  path: `/sell/category/:category?`,
})

useHead({
  title: `Продажа товаров - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров`,
    },
  ],
})

const route = useRoute()
const activeCategory = ref(route.params.category || 'kovshi')

const data = ref([])

const categories = ref([
  {
    name: 'Продажа',
    active: true,
    bgText: 'Продажа',
    services: [
      {
        title: 'Уплотнения гидравлические',
        image: 'https://www.hydrott.ru/wp-content/uploads/2017/01/9117192.jpg',
        description: 'Широкий ассортимент уплотнительных элементов для гидроцилиндров',
        link: '/sell/sell-uplotnenie',
      },
      {
        title: 'Гидронасосы',
        image: 'https://gidromotor.by/img/pages/347-s.jpg?ver=172837676133&w=320',
        description: 'Гидравлические насосы ведущих производителей',
        link: '/sell/sell-gidronasosov',
      },
      {
        title: 'Гидроцилиндры',
        image: 'https://ozpp.ru/images/ozpp/gidrocilindr-0286.jpg',
        description: 'Готовые гидроцилиндры различных типоразмеров',
        link: '/sell/sell-gidrocilindrov',
      },
      {
        title: 'Фильтрующие элементы',
        image: 'https://fim.by/images/lp-photo/gidravlika.jpg',
        description: 'Фильтры для гидравлических систем',
        link: '/sell/sell-filtrov',
      },
      {
        title: 'Комплектующие РВД',
        image: 'https://rvdmarket.ru/thumb/2/X7X17oYARuFUVi_KYI5o5g/340r/d/rvd_v_zashchite.jpg',
        description: 'Фитинги и соединительные элементы для РВД',
        link: '/sell/sell-komplektushie-rvd',
      },
      {
        title: 'ГСМ и технические жидкости',
        image: 'https://ammoxx.ru/upload/medialibrary/577/57778c5c2b33268e2910c96f080beb6c.jpg',
        description: 'Масла и жидкости для гидравлических систем',
        link: '/sell/sell-shidkostey',
      },
      {
        title: 'electrostancii',
        image: 'https://ammoxx.ru/upload/medialibrary/577/57778c5c2b33268e2910c96f080beb6c.jpg',
        description: 'Масла и жидкости для гидравлических систем',
        link: '/sell/category/electrostancii',
      },
      {
        title: 'stroitelnoe-oborydovanie',
        image: 'https://ammoxx.ru/upload/medialibrary/577/57778c5c2b33268e2910c96f080beb6c.jpg',
        description: 'Масла и жидкости для гидравлических систем',
        link: '/sell/category/stroitelnoe-oborydovanie',
      },
    ],
  },
])

onMounted(() => {
  const q = async () => {
    const xml = await $fetch('http://127.0.0.1:3000/yandex_800463.xml')

    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xml, 'text/xml')

    // Функция для извлечения всех категорий в карту (id -> объект)
    function buildCategoryMap(categoriesNode) {
      const map = {}
      const categories = categoriesNode.querySelectorAll('category')
      categories.forEach(cat => {
        const id = cat.getAttribute('id')
        const title = cat.textContent.trim()
        const parentId = cat.getAttribute('parentId')
        const link = title
        map[id] = { id, title, parentId, link, children: [], offers: [] } // Добавляем offers в каждую категорию
      })
      // Связываем детей с родителями
      Object.values(map).forEach(cat => {
        if (cat.parentId && map[cat.parentId]) {
          map[cat.parentId].children.push(cat.id)
        }
      })
      return map
    }

    // Рекурсивная функция для сбора дерева от корневой категории (теперь с offers)
    function collectTree(map, rootId, result = []) {
      const cat = map[rootId]
      if (!cat) return result

      const treeNode = { ...cat, children: [] }
      // Рекурсивно добавляем детей
      cat.children.forEach(childId => {
        const childTree = collectTree(map, childId, [])
        if (childTree.length > 0) {
          treeNode.children.push(...childTree)
        }
      })

      result.push(treeNode)
      return result
    }

    // Рекурсивная функция для печати дерева с отступами (теперь с количеством offers)
    function printTree(node, indent = 0) {
      const spaces = '  '.repeat(indent)
      console.log(`${spaces}ID: ${node.id}, Название: ${node.title}, Offers: ${node.offers.length}`)
      node.children.forEach(child => printTree(child, indent + 1))
    }

    // Функция для парсинга одного offer в объект
    function parseOffer(offerNode) {
      const offer = {
        id: offerNode.getAttribute('id'),
        available: offerNode.getAttribute('available'),
        url: offerNode.querySelector('url')?.textContent || '',
        price: parseFloat(offerNode.querySelector('price')?.textContent || '0'),
        currencyId: offerNode.querySelector('currencyId')?.textContent || '',
        categoryId: offerNode.querySelector('categoryId')?.textContent || '',
        pictures: Array.from(offerNode.querySelectorAll('picture')).map(p => p.textContent),
        title: offerNode.querySelector('name')?.textContent || '',
        description: offerNode.querySelector('description')?.textContent || '',
        params: {},
      }
      // Парсим все <param> элементы
      offerNode.querySelectorAll('param').forEach(param => {
        const name = param.getAttribute('name')
        const value = param.textContent
        offer.params[name] = value
      })
      return offer
    }

    // Основная логика: собираем нужные категории
    const categoriesNode = xmlDoc.querySelector('categories')
    const categoryMap = buildCategoryMap(categoriesNode)

    // Собираем все релевантные ID категорий по секциям (без offers на уровне секции)
    const sections = {
      electrostancii: {
        rootId: '156196',
        ids: new Set(),
        children: [], // Переименовано из categories в children
      },
      'stroitelnoe-oborydovanie': {
        rootId: null, // Нет единого root, используем targetSubIds
        ids: new Set(),
        children: [], // Переименовано из categories в children
      },
    }

    // Для Электростанций: собираем только детей root, без самого root в children (как было изначально)
    const electroRootId = sections['electrostancii'].rootId
    if (electroRootId && categoryMap[electroRootId]) {
      collectAllIds(categoryMap, electroRootId, sections['electrostancii'].ids)
      const fullTree = collectTree(categoryMap, electroRootId)
      // Берем только детей root, чтобы не было вложенности "электростанции в электростанции"
      sections['electrostancii'].children = fullTree[0]?.children || []
    }

    // Для Строительного оборудования (без изменений)
    const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
    targetSubIds.forEach(id => {
      collectAllIds(categoryMap, id, sections['stroitelnoe-oborydovanie'].ids)
      const subTree = collectTree(categoryMap, id)
      if (subTree.length > 0) {
        sections['stroitelnoe-oborydovanie'].children.push(...subTree) // Изменено с categories на children
      }
    })

    // Теперь парсим offers и добавляем их в соответствующие категории
    const offersNode = xmlDoc.querySelector('offers')
    const allOffers = Array.from(offersNode.querySelectorAll('offer')).map(parseOffer)

    // Добавляем offers в categoryMap по categoryId
    allOffers.forEach(offer => {
      if (categoryMap[offer.categoryId]) {
        categoryMap[offer.categoryId].offers.push(offer)
      }
    })

    console.log(sections)
    console.log(findCategoryFromUrl(sections, activeCategory.value)[0], 'result')
    const result = findCategoryFromUrl(sections, activeCategory.value)[0]
    // Исправлено: теперь работает только по children, без offers. Если result undefined, data.value = []
    data.value = result?.children.length ? result.children : result.offers

    return sections
  }

  // Функция для поиска категории по ID или link в дереве секций
  // Рекурсивно ищет в children каждой секции, включая корневые узлы дерева

  // Вспомогательная функция collectAllIds
  function collectAllIds(map, rootId, ids = new Set()) {
    const cat = map[rootId]
    if (!cat) return ids
    ids.add(rootId)
    cat.children.forEach(childId => collectAllIds(map, childId, ids))
    return ids
  }

  q()
})

function findCategoryFromUrl(sections, encodedUrlName, targetCategoryName = null) {
  // Декодируем название из URL (например, "Дизельные%20электростанции" -> "Дизельные электростанции")
  const searchName = decodeURIComponent(encodedUrlName)
  const results = []

  if ('stroitelnoe-oborydovanie' === searchName || 'electrostancii' === searchName) {
    results.push(sections[searchName])
    return results
  }

  // Если указана targetCategoryName, сначала находим её
  let targetCategory = null
  if (targetCategoryName) {
    Object.values(sections).forEach(section => {
      section.children.forEach(rootCat => {
        // Изменено с categories на children
        searchInTreeForTarget(rootCat, targetCategoryName, results)
      })
    })
    if (results.length > 0) {
      targetCategory = results[0] // Берем первую найденную (предполагаем уникальность)
      results.length = 0 // Очищаем для нового поиска
    } else {
      return results // Если target не найдена, возвращаем пустой массив
    }
  }

  // Теперь ищем searchName: если targetCategory указана, ищем внутри неё; иначе по всему sections
  if (targetCategory) {
    searchInTree(targetCategory, searchName, results)
  } else {
    Object.values(sections).forEach(section => {
      section.children.forEach(rootCat => {
        // Изменено с categories на children
        searchInTree(rootCat, searchName, results)
      })
    })
  }

  return results
}

// Вспомогательная рекурсивная функция для поиска целевой категории
function searchInTreeForTarget(node, name, results) {
  if (node.title === name) {
    results.push(node)
    return // Останавливаемся после первого совпадения для target
  }
  node.children.forEach(child => searchInTreeForTarget(child, name, results))
}

// Вспомогательная рекурсивная функция для поиска по имени
function searchInTree(node, name, results) {
  if (node.title === name) {
    results.push(node)
  }
  node.children.forEach(child => searchInTree(child, name, results))
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden py-8">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span class="text-blue-600">Продажа</span> Товаров
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Широкий вид ассортимента товаров</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink
          :to="service.link"
          v-for="(service, index) in data"
          :key="index"
          class="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <div class="relative h-48 overflow-hidden flex-shrink-0">
            <NuxtImg
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:400px"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
              {{ service.description }}
            </p>

            <div
              class="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 hover:gap-3"
            >
              <span>Подробнее</span>
              <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <Consultation />
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
