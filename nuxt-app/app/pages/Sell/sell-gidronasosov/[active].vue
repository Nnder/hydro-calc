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
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'

definePageMeta({
  path: '/sell/sell-gidronasosov/:active?',
})

useHead({
  title: 'Продажа гидравлических насосов',
  meta: [
    {
      name: 'description',
      content: 'Гидронасосы для спецтехники и промышленного оборудования в Нижнем Тагиле',
    },
  ],
})

const route = useRoute()
const activeSection = ref(route.params.active || 'Аксиально-поршневые')

const blockData = {
  title: 'Произведем ремонт гидронасосов или подберем аналог',
  description:
    'Ремонт гидронасосов с оригинальными запчастями, произведем испытания на специализированном стенде с гарантией от 6 до 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидронасос',
  type: '3d',
  modelSrc: '/3d/r902411613.glb',
  modelBgColor: '#fff',
  scale: 0.4,
  img: {
    src: '/3d/preload/hydronanos.png',
    alt: 'Гидронасос 3д предзагрузка',
  },
}

const blockDataText = {
  title: 'Продажа гидронасосов в Нижнем Тагиле',
  description: `<p class="text-lg">
         Наши специалисты помогут подобрать оптимальный гидронасос для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидронасосами!
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`,
}

const slider = {
  img: '/nasosi/block2.jpg',
  tag: 'Профессионально',
  title: 'Продажа гидронасосов',
  text: 'Широкий выбор гидравлических насосов',
  features: ['Подбор по параметрам', 'Гарантия 12 месяцев', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка по области',
}

const bannerProps = {
  products: [
    {
      title: 'Аксиально-поршневые насосы',
      type: 'Аксиально-поршневые',
      pdfUrl: '/pdf/fittingi-dlya-rvd.pdf',
      images: [
        'https://rexroth-parts.com/66789-large_default/a-a4vbo-450-hs5-30r-lrh25k99n-s1621.jpg',
        'https://specgidravlika.ru/wp-content/uploads/2023/06/gidronasos_A7V.jpg',
        'https://www.worldbid.com/oc-content/uploads/3120/117321.jpg',
      ],
      parameters: [
        { label: 'Материал корпуса', value: 'Чугун' },
        { label: 'Рабочее давление', value: 'до 350 бар' },
        { label: 'Расходная характеристика', value: 'от 27 до 750 л/мин' },
        { label: 'Рабочие обороты', value: 'от 1500 до 4200 об/мин' },
      ],
      description: [
        'Аксиально-поршневой насос — это  гидравлическое устройство, в котором механическая энергия преобразуется в энергию движущейся жидкости посредством работы нескольких поршней, расположенных по кругу в блоке цилиндров. ',
        'Он отличается эффективностью, компактностью и способностью работать под высоким давлением (до 350 бар и выше), что делает его незаменимым в гидравлических системах строительной, сельскохозяйственной и промышленной техники.',
      ],
      gridItem: {
        image: 'https://rexroth-parts.com/66789-large_default/a-a4vbo-450-hs5-30r-lrh25k99n-s1621.jpg',
        title: 'Аксиально-поршневые насосы',
      },
    },

    {
      title: 'Радиально-поршневые насосы',
      type: 'Радиально-поршневые',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        'https://surasnab.ru/wp-content/uploads/2018/06/radialno-porshnevoy.jpg',
        'https://gline.pro/image/catalog/products/PR4-3x.jpg',
        'https://image.made-in-china.com/2f0j00BywVMOQKiFgv/Authentic-Moog-Variable-Displacement-Pump-0514-900-001-0514-700-001-0514-600-00.webp',
      ],
      parameters: [
        { label: 'Материал корпуса', value: 'Чугун' },
        { label: 'Рабочее давление', value: 'до 700 бар' },
        { label: 'Расходная характеристика', value: 'от 4 до 25 л/мин' },
        { label: 'Рабочие обороты', value: 'до 1500 об/мин' },
      ],
      description: [
        'Радиально-плунжерные насосы — это один из видов объёмных роторных гидромашин, в которых рабочие цилиндры с размещёнными в них поршнями (плунжерами) расположены радиально к оси вала и вращаются во время работы.',
        'Принцип работы: ротор вращается в статоре (корпусе) вместе с поршнями, которые скользят по корпусу, плотно прижимаясь к нему за счёт пружин. При вращении вала каждый поршень совершает возвратно-поступательное движение.',
        'Применение: радиально-плунжерные насосы используют в гидроприводах прессов, прокатных станах, зажимных устройствах станков и других системах, где требуется обеспечить высокое давление.',
      ],
      gridItem: {
        image: 'https://surasnab.ru/wp-content/uploads/2018/06/radialno-porshnevoy.jpg',
        title: 'Радиально-поршневые насосы',
      },
    },
    {
      title: 'Шестеренные насосы',
      type: 'Шестеренные',
      pdfUrl: '/pdf/zaglushki-perehodniki.pdf',
      images: [
        'http://sibgidromash.com/upload/iblock/52b/52bdf87a9f3107635529f65d67fbe02e.png',
        'https://olnisa.ru/olnisa/images/img-18/28032025-15-1/rexroth-f228-01.jpg',
        'https://fgrus.ru/images/Bondioli%20&%20Pavesi111.webp',
        'https://a.allegroimg.com/s1024/0c190e/a327cda94ed88752ddc447b1fe28',
      ],
      parameters: [
        { label: 'Материал корпуса', value: 'Чугун или алюминий' },
        { label: 'Рабочее давление', value: 'от 135 до 315 бар' },
        { label: 'Расходная характеристика', value: 'от 2 до 360 л/мин' },
        { label: 'Рабочие обороты', value: 'от 1500 до 4000 об/мин' },
      ],
      description: [
        'Шестеренные насосы — это объёмные гидромашины, в которых перекачивание жидкости осуществляется за счёт шестерёнок.',
        'Их работа основана на принципе вытеснения жидкости зубьями шестерён, что обеспечивает стабильную подачу даже при высоком давлении. ',
        'В зависимости от конструкции шестерён выделяют два основных типа насосов:',
        '- Насосы с внешним зацеплением. Шестерни расположены рядом и вращаются в противоположных направлениях. Применяются в гидравлических системах, смазочных установках.',
        '- Насосы с внутренним зацеплением. Одна шестерня размещена внутри другой, что уменьшает габариты насоса. Обеспечивают более плавную подачу жидкости. Используются в топливных системах, химической промышленности.',
      ],
      gridItem: {
        image: 'http://sibgidromash.com/upload/iblock/52b/52bdf87a9f3107635529f65d67fbe02e.png',
        title: 'Шестеренные насосы',
      },
    },
    {
      title: 'Пластинчатые насосы',
      type: 'Пластинчатые',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        'https://ommatech.ru/upload/resize_cache/iblock/538/1200_1200_140cd750bba9870f18aada2478b24840a/538d141fbef4c65e97eee1e22cca083e.jpg',
        'https://img.directindustry.es/images_di/photo-g/11598-15029301.jpg',
        'https://hidrosan.net/upload/vq-double-vane-jpg-9459.jpg',
      ],
      parameters: [
        { label: 'Материал корпуса', value: 'Чугун' },
        { label: 'Рабочее давление', value: 'от 175 до 210 бар' },
        { label: 'Расходная характеристика', value: 'от 26 до 285 л/мин' },
        { label: 'Рабочие обороты', value: 'до 1500 об/мин' },
      ],
      description: [
        'Пластинчатый насос — это гидромашина объёмного типа действия, в которой вытеснение рабочей жидкости происходит за счёт изменения объёма рабочей камеры.',
        'Основными элементами насоса являются корпус, ротор и рабочие пластины (шиберы). При вращении ротора пластины под действием центробежной силы перемещаются в проточках и скользят по статору (корпусу) насоса, образуя герметичные полости.',
        'Пластинчатые насосы используются для перекачки чистых сред с показателями малой и средней вязкости при небольшом давлении. Также они могут работать со средами критически низкой вязкости, к которым относятся всевозможные растворители и спирты.',
      ],
      gridItem: {
        image:
          'https://ommatech.ru/upload/resize_cache/iblock/538/1200_1200_140cd750bba9870f18aada2478b24840a/538d141fbef4c65e97eee1e22cca083e.jpg',
        title: 'Пластинчатые насосы',
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
    imageUrl="/nasosi/block1.png"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />
  <NewProductBanner :bannerProps="bannerProps" title="Варианты насосов" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
