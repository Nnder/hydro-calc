<script setup lang="ts">
import Slider from '~/components/Slider/Slider.vue'
import ServiceBlock from '~/components/ServiceBlock/ServiceBlock.vue'
import Gis from '~/components/Map/2Gis.vue'
import Block from '~/components/Page/Block.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import Contact from '~/components/Page/Contact.vue'
import Advantages from '~/components/Advantages/Advantages.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'
import InformationBlockSpecial from '~/components/SpecialPages/InformationBlockSpecial.vue'
import Partners from '~/components/Partners/Partners.vue'
import Slide from '~/components/Slider/Slide.vue'
import InformationBlockSpecialLinks from '~/components/SpecialPages/InformationBlockSpecialLinks.vue'

useHead({
  title: `АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремонта`,
    },
  ],
})

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
    'Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.',
    'Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.',
    'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
    'Используем первоклассное оборудование и технологии для точной диагностики.',
    'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
  ],
}

const blockData = {
  title: 'Изготовим нестандартные гидроцилиндры по вашему проекту, техническому заданию',
  description:
    'Изготовим гидроцилиндр по вашему чертежу,\nтехническому заданию или готовому образцу\nс гарантией до 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/Сборка_ГЦ_реф.glb',
  modelBgColor: '#2563EB',
  img: {
    src: '/3d/preload/hydrocilinder2.png',
    alt: 'Гидроцилиндр 3д предзагрузка',
  },
}

const blockDataVariant = {
  title: 'Ремонт гидроцилиндров любой сложности',
  description:
    'Производем ремонт гидроцилиндров для спецтехники и промышленного оборудования с гарантией до 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#ffffff',
  scale: 0.5,
  loadFunc: model => {
    model.rotation.x = Math.PI / 2.2
    model.rotation.y = Math.PI
  },
  img: {
    src: '/3d/preload/hydrocilinder.png',
    alt: 'Гидроцилиндр 3д предзагрузка',
  },
}

const activeSection = ref('kovshi')

const setActiveSection = section => {
  activeSection.value = section
}

const currentInfoBlock = computed(() => sectionsData[activeSection.value].infoBlock)

const sectionsData = {
  kovshi: {
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ударного оборудования.',
      buttonText: 'Подробнее',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      link: '/remont-kovshey/kovshi',
      type: '3d',
      modelSrc: '/3d/Сборка ковша.glb',
      modelBgColor: '#2563EB',
      scale: 0.3,
      loadFunc: model => {
        model.rotation.x = Math.PI / 2
        model.rotation.y = Math.PI
      },
    },
  },
  hydromoloty: {
    infoBlock: {
      title: 'Ремонт гидромолотов',
      description:
        'Восстановление ударных механизмов и корпусных деталей гидромолотов. Профессиональный подход к ремонту ударного оборудования.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление ударно-поршневой группы' },
        { icon: 'mdi:vector-arrange-above', text: 'Ревизия распределительных узлов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Подробнее',
      link: '/remont-kovshey/hydromoloty',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      type: '3d',
      modelSrc: '/3d/гидромолот.glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
      },
      scale: 0.45,
    },
  },
  hydrovrashateli: {
    infoBlock: {
      title: 'Ремонт гидровращателей',
      description:
        'Восстановление гидромоторов, редукторов и корпусных деталей гидромолотов. Профессиональный подход к ремонту гидровращателя.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление роторной группы гидромотора' },
        { icon: 'mdi:vector-arrange-above', text: 'Ремонт редукторов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Подробнее',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидровщатале',
      link: '/remont-kovshey/hydrovrashateli',
      type: '3d',
      modelSrc: '/3d/ТС135.000.00.000_(fn-1).glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
        model.rotation.y = Math.PI
      },
      scale: 0.5,
    },
  },
}

const slide = {
  videoSrc: '/videos/ТСС.mp4',
  logo: 'https://www.tss.ru/bitrix/templates/tss_templates_new/images/Group%201%20(1).png',
  img: '/hydrocilinder.png',
  // tag: 'Партнер',
  title: 'Наш партнер в сфере строительного оборудования и дизельных электростанций',
  text: 'Группа компаний ТСС — это многоуровневая структура, действующая под единым брендом',
  features: [
    'Дизельные электростанции',
    'Строительные оборудование',
    'Портативные генераторы',
    'Сварочное оборудование',
  ],
  buttonText: 'Прайс лист ГК ТСС',
  additionalInfo: 'Энергия стабильности',
}

