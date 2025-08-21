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
          Компания ООО "Энергия" располагает современным производственным комплексом. Специализируемся на
          высококачественном ремонте и изготовлении рукавов высокого давления с использованием итальянского оборудования
          OR.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества на каждом этапе
          производства.
        </p>`

const imageUrl = 'https://www.slavyane8.ru/wp-content/uploads/2019/11/XXL-1.jpg'
const title = 'Изготовление и ремонт РВД в Екатеринбурге'

const items = ref([
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Втулка',
  },
])

const tableData = ref([
  {
    innerDiameterMm: '51,0',
    innerDiameterInch: '2"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '76,0',
    minBendRadiusInch: '2,99"',
    vacuum: '100',
    weightKg: '1,540',
    weightLb: '1,04',
  },
  {
    innerDiameterMm: '76,0',
    innerDiameterInch: '3"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '114,0',
    minBendRadiusInch: '4,49"',
    vacuum: '100',
    weightKg: '2,680',
    weightLb: '1,81',
  },
  {
    innerDiameterMm: '102,0',
    innerDiameterInch: '4"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '153,0',
    minBendRadiusInch: '6,02"',
    vacuum: '100',
    weightKg: '3,910',
    weightLb: '2,63',
  },
])
</script>

<template>
  <InformationBlock />
  <ProductionEquipment />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
