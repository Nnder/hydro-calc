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
    'Профессиональная продажа гидравлических цилиндров в Нижнем Тагиле! Компания «ООО АбсолютТехно» предлагает качественные гидроцилиндры по конкурентоспособным ценам с доставкой по всей Свердловской области.',
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
  img: '/cylinder_01-1024x640.jpg',
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
      images: ['/silfons1.webp', '/silfons2.avif', '/silfons3.png'],
      parameters: [
        { label: 'Материал', value: 'Параарамидная / тентовая ткань' },
        { label: 'Рабочая температура', value: '-100°C до +250°C' },
        { label: 'Защита от', value: 'Механических повреждений и мелкодисперсной пыли' },
      ],
      description: [
        'Сильфоны для гидроцилиндров — это гибкие элементы, предназначенные для защиты подвижных деталей оборудования от загрязнений и внешнего воздействия.',
        'Они ограждают детали станков и промышленных роботов от попадания металлических стружек, окалины, пыли, агрессивных химических веществ, газов и паров, а также светового и теплового излучения.',
        'Сильфоны обеспечивают дополнительную защиту гидроцилиндров и других механизмов, снижая износ и продлевая срок службы рабочих компонентов. ',
        'Армированные стальными кольцами. Такие изделия имеют высокие прочностные показатели и защищают деталь не только от загрязнений, но и от механических повреждений.',
      ],
      gridItem: {
        image: '/silfons1.webp',
        title: 'Сильфоны',
      },
    },
    {
      title: 'Пальцы',
      type: 'Пальцы',
      images: ['/palec.jpg', '/palets2.jpg', '/palci3.jpg'],
      parameters: [
        { label: 'Материал', value: 'Высокоуглеродистая сталь' },
        { label: 'Диаметр', value: 'от 20 мм до 150 мм' },
        { label: 'Точность изготовления', value: '8 Квалитет' },
        { label: 'Твердость наружного слоя', value: 'от 42 до 56 HRC' },
      ],
      description: [
        'Пальцы для гидроцилиндров — это цилиндрический стержень, который используется для соединения гидроцилиндра с другими частями машины или оборудования. ',
        'Он обеспечивает шарнирное соединение, позволяющее гидроцилиндру перемещать или толкать другие компоненты. ',
        'Основные функции пальца гидроцилиндра:',
        '- Передача усилия от гидроцилиндра к другим элементам;',
        '- Обеспечение подвижного соединения;',
        '- Предотвращение износа соединительных элементов;',
        '- Гарантия стабильной работы гидравлической системы.',
      ],
      gridItem: {
        image: '/palec.jpg',
        title: 'Пальцы',
      },
    },
    {
      title: 'Втулки',
      type: 'Втулки',
      images: ['/vtulki1.jpeg', '/vtulki2.jpeg', '/vtulki3.avif'],
      parameters: [
        { label: 'Материал', value: 'Высокоуглеродистая сталь/бронза' },
        { label: 'Внутренний диаметр', value: 'от 20 мм до 150 мм' },
        { label: 'Точность изготовления', value: '8 Квалитет' },
      ],
      description: [
        'Втулка крепления гидроцилиндра — это деталь, которая обеспечивает надёжное крепление и передачу усилия от гидросистемы к рабочим органам машины.',
      ],
      gridItem: {
        image: '/vtulki1.jpeg',
        title: 'Втулки',
      },
    },
    {
      title: 'Дополнительная Гидролиния',
      type: 'Гидролинии',
      images: [
        'https://cdn.shopify.com/s/files/1/2298/8937/products/T_51654b51-71cc-4f1d-a822-03c3d5cb150d_1024x1024.jpg?v=1624387275',
        '/gidrolinii2.jpeg',
        '/gidrolinii3.jpeg',
      ],
      parameters: [
        { label: 'Материал', value: 'Черная/коррозионостойкая сталь' },
        { label: 'Диаметр подключения', value: 'до 2"' },
        { label: 'Рабочее давление', value: 'до 40 МПа' },
      ],
      description: [
        'Защитные оболочки предохраняют гидравлические шланги и кабели от механических повреждений, истирания и воздействия агрессивных сред.',
        'Изготавливаются из износостойких полимерных материалов, устойчивых к УФ-излучению и перепадам температур.',
      ],
      gridItem: {
        image:
          'https://cdn.shopify.com/s/files/1/2298/8937/products/T_51654b51-71cc-4f1d-a822-03c3d5cb150d_1024x1024.jpg?v=1624387275',
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
