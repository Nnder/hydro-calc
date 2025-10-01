<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'

definePageMeta({
  path: '/sell/sell-gidroraspredelitelei',
})

useHead({
  title: 'Продажа гидрораспределителей',
  meta: [
    {
      name: 'description',
      content: 'Гидравлические распределители для спецтехники и промышленного оборудования',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных гидравлических распределителей в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент распределителей для управления гидравлическими системами.
        </p>
        <p class="text-lg">
          Все наши гидрораспределители проходят строгий контроль качества и соответствуют техническим стандартам. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа гидрораспределителей в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Золотниковые распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Клапанные распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Секционные распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Электрогидравлические распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Рычажные распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пневмогидравлические распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Распределители с электроприводом',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Моноблочные распределители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Распределители для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Запчасти для распределителей',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Ремонтные комплекты',
  },
])

const blockData = {
  title: 'Точное управление гидравлическими системами',
  description:
    'Качественные гидрораспределители обеспечивают точное и надежное управление рабочими органами вашей техники',
  buttonText: 'Подобрать распределитель',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические распределители',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа гидрораспределителей',
  description:
    'Профессиональная продажа гидравлических распределителей в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные распределители по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент гидравлических распределителей для управления различными гидравлическими системами: строительная техника, промышленное оборудование, сельскохозяйственные машины. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный гидрораспределитель для вашей системы, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и настройке. Обеспечьте точное управление вашим оборудованием с нашими гидрораспределителями!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа гидрораспределителей',
  text: 'Широкий выбор гидравлических распределителей',
  features: ['Подбор по характеристикам', 'Гарантия 12 месяцев', 'Техническое сопровождение'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Быстрая поставка',
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
