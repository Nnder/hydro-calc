<script setup lang="ts">
import Slider from '~/components/Slider/Slider.vue'
import ServiceBlock from '~/components/ServiceBlock/ServiceBlock.vue'
import Gis from '~/components/Map/2Gis.vue'
import Block from '~/components/Page/Block.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import Contact from '~/components/Page/Contact.vue'
import Advantages from '~/components/Advantages/Advantages.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'
import InformationBlockSpecial from '~/components/SpecialPages/InformationBlockSpecial.vue'
import Partners from '~/components/Partners/Partners.vue'
import Slide from '~/components/Slider/Slide.vue'

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремонта`,
    },
  ],
})

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
    'Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.',
    'Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.',
    'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
    'Используем первоклассное оборудование и технологии для точной диагностики.',
    'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
  ],
}

const blockData = {
  title: 'Изготовим нестандартное оборудование по вашему проекту, техническому заданию',
  description:
    'Изготовим гидроцилиндр по вашему чертежу,\nтехническому заданию или готовому образцу\nс гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/Сборка_ГЦ_реф.glb',
  modelBgColor: '#2563EB',
  img: {
    src: '/3d/preload/hydrocilinder2.png',
    alt: 'Гидроцилиндр 3д предзагрузка',
  },
}

const blockDataVariant = {
  title: 'Изготовим нестандартное оборудование по вашему проекту, техническому заданию',
  description:
    'Изготовим гидроцилиндр по вашему чертежу,\nтехническому заданию или готовому образцу\nс гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#ffffff',
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

const activeSection = ref('kovshi')

const setActiveSection = section => {
  activeSection.value = section
}

const currentInfoBlock = computed(() => sectionsData[activeSection.value].infoBlock)

const sectionsData = {
  kovshi: {
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ударного оборудования.',
      buttonText: 'Заказать ремонт гидромолота',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      type: '3d',
      modelSrc: '/3d/Сборка ковша.glb',
      modelBgColor: '#2563EB',
      scale: 0.3,
      loadFunc: model => {
        model.rotation.x = Math.PI / 2
        model.rotation.y = Math.PI
      },
    },
  },
  hydromoloty: {
    infoBlock: {
      title: 'Ремонт гидромолотов',
      description:
        'Восстановление ударных механизмов и корпусных деталей гидромолотов. Профессиональный подход к ремонту ударного оборудования.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление ударно-поршневой группы' },
        { icon: 'mdi:vector-arrange-above', text: 'Ревизия распределительных узлов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Заказать ремонт гидромолота',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидромолота',
      type: '3d',
      modelSrc: '/3d/гидромолот.glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
      },
      scale: 0.45,
    },
  },
  hydrovrashateli: {
    infoBlock: {
      title: 'Ремонт гидровращателей',
      description:
        'Восстановление гидромоторов, редукторов и корпусных деталей гидромолотов. Профессиональный подход к ремонту гидровращателя.',
      features: [
        { icon: 'mdi:hammer', text: 'Восстановление роторной группы гидромотора' },
        { icon: 'mdi:vector-arrange-above', text: 'Ремонт редукторов' },
        { icon: 'mdi:wrench', text: 'Восстановление корпуса и креплений' },
      ],
      buttonText: 'Заказать ремонт гидровращателя',
      imageUrl: '/hydromolot_diagram.png',
      imageAlt: 'Схема ремонта гидровщатале',
      type: '3d',
      modelSrc: '/3d/ТС135.000.00.000_(fn-1).glb',
      modelBgColor: '#2563EB',
      loadFunc: model => {
        model.rotation.x = Math.PI / 2.2
        model.rotation.y = Math.PI
      },
      scale: 0.5,
    },
  },
}

const slide = {
  videoSrc: '/videos/ТСС.mp4',
  logo: 'https://www.tss.ru/bitrix/templates/tss_templates_new/images/Group%201%20(1).png',
  img: '/hydrocilinder.png',
  // tag: 'Партнер',
  title: 'Наш партнер в сфере строительного оборудования и дизельных электростанций',
  text: 'Группа компаний ТСС — это многоуровневая структура, действующая под единым брендом',
  features: [
    'Дизельные электростанции',
    'Строительные оборудование',
    'Портативные генераторы',
    'Сварочное оборудование',
  ],
  buttonText: 'Прайс лист ГК ТСС',
  additionalInfo: 'Энергия стабильности',
}
</script>

<template>
  <Slider />
  <ServiceBlock data-aos="fade-up" />
  <!-- <div class="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
    <NuxtImg class="min-w-48 h-full" src="https://www.tss.ru/bitrix/templates/tss_templates_new/images/logo8.svg" />
    <div class="w-full self-end">
      <p class="text-lg md:text-xl font-medium leading-relaxed drop-shadow">
        Важнейшим направлением деятельности ГК ТСС является разработка и реализация проектов в сфере обеспечения
        производственных, ресурсодобывающих, жилых и других объектов, резервными и основными источниками электроэнергии.
      </p>
    </div>
  </div> -->
  <Slide :slider="slide" class="!h-full py-4" />
  <!-- <NuxtImg src="/bannertest.jpeg" alt="globalbanner" class="rounded-2xl h-[900px] mx-auto w-full" /> -->
  <InformationBlockSpecial
    :block-data="currentInfoBlock"
    :active-section="activeSection"
    @section-change="setActiveSection"
    data-aos="fade-up"
  />
  <InformationBlockLeft :blockData="blockDataVariant" position="left" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Advantages data-aos="fade-up" />
  <Contact data-aos="fade-up" />
  <Gis data-aos="fade-up" />
</template>

<style scoped>
.category-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}
</style>
