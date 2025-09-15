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
  path: '/sell-gidronasosov',
})

useHead({
  title: 'Уплатнение',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const header = 'ПАРАМЕТРЫ НАШИХ УТЕПЛИТЕЛЕЙ'

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных утеплителей в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент теплоизоляционных материалов для любых строительных задач.
        </p>
        <p class="text-lg">
          Все наши утеплители проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа утеплителей в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Минеральная вата',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пенополистирол',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Базальтовые плиты',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Экструдированный пенополистирол',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фольгированный утеплитель',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пенофол',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Стекловата',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пенопласт',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Керамзит',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Эковата',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пенополиуретан',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пробковый утеплитель',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Жидкая теплоизоляция',
  },
])

const blockData = {
  title: 'Эффективное утепление вашего дома',
  description:
    'Качественная теплоизоляция позволяет значительно снизить энергопотребление и создать комфортный микроклимат в помещении в любое время года',
  buttonText: 'Рассчитать стоимость',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'утепление дома',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа утеплителей',
  description:
    'Профессиональная продажа утеплителей в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные теплоизоляционные материалы по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент теплоизоляционных материалов для различных целей: утепление стен, полов, кровли, фасадов и фундаментов. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный утеплитель для ваших задач, рассчитают необходимое количество материала и предоставят профессиональную консультацию по монтажу. Экономьте на отоплении и создайте комфортные условия в вашем доме!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Ремонт гидроцилиндров',
  text: 'Полный комплекс услуг по восстановлению гидравлики',
  features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Проектирование и изготовление гидроцилидров'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Срочный ремонт за 24 часа',
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