const data = ref('')

onMounted(() => {
  // const q = async () => {
  //   const xml = await $fetch('http://127.0.0.1:3000/yandex_800463.xml')

  //   const parser = new DOMParser()
  //   const xmlDoc = parser.parseFromString(xml, 'text/xml')

  //   // Функция для извлечения всех категорий в карту (id -> объект)
  //   function buildCategoryMap(categoriesNode) {
  //     const map = {}
  //     const categories = categoriesNode.querySelectorAll('category')
  //     categories.forEach(cat => {
  //       const id = cat.getAttribute('id')
  //       const name = cat.textContent.trim()
  //       const parentId = cat.getAttribute('parentId')
  //       map[id] = { id, name, parentId, children: [] }
  //     })
  //     // Связываем детей с родителями
  //     Object.values(map).forEach(cat => {
  //       if (cat.parentId && map[cat.parentId]) {
  //         map[cat.parentId].children.push(cat.id)
  //       }
  //     })
  //     return map
  //   }

  //   // Рекурсивная функция для сбора дерева от корневой категории
  //   function collectTree(map, rootId, result = []) {
  //     const cat = map[rootId]
  //     if (!cat) return result

  //     const treeNode = { ...cat, children: [] }
  //     // Рекурсивно добавляем детей
  //     cat.children.forEach(childId => {
  //       const childTree = collectTree(map, childId, [])
  //       if (childTree.length > 0) {
  //         treeNode.children.push(...childTree)
  //       }
  //     })

  //     result.push(treeNode)
  //     return result
  //   }

  //   // Функция для рекурсивной печати дерева с отступами
  //   function printTree(node, indent = 0) {
  //     const spaces = '  '.repeat(indent)
  //     console.log(`${spaces}ID: ${node.id}, Название: ${node.name}`)
  //     node.children.forEach(child => printTree(child, indent + 1))
  //   }

  //   // Основная логика: собираем нужные категории
  //   const categoriesNode = xmlDoc.querySelector('categories')
  //   const categoryMap = buildCategoryMap(categoriesNode)

  //   // 1. Электростанции (id=156196) и все дочерние
  //   const powerPlantsTree = collectTree(categoryMap, '156196')

  //   // 2. Строительное оборудование (id=156241), но только конкретные подкатегории и их дети
  //   const targetSubIds = ['156253', '156245', '156249', '189167', '156257'] // ID нужных подкатегорий
  //   const constructionTree = []
  //   targetSubIds.forEach(subId => {
  //     const subTree = collectTree(categoryMap, subId)
  //     if (subTree.length > 0) {
  //       constructionTree.push(...subTree) // Добавляем только подкатегории без родителя
  //     }
  //   })

  //   // Объединяем всё в один результат
  //   const allSelected = [
  //     { section: 'Электростанции', categories: powerPlantsTree },
  //     { section: 'Строительное оборудование (выбранные подкатегории)', categories: constructionTree },
  //   ]

  //   // Выводим дерево в консоль (теперь полностью рекурсивно)
  //   console.log('Выбранные категории:')
  //   allSelected.forEach(section => {
  //     console.log(`\n--- ${section.section} ---`)
  //     section.categories.forEach(root => printTree(root))
  //   })

  //   // console.log(xml)
  //   // const domParser = new DOMParser()
  //   // const xmlDOM = domParser.parseFromString(xml, 'text/xml')
  //   // // xmlDOM.querySelectorAll('category').forEach(item => console.log(item.textContent))
  //   // data.value = xml
  //   // return xml
  // }

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
        const name = cat.textContent.trim()
        const parentId = cat.getAttribute('parentId')
        map[id] = { id, name, parentId, children: [] }
      })
      // Связываем детей с родителями
      Object.values(map).forEach(cat => {
        if (cat.parentId && map[cat.parentId]) {
          map[cat.parentId].children.push(cat.id)
        }
      })
      return map
    }

    // Рекурсивная функция для сбора всех ID в дереве (включая детей)
    function collectAllIds(map, rootId, ids = new Set()) {
      const cat = map[rootId]
      if (!cat) return ids
      ids.add(rootId)
      cat.children.forEach(childId => collectAllIds(map, childId, ids))
      return ids
    }

    // Рекурсивная функция для сбора дерева от корневой категории
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

    // Рекурсивная функция для печати дерева с отступами
    function printTree(node, indent = 0) {
      const spaces = '  '.repeat(indent)
      console.log(`${spaces}ID: ${node.id}, Название: ${node.name}`)
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
        name: offerNode.querySelector('name')?.textContent || '',
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

    // Собираем все релевантные ID категорий по секциям
    const sections = {
      Электростанции: {
        rootId: '156196',
        ids: new Set(),
        categories: [],
        offers: [],
      },
      'Строительное оборудование (выбранные подкатегории)': {
        rootId: null, // Нет единого root, используем targetSubIds
        ids: new Set(),
        categories: [],
        offers: [],
      },
    }

    // Для Электростанций
    collectAllIds(categoryMap, sections['Электростанции'].rootId, sections['Электростанции'].ids)
    sections['Электростанции'].categories = collectTree(categoryMap, sections['Электростанции'].rootId)

    // Для Строительного оборудования
    const targetSubIds = ['156253', '156245', '156249', '189167', '156257']
    targetSubIds.forEach(id => {
      collectAllIds(categoryMap, id, sections['Строительное оборудование (выбранные подкатегории)'].ids)
      const subTree = collectTree(categoryMap, id)
      if (subTree.length > 0) {
        // Добавляем родительскую категорию "Строительное оборудование" для контекста
        const parentNode = { ...categoryMap['156241'], children: subTree }
        sections['Строительное оборудование (выбранные подкатегории)'].categories.push(parentNode)
      }
    })

    // Выводим дерево категорий в консоль
    console.log('Выбранные категории:')
    Object.entries(sections).forEach(([sectionName, section]) => {
      console.log(`\n--- ${sectionName} ---`)
      section.categories.forEach(root => printTree(root))
    })

    // Теперь парсим и фильтруем offers по секциям
    const offersNode = xmlDoc.querySelector('offers')
    const allOffers = Array.from(offersNode.querySelectorAll('offer')).map(parseOffer)

    // Группируем offers по секциям
    Object.entries(sections).forEach(([sectionName, section]) => {
      section.offers = allOffers.filter(offer => section.ids.has(offer.categoryId))
    })

    // Выводим релевантные offers по секциям
    console.log('\nРелевантные Offers по секциям:')
    Object.entries(sections).forEach(([sectionName, section]) => {
      console.log(`\n--- ${sectionName} ---`)
      console.log(`Всего offers: ${section.offers.length}`)
      section.offers.forEach(offer => {
        console.log(
          `\nOffer ID: ${offer.id}, Название: ${offer.name}, Цена: ${offer.price} ${offer.currencyId}, Доступен: ${offer.available}`
        )
        console.log(`URL: ${offer.url}`)
        console.log('Картинки:', offer.pictures)
        console.log('Описание:', offer.description)
        console.log('Параметры:', offer.params)
      })
    })

    // Возвращаем результат: объект с секциями, каждая содержит categories (дерево) и offers (массив объектов)
    return sections
  }

  q()
})
</script>

<template>
  <Slider />
  <ServiceBlock data-aos="fade-up" />
  <!-- <Slide :slider="slide" class="!h-full py-4 mb-16" /> -->
  <!-- <NuxtImg src="/bannertest.jpeg" alt="globalbanner" class="rounded-2xl h-[900px] mx-auto w-full" /> -->
  <InformationBlockSpecialLinks
    :block-data="currentInfoBlock"
    :active-section="activeSection"
    @section-change="setActiveSection"
    data-aos="fade-up"
  />
  <InformationBlockLeft :blockData="blockDataVariant" position="left" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Slide :slider="slide" class="!h-full py-4 mb-16 mt-16" />
  <Advantages data-aos="fade-up" />

  <!-- {{ data }} -->
  <Contact data-aos="fade-up" />
  <Gis data-aos="fade-up" />
</template>

<style scoped>
.category-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}
</style>
