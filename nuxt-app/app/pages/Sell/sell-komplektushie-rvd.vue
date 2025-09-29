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
  path: '/sell-komplektushie-rvd',
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
    image: '/zalishki_2.jpeg',
    title: 'Заглушка',
  },
]

const imageMappings = {
  'Фланец SAE': [
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  ],
  'Уплотнительное кольцо': [
    'https://images.steamusercontent.com/ugc/948457048990882706/2E4E05B91A9B5FAFE21E7014700891D2BB1EC59F/',
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  ],
  'Быстросъёмное соединение': [''],
  'Защитные оболочки': [''],
  'Переходник': [''],
  'Заглушка': [''],
}

const textContentMappings = {
  'Фланец SAE': [
    'Фланцы SAE предназначены для соединения гидравлических компонентов и систем высокого давления. Изготавливаются из высокопрочной стали с антикоррозийным покрытием.',
    'Применяются в промышленном оборудовании, строительной технике и гидравлических системах. Обеспечивают надежное и герметичное соединение при рабочих давлениях до 600 бар.',
  ],
  'Уплотнительное кольцо': [
    'Уплотнительные кольца изготавливаются из качественной резины NBR, Viton или EPDM для различных рабочих сред и температурных условий.',
    'Обеспечивают герметичность соединений в гидравлических системах, предотвращают утечки масла и других рабочих жидкостей.',
  ],
  'Быстросъёмное соединение': [
    'Быстросъёмные соединения позволяют быстро и безопасно подсоединять и отсоединять гидравлические линии без утечки жидкости.',
    'Идеальное решение для частого подключения/отключения оборудования. Оснащены системой блокировки для предотвращения случайного отсоединения.',
  ],
  'Защитные оболочки': [
    'Защитные оболочки предохраняют гидравлические шланги и кабели от механических повреждений, истирания и воздействия агрессивных сред.',
    'Изготавливаются из износостойких полимерных материалов, устойчивых к УФ-излучению и перепадам температур.',
  ],
  'Переходник': [
    'Переходники позволяют соединять гидравлические компоненты с различными типами резьб и стандартов соединений.',
    'Доступны в различных конфигурациях: прямые, угловые, тройники, с различными типами резьб (метрическая, дюймовая, трубная).',
  ],
  'Заглушка': [
    'Заглушки предназначены для герметичного закрытия неиспользуемых отверстий в гидравлических системах и оборудовании.',
    'Защищают от попадания загрязнений и влаги, предотвращают утечки при хранении и транспортировке компонентов.',
  ],
}

const panelParamsMappings = {
  'Фланец SAE': [
    { label: 'Размер', value: 'SAE 1/2"' },
    { label: 'Давление', value: 'до 600 бар' },
    { label: 'Материал', value: 'Сталь 45' },
    { label: 'Температура', value: '-40°C до +120°C' },
  ],
  'Уплотнительное кольцо': [
    { label: 'Материал', value: 'NBR, Viton, EPDM' },
    { label: 'Температура', value: '-30°C до +200°C' },
    { label: 'Давление', value: 'до 700 бар' },
    { label: 'Стандарт', value: 'DIN, ISO' },
  ],
  'Быстросъёмное соединение': [
    { label: 'Тип', value: 'ISO 16028' },
    { label: 'Давление', value: 'до 350 бар' },
    { label: 'Размер', value: '1/4" - 1"' },
    { label: 'Материал', value: 'Сталь, нерж. сталь' },
  ],
  'Защитные оболочки': [
    { label: 'Материал', value: 'Полиуретан, ПВХ' },
    { label: 'Диаметр', value: '6-32 мм' },
    { label: 'Температура', value: '-40°C до +90°C' },
    { label: 'Цвет', value: 'Черный, оранжевый' },
  ],
  'Переходник': [
    { label: 'Типы резьб', value: 'Метрическая, дюймовая' },
    { label: 'Материал', value: 'Сталь, латунь' },
    { label: 'Давление', value: 'до 600 бар' },
    { label: 'Покрытие', value: 'Цинк, никель' },
  ],
  'Заглушка': [
    { label: 'Тип резьбы', value: 'Метрическая, трубная' },
    { label: 'Материал', value: 'Сталь, пластик' },
    { label: 'Размер', value: 'М8 - М42' },
    { label: 'Температура', value: '-50°C до +150°C' },
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
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
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
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" />
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