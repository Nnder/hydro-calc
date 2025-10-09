<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <RepairPartsSelector
    name="Здравствуйте необходимый перечень работ по ковшам"
    :selectorData="true"
    :title="'Выберите детали для ремонта'"
    :subtitle="'Отметьте необходимые компоненты гидромотора'"
    :parts="hydrantParts"
    main-image="/calculator/Сборка ковша.png"
    :image-alt="'Профессиональный ремонт гидромоторов'"
    image-id="hydroImage"
    highlight-mode="single"
    @part-selected="handlePartSelected"
    :selectorData="true"
  />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
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
import RepairPartsSelector from '~/components/RepairPartsSelector/RepairPartsSelector.vue'

definePageMeta({
  path: '/remont-kovshey-old',
})

useHead({
  title: 'Профессиональный ремонт навестного оборудования',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

// выбор вид оборудования + 3д картинка
// при выборе меняет параметры что делаем и этапы

const mainSlideData = {
  src: '/cat_workers.jpg',
  title: 'Осуществим ремонт навестного оборудования для спецтехники',
  description: 'Произовдим ремонт различного рода, любой сложности для любого вида техники',
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  // benefits: [
  //   'Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.',
  //   'Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.',
  //   'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
  //   'Используем первоклассное оборудование и технологии для точной диагностики.',
  //   'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
  // ],
}

const globalTitle = {
  gtitle: 'Этапы ремонта Ковшей',
  subtitle: 'Полный цикл восстановления Ковшей',
}

const parameters = ref([
  { value: 'до 3 тонн', description: 'Максимальный вес' },
  { value: 'до 40', description: 'Рабочее давление, МПа' },
  { value: 'от -50°C до +100°C', description: 'Температурный диапазон' },
])

const header = 'ПАРАМЕТРЫ КОВШЕЙ'

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку ковша наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
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
    description: 'Приобретаем сертефицированные запчасти и детали для ремонта ковшей',
    image: '/icons/gears.svg',
  },
  {
    title: 'Сборка и сварка',
    shortDescription: 'Комплектация',
    description:
      'Профессиональный ремонт ковша с использованием комплектующих, восстановление отверстий под пальцы, а также усилиение ковша',
    image: '/icons/assembly.svg',
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
  description:
    'Абразивное влияние грунта на материал конструкции при интенсивной эксплуатации оборудования приводит к быстрому износу ее отдельных элементов',
  buttonText: 'Связаться с нами',
  imageUrl: '/ekskavator.png',
  imageAlt: 'ковш',
  type: '3d',
  modelSrc: '/3d/Сборка ковша.glb',
  modelBgColor: '#2563EB',
  scale: 0.3,
  loadFunc: model => {
    model.rotation.x = Math.PI / 2
    model.rotation.y = Math.PI
  },
}

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description: 'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Промер отверстий под пальцы с выявлением степени износа',
      'Составление дефектовочной ведомости',
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
  },
  {
    name: 'Ремонт или замена режущих ножей ',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },
  {
    name: 'Усиление стенок и днища',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },
  {
    name: 'Восстановление отверстий под пальцы',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },
])

const handlePartSelected = ({ part, index }) => {
  // Дополнительная логика при выборе детали
  console.log('Part selected:', part.name)
}

const handleImageChanged = newImage => {
  console.log('Image changed to:', newImage)
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
