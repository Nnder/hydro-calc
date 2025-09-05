<template>
  <ContentWithImage :mainSlideData="mainSlideData"/>
  <Stages :steps="repairSteps" />
  <InformationBlock :blockData="blockData" />
  <PartnerBlock :blockDataText="blockDataText"/>
  <PortfolioSection />
  <Contact />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

const mainSlideData = {
  src: 'https://lorry-group.ru/wp-content/uploads/2020/parser/cat_6015_B.jpg',
  title: 'Осуществим ремонт ковшей экскаваторов, бульдозеров и другой техники',
  description: 'Замена днища, замена режущей кромки или другие ремонтные работы, которые мы выполняем профессионально'
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
  "Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.",
  "Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.",
  "Соблюдаем все стандарты и требования безопасности в процессе ремонта.",
  "Используем первоклассное оборудование и технологии для точной диагностики.",
  "Эффективно организуем обслуживание больших парков техники с индивидуальным графиком."
]
}

const globalTitle = ref({
  gtitle: 'Ковшей',
  subtitle: 'Полный цикл восстановления гидромоторов спецтехники'
})

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description: 'Мы организуем доставку ковшана наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
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
    description: 'Приобретаем оригинальные запчасти и изготавливаем недостающие элементы: металлические детали, уплотнения и др.',
    image: '/icons/gears.svg',
  },
  {
    title: 'Обработка',
    shortDescription: 'Восстановление деталей',
    description: 'Проводим хонингование, расхромирование, хромирование, шлифовку и полировку поверхностей',
    image: '/icons/tools.svg',
  },
  {
    title: 'Сборка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка ковшас использованием новых уплотнений и комплектующих',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Испытания',
    shortDescription: 'Тестирование',
    description: 'Проводим испытания на специализированном стенде, моделируя номинальные и максимальные нагрузки',
    image: '/icons/test.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированный ковш с гарантией качества',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Увеличьте ресурс ваших машин',
  description: 'Абразивное влияние грунта на материал конструкции при интенсивной эксплуатации оборудования приводит к быстрому износу ее отдельных элементов',
  buttonText: 'Рассчитать стоимость',
  imageUrl: 'https://cmr24.by/uploads/Articles/42/ekskavator.png',
  imageAlt: 'ковш'
}

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика ковшас использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
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
