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
  path: '/sell-klapanov-davleniya',
})

useHead({
  title: 'Продажа клапанов давления',
  meta: [
    {
      name: 'description',
      content: 'Клапаны давления для гидравлических систем в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных клапанов давления в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент предохранительных, редукционных и других типов клапанов.
        </p>
        <p class="text-lg">
          Все наши клапаны проходят строгий контроль качества и соответствуют техническим требованиям. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа клапанов давления в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Предохранительные клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Редукционные клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Переливные клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Клапаны последовательности',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Клапаны противодавления',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Электромагнитные клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Непрямого действия клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Прямого действия клапаны',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Клапаны для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Клапаны для станков',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Ремонтные комплекты',
  },
])

const blockData = {
  title: 'Надежная защита гидравлических систем',
  description:
    'Качественные клапаны давления обеспечивают безопасность и стабильность работы вашего гидравлического оборудования',
  buttonText: 'Подобрать клапан',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'клапаны давления',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа клапанов давления',
  description:
    'Профессиональная продажа клапанов давления в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные клапаны по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент клапанов давления для защиты и регулирования гидравлических систем: предохранительные, редукционные, переливные и другие типы клапанов. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный клапан давления для вашей системы, рассчитают необходимые параметры настройки и предоставят профессиональную консультацию по установке. Обеспечьте безопасную работу вашего оборудования с нашими клапанами давления!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа клапанов давления',
  text: 'Широкий выбор гидравлических клапанов',
  features: ['Подбор по параметрам', 'Гарантия качества', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Настройка под требования',
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
  <Contact />
</template>
