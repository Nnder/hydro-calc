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
  path: '/sell-filtrov',
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
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические фильтры',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа фильтров',
  description:
    'Профессиональная продажа фильтров и фильтроэлементов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные фильтры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент фильтров и фильтроэлементов для очистки гидравлических жидкостей: всасывающие, напорные, сливные, воздушные фильтры различных степеней очистки. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные фильтры для вашей системы, рассчитают необходимую тонкость фильтрации и предоставят профессиональную консультацию по обслуживанию. Обеспечьте чистоту и надежность вашего оборудования с нашими фильтрами!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа фильтров',
  text: 'Широкий выбор фильтрующих элементов',
  features: ['Подбор по степени очистки', 'Гарантия эффективности', 'Техническая поддержка'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Регулярное обслуживание',
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="400" />

  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" data-aos="fade-up" />
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <AccessoriesGrid :items="items" data-aos="fade-up" />
  <Contact data-aos="fade-up" />
</template>
