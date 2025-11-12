<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

definePageMeta({
  path: '/proektirovanie-izgotovlenie-hydraulic-stantici',
})

useHead({
  title: 'Проектирование и изготовление гидравлических станцый',
  meta: [
    {
      name: 'description',
      content:
        '«ООО АбсолютТехно» качественно и быстро спроектирует и изготовит гидравлические станции по вашему техническому задания для предприятий и частных клиентов по всей Свердловской области.',
    },
  ],
})

const parameters = ref([
  { value: 'до 2 тонн', description: 'Допускаемый объем бака' },
  { value: 'до 40', description: 'Рабочее давление, МПа' },
])

const header = 'Наши технические возможности'

const description = `<p class="text-lg">
          Компания ООО "Энергия" предлагает широкий выбор дополнительных комплектующих для гидравлических систем.
          В нашем каталоге представлены все необходимые компоненты для монтажа и обслуживания гидрооборудования.
        </p>
        <p class="text-lg">
          Все комплектующие соответствуют международным стандартам качества и имеют необходимые сертификаты.
          Гарантируем быструю отгрузку со склада и индивидуальный подход к каждому клиенту.
        </p>`

const imageUrl = '/rvd_2.jpeg'
const title = 'Дополнительные комплектующие для гидравлики по Свердловской области'

const items = ref([
  {
    image: '/bistrosemniki.jpeg',
    title: 'Быстросъемы',
  },
  {
    image: '/fitingi_2.jpeg',
    title: 'Фитинги',
  },
  {
    image: '/flanec_2.jpeg',
    title: 'Фланцы',
  },
  {
    image: '/adapteri.jpeg',
    title: 'Адаптеры',
  },
  {
    image: '/nippeli.jpeg',
    title: 'Ниппели',
  },
  {
    image: '/zaglushki.jpeg',
    title: 'Заглушки',
  },
  {
    image: '/xomuti.jpeg',
    title: 'Хомуты',
  },
  {
    image: '/klapani.jpeg',
    title: 'Клапаны',
  },
  {
    image: '/manometri.jpeg',
    title: 'Манометры',
  },
  {
    image: '/manometri.jpeg',
    title: 'Фильтры',
  },
  {
    image: '/reduktara.jpeg',
    title: 'Редукторы',
  },
  {
    image: '/prokladki.jpeg',
    title: 'Прокладки',
  },
  {
    image: '/uplotnenie.png',
    title: 'Уплотнения',
  },
  {
    image: '/shtuceri.jpeg',
    title: 'Штуцеры',
  },
])

const tableData = ref([
  {
    type: 'Быстросъем',
    size: '1/2"',
    pressure: '350',
    material: 'Сталь',
    connection: 'Резьба',
  },
  {
    type: 'Фитинг',
    size: '3/4"',
    pressure: '420',
    material: 'Нерж. сталь',
    connection: 'Фланец',
  },
  {
    type: 'Фланец',
    size: '1"',
    pressure: '250',
    material: 'Сталь',
    connection: 'Болтовое',
  },
  {
    type: 'Адаптер',
    size: '1/4"',
    pressure: '600',
    material: 'Латунь',
    connection: 'Резьба',
  },
  {
    type: 'Ниппель',
    size: '3/8"',
    pressure: '500',
    material: 'Сталь',
    connection: 'Резьба',
  },
])

const blockData = {
  title: 'Изготовление и модернизация гидравлических станций любой сложности',
  description: '',
  buttonText: 'Заказать комплектующие',
  imageUrl: '/hydrostation.png',
  imageAlt: 'Дополнительные комплектующие для гидравлики',
  features: [
    {
      icon: 'material-symbols:check-circle-rounded',
      text: 'Помощь в составлении технического задания',
    },
    {
      icon: 'material-symbols:check-circle-rounded',
      text: 'крупноузловая сборка на предприятии',
    },
    {
      icon: 'material-symbols:check-circle-rounded',
      text: 'пусконаладочные работы',
    },
  ],
  typeContact: 'Изготовление',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Проектирование и изготовление гидравлических станцый',
  description:
    'Компания «ООО АбсолютТехно» качественно и быстро спроектирует и изготовит гидравлические станции по вашему техническому задания для предприятий и частных клиентов по всей Свердловской области.',
}

const EquipmentData = {
  title: 'О производстве гидростанций',
  description:
    'Компания «ООО АбсолютТехно» имеет опыт в проектировании и производстве гидравлического оборудования. Гидростанции проектируются по индивидуальным параметрам с учетом нагрузки и условий эксплуатации. При изготовлении станций используются сертифицированные материалы и агрегаты. Проектные решения расчитанные под параметры объекта гарантируют стабильность работы и долговечность.',
  equipmentName: 'Процесс изготовления:',
  equipmentItems: [
    'Анализ гидравлической системы для опрделения оптимальных характеристик станции',
    'Проектирование гидравлической станции с использование 3д моделей, разработка конструкторской документации',
    'Закуп сертифицированных материалов и проверенных комплектующих от ведущих производителей',
    'Сборка станции, проверка роботоспособности, испытания под нагрузкой',
    'Крупноузловая отгрузка станции',
  ],
  endText: 'Оформление паспорта изделия с занесением результатов испытаний.',
}

const blockDataText = {
  title: '',
  description: ``,
  benefits: [
    `<p>
      <span class="font-semibold">Гидростанция</span>
      — это высокотехнологичный комплекс, преобразующий различные виды энергии в механическую работу посредством потока рабочей жидкости под давлением. Это сердце любой гидравлической системы, обеспечивающее точное управление исполнительными механизмами.
      </p>

 `,
    `<p class="font-semibold">Компоненты современной гидростанции</p>


<ul class="list-disc list-inside">
  <li class="mb-1" class="mb-1">Силовой блок: электродвигатель или ДВС</li>
  <li class="mb-1">Насосная группа: обеспечивает создание давления</li>
  <li class="mb-1">Система управления: клапана давления, расхода, распределители контроллеры и датчики</li>
  <li class="mb-1">Масляный бак: с интегрированной фильтрацией</li>
  <li class="mb-1">Трубопроводная система: РВД, фитинги и трубы</li>
  <li class="mb-1">Вспомогательные элементы: теплообменники, манометры</li>
</ul>`,

    `<p class="font-semibold">Активно применения в:</p>
<ul class="list-disc list-inside">
  <li class="mb-1">Промышленном оборудовании</li>
  <li class="mb-1">Строительной технике</li>
  <li class="mb-1">Прессовом оборудовании</li>
  <li class="mb-1">Подъёмных механизмах</li>
  <li class="mb-1">Специализированном инструменте</li>
</ul>
`,
  ],
}
</script>

<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" data-aos-delay="200" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <!-- <RvdTableWrapper :table-data="tableData" /> -->
  <ProductionEquipment :EquipmentData="EquipmentData" data-aos="fade-up" />
  <PartnerBlock
    :blockDataText="blockDataText"
    variant="default"
    :image-url="'/silovye_agregaty.jpg'"
    data-aos="fade-up"
  />
  <!-- <ProductionDescription :description="description" :image-url="imageUrl" :title="title" data-aos="fade-up" /> -->
  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact type="Изготовление" data-aos="fade-up" />
</template>
