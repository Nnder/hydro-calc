<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'

const parameters = ref([
  { value: 'до 200', description: 'Диаметр поршня, мм' },
  { value: 'до 2400', description: 'Ход поршня, мм' },
  { value: 'до 40', description: 'Max давление, МПа' },
])

const header = 'ПАРАМЕТРЫ НАШИХ ГИДРОЦИЛИНДРОВ'

const description = `<p class="text-lg">
          Компания ООО "Энергия" специализируется на производстве высококачественных гидроцилиндров любого уровня сложности. 
          Используем современное оборудование и передовые технологии изготовления.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества на каждом этапе
          производства. Изготавливаем гидроцилиндры по стандартным и индивидуальным чертежам.
        </p>`

const imageUrl = 'https://gidroprivod.com/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg'
const title = 'Изготовление и ремонт гидроцилиндров по Свердловской области'

const items = ref([
  {
    image: 'https://stankotec.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Шток',
  },
  {
    image: 'https://gidroservis-rt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Гильза',
  },
  {
    image: 'https://gidroprivod-m.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Поршень',
  },
  {
    image: 'https://gidroagregat.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Крышка',
  },
  {
    image: 'https://gidromolot.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Гайка',
  },
  {
    image: 'https://gidrocilindr.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Уплотнения',
  },
  {
    image: 'https://gidrosila.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Проушина',
  },
  {
    image: 'https://gidrokomplekt.ru/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg',
    title: 'Фланец',
  },
])


const blockData = {
  title: 'Изготавливаем гидроцилиндры по индивидуальным параметрам',
  description: 'Произведем гидроцилиндры любого типоразмера и конфигурации\nпо вашим техническим требованиям или чертежам\nс гарантией до 24 месяцев',
  buttonText: 'Заказать гидроцилиндр',
  imageUrl: 'https://gidroprivod.com/upload/iblock/7b9/7b9c0c6f6d4d8c8d7b0c6f6d4d8c8d7b.jpg', 
  imageAlt: 'Производство гидроцилиндров'
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
