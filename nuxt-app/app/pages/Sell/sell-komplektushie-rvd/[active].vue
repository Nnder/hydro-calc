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
        '/img_omt_flange.jpg',
        '/Фланцы_SAE.jpg',
        '/PF-DFS-ST-U-3000-6000-PSI-900x900-1753825338202.jpg',
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
        '/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
        '/F9079-29-1000x1000.jpg',
        '/SAE-J518-3000psi-6000psi-Female-Welding-Counter-Flange.jpg',
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
        '/9f182c094bd199b2ed3869e951c4.jpeg',
        '/rg26vy27thd3t8utpz296p9v36i7yys0.jpg',
        '/R7335659-01.jpeg',
        '/i.png',
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
        image: '/9f182c094bd199b2ed3869e951c4.jpeg',
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Защитные оболочки',
      type: 'Оболочки',
      pdfUrl: '/pdf/zaglushki-perehodniki.pdf',
      images: [
        '/H92e96c60e0594cf381a489901dbbe978U.jpg',
        '/a1frR3A4Jyx5R3J1CsXjOUb_c5E-1920.jpg',
        '/asdasd.png',
      ],
      parameters: [
        { label: 'Материал', value: 'Полиуретан, ПВХ, Силикон-Стеклоткань' },
        { label: 'Диаметр', value: '6-52 мм' },
        { label: 'Температура', value: '-40°C до +260°C' },
      ],
      description: [
        'Защитные оболочки предохраняют гидравлические шланги и кабели от механических повреждений, истирания и воздействия агрессивных сред.',
        'Изготавливаются из износостойких полимерных материалов, устойчивых к УФ-излучению и перепадам температур.',
      ],
      gridItem: {
        image: '/asdasd.png',
        title: 'Защитные оболочки',
      },
    },
    {
      title: 'Переходник',
      type: 'Переходники',
      pdfUrl: '/pdf/flantsy-gidravlicheskie.pdf',
      images: [
        '/trubnaya-rezba-37-1.jpg',
        '/3634_image_big.jpeg',
        '/PF-XAH-900x900-1754062833559.jpg',
      ],
      parameters: [
        { label: 'Типы резьб', value: 'Метрическая, дюймовая' },
        { label: 'Материал', value: 'Сталь, нержавеющая сталь' },
        { label: 'Давление', value: 'до 630 бар' },
        { label: 'Покрытие', value: 'Гальваническое покрытие' },
      ],
      description: [
        'Переходники позволяют соединять гидравлические компоненты с различными типами резьб и стандартов соединений.',
        'Доступны в различных конфигурациях: прямые, угловые, тройники, с различными типами резьб (метрическая, дюймовая).',
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
        '/PF-XVHLL-XVHL-XVHS-900x900-1754084885996.jpg',
        '/PF-VHR-90-ED-900x900-1754084222814.jpg',
        '/PF-BZL-VA-BZS-VA-900x900-1753555440819.jpg',
      ],
      parameters: [
        { label: 'Типы резьб', value: 'Метрическая, дюймовая' },
        { label: 'Материал', value: 'Сталь, нержавеющая сталь' },
        { label: 'Давление', value: 'до 630 бар' },
        { label: 'Покрытие', value: 'Гальваническое покрытие' },
      ],
      description: [
        'Заглушки предназначены для герметичного закрытия неиспользуемых отверстий в гидравлических системах и оборудовании.',
        'Защищают от попадания загрязнений и влаги, предотвращают утечки при хранении и транспортировке компонентов.',
      ],
      gridItem: {
        image:
          '/PF-XVHLL-XVHL-XVHS-900x900-1754084885996.jpg',
        title: 'Заглушка',
      },
    },
  ],

  gridItems: function () {
    return this.products.map(product => product.gridItem)
  },

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

const blockDataText = {
  title: 'Продажа запчастей для рвд',
  description: `<p>Фитинги, ниппели, муфты, переходники, фланцы и другие компоненты.</p>
<p>Наши специалисты помогут подобрать аналоги и обеспечат консультацию.</p>`,
}

const slider = {
  videoSrc: '/videos/7910487231128.mp4',
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
    imageUrl="/sa2-no-bg.png"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />

  <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->

  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <Contact data-aos="fade-up" />
</template>
