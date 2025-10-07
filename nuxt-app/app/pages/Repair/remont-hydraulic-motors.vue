<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <RepairPartsSelector
    :title="'Виды работ и ремонта'"
    :subtitle="'Отметьте необходимые компоненты гидромотора'"
    :parts="hydrantParts"
    main-image="/calculator/3.png"
    :image-alt="'Профессиональный ремонт гидромоторов'"
    image-id="hydroImage"
    highlight-mode="single"
    @part-selected="handlePartSelected"
  />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
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
  path: '/remont-hydraulic-motors',
})

useHead({
  title: 'Профессиональный ремонт гидромоторов',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const blockDataText = {
  title: 'Что мы делаем?',
  // description: `<p></p>`,
    benefits: [
    "Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.",
    "Соблюдаем все стандарты и требования безопасности в процессе ремонта.",
    "Используем первоклассное оборудование и технологии для точной диагностики.",
    "Эффективно организуем обслуживание больших парков техники с индивидуальным графиком."
  ]
}

const mainSlideData = {
  src: '/gidrocilinder_5.png',
  title: 'Профессиональный ремонт гидромоторов',
  description:
    'Профессиональный ремонт гидромоторов в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.',
}

const globalTitle = ref({
  gtitle: 'Этапы ремонта Гидромоторов',
  subtitle: 'Полный цикл восстановления гидромоторов спецтехники',
})

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку гидромоторов на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Разборка и мойка',
    shortDescription: 'Предварительная подготовка',
    description: 'Разборка гидромотора, тщательная мойка всех деталей',
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
      'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта гидромотора',
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
    description: 'Профессиональная сборка гидромотора с использованием новых уплотнений, подшипников и комплектующих',
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
      'Упаковываем и доставляем отремонтированный гидромоторов с гарантией качества и технической документацией',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Ремонт и восстановление гидромоторов',
  description:
    'Произведём ремонт гидромоторов с восстановлением или заменой на оригинальные комплектующие с гарантией от 6 до 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/303.4.28.90Е.100.7  (1).glb',
  modelBgColor: '#2563EB',
   img: {
        src: '/3d/preload/hydromotor.png',
        alt: 'Гидромотор 3д предзагрузка'
      }
}

const hydrantParts = ref([
  {
    name: 'Дефектовка (разборка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика гидромоторов с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Разборка гидромоторов, осмотр всех комплектующих на наличие поверхностных дефектов',
      'Составление дефектовочной ведомости',
    ],
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    description: 'Комплексная замена всех уплотнительных элементов гидромоторов.',
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
      'Контроль расходных характеристик мотора',
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
