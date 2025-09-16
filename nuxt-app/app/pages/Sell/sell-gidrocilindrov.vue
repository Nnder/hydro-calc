<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'

definePageMeta({
  path: '/sell-gidrocilindrov',
})

useHead({
  title: 'Продажа гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Гидроцилиндры для спецтехники и промышленного оборудования в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных гидравлических цилиндров в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент гидроцилиндров для любой спецтехники и оборудования.
        </p>
        <p class="text-lg">
          Все наши гидроцилиндры проходят строгий контроль качества и соответствуют техническим требованиям. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа гидроцилиндров в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Телескопические цилиндры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры двустороннего действия',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры одностороннего действия',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Плунжерные гидроцилиндры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры для экскаваторов',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры для погрузчиков',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры для бульдозеров',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Цилиндры для кранов',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Специальные гидроцилиндры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Ремонтные комплекты',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Запчасти для цилиндров',
  },
])

const blockData = {
  title: 'Надежные гидроцилиндры для вашей техники',
  description:
    'Качественные гидравлические цилиндры обеспечивают точность и надежность работы вашего оборудования в любых условиях',
  buttonText: 'Подобрать цилиндр',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические цилиндры',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа гидроцилиндров',
  description:
    'Профессиональная продажа гидравлических цилиндров в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные гидроцилиндры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент гидравлических цилиндров для строительной, дорожной, сельскохозяйственной и промышленной техники. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный гидроцилиндр для вашей техники, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке. Обеспечьте бесперебойную работу вашего оборудования с нашими гидроцилиндрами!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа гидроцилиндров',
  text: 'Широкий выбор гидравлических цилиндров',
  features: ['Подбор по техпараметрам', 'Гарантия качества', 'Техническая поддержка'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Изготовление под заказ',
}
</script>

<template>
  <Slide :slider="slider" />

  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <ContentWithImage :mainSlideData="mainSlideData" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" />
  <InformationBlock :blockData="blockData" />

  <AccessoriesGrid :items="items" />
  <Contact />
</template>
