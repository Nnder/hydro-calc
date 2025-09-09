<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

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
const title = 'Продажа утеплителей в Нижнем Тагиле'

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

const blockData = {
  title: 'Увеличьте ресурс ваших машин',
  description: 'Абразивное влияние грунта на материал конструкции при интенсивной эксплуатации оборудования приводит к быстрому износу ее отдельных элементов',
  buttonText: 'Рассчитать стоимость',
  imageUrl: 'https://cmr24.by/uploads/Articles/42/ekskavator.png',
  imageAlt: 'ковш'
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональный ремонт гидроцилиндров',
  description: 'Профессиональный ремонт гидроцилиндров в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.'
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,

}


useHead({
  title: 'Уплатнение',
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
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <InformationBlock :blockData="blockData" />
  <PartnerBlock :blockDataText="blockDataText" variant="default"/>
  
  
  <AccessoriesGrid :items="items" />
  <Contact />
</template>
