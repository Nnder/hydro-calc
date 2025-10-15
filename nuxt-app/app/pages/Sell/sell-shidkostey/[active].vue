<script setup>
import Contact from '~/components/Page/Contact.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'
import RepairPartsSelectorSpecial from '~/components/SpecialPages/RepairPartsSelectorSpecial.vue'

definePageMeta({
  path: '/sell/sell-shidkostey/:active?',
})

useHead({
  title: 'Продажа ГСМ и технических жидкостей',
  meta: [
    {
      name: 'description',
      content: 'Горюче-смазочные материалы и технические жидкости для гидравлики в Нижнем Тагиле',
    },
  ],
})

const route = useRoute()
const { clearData } = useCalculatorSelector()
const activeSection = ref(route.params.active || 'Hydraulic')

const blockData = {
  title: 'Качественные жидкости для надежной работы техники',
  description:
    'Сертифицированные ГСМ и технические жидкости обеспечивают оптимальную работу вашего оборудования и продлевают его срок службы',
  buttonText: 'Подобрать жидкость',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'ГСМ и технические жидкости',
}

const blockDataText = {
  imageurl:'https://ecol.eu/wp-content/uploads/2023/02/badania-olejow-smarow-przemyslowych.webp',
  title: 'Продажа ГСМ',
  description: `<p>Широкий ассортимент горюче-смазочных материалов и технических жидкостей для различных отраслей промышленности: гидравлические масла, моторные масла, трансмиссионные жидкости, пластичные смазки, специальные жидкости. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные жидкости для вашего оборудования, предоставят техническую документацию и профессиональную консультацию по применению. Обеспечьте надежную работу вашей техники с нашими ГСМ и техническими жидкостями!</p>`,
}

