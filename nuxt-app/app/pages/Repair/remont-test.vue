<template>
 <!-- <ContentWithImageSpecial :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" /> -->
  <ButtonSpecial @button-changed="handleButtonChange" />
  
  <div v-show="activeEquipment === 'kovshi'">
    <RepairPartsSelectorSpecial 
      :GlobalTable="kovshiGlobalTable"
      data-aos="fade-up"
    />
    <StagesSpecial :steps="kovshiSteps" :globalTitle="kovshiTitle" data-aos="fade-up" />
  </div>

  <div v-show="activeEquipment === 'hydrocilindry'">
    <RepairPartsSelectorSpecial 
      :GlobalTable="hydrocilindryGlobalTable"
      data-aos="fade-up"
    />
    <StagesSpecial :steps="hydrocilindrySteps" :globalTitle="hydrocilindryTitle" data-aos="fade-up" />
  </div>

  <div v-show="activeEquipment === 'hydromotory'">
    <RepairPartsSelectorSpecial 
      :GlobalTable="hydromotoryGlobalTable"
      data-aos="fade-up"
    />
    <StagesSpecial :steps="hydromotorySteps" :globalTitle="hydromotoryTitle" data-aos="fade-up" />
  </div>

   <!-- <InformationBlockSpecial :blockData="blockData" data-aos="fade-up" />
  <ParametersGridSpecial :parameters="parameters" :header="header" data-aos="fade-up" />
  <PartnerBlockSpecial :blockDataText="blockDataText" data-aos="fade-up" /> -->
  <!-- <PortfolioSection /> -->
  <!-- <Accordion data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>

<script setup>
import ButtonSpecial from '~/components/SpecialPages/ButtonSpecial.vue'
import StagesSpecial from '~/components/SpecialPages/StagesSpecial.vue'
import Contact from '~/components/Page/Contact.vue'
import RepairPartsSelectorSpecial from '~/components/SpecialPages/RepairPartsSelectorSpecial.vue'

definePageMeta({
  path: '/remont-test',
})

