<script setup>
import Contact from '~/components/Page/Contact.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'

definePageMeta({
  path: '/sell/sell-komplektushie-rvd/:active?',
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

const route = useRoute()
const activeSection = ref(route.params.active || 'Фланец')

const bannerProps = {
  products: [
    {
      title: 'Фланцы SAE',
      type: 'Фланец',
      pdfUrl: '/pdf/fittingi-dlya-rvd.pdf',
      images: [
        'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
        'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
        'https://hf-cdn-prod.azureedge.net/medias/PF-DFS-ST-U-3000-6000-PSI-900x900-1753825338202.jpg?context=bWFzdGVyfGhvdGZvbGRlci1pbXBvcnR8Njc0ODA5fGltYWdlL2pwZWd8YUdReUwyaGpZUzh4TURReU9UY3hNekU0TmpnME5pOVFSbDlFUmxOZlUxUmZWVjh6TURBd1gxODJNREF3WDFCVFNWODVNREI0T1RBd1h6RTNOVE00TWpVek16Z3lNREl1YW5CbnxkMWZmOGNlZDlhNWMyZTA4OTg3MmQ5MzM0MDI5OTcyNzZhY2RmY2QxNzI4NTRhNDBmZTViMWE2NDc3ZDA5NWIz',
      ],
      parameters: [
        { label: 'Размер', value: 'SAE от 1/2" до 4"' },
        { label: 'Давление', value: 'до 600 бар' },
        { label: 'Материал', value: 'Сталь' },
        { label: 'Тип присоединения', value: 'Резьбовой, сварной' },
      ],
      description: [
        'Фланцы SAE предназначены для соединения гидравлических компонентов и систем высокого давления. Изготавливаются из высокопрочной стали с антикоррозийным покрытием.',
        'Применяются в промышленном оборудовании, строительной технике и гидравлических системах. Обеспечивают надежное и герметичное соединение при рабочих давлениях до 600 бар.',
      ],
      gridItem: {
        image: '/flanec_sae.jpg',
        title: 'Фланец SAE',
      },
    },
    {
      title: 'Уплотнительное кольцо',
      type: 'Уплотнение',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        'https://сантехник-а.рф/upload/iblock/c0e/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
        'https://ita-filter.ru/image/cache/catalog/product/F9079-29-1000x1000.jpg',
        'https://image.made-in-china.com/2f0j00MRwbpqkhMBon/SAE-J518-3000psi-6000psi-Female-Welding-Counter-Flange.webp',
      ],
      parameters: [
        { label: 'Материал', value: 'NBR, Viton, FKM' },
        { label: 'Температура', value: '-30°C до +200°C' },
        { label: 'Давление', value: 'до 420 бар' },
        { label: 'Стандарт', value: 'DIN, ISO, ГОСТ' },
      ],
      description: [
        'Уплотнительные кольца изготавливаются из качественной резины NBR, Viton или FKM для различных рабочих сред и температурных условий.',
        'Обеспечивают герметичность соединений в гидравлических системах, предотвращают утечки масла и других рабочих жидкостей.',
      ],
      gridItem: {
        image: '/uplotnitelnoe_kolce.jpeg',
        title: 'Уплотнительное кольцо',
      },
    },
    {
      title: 'Быстросъёмное соединение',
      type: 'Быстросъемник',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        'https://a.allegroimg.com/original/03d5e9/9f182c094bd199b2ed3869e951c4',
        'https://многотракторов.рф/upload/iblock/a69/rg26vy27thd3t8utpz296p9v36i7yys0.jpg',
        'https://media.rs-online.com/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/R7335659-01?pgw=1',
        'i.png',
      ],
      parameters: [
        { label: 'Давление', value: 'до 350 бар' },
        { label: 'Типоразмер', value: '1/4" - 2"' },
        { label: 'Материал', value: 'Сталь, нерж. сталь' },
        { label: 'Стандарт', value: 'DIN, ISO' },
      ],
      description: [
        'Быстросъёмные соединения позволяют быстро и безопасно подсоединять и отсоединять гидравлические линии без утечки жидкости.',
        'Идеальное решение для частого подключения/отключения оборудования. Оснащены системой блокировки для предотвращения случайного отсоединения.',
      ],
      gridItem: {
        image: '/bistrosemnoe_soedinenie.jpeg',
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Защитные оболочки',
      type: 'Оболочки',
      pdfUrl: '/pdf/zaglushki-perehodniki.pdf',
      images: [
        'https://www.vivtech.ru/upload/iblock/ba1/ndpxoi7aotw70sqbgjho1ml0fm6i056a/a17.jpg',
        'https://www.vivtech.ru/upload/iblock/e96/ov69907axb8a7aaikl7xu9602lrks0bp/a21.jpg',
        'https://avatars.mds.yandex.net/get-mpic/12261762/2a0000018c1aa38d6c5dc4a1d7d124390add/orig',
      ],
      parameters: [
        { label: 'Материал', value: 'Полиуретан, ПВХ' },
        { label: 'Диаметр', value: '6-32 мм' },
        { label: 'Температура', value: '-40°C до +90°C' },
        { label: 'Цвет', value: 'Черный, оранжевый' },
      ],
      description: [
        'Защитные оболочки предохраняют гидравлические шланги и кабели от механических повреждений, истирания и воздействия агрессивных сред.',
        'Изготавливаются из износостойких полимерных материалов, устойчивых к УФ-излучению и перепадам температур.',
      ],
      gridItem: {
        image: '/zashitnie_obolochi.jpeg',
        title: 'Защитные оболочки',
      },
    },
    {
      title: 'Переходник',
      type: 'Переходники',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: [
        'https://ae01.alicdn.com/kf/Sf615ba1d9ae7447d919df8189f636d22P.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkTEjHvpdcaB47RDPkymk8ZF8X2PTpH2uNg&s',
        'https://www.vod-dom.ru/wa-data/public/shop/products/54/56/15654/images/39119/39119.970.png',
      ],
      parameters: [
        { label: 'Типы резьб', value: 'Метрическая, дюймовая' },
        { label: 'Материал', value: 'Сталь, латунь' },
        { label: 'Давление', value: 'до 600 бар' },
        { label: 'Покрытие', value: 'Цинк, никель' },
      ],
      description: [
        'Переходники позволяют соединять гидравлические компоненты с различными типами резьб и стандартов соединений.',
        'Доступны в различных конфигурациях: прямые, угловые, тройники, с различными типами резьб (метрическая, дюймовая, трубная).',
      ],
      gridItem: {
        image: '/perehodnik.jpeg',
        title: 'Переходник',
      },
    },
    {
      title: 'Заглушка',
      type: 'Заглушки',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: [
        'https://gkf40.ru/image/cache/data/5M3_8915-800x800.jpg',
        'https://ae04.alicdn.com/kf/Ha770a52e4db54b56915af58c26a6e871y.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5omeSJ_ya_TxRQ02PTxtuRLbjl5-yc4QYQ&s',
      ],
      parameters: [
        { label: 'Тип резьбы', value: 'Метрическая, трубная' },
        { label: 'Материал', value: 'Сталь, пластик' },
        { label: 'Размер', value: 'М8 - М42' },
        { label: 'Температура', value: '-50°C до +150°C' },
      ],
      description: [
        'Заглушки предназначены для герметичного закрытия неиспользуемых отверстий в гидравлических системах и оборудовании.',
        'Защищают от попадания загрязнений и влаги, предотвращают утечки при хранении и транспортировке компонентов.',
      ],
      gridItem: {
        image: 'https://ufa.centermk.ru/upload/iblock/bd7/1kgjlizny9l14e0cc8bxaryjlst4yh3p.jpg',
        title: 'Заглушка',
      },
    },
  ],

  gridItems: function () {
    return this.products.map(product => product.gridItem)
  },

  defaultImages: ['https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg'],

  defaultDescription: [
    'Высококачественные комплектующие для РВД.',
    'Все компоненты соответствуют международным стандартам.',
  ],

  defaultParameters: [
    { label: 'Размер', value: 'Стандартный' },
    { label: 'Материал', value: 'Высокопрочный' },
    { label: 'Давление', value: 'до 300 бар' },
  ],

  defaultPdfUrl: '/pdf/komplektuyushchie-rvd-obshchiy.pdf',

  initialProductType: activeSection.value,
}

const blockData = {
  title: 'Надежные соединения для гидросистем',
  description: 'Качественные комплектующие обеспечивают герметичность и надежность соединений.',
  buttonText: 'Подобрать комплектующие',
  imageUrl: '/fluidex-dicsa-gallery-1-2.png',
  imageAlt: 'комплектующие для РВД',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа комплектующих РВД',
  description: 'Компания «ООО Абсолют Техно» предлагает качественные компоненты по конкурентным ценам.',
}

const blockDataText = {
  title: 'Продажа запчастей для рвд',
  description: `<p>Фитинги, ниппели, муфты, переходники, фланцы и другие компоненты.</p>
<p>Наши специалисты помогут подобрать аналоги и обеспечат консультацию.</p>`,
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

  <!-- <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  /> -->

  <PartnerBlock
    :blockDataText="blockDataText"
    imageUrl="/nasosi/block1.png"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />

  <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->

  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <Contact data-aos="fade-up" />
</template>
