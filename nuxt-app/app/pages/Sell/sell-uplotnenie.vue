<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'

definePageMeta({
  path: '/sell-uplotnenie',
})

useHead({
  title: 'Продажа уплотнений для гидравлики',
  meta: [
    {
      name: 'description',
      content: 'Качественные уплотнения для гидравлических систем по доступным ценам в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных уплотнительных элементов в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент уплотнений для гидравлических систем любого типа и сложности.
        </p>
        <p class="text-lg">
          Все наши уплотнения проходят строгий контроль качества и соответствуют международным стандартам. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа уплотнений в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Уплотнительные кольца',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Манжеты армированные',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Сальниковые набивки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Гидродемпферы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Уплотнения штока',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Уплотнения поршня',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Тефлоновые кольца',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Резиновые уплотнения',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Полиуретановые уплотнения',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Уплотнения для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Импортные аналоги',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Комплекты ремонта',
  },
])

const blockData = {
  title: 'Надежные уплотнения для вашей техники',
  description:
    'Качественные уплотнительные элементы обеспечивают герметичность гидравлических систем и продлевают срок службы оборудования',
  buttonText: 'Подобрать уплотнение',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические уплотнения',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа уплотнений',
  description:
    'Профессиональная продажа уплотнительных элементов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные уплотнения по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент уплотнительных элементов для гидравлических систем: уплотнительные кольца, манжеты, сальники, демпферы и другие комплектующие. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные уплотнения для вашего оборудования, подберут аналоги и предоставят профессиональную консультацию по установке. Обеспечьте надежную работу вашей техники с нашими уплотнениями!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа уплотнений',
  text: 'Полный ассортимент уплотнительных элементов для гидравлики',
  features: ['Подбор за 30 минут', 'Гарантия качества', 'Оригиналы и аналоги'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Быстрая доставка',
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->

  <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
