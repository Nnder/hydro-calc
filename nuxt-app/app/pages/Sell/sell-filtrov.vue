<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'

definePageMeta({
  path: '/sell/sell-filtrov',
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

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных фильтров и фильтроэлементов в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент фильтрующих элементов для любой гидравлической системы.
        </p>
        <p class="text-lg">
          Все наши фильтры проходят строгий контроль качества и обеспечивают эффективную очистку рабочих жидкостей. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа фильтров и фильтроэлементов в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Всасывающие фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Напорные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Сливные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Воздушные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры тонкой очистки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры грубой очистки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Магнитные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтроэлементы сменные',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры-грязеуловители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры для станков',
  },
])

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
      type: 'flange',
      pdfUrl: '',
      images: [
        'https://avatars.mds.yandex.net/i?id=7cf862c66881b42f460e929b0fa3cd95_l-5496540-images-thumbs&n=13',
        'https://st39.stpulscen.ru/images/localized/010/652/073_original.jpg',
        'https://static.insales-cdn.com/images/products/1/6563/570186147/950120114_filter-element-filtruyuschij.jpg_',
        'https://t-filter.ru/image/cache/catalog/filter/filtr-gidravlicheskij-(kartridzh)/SH63314-1200x800.jpg',
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
        image: 'https://t-filter.ru/image/cache/catalog/filter/filtr-gidravlicheskij-(kartridzh)/SH63314-1200x800.jpg',
        title: 'Металлические сетки',
      },
    },
    {
      title: 'Бумажные фильтры',
      type: 'seal',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        '../public/paper1.jpeg',
        'https://gik43.ru/image/cache/catalog/cch801fv1-1000x1000.jpg',
        'https://stroydomsam.ru/image/cache/catalog/Wirtgenlogo/wirtgen118266-900x700.jpg',
      ],
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
        image: 'https://gik43.ru/image/cache/catalog/cch801fv1-1000x1000.jpg',
        title: 'Уплотнительное кольцо',
      },
    },
    {
      title: 'Синтетические материалы (полиэстер, нейлон)',
      type: 'quick_connect',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        '../public/R928017309-Rexroth-Filter-Hydraulic-Oil-Filter-9-330lah10XL-F00-0-Mso3000.webp.png',
        'https://www.alexisfilters.co.uk/media/catalog/product/p/5/p502424.jpg',
        'https://static.insales-cdn.com/images/products/1/6379/524466411/cre050-sxx200_0.jpg',
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
        image: '../public/R928017309-Rexroth-Filter-Hydraulic-Oil-Filter-9-330lah10XL-F00-0-Mso3000.webp.png',
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Фибра стекловолокна.',
      type: 'plug',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: [
        '../public/fibro1.jpeg',
        'https://www.cargoparts.ru/pictures/product/big/10611_big.jpg',
        'https://filter64.ru/images/stories/virtuemart/product/00-00001472_4.jpg',
      ],
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
        image: '../public/fibro1.jpeg',
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
