<template>
  <ContentWithImageSpecial :main-slide-data="mainSlideData" data-aos="fade-up" data-aos-delay="200" />

  <div class="max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto text-center">
      <button
        class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'kovshi' }"
        @click="setActiveSection('kovshi')"
      >
        Ковши
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydrovrashateli' }"
        @click="setActiveSection('hydrovrashateli')"
      >
        Гидровращатели
      </button>
      <button
        class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === 'hydromoloty' }"
        @click="setActiveSection('hydromoloty')"
      >
        Гидромолоты
      </button>
    </div>
  </div>

  <RepairPartsSelectorSpecial :GlobalTable="currentGlobalTable" data-aos="fade-up" />

  <StagesSpecial :steps="currentSteps" :globalTitle="currentTitle" data-aos="fade-up" />

  <InformationBlockSpecial
    :block-data="currentInfoBlock"
    :position="currentPosition"
    :active-section="activeSection"
    @section-change="setActiveSection"
    data-aos="fade-up"
  />

  <ParametersGridSpecial :parameters="currentParameters" :header="currentHeader" data-aos="fade-up" />

  <PartnerBlockSpecial :block-data-text="currentPartnerBlock" data-aos="fade-up" />
  <Contact data-aos="fade-up" />
</template>

<script setup>
import InformationBlockSpecial from '~/components/SpecialPages/InformationBlockSpecial.vue'
import ContentWithImageSpecial from '~/components/SpecialPages/ContentWithImageSpecial.vue'
import ParametersGridSpecial from '~/components/SpecialPages/ParametersGridSpecial.vue'
import PartnerBlockSpecial from '~/components/SpecialPages/PartnerBlockSpecial.vue'
import RepairPartsSelectorSpecial from '~/components/SpecialPages/RepairPartsSelectorSpecial.vue'
import StagesSpecial from '~/components/SpecialPages/StagesSpecial.vue'
import Contact from '~/components/Page/Contact.vue'
import { useRoute } from '#app'

definePageMeta({
  path: `/remont-kovshey/:active?`,
})

useHead({
  title: 'Профессиональный ремонт навестного оборудования',
  meta: [
    {
      name: 'description',
      content: 'Комплексный ремонт ковшей, гидровращателей и гидромолотов спецтехники',
    },
  ],
})

const route = useRoute()

const { clearData } = useCalculatorSelector()

const activeSection = ref(route.params.active || 'kovshi')

const setActiveSection = section => {
  activeSection.value = section
}

const mainSlideData = {
  src: '/cat_workers.jpg',
  title: 'Профессиональный ремонт навесного и гидровлического оборудования',
  description: 'Полный комплекс услуг по восстановлению ковшей, гидровращателей и гидромолотов спецтехники',
}

const sectionsData = {
  kovshi: {
    globalTable: {
      title: 'Выберите детали для ремонта ковшей',
      subtitle: 'Отметьте необходимые компоненты ковша',
      parts: [
        {
          name: 'Диагностика1 (дефектовка)',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'Визуальный осмотр на предмет повреждений',
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
      imageurl: '/serv-bucketrep_01.jpg',
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
      mainImage: '/calculator/гидромолот.png',
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
      imageurl: '/16179909328851.jpg',
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
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

button:hover {
  transform: translateY(-1px);
}
</style>
