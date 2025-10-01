<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <RepairPartsSelector
    name="Гидроцилиндр"
    :title="'Выберите детали для ремонта'"
    :subtitle="'Отметьте необходимые компоненты гидроцилиндра'"
    :parts="hydrantParts"
    :main-image="MainCalculatorImage"
    :image-alt="'Профессиональный ремонт гидроцилиндров'"
    image-id="hydroImage"
    :selectorData="true"
    @part-selected="handlePartSelected"
    @image-changed="handleImageChanged"
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
      'Проводим хонингование,наплавку штоков коррзионостойкими материалами , шлифовку и полировку поверхностей',
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
  title: 'Ремонт гидроцилиндров и навестного оборудования для спецтехники',
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
}

const MainCalculatorImage = ref('/calculator/1.png')

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика гидроцилиндра с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
      'Составление карт проверов гильзы и штока',
      'Составление дефектовочной ведомости',
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },
  {
    name: 'Изготовление и замена штока',
    selected: false,
    show: false,
    color: 'bg-green-500/50 border-green-500',
    highlight: { top: '25%', left: '30%', width: '20%', height: '50%' },
  },
  {
    name: 'Изготовление и замена поршня',
    selected: false,
    show: false,
    color: 'bg-teal-600/50 border-teal-600',
    highlight: { top: '40%', left: '45%', width: '15%', height: '10%' },
  },
  {
    name: 'Ремонт гильз',
    selected: false,
    show: false,
    color: 'bg-sky-700/50 border-sky-700',
    highlight: { top: '30%', left: '50%', width: '30%', height: '40%' },
  },
  {
    name: 'Замена крышек',
    selected: false,
    show: false,
    color: 'bg-blue-300/50 border-blue-300',
    highlight: { top: '20%', left: '80%', width: '15%', height: '60%' },
  },
  {
    name: 'Ремонт цапф',
    selected: false,
    show: false,
    color: 'bg-indigo-600/50 border-indigo-600',
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Замена проушин').hidden
      hydrantParts.value.find(item => item.name === 'Замена проушин').hidden = val
      if (val) {
        MainCalculatorImage.value = '/calculator/1.png'
      } else {
        MainCalculatorImage.value = '/calculator/1.png'
      }
    },
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' },
  },
  {
    name: 'Замена проушин',
    selected: false,
    show: false,
    color: 'bg-orange-600/50 border-orange-600',
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden
      hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden = val
      if (val) {
        MainCalculatorImage.value = '/calculator/1.png'
      } else {
        MainCalculatorImage.value = '/calculator/1.png'
      }
    },
    highlight: { top: '75%', left: '75%', width: '20%', height: '15%' },
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
    highlight: { top: '85%', left: '40%', width: '20%', height: '10%' },
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