const slider = {
  img: 'https://grizly.club/uploads/posts/2023-02/1675382192_grizly-club-p-zamena-masla-klipart-31.jpg',
  tag: 'Профессионально',
  title: 'Продажа ГСМ и жидкостей',
  text: 'Широкий выбор технических жидкостей',
  features: ['Подбор по спецификациям', 'Сертификаты качества', 'Техническое консультирование'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка и хранение',
}

const sectionsData = {
  Hydraulic: {
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    steps: [
      {
        title: 'Доставка и приемка',
        description:
          'Мы организуем доставку ковша на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
      },
      {
        title: 'Дефектовка',
        description:
          'Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя',
      },
      {
        title: 'Согласование',
        description:
          'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта',
      },
      {
        title: 'Закупка материалов',
        description: 'Приобретаем сертифицированные запчасти и детали для ремонта ковшей',
      },
      {
        title: 'Сборка и сварка',
        description:
          'Профессиональный ремонт ковша с использованием комплектующих, восстановление отверстий под пальцы, а также усиление ковша',
      },
      {
        title: 'Отгрузка',
        description: 'Упаковываем и доставляем отремонтированный ковш с гарантией качества',
      },
    ],
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
      buttonText: 'Заказать ремонт гидромолота',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      type: '3d',
      modelSrc: '/3d/Сборка ковша.glb',
      modelBgColor: '#2563EB',
      scale: 0.3,
      loadFunc: model => {
        model.rotation.x = Math.PI / 2
        model.rotation.y = Math.PI
      },
    },
    parameters: [
      { value: 'до 3 м³', description: 'Объем восстанавливаемых ковшей' },
      { value: 'Hardox 450-500', description: 'Работа с износостойкими сталями' },
      { value: '48 часов', description: 'Средний срок ремонта' },
      { value: 'от 6 до 12 месяцев', description: 'Гарантия на выполненные работы' },
    ],
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  hydrovrashateli: {
    globalTable: {
      name: 'Здравствуйте необходимый перечень работ по гидровращателям',
      selectorData: true,
      title: 'Выберите детали для ремонта гидровращателей',
      subtitle: 'Отметьте необходимые компоненты гидровращателя',
      parts: [
        {
          name: 'Диагностика (дефектовка)',
          selected: false,
          show: false,
          description:
            'Полная диагностика гидровращателя с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'Визуальный осмотр на предмет повреждений',
            'Разборка гидровращателя, осмотр всех комплектующих на наличие поверхностных дефектов',
            'Диагностика редуктарной части, выявление изношенных деталей',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Роторная группа',
          selected: false,
          show: false,
          description: 'Ремонт или замена гидромотора и планетарного механизма',
          features: [
            'Притирка рабочих поверхностей блока и распределителя или замена на оригинальные запчасти',
            'Подбор и замена уплотнений',
          ],
          highlight: { top: '20%', left: '40%', width: '20%', height: '60%' },
          icon: 'mdi:rotate-3d',
        },
        {
          name: 'Ремонт редуктора',
          selected: false,
          show: false,
          description: 'Изготовление и восстановление деталей редуктора',
          features: ['Подбор и замена уплотнений', 'Замена деталей редуктора, сателлитов и шестерней'],
          highlight: { top: '25%', left: '35%', width: '30%', height: '50%' },
          color: 'bg-green-400/50 border-green-400',
          icon: 'mdi:vector-arrange-above',
        },
        {
          name: 'Подшипниковые узлы',
          selected: false,
          show: false,
          description: 'Замена подшипников и восстановление посадочных мест',
          features: ['Подбор и замена подшипников', 'Восстановление посадочных мест подшипников'],
          highlight: { top: '15%', left: '30%', width: '40%', height: '10%' },
          color: 'bg-purple-400/50 border-purple-400',
          icon: 'mdi:cog',
        },
      ],
      mainImage: '/calculator/гидровращатель.png',
      imageAlt: 'Профессиональный ремонт гидровращателей',
      imageId: 'hydrovrashateliImage',
      highlightMode: 'single',
    },
    steps: [
      {
        title: 'Разборка и мойка',
        description: 'Аккуратная разборка гидровращателя с последующей тщательной мойкой всех деталей',
      },
      {
        title: 'Дефектовка',
        description: 'Тщательная проверка всех компонентов: гидромотора, подшипников и планетарного механизма',
      },
      {
        title: 'Восстановление деталей',
        description: 'Притирка детали роторной группы гидромотора или подбора аналогов изношенных деталей',
      },
      {
        title: 'Замена уплотнений',
        description: 'Установка новых сальников и уплотнительных элементов от проверенных производителей',
      },
      {
        title: 'Сборка и регулировка',
        description: 'Сборка гидровращателя и проведение гидравлических испытаний под рабочим давлением',
      },
      {
        title: 'Отгрузка',
        description: 'Упаковка и доставка отремонтированного гидровращателя с гарантией',
      },
    ],
    title: {
      gtitle: 'Этапы ремонта Гидровращателей',
      subtitle: 'Полный цикл восстановления гидровращателей',
    },
    infoBlock: {
      title: 'Ремонт гидровращателей',
      description:
        'Восстановление гидромоторов, редукторов и корпусных деталей гидромолотов. Профессиональный подход к ремонту вращательного оборудования.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление роторной группы гидромотора' },
        { icon: 'mdi:vector-arrange-above', text: 'Ремонт редукторов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Заказать ремонт гидровращателя',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидровщатале',
      type: '3d',
      modelSrc: '/3d/ТС135.000.00.000_(fn-1).glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
        model.rotation.y = Math.PI
      },
      scale: 0.5,
    },
    parameters: [
      { value: 'до 12 kN·м', description: 'Крутящий момент' },
      { value: 'до 400 бар', description: 'Рабочее давление' },
      { value: 'до 220 л/мин', description: 'Максимальный поток масла' },
    ],
    header: 'Технические характеристики ремонта гидровращателей',
    partnerBlock: {
      imageurl: '/auger-torque-augers-extensions.png',
      title: 'Преимущества нашего ремонта гидровращателей',
      description: `<p>Профессиональное восстановление гидровращателей для экскаваторов и другой спецтехники. Работаем с гидровращателями любых типов и производителей.</p>
<p>Используем оригинальные запчасти и качественные аналоги, что позволяет обеспечить долговечность ремонта при оптимальной стоимости.</p>`,
      benefits: [
        'Полное восстановление рабочих характеристик',
        'Использование качественных уплотнений',
        'Гидравлические испытания',
        'Гарантия на все виды работ',
      ],
    },
    position: 'right',
  },
  hydromoloty: {
    globalTable: {
      name: 'Здравствуйте необходимый перечень работ по гидромолотам',
      selectorData: true,
      title: 'Выберите детали для ремонта гидромолотов',
      subtitle: 'Отметьте необходимые компоненты гидромолота',
      parts: [
        {
          name: 'Диагностика (дефектовка)',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'Визуальный осмотр на предмет повреждений',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Промер деталей ударного механизма гидромолота с выявлением степени износа',
            'Ревизия распределителя и элементов пневматической части',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ударный механизм',
          selected: false,
          show: false,
          description: 'Ремонт или замена ударного поршня и цилиндра',
          features: [
            'Восстановление геометрии ударного поршня',
            'Подбор и замена уплотнений ударного механизма',
            'Ремонт рабочих поверхностей',
          ],
          highlight: { top: '30%', left: '40%', width: '30%', height: '40%' },
          icon: 'mdi:hammer',
        },
        {
          name: 'Распределительный узел',
          selected: false,
          show: false,
          description: 'Восстановление распределительного механизма',
          features: ['Притирка золотниковой группы', 'Замена изношенных деталей'],
          highlight: { top: '20%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-yellow-400/50 border-yellow-400',
          icon: 'mdi:vector-arrange-above',
        },
        {
          name: 'Корпус и крепления',
          selected: false,
          show: false,
          description: 'Замена подшипников и восстановление посадочных мест',
          features: [
            'Ремонт корпуса гидромолота',
            'Восстановление резьбовых соединений',
            'Востановление отверстий под пальцы',
            'Усиление крепежных элементов',
          ],
          highlight: { top: '60%', left: '45%', width: '20%', height: '15%' },
          color: 'bg-red-400/50 border-red-400',
          icon: 'mdi:wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт гидромолотов',
      imageId: 'hydromolotyImage',
      highlightMode: 'single',
    },
    steps: [
      {
        title: 'Предварительная диагностика',
        description: 'Внешний осмотр и проверка работоспособности гидромолота',
      },
      {
        title: 'Полная разборка',
        description: 'Аккуратная разборка всех узлов и механизмов гидромолота',
      },
      {
        title: 'Детальная дефектовка',
        description: 'Тщательная проверка ударного механизма, распределителя, корпуса и креплений',
      },
      {
        title: 'Восстановление деталей',
        description: 'Ремонт или замена изношенных компонентов, шлифовка рабочих поверхностей',
      },
      {
        title: 'Сборка и регулировка',
        description: 'Точная сборка всех узлов с соблюдением заводских допусков и регулировок',
      },
      {
        title: 'Стендовые испытания',
        description: 'Испытания гидромолота давлением Pраб * 1,25',
      },
    ],
    title: {
      gtitle: 'Этапы ремонта Гидромолотов',
      subtitle: 'Полный цикл восстановления гидромолотов',
    },
    infoBlock: {
      title: 'Ремонт гидромолотов',
      description:
        'Восстановление ударных механизмов и корпусных деталей гидромолотов. Профессиональный подход к ремонту ударного оборудования.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление ударно-поршневой группы' },
        { icon: 'mdi:vector-arrange-above', text: 'Ревизия распределительных узлов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Заказать ремонт гидромолота',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      type: '3d',
      modelSrc: '/3d/гидромолот.glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
      },
      scale: 0.45,
    },
    parameters: [
      { value: 'до 5000 Дж', description: 'Энергия удара после восстановления' },
      { value: 'до 1200 уд/мин', description: 'Частота ударов' },
      { value: 'до 150 бар', description: 'Максимальное рабочее давление' },
    ],
    header: 'Технические характеристики ремонта гидромолотов',
    partnerBlock: {
      imageurl: 'https://imgp24.ru/i/u_items/16179909328851.jpg',
      title: 'Качество ремонта гидромолотов',
      description: `<p>Специализированный ремонт гидромолотов для разрушения бетона, скальных пород и других материалов. Используем современное диагностическое и ремонтное оборудование.</p>
<p>Наш подход включает не только замену изношенных деталей, но и полное восстановление рабочих параметров гидромолота с проведением стендовых испытаний.</p>`,
      benefits: [
        'Восстановление заводских характеристик',
        'Использование оригинальных запчастей',
        'Гидровлические испытания',
        'Техническая поддержка после ремонта',
      ],
    },
    position: 'right',
  },
}

const setActiveSection = section => {
  activeSection.value = section
}

const currentGlobalTable = computed(() => {
  clearData()
  return sectionsData[activeSection.value].globalTable
})
const currentSteps = computed(() => sectionsData[activeSection.value].steps)
const currentTitle = computed(() => sectionsData[activeSection.value].title)
const currentInfoBlock = computed(() => sectionsData[activeSection.value].infoBlock)
const currentParameters = computed(() => sectionsData[activeSection.value].parameters)
const currentHeader = computed(() => sectionsData[activeSection.value].header)
const currentPartnerBlock = computed(() => sectionsData[activeSection.value].partnerBlock)
const currentPosition = computed(() => sectionsData[activeSection.value].position)

// const bannerProps = {
//   products: [
//     {
//       title: 'Фланцы SAE',
//       type: 'flange',
//       pdfUrl: '/pdf/fittingi-dlya-rvd.pdf',
//       images: [
//         'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
//         'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
//         'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
//       ],
//       parameters: [
//         { label: 'Размер', value: 'SAE 1/2"' },
//         { label: 'Давление', value: 'до 600 бар' },
//         { label: 'Материал', value: 'Сталь 45' },
//         { label: 'Температура', value: '-40°C до +120°C' },
//       ],
//       description: [
//         'Фланцы SAE предназначены для соединения гидравлических компонентов и систем высокого давления. Изготавливаются из высокопрочной стали с антикоррозийным покрытием.',
//         'Применяются в промышленном оборудовании, строительной технике и гидравлических системах. Обеспечивают надежное и герметичное соединение при рабочих давлениях до 600 бар.',
//       ],
//       gridItem: {
//         image: '/flanec_sae.jpg',
//         title: 'Фланец SAE',
//       },
//     },

//   ],

//   gridItems: function () {
//     return this.products.map(product => product.gridItem)
//   },

//   defaultImages: ['https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg'],

//   defaultDescription: [
//     'Высококачественные комплектующие для РВД.',
//     'Все компоненты соответствуют международным стандартам.',
//   ],

//   defaultParameters: [
//     { label: 'Размер', value: 'Стандартный' },
//     { label: 'Материал', value: 'Высокопрочный' },
//     { label: 'Давление', value: 'до 300 бар' },
//   ],

//   defaultPdfUrl: '/pdf/komplektuyushchie-rvd-obshchiy.pdf',

//   initialProductType: activeSection.value,
// }
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

  <!-- <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" /> -->
   <h2 class="text-3xl font-bold text-center">Выбирите техническую жидкость</h2>
   <div class="max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto text-center">
      <button
        class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'Hydraulic' }"
        @click="setActiveSection('Hydraulic')"
      >
        Гидровлические
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydrovrashateli' }"
        @click="setActiveSection('hydrovrashateli')"
      >
        Моторные
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Трансмиссионные 
      </button>
       <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Гидро-трансмиссионные 
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Компрессорное
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Смазки
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Антифриз
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        СОЖ
      </button>
    </div>
  </div>
  <RepairPartsSelectorSpecial :GlobalTable="currentGlobalTable" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>
