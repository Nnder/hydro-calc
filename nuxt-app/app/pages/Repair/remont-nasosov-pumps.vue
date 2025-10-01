<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <RepairPartsSelector
  :title="'Виды работ и ремонта'"
  :subtitle="'Отметьте необходимые компоненты гидронасоса'"
  :parts="hydrantParts"
  main-image="/calculator/2.png"
  :image-alt="'Профессиональный ремонт гидронасосов'"
  image-id="hydroImage"
  :highlight-mode="'single'"
  @part-selected=""
/>
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" data-aos="fade-up" />
  <!-- <PortfolioSection /> -->
  <!-- <Accordion data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import Accordion from '~/components/Page/Accordion.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import RepairPartsSelector from '~/components/RepairPartsSelector/RepairPartsSelector.vue' 

definePageMeta({
  path: '/remont-nasosov-pumps',
})


useHead({
  title: 'Профессиональный ремонт гидронасосов',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const blockDataText = {
  title: 'Что мы делаем?',
  //   description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
  // <p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
    'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
    'Используем первоклассное оборудование и технологии для точной диагностики.',
    'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
    'Указание объемов ремонта в паспорте на оборудование',
  ],
}

const mainSlideData = {
  src: '/Produkte_Pumpen_01.jpg',
  title: 'Профессиональный ремонт гидронасосов',
  description:
    'Профессиональный ремонт гидронасосов в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.',
}

const globalTitle = ref({
  gtitle: 'Этапы ремонта Гидронасосов',
  subtitle: 'Полный цикл восстановления гидронасосов спецтехники',
})

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку гидронасоса на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Разборка и мойка',
    shortDescription: 'Предварительная подготовка',
    description: 'Разборка гидронасоса, тщательная мойка всех деталей',
    image: '/icons/tools.svg',
  },
  {
    title: 'Дефектовка',
    shortDescription: 'Полная диагностика',
    description:
      'Наши специалисты проводят полную диагностику всех узлов и деталей, составляют техническое заключение и выявляют причины неисправности',
    image: '/icons/magnifying-glass.svg',
  },
  {
    title: 'Согласование',
    shortDescription: 'Утверждение стоимости',
    description:
      'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта гидронасоса',
    image: '/icons/handshake.svg',
  },
  {
    title: 'Закупка материалов',
    shortDescription: 'Комплектующие',
    description: 'Приобретаем оригинальные запчасти или аналоги неуступающие по качеству',
    image: '/icons/gears.svg',
  },
  {
    title: 'Восстановление',
    shortDescription: 'Ремонт деталей',
    description:
      'Проводим шлифовку валов, восстановление рабочих поверхностей, притирку рабочих поверхностей деталей роторной группы, замену изношенных деталей и ревизию корпусных частей',
    image: '/icons/repair.svg',
  },
  {
    title: 'Сборка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка гидронасоса с использованием новых уплотнений, подшипников и комплектующих',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Испытания',
    shortDescription: 'Тестирование',
    description:
      'Проводим испытания на специализированном стенде под нагрузкой, проверяем рабочее давление, производительность и КПД',
    image: '/icons/test.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description:
      'Упаковываем и доставляем отремонтированный гидронасос с гарантией качества и технической документацией',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Произведем ремонт гидронасосов или подберем аналог',
  description:
    'Ремонт гидронасосов с оригинальными запчастями, произведем испытания на специализированном стенде с гарантией от 6 до 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидронасос',
  type: '3d',
  modelSrc: '/3d/r902411613.glb',
  modelBgColor: '#2563EB',
  scale: 0.4,
}

const hydrantParts = ref([
  {
    name: 'Дефектовка (разборка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика гидронасосов с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Разборка гидронасоса, осмотр всех комплектующих на наличие поверхностных дефектов',
      'Составление дефектовочной ведомости',
    ],
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    description: 'Комплексная замена всех уплотнительных элементов гидронасоса.',
    features: ['Подбор оригинальных уплатнений или аналогов', 'Замена манжет, колец и сальников'],
  },
  {
    name: 'Ремонт или замена рабочей группы',
    selected: false,
    show: false,
    description: 'Притирка рабочих поверхностей блока и распределителя или замена на оригинальные запчасти',
    features: [],
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания на специализированном стенде.',
    features: [
      'Проверка на герметичность',
      'Контроль расходных характеристик насоса',
      'Контроль рабочего давления',
      'Фиксация результатов с занесением данных в паспорт',
    ],
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
