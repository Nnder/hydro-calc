<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />

  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <!-- <PortfolioSection /> -->
  <!-- <Accordion data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
// import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Accordion from '~/components/Page/Accordion.vue'


definePageMeta({
  path: '/remont-svarkoy',
})

useHead({
  title: 'Сварочные и токарные работы',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const mainSlideData = {
  src: '/cat_workers.jpg',
  title: 'Осуществим ремонт деталей гидравлического оборудования методом наплавки',
  description: 'Восстановление рабочих поверхностей штоков, отверстий под пальцы, сварка корпусов гидроцилиндров, проушин, расточка или хонинговка гильз',
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Профессиональные сварочные и токарные работы любой сложности. Выполняем полный комплекс услуг по ремонту и восстановлению металлических конструкций, деталей и оборудования.</p>
<p>Сварочные работы: РДС, MIG/MAG, TIG сварка черных и цветных металлов. Ремонт металлоконструкций, трубопроводов, емкостей, промышленного оборудования. Гарантия качества швов и соответствия стандартам.</p>
<p>Токарные работы: обработка на станках с ЧПУ, изготовление и восстановление деталей (валы, втулки, фланцы, шкивы). Работа со сталью, чугуном, бронзой, алюминием. Высокая точность и соблюдение сроков.</p>`,
}

const globalTitle = {
   gtitle: "Сварочно и токарные работы",
   subtitle: "Полный цикл восстановления",
}

const parameters = ref([
  { value: '350 мм', description: 'Диаметр обрабатываемых деталей' },
  { value: 'до 3 метров', description: 'Максимальная длина обработки' },
  { value: '8-й квалитет', description: 'Класс точности токарных работ' },
  { value: 'Ra 0,4-1,6 мкм', description: 'Шероховатость поверхности' }
])

const header = 'ПАРАМЕТРЫ ТОКАРНЫХ И СВАРОЧНЫХ РАБОТ'

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description: 'Мы организуем доставку оборудования на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Дефектовка',
    shortDescription: 'Полная диагностика',
    description: 'Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя',
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
    description: 'Приобретаем сертифицированные материалы: электроды, проволоку, металлопрокат для сварочных и токарных работ',
    image: '/icons/gears.svg',
  },
  {
    title: 'Сварочные и токарные работы',
    shortDescription: 'Производство',
    description: 'Выполняем комплекс работ: сварка конструкций, токарная обработка деталей, восстановление геометрии изделий',
    image: '/icons/welding.svg',
  },
  {
    title: 'Контроль качества',
    shortDescription: 'Проверка',
    description: 'Проводим контроль сварных швов, проверяем точность обработки деталей, тестируем работоспособность',
    image: '/icons/quality-check.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированное оборудование с гарантией качества',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Увеличьте ресурс ваших машин',
  description: 'Профессиональные сварочные и токарные работы позволяют значительно продлить срок службы оборудования. Своевременный ремонт и восстановление деталей предотвращают серьезные поломки и сокращают простои техники',
  buttonText: 'Связаться с нами',
  imageUrl: '/ekskavator.png',
  imageAlt: 'ремонт оборудования',
}

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description: 'Полная диагностика ковшас использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
      'Составление дефектовочной ведомости',
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
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
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' },
  },
  {
    name: 'Замена проушин',
    selected: false,
    show: false,
    color: 'bg-orange-600/50 border-orange-600',
    highlight: { top: '75%', left: '75%', width: '20%', height: '15%' },
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания под давлением после ремонта.',
    features: [
      'Проверка на герметичность',
      'Испытание рабочим давлением P<span class="text-[10px]">раб</span> * 1,25',
      'Контроль плавности хода',
      'Фиксация результатов',
    ],
    highlight: { top: '85%', left: '40%', width: '20%', height: '10%' },
  },
])

const selectedCount = computed(() => hydrantParts.value.filter(part => part.selected).length)

const handlePartClick = index => {
  hydrantParts.value[index].selected = !hydrantParts.value[index].selected
  hydrantParts.value[index].show = hydrantParts.value[index].selected

  // scrollToImage()
}

const scrollToImage = () => {
  const element = document.getElementById('hydroImage')
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}

const getHighlightStyle = index => {
  const part = hydrantParts.value[index]
  return {
    top: part.highlight.top,
    left: part.highlight.left,
    width: part.highlight.width,
    height: part.highlight.height,
  }
}
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
