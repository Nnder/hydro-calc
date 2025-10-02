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
import SwiperProduct from '~/components/ProductGalleryWithThumbnails/SwiperProduct.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'

definePageMeta({
  path: '/sell/sell-komplektushie-rvd',
})

useHead({
  title: 'Продажа комплектующих для РВД',
  meta: [
    {
      name: 'description',
      content: 'Комплектующие для рукавов высокого давления в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных комплектующих для РВД в Нижнем Тагиле. 
          Мы предлагаем полный ассортимент фитингов, ниппелей, муфт и других компонентов.
        </p>
        <p class="text-lg">
          Все наши комплектующие проходят строгий контроль качества и соответствуют стандартам безопасности. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа комплектующих для РВД в Нижнем Тагиле'

const items = [
  {
    image: '/flanec_sae.jpg',
    title: 'Фланец SAE',
  },
  {
    image: '/uplotnitelnoe_kolce.jpeg',
    title: 'Уплотнительное кольцо',
  },
  {
    image: '/bistrosemnoe_soedinenie.jpeg',
    title: 'Быстросъёмное соединение',
  },
  {
    image: '/zashitnie_obolochi.jpeg',
    title: 'Защитные оболочки',
  },
  {
    image: '/perehodnik.jpeg',
    title: 'Переходник',
  },
  {
    image: 'https://ufa.centermk.ru/upload/iblock/bd7/1kgjlizny9l14e0cc8bxaryjlst4yh3p.jpg',
    title: 'Заглушка',
  },
]

const imageMappings = {
  'Фланец SAE': [
    'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
    'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
    'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
    
  ],
  'Уплотнительное кольцо': [
    'https://сантехник-а.рф/upload/iblock/c0e/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
    'https://ita-filter.ru/image/cache/catalog/product/F9079-29-1000x1000.jpg',
    'https://lazer-technology.ru/images/detailed/2/full_Уплотнительное_кольцо_32.2×24×3.6×2.7__1_.jpg',
  ],
  'Быстросъёмное соединение': [
    'https://oberon-weld.ru/upload/iblock/2d2/grgzqxh2p4hxvl69f04ynlzh9ce0u246/FA3047.png',
    'https://barshydraulic.ru/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/S/F/SF10-40.jpg',
    'https://st22.stpulscen.ru/images/product/445/686/695_original.jpg',
  ],
  'Защитные оболочки': [
    'https://www.vivtech.ru/upload/iblock/ba1/ndpxoi7aotw70sqbgjho1ml0fm6i056a/a17.jpg',
    'https://www.vivtech.ru/upload/iblock/e96/ov69907axb8a7aaikl7xu9602lrks0bp/a21.jpg',
    'https://avatars.mds.yandex.net/get-mpic/12261762/2a0000018c1aa38d6c5dc4a1d7d124390add/orig',
  ],
  'Переходник': [
    'https://ae01.alicdn.com/kf/Sf615ba1d9ae7447d919df8189f636d22P.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkTEjHvpdcaB47RDPkymk8ZF8X2PTpH2uNg&s',
    'https://www.vod-dom.ru/wa-data/public/shop/products/54/56/15654/images/39119/39119.970.png',
  ],
  'Заглушка': [
    'https://gkf40.ru/image/cache/data/5M3_8915-800x800.jpg',
    'https://ae04.alicdn.com/kf/Ha770a52e4db54b56915af58c26a6e871y.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5omeSJ_ya_TxRQ02PTxtuRLbjl5-yc4QYQ&s',
    
  ],
}


const pdfMappings = {
  'Фланец SAE': '/pdf/fittingi-dlya-rvd.pdf',
  'Уплотнительное кольцо': '/pdf/nippeli-rezbovye.pdf',
  'Быстросъёмное соединение': '/pdf/mufty-soedinitelnye.pdf',
  'Защитные оболочки': '/pdf/zaglushki-perehodniki.pdf',
  'Переходник': '/pdf/flantsy-gidravlicheskie.pdf',
  'Заглушка': '/pdf/flantsy-gidravlicheskie.pdf',
}

const defaultPdfUrl = '/pdf/komplektuyushchie-rvd-obshchiy.pdf'

const defaultImages = [
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
]

const defaultTextContent = [
  'Высококачественные комплектующие для рукавов высокого давления.',
  'Все компоненты проходят строгий контроль качества и соответствуют международным стандартам безопасности.',
]

const defaultPanelParams = [
  { label: 'Размер', value: 'Стандартный' },
  { label: 'Материал', value: 'Высокопрочный' },
  { label: 'Давление', value: 'до 300 бар' },
]

const blockData = {
  title: 'Надежные соединения для гидравлических систем',
  description:
    'Качественные комплектующие для РВД обеспечивают герметичность и надежность соединений в ваших гидравлических системах',
  buttonText: 'Подобрать комплектующие',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'комплектующие для РВД',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа комплектующих РВД',
  description:
    'Профессиональная продажа комплектующих для рукавов высокого давления в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные компоненты по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент комплектующих для монтажа и ремонта рукавов высокого давления: фитинги, ниппели, муфты, переходники, фланцы и другие компоненты. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные комплектующие для ваших РВД, подберут аналоги и предоставят профессиональную консультацию по монтажу. Обеспечьте надежность ваших гидравлических соединений с нашими комплектующими!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа комплектующих РВД',
  text: 'Полный ассортимент компонентов для РВД',
  features: ['Подбор за 30 минут', 'Гарантия качества', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Монтаж и обслуживание',
}


    
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <NewProductBanner
    :items="items"
    :textContentMappings="textContentMappings"
    :panelParamsMappings="panelParamsMappings"
    :imageMappings="imageMappings"
    :defaultImages="defaultImages"
    :defaultTextContent="defaultTextContent"
    :defaultPanelParams="defaultPanelParams"
    :pdfMappings="pdfMappings"
    :defaultPdfUrl="defaultPdfUrl"
    initialProduct="Фланец SAE"
    data-aos="fade-up"
  />
  <Contact data-aos="fade-up" />
</template>