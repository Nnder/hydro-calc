<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'

definePageMeta({
  path: '/izgotovlenie-hydrocylindrov',
})

useHead({
  title: 'Изготовление рукава высокого давления (РВД)',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const parameters = ref([
  { value: 'до 300', description: 'Диаметр поршня, мм' },
  { value: 'до 2200', description: 'Ход поршня, мм' },
  { value: 'до 40', description: 'Max давление, МПа' },
])

const header = 'ПАРАМЕТРЫ НАШИХ ГИДРОЦИЛИНДРОВ'

const description = `<p class="text-lg">
          Компания ООО "АбсолютТехно" специализируется на производстве высококачественных гидроцилиндров любого уровня сложности. 
          Используем современное оборудование и передовые технологии изготовления.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества на каждом этапе
          производства. Изготавливаем гидроцилиндры по стандартным и индивидуальным чертежам.
        </p>`

const imageUrl = '/honingovannaya_trubka_prim.jpeg'
const title = 'Изготовление и ремонт гидроцилиндров по Свердловской области и всей России'

const items = ref([
  {
    image: '/shtok.jpeg',
    title: 'Шток',
  },
  {
    image: '/gilza.jpeg',
    title: 'Гильза',
  },
  {
    image: '/porshen.jpg',
    title: 'Поршень',
  },
  {
    image: '/krishka.jpeg',
    title: 'Крышка',
  },
  {
    image: '/gaika.jpeg',
    title: 'Гайка',
  },
  {
    image: '/uplotnenie.png',
    title: 'Уплотнения',
  },
  {
    image: '/proushina.jpg',
    title: 'Проушина',
  },
  {
    image: '/flanec.jpeg',
    title: 'Фланец',
  },
])

const blockData = {
  title: 'Изготавливаем гидроцилиндры по индивидуальным параметрам',
  description:
    'Произведем гидроцилиндры любого типоразмера и конфигурации\nпо вашим техническим требованиям или чертежам\nс гарантией до 12 месяцев',
  buttonText: 'Заказать гидроцилиндр',
  imageUrl: '/hidrocilinder_3.jpeg',
  imageAlt: 'Производство гидроцилиндров',
    type: '3d',
  modelSrc: '/3d/Сборка_ГЦ_реф.glb',
  modelBgColor: '#2563EB',
}

const mainSlideData = {
  src: '/hidrocilinder_4.jpeg',
  title: 'Изготовление гидроцилиндров',
  description:
    'Профессиональное изготовление гидроцилиндров в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро изготовим для предприятий и частных клиентов по Свердловской области и всей России.',
}
</script>

<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" data-aos-delay="200" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <!-- <RvdTableWrapper :table-data="tableData" /> -->
  <!-- <ProductionEquipment data-aos="fade-up" /> -->
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" data-aos="fade-up" />
  <AccessoriesGrid :items="items" data-aos="fade-up" />
  <Contact data-aos="fade-up" />
</template>
