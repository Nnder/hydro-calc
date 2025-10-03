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
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'

definePageMeta({
  path: '/sell/sell-filtrov',
})

useHead({
  title: 'Продажа фильтров и фильтроэлементов',
  meta: [
    {
      name: 'description',
      content: 'Фильтры и фильтроэлементы для гидравлических систем в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных фильтров и фильтроэлементов в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент фильтрующих элементов для любой гидравлической системы.
        </p>
        <p class="text-lg">
          Все наши фильтры проходят строгий контроль качества и обеспечивают эффективную очистку рабочих жидкостей. 
        </p>`

const imageUrl = 'images/uplotnenie/block.jpeg'
const title = 'Продажа фильтров и фильтроэлементов в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Всасывающие фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Напорные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Сливные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Воздушные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры тонкой очистки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры грубой очистки',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Магнитные фильтры',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтроэлементы сменные',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры-грязеуловители',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Фильтры для станков',
  },
])

const blockData = {
  title: 'Чистота гидравлических систем - залог долговечности',
  description:
    'Качественные фильтры и фильтроэлементы обеспечивают надежную защиту вашего оборудования от загрязнений и продлевают срок службы',
  buttonText: 'Подобрать фильтр',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические фильтры',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа фильтров',
  description:
    'Профессиональная продажа фильтров и фильтроэлементов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные фильтры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа фильтров в нижнем тагиле',
  description: `<p>Широкий ассортимент фильтров и фильтроэлементов для очистки гидравлических жидкостей: всасывающие, напорные, сливные, воздушные фильтры различных степеней очистки. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные фильтры для вашей системы, рассчитают необходимую тонкость фильтрации и предоставят профессиональную консультацию по обслуживанию. Обеспечьте чистоту и надежность вашего оборудования с нашими фильтрами!</p>`,
}

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Продажа фильтров',
  text: 'Широкий выбор фильтрующих элементов',
  features: ['Подбор по степени очистки', 'Гарантия эффективности', 'Техническая поддержка'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Регулярное обслуживание',
}

const bannerProps = {
  products: [
    {
      title: 'Фланцы SAE',
      type: 'flange',
      pdfUrl: '/pdf/fittingi-dlya-rvd.pdf',
      images: [
        'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
        'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
        'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
      ],
      parameters: [
        { label: 'Размер', value: 'SAE 1/2"' },
        { label: 'Давление', value: 'до 600 бар' },
        { label: 'Материал', value: 'Сталь 45' },
        { label: 'Температура', value: '-40°C до +120°C' },
      ],
      description: [
        'Фланцы SAE предназначены для соединения гидравлических компонентов и систем высокого давления. Изготавливаются из высокопрочной стали с антикоррозийным покрытием.',
        'Применяются в промышленном оборудовании, строительной технике и гидравлических системах. Обеспечивают надежное и герметичное соединение при рабочих давлениях до 600 бар.',
      ],
      gridItem: { 
        image: '/flanec_sae.jpg', 
        title: 'Фланец SAE'
      }
    },
    {
      title: 'Уплотнительное кольцо',
      type: 'seal',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        'https://сантехник-а.рф/upload/iblock/c0e/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
        'https://ita-filter.ru/image/cache/catalog/product/F9079-29-1000x1000.jpg',
        'https://lazer-technology.ru/images/detailed/2/full_Уплотнительное_кольцо_32.2×24×3.6×2.7__1_.jpg',
      ],
      parameters: [
        { label: 'Материал', value: 'NBR, Viton, EPDM' },
        { label: 'Температура', value: '-30°C до +200°C' },
        { label: 'Давление', value: 'до 700 бар' },
        { label: 'Стандарт', value: 'DIN, ISO' },
      ],
      description: [
        'Уплотнительные кольца изготавливаются из качественной резины NBR, Viton или EPDM для различных рабочих сред и температурных условий.',
        'Обеспечивают герметичность соединений в гидравлических системах, предотвращают утечки масла и других рабочих жидкостей.',
      ],
      gridItem: { 
        image: '/uplotnitelnoe_kolce.jpeg', 
        title: 'Уплотнительное кольцо'
      }
    },
    {
      title: 'Быстросъёмное соединение',
      type: 'quick_connect',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        'https://oberon-weld.ru/upload/iblock/2d2/grgzqxh2p4hxvl69f04ynlzh9ce0u246/FA3047.png',
        'https://barshydraulic.ru/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/S/F/SF10-40.jpg',
        'https://st22.stpulscen.ru/images/product/445/686/695_original.jpg',
      ],
      parameters: [
        { label: 'Тип', value: 'ISO 16028' },
        { label: 'Давление', value: 'до 350 бар' },
        { label: 'Размер', value: '1/4" - 1"' },
        { label: 'Материал', value: 'Сталь, нерж. сталь' },
      ],
      description: [
        'Быстросъёмные соединения позволяют быстро и безопасно подсоединять и отсоединять гидравлические линии без утечки жидкости.',
        'Идеальное решение для частого подключения/отключения оборудования. Оснащены системой блокировки для предотвращения случайного отсоединения.',
      ],
      gridItem: { 
        image: '/bistrosemnoe_soedinenie.jpeg', 
        title: 'Быстросъёмное соединение'
      }
    },
    {
      title: 'Защитные оболочки',
      type: 'protection',
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
        title: 'Защитные оболочки'
      }
    },
    {
      title: 'Переходник',
      type: 'adapter',
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
        title: 'Переходник'
      }
    },
    {
      title: 'Заглушка',
      type: 'plug',
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
        title: 'Заглушка'
      }
    }
  ],
  
  gridItems: function() {
    return this.products.map(product => product.gridItem)
  },
  
  defaultImages: [
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  ],
  
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
  
  initialProductType: 'flange'
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
  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->
  <PartnerBlock :blockDataText="blockDataText" imageUrl="https://fim.by/images/lp-photo/gidravlika.jpg" variant="image-right" data-aos="fade-up" data-aos-delay="200"/>
  <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>
