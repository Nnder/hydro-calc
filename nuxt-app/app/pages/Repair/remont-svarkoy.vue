<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />

  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" />
  <Block data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
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
import Block from '~/components/Page/Block.vue'

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
  src: '/thumb_4.jpg',
  title: 'Осуществим ремонт деталей гидравлического и навесного оборудования методом наплавки ',
  description:
    'Восстановление рабочих поверхностей штоков, отверстий под пальцы, сварка корпусов гидроцилиндров, проушин, расточка или хонинговка гильз',
}

const blockDataText = {
  imageurl:
    '/how-machining-went-from-art-to-science-lathe-chips-featured.jpeg',
  title: 'Что мы делаем?',
  description: `<p>Профессиональные сварочные и токарные работы любой сложности. Выполняем полный комплекс услуг по ремонту и восстановлению металлических конструкций, деталей и оборудования.</p>
<p>Сварочные работы: РДС, MIG/MAG, TIG сварка черных металлов. Гарантия качества швов и соответствия стандартам.</p>
<p>Токарные работы: обработка на токарных и фрезерных станках, изготовление и восстановление деталей (валы, втулки, фланцы, шкивы). Работа со сталью, чугуном, бронзой. Высокая точность и соблюдение сроков.</p>`,
}

const globalTitle = {
  gtitle: 'Сварочно и токарные работы',
  subtitle: 'Полный цикл восстановления',
}

const parameters = ref([
  { value: '350 мм', description: 'Диаметр обрабатываемых деталей' },
  { value: 'до 3 метров', description: 'Максимальная длина обработки' },
  { value: '8-й квалитет', description: 'Класс точности токарных работ' },
  { value: 'Ra 0,4-1,6 мкм', description: 'Шероховатость поверхности' },
])

const header = 'ПАРАМЕТРЫ ТОКАРНЫХ И СВАРОЧНЫХ РАБОТ'

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку оборудования на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
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
    description:
      'Приобретаем сертифицированные материалы: электроды, проволоку, металлопрокат для сварочных и токарных работ',
    image: '/icons/gears.svg',
  },
  {
    title: 'Сварочные и токарные работы',
    shortDescription: 'Производство',
    description:
      'Выполняем комплекс работ: сварка конструкций, токарная обработка деталей, восстановление геометрии изделий',
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
  description:
    'Профессиональные сварочные и токарные работы позволяют значительно продлить срок службы оборудования. Своевременный ремонт и восстановление деталей предотвращают серьезные поломки и сокращают простои техники',
  buttonText: 'Связаться с нами',
  imageUrl: '/ekskavator.png',
  imageAlt: 'ремонт оборудования',
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
