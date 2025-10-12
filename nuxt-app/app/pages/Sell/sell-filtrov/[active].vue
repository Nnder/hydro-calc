<script setup>
import Contact from '~/components/Page/Contact.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'

definePageMeta({
  path: '/sell/sell-filtrov/:active?',
})

useHead({
  title: 'Продажа фильтров и фильтроэлементов',
  meta: [
    {
      name: 'description',
      content: 'Фильтры и фильтроэлементы для гидравлических систем в Нижнем Тагиле',
    },
  ],
})

const route = useRoute()
const activeSection = ref(route.params.active || 'Сетки')

const blockData = {
  title: 'Чистота гидравлических систем - залог долговечности',
  description:
    'Качественные фильтры и фильтроэлементы обеспечивают надежную защиту вашего оборудования от загрязнений и продлевают срок службы',
  buttonText: 'Подобрать фильтр',
  imageUrl: '/filtra/filtra2.png',
  imageAlt: 'гидравлические фильтры',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа фильтров',
  description:
    'Профессиональная продажа фильтров и фильтроэлементов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные фильтры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа фильтров в нижнем тагиле',
  description: `<p>Фильтроэлемент гидравлический — расходный материал, предназначенный для фильтрации гидравлических масел. Он улавливает загрязнения, неизменно появляющиеся в рабочей жидкости: окислы, сколы, частички нагара и ржавчины.
Принцип работы: фильтроэлемент закрепляется на крышке корпуса. Через входной канал подачи во внутреннюю полость фильтра поступает рабочая гидрожидкость. Она протекает через фильтровальный материал, избавляясь от загрязняющих примесей. Через выходной канал очищенное масло поступает в гидросистему.
</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: 'https://oilpower.ru/upload/iblock/854/0bwqmtqhxilk2604kostb52n7fry9gi5.jpg',
  tag: 'Профессионально',
  title: 'Продажа фильтров',
  text: 'Широкий выбор фильтрующих элементов',
  features: ['Подбор по степени очистки', 'Гарантия эффективности', 'Техническая поддержка'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Регулярное обслуживание',
}

const bannerProps = {
  products: [
    {
      title: 'Металлические сетки',
      type: 'Сетки',
      pdfUrl: '',
      images: [
        'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
        'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
        'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
      ],
      parameters: [
        { label: 'Тонкость фильтрации, МКМ', value: 'от 10 до 90' },
        { label: 'Max.давление', value: 'до 3 бар' },
        { label: 'Материал', value: 'Сталь 45' },
        { label: 'Температура', value: '-25°C до +120°C' },
      ],
      description: [
        'Применяются для грубой фильтрации. Долговечны и легко очищаются, но не подходят для тонкой фильтрации.',
      ],
      gridItem: {
        image: '/flanec_sae.jpg',
        title: 'Металлические сетки',
      },
    },
    {
      title: 'Уплотнительное кольцо',
      type: 'Уплотнения',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        'https://сантехник-а.рф/upload/iblock/c0e/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
        'https://ita-filter.ru/image/cache/catalog/product/F9079-29-1000x1000.jpg',
        'https://lazer-technology.ru/images/detailed/2/full_Уплотнительное_кольцо_32.2×24×3.6×2.7__1_.jpg',
      ],
      parameters: [
        { label: 'Материал', value: 'NBR, Viton, EPDM' },
        { label: 'Температура', value: '-30°C до +200°C' },
        { label: 'Давление', value: 'до 700 бар' },
        { label: 'Стандарт', value: 'DIN, ISO' },
      ],
      description: [
        'Уплотнительные кольца изготавливаются из качественной резины NBR, Viton или EPDM для различных рабочих сред и температурных условий.',
        'Обеспечивают герметичность соединений в гидравлических системах, предотвращают утечки масла и других рабочих жидкостей.',
      ],
      gridItem: {
        image: '/uplotnitelnoe_kolce.jpeg',
        title: 'Уплотнительное кольцо',
      },
    },
    {
      title: 'Быстросъёмное соединение',
      type: 'Быстросьемники',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        'https://oberon-weld.ru/upload/iblock/2d2/grgzqxh2p4hxvl69f04ynlzh9ce0u246/FA3047.png',
        'https://barshydraulic.ru/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/S/F/SF10-40.jpg',
        'https://st22.stpulscen.ru/images/product/445/686/695_original.jpg',
      ],
      parameters: [
        { label: 'Тип', value: 'ISO 16028' },
        { label: 'Давление', value: 'до 350 бар' },
        { label: 'Размер', value: '1/4" - 1"' },
        { label: 'Материал', value: 'Сталь, нерж. сталь' },
      ],
      description: [
        'Быстросъёмные соединения позволяют быстро и безопасно подсоединять и отсоединять гидравлические линии без утечки жидкости.',
        'Идеальное решение для частого подключения/отключения оборудования. Оснащены системой блокировки для предотвращения случайного отсоединения.',
      ],
      gridItem: {
        image: '/bistrosemnoe_soedinenie.jpeg',
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Заглушка',
      type: 'Заглушки',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: [
        'https://gkf40.ru/image/cache/data/5M3_8915-800x800.jpg',
        'https://ae04.alicdn.com/kf/Ha770a52e4db54b56915af58c26a6e871y.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5omeSJ_ya_TxRQ02PTxtuRLbjl5-yc4QYQ&s',
      ],
      parameters: [
        { label: 'Тип резьбы', value: 'Метрическая, трубная' },
        { label: 'Материал', value: 'Сталь, пластик' },
        { label: 'Размер', value: 'М8 - М42' },
        { label: 'Температура', value: '-50°C до +150°C' },
      ],
      description: [
        'Заглушки предназначены для герметичного закрытия неиспользуемых отверстий в гидравлических системах и оборудовании.',
        'Защищают от попадания загрязнений и влаги, предотвращают утечки при хранении и транспортировке компонентов.',
      ],
      gridItem: {
        image: 'https://ufa.centermk.ru/upload/iblock/bd7/1kgjlizny9l14e0cc8bxaryjlst4yh3p.jpg',
        title: 'Заглушка',
      },
    },
  ],

  gridItems: function () {
    return this.products.map(product => product.gridItem)
  },

  defaultImages: ['https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg'],

  defaultDescription: [
    'Высококачественные комплектующие для РВД.',
    'Все компоненты соответствуют международным стандартам.',
  ],

  defaultParameters: [
    { label: 'Размер', value: 'Стандартный' },
    { label: 'Материал', value: 'Высокопрочный' },
    { label: 'Давление', value: 'до 300 бар' },
  ],

  defaultPdfUrl: '/pdf/komplektuyushchie-rvd-obshchiy.pdf',

  initialProductType: activeSection.value,
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <!-- <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  /> -->
  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->
  <PartnerBlock
    :blockDataText="blockDataText"
    imageUrl="https://fim.by/images/lp-photo/gidravlika.jpg"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>
