<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'

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

const imageUrl = 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg'
const title = 'Дополнительные комплектующие для гидравлики по Свердловской области'

const items = ref([
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Быстросъемы',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Фитинги',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Фланцы',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Адаптеры',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Ниппели',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Заглушки',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Хомуты',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Клапаны',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Манометры',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Фильтры',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Редукторы',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Прокладки',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Уплотнения',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
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
  imageUrl: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg', 
  imageAlt: 'Дополнительные комплектующие для гидравлики'
}
</script>

<template>
  <ParametersGrid :parameters="parameters" :header="header" />
  <InformationBlock :blockData="blockData" />
  <!-- <RvdTableWrapper :table-data="tableData" /> -->
  <ProductionEquipment />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
