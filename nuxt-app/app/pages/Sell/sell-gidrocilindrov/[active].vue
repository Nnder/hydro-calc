<script setup>
import Contact from '~/components/Page/Contact.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'
import Calculator from '~/components/Calculator/Calculator.vue'

definePageMeta({
  path: '/sell/sell-gidrocilindrov/:active?',
})

useHead({
  title: 'Продажа гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Гидроцилиндры для спецтехники и промышленного оборудования в Нижнем Тагиле',
    },
  ],
})

const route = useRoute()
const activeSection = ref(route.params.active || 'Сильфоны')

const blockData = {
  title: 'Ремонт гидроцилиндров для спецтехники и промышленного производства',
  description:
    'Компания ООО АбсолютТехно выполняет ремонт гидроцилиндров диаметром до 300 мм и ходом поршня до 2200 мм с гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#fff',
  scale: 0.5,
  loadFunc: model => {
    model.rotation.x = Math.PI / 2.2
    model.rotation.y = Math.PI
  },
  img: {
    src: '/3d/preload/hydrocilinder.png',
    alt: 'Гидроцилиндр 3д предзагрузка',
  },
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Подбор и продажа гидроцилиндров',
  description:
    'Профессиональная продажа гидравлических цилиндров в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные гидроцилиндры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа гидлроцилиндров в Нижнем Тагиле',
  description: `<p class="text-lg">
         Наши специалисты помогут подобрать оптимальный гидроцилиндр для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидроцилиндрами!
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`,
}

const slider = {
  img: 'https://static.tildacdn.com/tild6637-3562-4264-b431-613535373630/cylinder_01-1024x640.jpg',
  tag: 'Профессионально',
  title: 'Продажа гидроцилиндров',
  text: 'Широкий выбор гидравлических цилиндров',
  features: ['Подбор по техпараметрам', 'Гарантия качества', 'Техническая поддержка'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Изготовление под заказ',
}

const bannerProps = {
  products: [
    {
      title: 'Защитные сильфоны (гофры)',
      type: 'Сильфоны',
      images: [
        'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
        'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
        'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
      ],
      parameters: [
        { label: 'Материал', value: 'Параарамидная / тентовая ткань' },
        { label: 'Рабочая температура', value: '-100°C до +250°C' },
        { label: 'Защита от', value: 'Механических повреждений и мелкодисперсной пыли' },
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
      title: 'Пальцы',
      type: 'Пальцы',
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
        title: 'Уплотнительное кольцо',
      },
    },
    {
      title: 'Втулки',
      type: 'Втулки',
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
        title: 'Быстросъёмное соединение',
      },
    },
    {
      title: 'Дополнительная Гидролиния',
      type: 'Гидролинии',
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
      title: 'ГСМ',
      type: 'ГСМ',
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
        title: 'Защитные оболочки2',
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
  <PartnerBlock
    :blockDataText="blockDataText"
    imageUrl="https://image.made-in-china.com/2f0j00fcMqmYbGCDko/Bobcat-763-T300-610-Tilt-Cylinder.webp"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  <Calculator data-aos="fade-up" />
  <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
