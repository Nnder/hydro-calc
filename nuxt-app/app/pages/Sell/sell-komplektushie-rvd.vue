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
  {
    image: 'vtulka.jpeg',
    title: 'Муфты соединительные',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Заглушки и переходники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фланцы гидравлические',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Быстросъемные соединения',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Штуцеры различных типов',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Оборудование для опрессовки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Инструмент для монтажа',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Комплектующие для ремонта',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Запасные части',
  },
])

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

  <NewProductBanner :items="items" />
  <Contact />
</template>
