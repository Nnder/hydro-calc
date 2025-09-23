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

definePageMeta({
  path: '/sell-shidkostey',
})

useHead({
  title: 'Продажа ГСМ и технических жидкостей',
  meta: [
    {
      name: 'description',
      content: 'Горюче-смазочные материалы и технические жидкости для гидравлики в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных ГСМ и технических жидкостей в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент масел, смазок и специальных жидкостей для любого оборудования.
        </p>
        <p class="text-lg">
          Все наши продукты соответствуют международным стандартам качества и техническим требованиям. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа ГСМ и технических жидкостей в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Гидравлические масла',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Моторные масла',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Трансмиссионные масла',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Индустриальные масла',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пластичные смазки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Специальные жидкости',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Тормозные жидкости',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Охлаждающие жидкости',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Антифризы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Промывочные жидкости',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Смазочно-охлаждающие жидкости',
  },
])

const blockData = {
  title: 'Качественные жидкости для надежной работы техники',
  description:
    'Сертифицированные ГСМ и технические жидкости обеспечивают оптимальную работу вашего оборудования и продлевают его срок службы',
  buttonText: 'Подобрать жидкость',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'ГСМ и технические жидкости',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа ГСМ',
  description:
    'Профессиональная продажа горюче-смазочных материалов и технических жидкостей в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные продукты по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент горюче-смазочных материалов и технических жидкостей для различных отраслей промышленности: гидравлические масла, моторные масла, трансмиссионные жидкости, пластичные смазки, специальные жидкости. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные жидкости для вашего оборудования, предоставят техническую документацию и профессиональную консультацию по применению. Обеспечьте надежную работу вашей техники с нашими ГСМ и техническими жидкостями!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа ГСМ и жидкостей',
  text: 'Широкий выбор технических жидкостей',
  features: ['Подбор по спецификациям', 'Сертификаты качества', 'Техническое консультирование'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка и хранение',
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="400" />

  <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="600"
  />
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <AccessoriesGrid :items="items" data-aos="fade-up" />
  <Contact data-aos="fade-up" />
</template>