useHead({
  title: 'Профессиональный ремонт навесного оборудования',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const activeEquipment = ref('kovshi')

const equipmentStates = reactive({
  kovshi: {
    parts: [
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
        icon: 'mdi:magnify'
      },
      {
        name: 'Ремонт или замена режущих ножей',
        selected: false,
        show: false,
        description: 'Восстановление или замена изношенных режущих кромок ковша.',
        features: [
          'Замена изношенных ножей',
          'Восстановление режущей кромки',
          'Усиление конструкции',
        ],
        highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
        color: 'bg-orange-400/50 border-orange-400',
        icon: 'mdi:knife'
      },
      {
        name: 'Усиление стенок и днейща',
        selected: false,
        show: false,
        description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
        features: [
          'Наварка дополнительных листов',
          'Усиление ребер жесткости',
          'Замена изношенных участков',
        ],
        highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
        color: 'bg-blue-400/50 border-blue-400',
        icon: 'mdi:hammer-wrench'
      },
    ]
  },
  hydrocilindry: {
    parts: [
      {
        name: 'Шток гидроцилиндра',
        selected: false,
        show: false,
        description: 'Восстановление и ремонт штока гидроцилиндра',
        features: [
          'Шлифовка и полировка поверхности',
          'Восстановление хромированного покрытия',
          'Ремонт резьбовых соединений',
        ],
        highlight: { top: '20%', left: '40%', width: '20%', height: '60%' },
        icon: 'mdi:arrow-expand-vertical'
      },
      {
        name: 'Гильза цилиндра',
        selected: false,
        show: false,
        description: 'Ремонт и восстановление гильзы гидроцилиндра',
        features: [
          'Восстановление внутренней поверхности',
          'Полировка зеркала цилиндра',
          'Устранение задиров и повреждений',
        ],
        highlight: { top: '25%', left: '35%', width: '30%', height: '50%' },
        color: 'bg-green-400/50 border-green-400',
        icon: 'mdi:cylinder'
      },
      {
        name: 'Уплотнительные элементы',
        selected: false,
        show: false,
        description: 'Замена всех сальников и уплотнений',
        features: [
          'Замена манжет и сальников',
          'Установка новых уплотнительных колец',
          'Проверка герметичности',
        ],
        highlight: { top: '15%', left: '30%', width: '40%', height: '10%' },
        color: 'bg-purple-400/50 border-purple-400',
        icon: 'mdi:seal'
      },
    ]
  },
  hydromotory: {
    parts: [
      {
        name: 'Роторная группа',
        selected: false,
        show: false,
        description: 'Ремонт или замена ротора и поршневой группы',
        features: [
          'Восстановление геометрии ротора',
          'Замена поршней и плунжеров',
          'Ремонт рабочих камер',
        ],
        highlight: { top: '30%', left: '40%', width: '30%', height: '40%' },
        icon: 'mdi:rotate-3d'
      },
      {
        name: 'Распределитель',
        selected: false,
        show: false,
        description: 'Восстановление распределительного узла',
        features: [
          'Шлифовка распределительного диска',
          'Восстановление каналов',
          'Замена изношенных деталей',
        ],
        highlight: { top: '20%', left: '25%', width: '50%', height: '20%' },
        color: 'bg-yellow-400/50 border-yellow-400',
        icon: 'mdi:vector-arrange-above'
      },
      {
        name: 'Подшипниковые узлы',
        selected: false,
        show: false,
        description: 'Замена подшипников и восстановление посадочных мест',
        features: [
          'Замена подшипников',
          'Восстановление посадочных мест',
          'Балансировка вала',
        ],
        highlight: { top: '60%', left: '45%', width: '20%', height: '15%' },
        color: 'bg-red-400/50 border-red-400',
        icon: 'mdi:cog'
      },
    ]
  }
})

const kovshiGlobalTable = computed(() => ({
  title: 'Выберите детали для ремонта ковшей',
  subtitle: 'Отметьте необходимые компоненты ковша',
  parts: equipmentStates.kovshi.parts,
  mainImage: '/calculator/Сборка ковша.png',
  imageAlt: 'Профессиональный ремонт ковшей',
  imageId: 'kovshiImage',
  highlightMode: 'single',
  name: 'ковшам',
  selectorData: true
}))

const hydrocilindryGlobalTable = computed(() => ({
  title: 'Выберите детали для ремонта гидроцилиндров',
  subtitle: 'Отметьте необходимые компоненты гидроцилиндра',
  parts: equipmentStates.hydrocilindry.parts,
  mainImage: '/calculator/гидроцилиндр.png',
  imageAlt: 'Профессиональный ремонт гидроцилиндров',
  imageId: 'hydrocilindryImage',
  highlightMode: 'single',
  name: 'гидроцилиндрам',
  selectorData: true
}))


const hydromotoryGlobalTable = computed(() => ({
  title: 'Выберите детали для ремонта гидромоторов',
  subtitle: 'Отметьте необходимые компоненты гидромотора',
  parts: equipmentStates.hydromotory.parts,
  mainImage: '/calculator/гидромотор.png',
  imageAlt: 'Профессиональный ремонт гидромоторов',
  imageId: 'hydromotoryImage',
  highlightMode: 'single',
  name: 'гидромоторам',
  selectorData: true
}))

const handleButtonChange = (buttonNumber) => {
  switch(buttonNumber) {
    case 1:
      activeEquipment.value = 'kovshi'
      break
    case 2:
      activeEquipment.value = 'hydrocilindry'
      break
    case 3:
      activeEquipment.value = 'hydromotory'
      break
  }
}

const kovshiTitle = {
  gtitle: 'Этапы ремонта Ковшей',
  subtitle: 'Полный цикл восстановления Ковшей',
}

const kovshiSteps = ref([
  {
    title: 'Доставка и приемка',
    description: 'Мы организуем доставку ковша на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
  },
  {
    title: 'Дефектовка',
    description: 'Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя',
  },
  {
    title: 'Согласование',
    description: 'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта',
  },
  {
    title: 'Закупка материалов',
    description: 'Приобретаем сертифицированные запчасти и детали для ремонта ковшей',
  },
  {
    title: 'Сборка и сварка',
    description: 'Профессиональный ремонт ковша с использованием комплектующих, восстановление отверстий под пальцы, а также усиление ковша',
  },
  {
    title: 'Отгрузка',
    description: 'Упаковываем и доставляем отремонтированный ковш с гарантией качества',
  },
])

const hydrocilindryTitle = {
  gtitle: 'Этапы ремонта Гидроцилиндров',
  subtitle: 'Полный цикл восстановления гидроцилиндров',
}

const hydrocilindrySteps = ref([
  {
    title: 'Разборка и мойка',
    description: 'Аккуратная разборка гидроцилиндра с последующей тщательной мойкой всех деталей',
  },
  {
    title: 'Дефектовка',
    description: 'Тщательная проверка всех компонентов: штока, гильзы, поршня, сальников и других элементов',
  },
  {
    title: 'Восстановление деталей',
    description: 'Шлифовка и хромирование штока, восстановление зеркала гильзы, замена изношенных деталей',
  },
  {
    title: 'Замена уплотнений',
    description: 'Установка новых сальников и уплотнительных элементов от проверенных производителей',
  },
  {
    title: 'Сборка и испытания',
    description: 'Сборка гидроцилиндра и проведение гидравлических испытаний под рабочим давлением',
  },
  {
    title: 'Отгрузка',
    description: 'Упаковка и доставка отремонтированного гидроцилиндра с гарантией',
  },
])

const hydromotoryTitle = {
  gtitle: 'Этапы ремонта Гидромоторов',
  subtitle: 'Полный цикл восстановления гидромоторов',
}

const hydromotorySteps = ref([
  {
    title: 'Предварительная диагностика',
    description: 'Внешний осмотр и проверка работоспособности гидромотора',
  },
  {
    title: 'Полная разборка',
    description: 'Аккуратная разборка всех узлов и механизмов гидромотора',
  },
  {
    title: 'Детальная дефектовка',
    description: 'Тщательная проверка роторной группы, распределителя, вала и подшипников',
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
    description: 'Испытания под нагрузкой с проверкой всех рабочих параметров',
  },
])
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