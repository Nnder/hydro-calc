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
import SwiperProduct from '~/components/ProductGalleryWithThumbnails/SwiperProduct.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'

definePageMeta({
  path: '/sell-komplektushie-rvd',
})

useHead({
  title: 'Продажа комплектующих для РВД',
  meta: [
    {
      name: 'description',
      content: 'Комплектующие для рукавов высокого давления в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных комплектующих для РВД в Нижнем Тагиле. 
          Мы предлагаем полный ассортимент фитингов, ниппелей, муфт и других компонентов.
        </p>
        <p class="text-lg">
          Все наши комплектующие проходят строгий контроль качества и соответствуют стандартам безопасности. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа комплектующих для РВД в Нижнем Тагиле'

const items = ref([
  {
    image: 'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
    title: 'Фитинги для РВД',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Ниппели резьбовые',
  },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Муфты соединительные',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Заглушки и переходники',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Фланцы гидравлические',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Быстросъемные соединения',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Штуцеры различных типов',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Оборудование для опрессовки',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Инструмент для монтажа',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Комплектующие для ремонта',
  // },
  // {
  //   image: 'vtulka.jpeg',
  //   title: 'Запасные части',
  // },
])

const imageMappings = {
  'Фитинги для РВД': [
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  ],
  'Ниппели резьбовые': [
    '',
  ],
  'Муфты соединительные': [
    '',
  ],
  'Заглушки и переходники': [
    '',
  ],
  'Фланцы гидравлические': [
    '',
  ],
}

const textContentMappings = {
  'Фитинги для РВД': [
    "Высококачественные фитинги для рукавов высокого давления, обеспечивающие надежность и долговечность гидравлических систем.",
    "Все фитинги проходят строгий контроль качества и соответствуют международным стандартам безопасности. Мы предлагаем только сертифицированную продукцию от проверенных производителей."
  ],
  'Ниппели резьбовые': [
    "Прочные ниппели резьбовые для надежного соединения РВД в гидравлических системах.",
    "Изготовлены из высококачественных материалов с антикоррозийным покрытием. Обеспечивают герметичность при высоком давлении."
  ],
  'Муфты соединительные': [
    "Муфты соединительные для быстрого и надежного монтажа рукавов высокого давления.",
    "Предназначены для работы в экстремальных условиях. Выдерживают высокие температуры и давление."
  ],
  'Заглушки и переходники': [
    "Заглушки и переходники различных типов и размеров для комплектации гидравлических систем.",
    "Обеспечивают герметичное перекрытие и переход между разными типами соединений."
  ],
  'Фланцы гидравлические': [
    "Фланцы гидравлические для подключения РВД к оборудованию и системам.",
    "Изготовлены из прочной стали с точной обработкой. Гарантируют надежное соединение без протечек."
  ]
}

const panelParamsMappings = {
  'Фитинги для РВД': [
    { label: 'Размер, мм', value: '3600 х 190 х 8' },
    { label: 'Площадь, м²', value: '0,684' },
    { label: 'Вес, кг', value: '11-12 кг' },
    { label: 'Плотность, кг/м³', value: '1800' },
    { label: 'Материал', value: 'Высокопрочная сталь' },
    { label: 'Рабочее давление', value: 'до 400 бар' },
    { label: 'Температурный режим', value: '-40°C до +100°C' }
  ],
  'Ниппели резьбовые': [
    { label: 'Диаметр резьбы', value: 'М12, М14, М16' },
    { label: 'Длина', value: '20-100 мм' },
    { label: 'Материал', value: 'Латунь, нержавеющая сталь' },
    { label: 'Рабочее давление', value: 'до 350 бар' },
    { label: 'Температурный режим', value: '-30°C до +120°C' }
  ],
  'Муфты соединительные': [
    { label: 'Тип соединения', value: 'Быстросъемное, резьбовое' },
    { label: 'Размеры', value: '1/4" - 2"' },
    { label: 'Материал', value: 'Сталь, латунь' },
    { label: 'Рабочее давление', value: 'до 500 бар' },
    { label: 'Температурный режим', value: '-40°C до +150°C' }
  ],
  'Заглушки и переходники': [
    { label: 'Типы', value: 'Заглушки, переходники, тройники' },
    { label: 'Размеры', value: 'Различные' },
    { label: 'Материал', value: 'Сталь, пластик' },
    { label: 'Назначение', value: 'Герметизация, переход соединений' }
  ],
  'Фланцы гидравлические': [
    { label: 'Стандарт', value: 'DIN, ISO, SAE' },
    { label: 'Размеры', value: 'DN10 - DN100' },
    { label: 'Материал', value: 'Углеродистая сталь' },
    { label: 'Давление', value: 'PN16 - PN40' },
    { label: 'Температура', value: '-20°C до +300°C' }
  ]
}


const defaultImages = [
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg'
]

const defaultTextContent = [
  "Высококачественные комплектующие для рукавов высокого давления.",
  "Все компоненты проходят строгий контроль качества и соответствуют международным стандартам безопасности."
]

const defaultPanelParams = [
  { label: 'Размер', value: 'Стандартный' },
  { label: 'Материал', value: 'Высокопрочный' },
  { label: 'Давление', value: 'до 300 бар' }
]

const blockData = {
  title: 'Надежные соединения для гидравлических систем',
  description:
    'Качественные комплектующие для РВД обеспечивают герметичность и надежность соединений в ваших гидравлических системах',
  buttonText: 'Подобрать комплектующие',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'комплектующие для РВД',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа комплектующих РВД',
  description:
    'Профессиональная продажа комплектующих для рукавов высокого давления в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные компоненты по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент комплектующих для монтажа и ремонта рукавов высокого давления: фитинги, ниппели, муфты, переходники, фланцы и другие компоненты. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные комплектующие для ваших РВД, подберут аналоги и предоставят профессиональную консультацию по монтажу. Обеспечьте надежность ваших гидравлических соединений с нашими комплектующими!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа комплектующих РВД',
  text: 'Полный ассортимент компонентов для РВД',
  features: ['Подбор за 30 минут', 'Гарантия качества', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Монтаж и обслуживание',
}
</script>

<template>
  <Slide :slider="slider" />

  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <ContentWithImage :mainSlideData="mainSlideData" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" />
  <InformationBlock :blockData="blockData" />

  <NewProductBanner 
    :items="items" 
    :textContentMappings="textContentMappings"
    :panelParamsMappings="panelParamsMappings"
    :imageMappings="imageMappings"
    :defaultImages="defaultImages"
    :defaultTextContent="defaultTextContent"
    :defaultPanelParams="defaultPanelParams"
    initialProduct="Фитинги для РВД"
  />
  <Contact />
</template>