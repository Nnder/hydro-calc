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
    'Профессиональная продажа фильтров и фильтроэлементов в Нижнем Тагиле! Компания «ООО АбсолютТехно» предлагает качественные фильтры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа фильтров в нижнем тагиле',
  description: `<p>Фильтроэлемент гидравлический — расходный материал, предназначенный для фильтрации гидравлических масел. Он улавливает загрязнения, неизменно появляющиеся в рабочей жидкости: окислы, сколы, частички нагара и ржавчины.
Принцип работы: фильтроэлемент закрепляется на крышке корпуса. Через входной канал подачи во внутреннюю полость фильтра поступает рабочая гидрожидкость. Она протекает через фильтровальный материал, избавляясь от загрязняющих примесей. Через выходной канал очищенное масло поступает в гидросистему.
</p>`,
}

const slider = {
  img: '/0bwqmtqhxilk2604kostb52n7fry9gi5.jpg',
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
      type: 'Металические-сетки',
      pdfUrl: '',
      images: [
        '/i43.jpeg',
        '/073_original.jpg',
        '/950120114_filter-element-filtruyuschij.jpg_.jpg',
        '/SH63314-1200x800.jpg',
      ],
      parameters: [
        { label: 'Тонкость фильтрации, МКМ', value: 'от 10 до 90' },
        { label: 'Max.давление', value: 'до 30 бар' },
        { label: 'Материал', value: 'Нержавеющая сталь' },
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
      title: 'Бумажные фильтры',
      type: 'Бумажные-фильтры',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: ['/paper1.jpeg', '/cch801fv1-1000x1000.jpg', '/wirtgen118266-900x700.jpg'],
      parameters: [
        { label: 'Тонкость фильтрации, МКМ', value: 'от 10 до 25' },
        { label: 'Max.давление', value: 'до 18 бар' },
        { label: 'Материал', value: 'Фильтровальная бумага' },
        { label: 'Температура', value: '-25°C до +120°C' },
      ],
      description: [
        'Обеспечивают тонкую фильтрацию, но имеют ограниченный срок службы и требуют регулярной замены',
        'Основное применение — всасывающие и сливные фильтры.',
      ],
      gridItem: {
        image: '/cch801fv1-1000x1000.jpg',
        title: 'Уплотнительное кольцо',
      },
    },
    {
      title: 'Синтетические материалы (полиэстер, нейлон)',
      type: 'Синтетические',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        '/R928017309-Rexroth-Filter-Hydraulic-Oil-Filter-9-330lah10XL-F00-0-Mso3000.webp.png',
        '/p502424.jpg',
        '/cre050-sxx200_0.jpg',
      ],
      parameters: [
        { label: 'Тонкость фильтрации, МКМ', value: 'от 3 до 20' },
        { label: 'Max.давление', value: 'до 420 бар' },
        { label: 'Материал', value: 'Стекловолокнистный, PWR' },
        { label: 'Температура', value: '-25°C до +95°C' },
      ],
      description: [
        'Обладают высокой прочностью и устойчивостью к химическим веществам.',
        'Обеспечивают тонкую фильтрацию. В гидравлических системах применяются редко.',
      ],
      gridItem: {
        image: '/R928017309-Rexroth-Filter-Hydraulic-Oil-Filter-9-330lah10XL-F00-0-Mso3000.webp.png',
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Фибра стекловолокна.',
      type: 'Фибра-стекловолокна',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: ['/fibro1.jpeg', '/10611_big.jpg', '/00-00001472_4.jpg'],
      parameters: [
        { label: 'Тонкость фильтрации, МКМ', value: 'от 3 до 20' },
        { label: 'Max.давление', value: 'до 420 бар' },
        { label: 'Материал', value: 'Фибровое волокно' },
        { label: 'Температура', value: '-25°C до +95°C' },
      ],
      description: [
        'Используется для ультратонкой фильтрации. Обеспечивает высокий уровень очистки жидкости.',
        'Применяется в напорных фильтрах высокотехнологичной гидравлики, где степень очистки масла является ключевым параметром.',
      ],
      gridItem: {
        image: '/fibro1.jpeg',
        title: 'Заглушка',
      },
    },
  ],

  gridItems: function () {
    return this.products.map(product => product.gridItem)
  },

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

  initialProductType: 'flange',
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
    imageUrl="/gidravlika.jpg"
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
