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
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Минеральная вата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенополистирол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Базальтовые плиты',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Экструдированный пенополистирол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Фольгированный утеплитель',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенофол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Стекловата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенопласт',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Керамзит',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Эковата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенополиуретан',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пробковый утеплитель',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
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
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
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
