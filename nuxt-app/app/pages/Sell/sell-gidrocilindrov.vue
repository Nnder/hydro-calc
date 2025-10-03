<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'

definePageMeta({
  path: '/sell/sell-gidrocilindrov',
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
  title: 'Ремонт гидроцилиндров для спецтехники и промышленного производства',
  description:
    'Компания ООО АбсолютТехно выполняет ремонт гидроцилиндров диаметром до 300 мм и ходом поршня до 2200 мм с гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#2563EB',
  scale: 0.5,
  loadFunc: model => {
    model.rotation.x = Math.PI / 2.2
    model.rotation.y = Math.PI
  },
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Подбор и продажа гидроцилиндров',
  description:
    'Профессиональная продажа гидравлических цилиндров в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные гидроцилиндры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа гидлроцилиндров в Нижнем Тагиле',
  description:  `<p class="text-lg">
         Наши специалисты помогут подобрать оптимальный гидроцилиндр для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидроцилиндрами!
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`
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
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <!-- <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  /> -->
  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->
  <PartnerBlock :blockDataText="blockDataText" imageUrl="/nasosi/block1.png" variant="image-right" data-aos="fade-up" data-aos-delay="200"/>
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
