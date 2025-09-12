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

const imageUrl =
  'https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/494982/content_honingovannaya_trubka_prim.jpeg'
const title = 'Изготовление и ремонт гидроцилиндров по Свердловской области'

const items = ref([
  {
    image: 'https://avatars.mds.yandex.net/i?id=8405108591ece3b455079d0ad0508e41_l-5303693-images-thumbs&n=13',
    title: 'Шток',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=83d2b77057be96a13243be2da3ba1667_l-5754670-images-thumbs&n=13',
    title: 'Гильза',
  },
  {
    image: 'https://cdn.izap24.ru/images/prodacts/sourse/250377/250377261_vtulka-tsilindra-bf-040410001.jpg',
    title: 'Поршень',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=39f61ff2ce2f0c0ac6d7739604e86d50_l-10698550-images-thumbs&n=13',
    title: 'Крышка',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/1597983/2a0000018dec406adb92c14c0cb0b88be6e5/orig',
    title: 'Гайка',
  },
  {
    image: 'https://specresurs96.ru/userfls/shop/large/2508_4388027-remkomplekt-gidrotsili.png',
    title: 'Уплотнения',
  },
  {
    image: 'https://cdn1.ozone.ru/s3/multimedia-1-z/6914229587.jpg',
    title: 'Проушина',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/1565610/img_id243666551572505319.jpeg/orig',
    title: 'Фланец',
  },
])

const blockData = {
  title: 'Изготавливаем гидроцилиндры по индивидуальным параметрам',
  description:
    'Произведем гидроцилиндры любого типоразмера и конфигурации\nпо вашим техническим требованиям или чертежам\nс гарантией до 24 месяцев',
  buttonText: 'Заказать гидроцилиндр',
  imageUrl: 'https://avatars.mds.yandex.net/get-altay/13207207/2a0000018fe778e2b0f645e5753a192a5581/XXL_height',
  imageAlt: 'Производство гидроцилиндров',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональный ремонт гидроцилиндров',
  description:
    'Профессиональный ремонт гидроцилиндров в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.',
}
</script>

<template>
  <ContentWithImage :mainSlideData="mainSlideData" />
  <ParametersGrid :parameters="parameters" :header="header" />
  <InformationBlock :blockData="blockData" />
  <!-- <RvdTableWrapper :table-data="tableData" /> -->
  <ProductionEquipment />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
