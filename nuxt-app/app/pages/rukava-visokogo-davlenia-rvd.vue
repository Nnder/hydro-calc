<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'


const parameters = ref([
  { value: 'до 2"', description: 'Диаметр подключения, дюймов' },
  { value: 'до 40', description: 'Рабочее давление, МПа' },
  { value: 'от -50°C до +100°C', description: 'Температурный диапазон' },
])

const header = 'ПАРАМЕТРЫ ИЗГОТОВЛЯЕМЫХ РВД'

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" располагает современным производственным комплексом. Специализируемся на
          изготовлении рукавов высокого давления с использованием высококачественного оборудования.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества на каждом этапе
          производства.
        </p>`

const imageUrl = 'https://www.slavyane8.ru/wp-content/uploads/2019/11/XXL-1.jpg'
const title = 'Изготовление и ремонт РВД по Свердловской области'

const items = ref([
  {
    image: 'https://www.music-expert.ru/upload/iblock/d4b/d4b0e306e2721170394296fe7782ae16.jpeg',
    title: 'Обжимная гильза',
  },
  {
    image: 'https://www.osnastka.pro/upload/images/112.02.10.jpg',
    title: 'Зажимная гайка',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/12277885/2a00000194915eb9b5b1b48a36d2408ed7fb/orig',
    title: 'Прямой фитинг',
  },
  {
    image: 'https://cdn1.ozone.ru/s3/multimedia-w/6450629240.jpg',
    title: 'Угловой фитинг 90°',
  },
  {
    image: 'https://store.eihydraulics.ru/upload/iblock/921/921ea5cca55ff9febc69f2a8c696c8e0.jpg',
    title: 'Фланец SAE',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/4888456/2a0000018b191e4183bfaa4bc32ab3acd765/orig',
    title: 'Уплотнительное кольцо',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/11695357/2a000001904798c1d5bc7fcab8b126ee87dd/orig',
    title: 'Быстросъёмное соединение',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/5207288/2a0000018e0b56f3ef5939a5538134c3f47d/orig',
    title: 'Защитная пружина',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/5243609/2a000001923476b725fafc49bf93526cd286/orig',
    title: 'Переходник',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=e18bda75bc6cc9f915ddb2f8f436ccf214d7a030-13486952-images-thumbs&n=13',
    title: 'Заглушка',
  },
  {
    image: 'https://avatars.mds.yandex.net/get-mpic/4355034/2a00000194c2cfe7fb7aac10224321a3ae4b/orig',
    title: 'Медная шайба',
  },
  {
    image: 'https://simferopol.cstg.ru/upload/iblock/f67/dqei9lz6ch0g91988ockuyb190nhfso1.jpeg',
    title: 'Ремонтный комплект',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=e1089dbe70bb5c6da54a3bb3432cf1d3_l-4942568-images-thumbs&n=13',
    title: 'Демпфер вибрации',
  }
])

const tableData = ref([
  {
    innerDiameterMm: '6,3',
    innerDiameterInch: '1/4"',
    outerDiameterMm: '12,5',
    outerDiameterInch: '0,49"',
    workingPressureBar: '350',
    workingPressurePsi: '5075',
    burstPressureBar: '1400',
    burstPressurePsi: '20300',
    minBendRadiusMm: '80',
    minBendRadiusInch: '3,15"',
    vacuum: '95',
    weightKg: '0,32',
    weightLb: '0,21',
  },
  {
    innerDiameterMm: '12,5',
    innerDiameterInch: '1/2"',
    outerDiameterMm: '21,5',
    outerDiameterInch: '0,85"',
    workingPressureBar: '250',
    workingPressurePsi: '3625',
    burstPressureBar: '1000',
    burstPressurePsi: '14500',
    minBendRadiusMm: '150',
    minBendRadiusInch: '5,91"',
    vacuum: '95',
    weightKg: '0,75',
    weightLb: '0,50',
  },
  {
    innerDiameterMm: '19,0',
    innerDiameterInch: '3/4"',
    outerDiameterMm: '29,0',
    outerDiameterInch: '1,14"',
    workingPressureBar: '210',
    workingPressurePsi: '3045',
    burstPressureBar: '840',
    burstPressurePsi: '12180',
    minBendRadiusMm: '220',
    minBendRadiusInch: '8,66"',
    vacuum: '95',
    weightKg: '1,25',
    weightLb: '0,84',
  },
  {
    innerDiameterMm: '25,0',
    innerDiameterInch: '1"',
    outerDiameterMm: '36,0',
    outerDiameterInch: '1,42"',
    workingPressureBar: '175',
    workingPressurePsi: '2537',
    burstPressureBar: '700',
    burstPressurePsi: '10150',
    minBendRadiusMm: '280',
    minBendRadiusInch: '11,02"',
    vacuum: '90',
    weightKg: '1,85',
    weightLb: '1,24',
  }
])

const blockData = {
  title: 'Производим рукава высокого давления по индивидуальным параметрам',
  description: 'Изготовим РВД любого диаметра и конфигурации\nпо вашим техническим требованиям или образцу\nс гарантией до 12 месяцев',
  buttonText: 'Заказать РВД',
  imageUrl: 'https://avatars.mds.yandex.net/i?id=204dd5e5dde778919d6fd95f544c62b8_l-12497179-images-thumbs&n=13', 
  imageAlt: 'Производство рукавов высокого давления'
}
</script>

<template>
  <ParametersGrid :parameters="parameters" :header="header" />
  <InformationBlock :blockData="blockData" />
  <RvdTableWrapper :table-data="tableData" />
  <ProductionEquipment />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
