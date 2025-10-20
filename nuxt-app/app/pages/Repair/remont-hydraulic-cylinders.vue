<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <RepairPartsSelector
    name="Здравствуйте необходимый перечень работ по гидроцилиндрам"
    :title="'Выберите детали для ремонта'"
    :subtitle="'Отметьте необходимые компоненты гидроцилиндра'"
    :selectorData="true"
    :main-image="MainCalculatorImage"
    :parts="hydrantParts"
    highlightMode="multiple"
  />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" :image-url="'/partners_1.webp'" data-aos="fade-up" />
  <!-- <PortfolioSection /> -->
  <!-- <Accordion data-aos="fade-up" v-model="fagItems" /> -->
  <Contact data-aos="fade-up" />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import TrustSection from '~/components/Main/TrustSection.vue'
import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import Accordion from '~/components/Page/Accordion.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import RepairPartsSelector from '~/components/RepairPartsSelector/RepairPartsSelector.vue'

definePageMeta({
  path: '/remont-hydraulic-cylinders',
})

useHead({
  title: 'Профессиональный ремонт гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const handlePartSelected = ({ part, index }) => {
  // Дополнительная логика при выборе детали
  console.log('Part selected:', part.name)
}

const handleImageChanged = newImage => {
  console.log('Image changed to:', newImage)
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: ``,
  benefits: [
    `<p class="font-semibold">Поршень гидроцилиндра</p>

задиры, излом канавок, деформация, механические повреждения металла. Проводимые ремонтные работы — шлифовка поршня, полное изготовление нового поршня, замена (модернизация под современные уплотнения)`,
    `<p class="font-semibold">Комплект уплотнений</p>

износ РТИ, замена РТИ по умолчанию происходит при переборке деталей. Проводимые ремонтные работы — замена РТИ, подбор комплектов уплотнений`,
    `<p class="font-semibold">Шток в сборе</p>

Задиры штока, механические повреждения, нарушение геометрии штока (загиб). Проводимые ремонтные работы — Шлифовка, восстановление, полная замена штока`,
    `<p class="font-semibold">Крышки гидроцилиндра</p>

задиры, механические повреждения по причине загиба штока. Проводимые ремонтные работы — восстановление, изготовление новой крышки гидроцилиндра`,
  ],
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональный ремонт гидроцилиндров',
  description:
    'Компания ООО «АбсолютТехно» производит ремонт гидроцилиндров для спецтехники и промышленного оборудования в Нижнем тагиле и Свердловской области.',
}

const globalTitle = ref({
  gtitle: 'Этапы ремонта Гидроцилиндров',
  subtitle: 'Полный цикл восстановления гидроцилиндров спецтехники',
})

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку гидроцилиндра на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Дефектовка',
    shortDescription: 'Полная диагностика',
    description:
      'Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя',
    image: '/icons/magnifying-glass.svg',
  },
  {
    title: 'Согласование',
    shortDescription: 'Утверждение стоимости',
    description: 'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта',
    image: '/icons/handshake.svg',
  },
  {
    title: 'Закупка материалов',
    shortDescription: 'Комплектующие',
    description: 'Приобретаем оригинальные запчасти и изготавливаем недостающие элементы: детали, уплотнения и др.',
    image: '/icons/gears.svg',
  },
  {
    title: 'Обработка',
    shortDescription: 'Восстановление деталей',
    description:
      'Проводим хонингование, наплавку штоков коррзионостойкими материалами, шлифовку и полировку поверхностей',
    image: '/icons/tools.svg',
  },
  {
    title: 'Сборка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка гидроцилиндра с использованием новых уплотнений и комплектующих',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Испытания по ГОСТу 18464-96',
    shortDescription: 'Тестирование',
    description: 'Проводим испытания на специализированном стенде',
    image: '/icons/test.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированный гидроцилиндр с гарантией качества',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Ремонт гидроцилиндров для спецтехники и промышленного производства',
  description:
    'Компания ООО АбсолютТехно выполняет ремонт гидроцилиндров диаметром до 300 мм и ходом поршня до 2200 мм с гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#2563EB',
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

const MainCalculatorImage = ref('/calculator/1.png')

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: true,
    description:
      'Полная диагностика гидроцилиндра с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
      'Составление карт проверов гильзы и штока',
      'Составление дефектовочной ведомости',
    ],
    highlight: [],
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    highlight: [
      { type: 'rect', top: '18%', left: '30.5%', width: '15%', height: '8%' }, // левая уплотн.
      { type: 'rect', top: '18%', left: '63.5%', width: '10%', height: '8%' }, // правая уплотн.
      { type: 'rect', top: '75%', left: '30.5%', width: '17%', height: '8%' }, // левая уплотн.
      { type: 'rect', top: '75%', left: '63.5%', width: '18%', height: '8%' }, // правая уплотн.
    ],
    z: 9,
    color: 'rgba(249,115,22,0.35)',
    stroke: 'rgba(249,115,22,0.5)',
  },
  {
    name: 'Изготовление и замена штока',
    selected: false,
    show: false,
    z: 1,
    highlight: [
      {
        type: 'circle',
        cx: '47%',
        cy: '8%',
        r: '43%',
      },
      {
        type: 'rect',
        top: '15%',
        left: '25%',
        width: '50%',
        height: '61%',
      },
    ],
    color: 'rgba(34,197,94,0.35)',
  },
  {
    name: 'Изготовление и замена поршня',
    selected: false,
    show: false,
    highlight: [
      {
        type: 'rect',
        top: '75%',
        left: '50%',
        width: '22%',
        height: '10%',
      },
      {
        type: 'rect',
        top: '82%',
        left: '35%',
        width: '45%',
        height: '3%',
      },
    ],
    color: 'rgba(20,184,166,0.35)',
  },
  {
    name: 'Ремонт гильз',
    selected: false,
    show: false,
    highlight: [
      {
        type: 'rect',
        top: '29%',
        left: '10%',
        width: '16%',
        height: '56%',
      },
      {
        type: 'rect',
        top: '29%',
        left: '75%',
        width: '16%',
        height: '56%',
      },
    ],
    color: 'rgba(59,130,246,0.35)',
  },
  {
    name: 'Замена крышек',
    selected: false,
    show: false,
    highlight: [
      {
        type: 'rect',
        top: '22%',
        left: '5%',
        width: '90%',
        height: '7%',
      },
      {
        type: 'rect',
        top: '84%',
        left: '8%',
        width: '90%',
        height: '4%',
      },
    ],
    color: 'rgba(37,99,235,0.35)',
  },
  {
    name: 'Ремонт цапф',
    selected: false,
    show: false,
    highlight: [
      {
        type: 'circle',
        cx: '45%',
        cy: '9%',
        r: '20%',
      },
      {
        type: 'circle',
        cx: '50%',
        cy: '92%',
        r: '20%',
      },
    ],
    color: 'rgba(234,88,12,0.35)',
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Замена проушин').hidden
      hydrantParts.value.find(item => item.name === 'Замена проушин').hidden = val
      if (val) {
        MainCalculatorImage.value = '/calculator/1.png'
      } else {
        MainCalculatorImage.value = '/calculator/1.png'
      }
    },
  },
  {
    name: 'Замена проушин',
    selected: false,
    show: false,
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden
      hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden = val
      if (val) {
        MainCalculatorImage.value = '/calculator/1.png'
      } else {
        MainCalculatorImage.value = '/calculator/1.png'
      }
    },
    highlight: [
      {
        type: 'circle',
        cx: '45%',
        cy: '9%',
        r: '20%',
      },
      {
        type: 'circle',
        cx: '50%',
        cy: '92%',
        r: '20%',
      },
    ],
    color: 'rgba(234,88,12,0.35)',
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания гидрацилиндров по ГОСТу',
    features: [
      'Проверка на герметичность',
      'Испытание давлением P<span class="text-[10px]">раб</span> * 1,25',
      'Контроль плавности хода',
      'Фиксация результатов с занесением данных в паспорт',
    ],
    highlight: [],
  },
])
</script>

<style>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.shadow-xl {
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

button:hover {
  transform: translateY(-1px);
}
</style>
