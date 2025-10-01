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
  path: '/sell/sell-gidronasosov',
})

useHead({
  title: 'Продажа гидравлических насосов',
  meta: [
    {
      name: 'description',
      content: 'Гидронасосы для спецтехники и промышленного оборудования в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных гидравлических насосов в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент гидронасосов для любых промышленных задач.
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа гидронасосов в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Аксиально-поршневые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Шестеренные насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пластинчатые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Радиально-поршневые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Героторные насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы высокого давления',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы низкого давления',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Регулируемые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Нерегулируемые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для станков',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для прессов',
  },
])

const blockData = {
  title: 'Эффективные гидравлические решения',
  description:
    'Качественные гидронасосы обеспечивают надежную работу вашего оборудования и повышают производительность технологических процессов',
  buttonText: 'Подобрать насос',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические насосы',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа гидронасосов',
  description:
    'Профессиональная продажа гидравлических насосов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные гидронасосы по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент гидравлических насосов для различных отраслей промышленности: строительная техника, станкостроение, прессовое оборудование, автомобильная промышленность. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный гидронасос для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидронасосами!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа гидронасосов',
  text: 'Широкий выбор гидравлических насосов',
  features: ['Подбор по параметрам', 'Гарантия 12 месяцев', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка по области',
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
