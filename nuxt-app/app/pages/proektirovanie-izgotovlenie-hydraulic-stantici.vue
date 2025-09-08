<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'

const parameters = ref([
  { value: 'более 1000', description: 'Наименований в каталоге' },
  { value: 'до 40', description: 'Размерный ряд, мм' },
  { value: '24/7', description: 'Доступность на складе' },
])

const header = 'АССОРТИМЕНТ ДОПОЛНИТЕЛЬНЫХ КОМПЛЕКТУЮЩИХ'

const description = `<p class="text-lg">
          Компания ООО "Энергия" предлагает широкий выбор дополнительных комплектующих для гидравлических систем.
          В нашем каталоге представлены все необходимые компоненты для монтажа и обслуживания гидрооборудования.
        </p>
        <p class="text-lg">
          Все комплектующие соответствуют международным стандартам качества и имеют необходимые сертификаты.
          Гарантируем быструю отгрузку со склада и индивидуальный подход к каждому клиенту.
        </p>`

const imageUrl = 'https://avatars.mds.yandex.net/i?id=799b5344a321a8b7638711f915862050_l-5875861-images-thumbs&n=13'
const title = 'Дополнительные комплектующие для гидравлики по Свердловской области'

const items = ref([
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/4907979/2a000001923367635312bc4fb93f925d59b4/orig',
    title: 'Быстросъемы',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=a9ea457bb05e6726144d0ca089d09fa9_l-5227935-images-thumbs&n=13',
    title: 'Фитинги',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=b05f6fad8d23a7b79855fce41768f5fd_l-3742206-images-thumbs&n=13',
    title: 'Фланцы',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=152961c0c39c822c5b2ef7e81c72183d_l-4425921-images-thumbs&n=13',
    title: 'Адаптеры',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=3d04c40c5dda1ec28f636a94ec27b9176668c8fe-5910939-images-thumbs&n=13',
    title: 'Ниппели',
  },
  {
    image: 'https://7.allegroimg.com/original/01b2cc/fb96e6e04457a7346590db7251e7',
    title: 'Заглушки',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=43a2c8d3364563f76d1814e75b2e9ff3_l-10144254-images-thumbs&n=13',
    title: 'Хомуты',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-altay/15223968/2a00000195a3d4094ce3ec2f4d0919e7a2c3/XXXL',
    title: 'Клапаны',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Манометры',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=c47b6246a76a363d8fef283cbe7a83581d7caf32-5163012-images-thumbs&n=13',
    title: 'Фильтры',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=d85321732904ae20e515636c087a163a_l-12427807-images-thumbs&n=13',
    title: 'Редукторы',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=f42771efb0d059ac5b02969387c4888e_l-8485874-images-thumbs&n=13',
    title: 'Прокладки',
  },
  {
    image: 'https://specresurs96.ru/userfls/shop/large/2508_4388027-remkomplekt-gidrotsili.png',
    title: 'Уплотнения',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=2761356dd035b85b1762052e0b09b732_l-10806805-images-thumbs&n=13',
    title: 'Штуцеры',
  },
])

const tableData = ref([
  {
    type: 'Быстросъем',
    size: '1/2"',
    pressure: '350',
    material: 'Сталь',
    connection: 'Резьба'
  },
  {
    type: 'Фитинг',
    size: '3/4"',
    pressure: '420',
    material: 'Нерж. сталь',
    connection: 'Фланец'
  },
  {
    type: 'Фланец',
    size: '1"',
    pressure: '250',
    material: 'Сталь',
    connection: 'Болтовое'
  },
  {
    type: 'Адаптер',
    size: '1/4"',
    pressure: '600',
    material: 'Латунь',
    connection: 'Резьба'
  },
  {
    type: 'Ниппель',
    size: '3/8"',
    pressure: '500',
    material: 'Сталь',
    connection: 'Резьба'
  }
])

const blockData = {
  title: 'Комплектующие для гидравлических систем любого типа',
  description: 'Подберем и поставим любые комплектующие\nпо вашим техническим требованиям\nс гарантией качества',
  buttonText: 'Заказать комплектующие',
  imageUrl: 'https://gidroplus.com/wp-content/uploads/2020/03/gidravlicheskoe-oborudovanie-kupit-iz-nalichiya-gidroplyus.jpg', 
  imageAlt: 'Дополнительные комплектующие для гидравлики'
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональный ремонт гидроцилиндров',
  description: 'Профессиональный ремонт гидроцилиндров в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.'
}

useHead({
  title: 'Профессиональный ремонт гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

</script>

<template>
    <ContentWithImage :mainSlideData="mainSlideData"/>
  <ParametersGrid :parameters="parameters" :header="header" />
  <InformationBlock :blockData="blockData" />
  <!-- <RvdTableWrapper :table-data="tableData" /> -->
  <ProductionEquipment />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
