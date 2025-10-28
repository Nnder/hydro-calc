<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import Step from '~/components/Steps/Step.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'

definePageMeta({
  path: '/gidrolinii',
})

useHead({
  title: 'Изготовление РВД по вашим размерам или образцу',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const parameters = ref([
  { value: 'до 2"', description: 'Диаметр подключения, дюймов' },
  { value: 'до 40', description: 'Рабочее давление, МПа' },
  { value: 'Черная/коррозионностойкая', description: 'Материал гидравлических трубок, Cталь' },
])

const blockData = {
  title: 'Производcтво гидравлических трубок (гидролиний)',
  description:
    'Изготовлнение дополнительных гидролиний на любую спецтехнику, штучное изготовление гидравлических трубок.',
  buttonText: 'Заказать изготовление',
  imageUrl:
    'https://cdn.shopify.com/s/files/1/2298/8937/products/T_51654b51-71cc-4f1d-a822-03c3d5cb150d_1024x1024.jpg?v=1624387275',
  imageAlt: 'Производство рукавов высокого давления',
}

const mainSlideData = {
  src: 'https://image.made-in-china.com/2f0j00CAghSVbthprI/Hydraulic-Rock-Breaker-Hammer-Piping-Kits-Manufacturer.webp',
  title: 'Изготовление гидравлических трубок по вашим размерам или образцу',
  description:
    'Производим ремонт гидравлических трубок, изготовление и монтаж дополнительных гидравлических линий (гидролиний)',
}

const steps = [
  {
    text: `Процесс производства гидролиний, предназначенных для дополнительного навесного оборудования, может показаться на первый взгляд несложным процессом, ведь это просто трубопроводы и рукава высокого давления.Однако давайте взглянем подробнее на хронологию этого процесса, используя в качестве примера новый проект. После подтверждения заказа высококвалифицированные конструкторы начинают сбор и анализ технической документации, включая гидравлические и электрические схемы, а также каталоги запасных частей.`,
    header: 'Этап 1. Сбор данных',
    img: '',
    endText: '',
  },
  {
    header: 'Этап 2. Выезд на объект',
    img: '/f7d05a2c-a453-4cf4-ae38-a49b77075032.jpeg',
    endText:
      'Там конструктор проводит необходимые замеры, собирает дополнительную информацию и учитывает пожелания клиента, особенно если речь идет о нестандартных решениях.',
  },
  {
    header: 'Этап 3. Конструкторская документация',
    img: '/88aa7cd9-b702-4ceb-80ba-2ba08aa2e110.jpeg',
    endText:
      'Как только конструктор возвращается в конструкторское бюро, он незамедлительно приступает к созданию конструкторской документации, включая спецификации, чертежи трубопроводов и кронштейнов.',
  },

  {
    header: 'Этап 4. Производство',
    img: '/XXL_height.jpeg',
    endText: `<p>Процесс изготовления гидроразводки состоит из нескольких этапов:</p>
<ul class="list-disc list-inside pl-1 grid gap-2">
<li>Производство трубопроводов и кронштейнов</li>
<li>Включает сварку, гибку трубопроводов и покраску в цвет техники порошковым покрытием.</li>
<li>Производство РВД</li>
<li>Включает подбор компонентов (фитингов, муфт, рукавов), сборку и опрессовку. Все комплектующие проходят тщательную проверку на соответствие технической документации перед отправкой на склад.</li>
<li>После того, как все комплектующие с производства поступают на склад, происходит сборка гидроразводки в присутствии ответственного конструктора.</li>
</ul>`,
  },

  {
    header: 'Этап 5. Монтаж',
    img: '',
    endText:
      'Обученные специалисты выездной службы в сопровождении конструктора выезжают на монтаж. Этот процесс включает в себя установку, настройку, прошивку (в некоторых случаях) и обучение персонала. Все это происходит под строгим контролем для обеспечения высокого качества и эффективности системы. Таким образом, производство гидроразводок — это сложный, многоэтапный процесс, который требует высокой квалификации специалистов, тщательного контроля и внимания к деталям.',
  },
]
</script>

<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <ParametersGrid :parameters="parameters" :header="header" data-aos="fade-up" data-aos-delay="200" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <div class="text-center mb-16 mt-8">
    <h1
      class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 bg-clip-text text-transparent mb-6"
    >
      Процесс изготовления гидролиний
    </h1>
    <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
  </div>
  <Step
    v-for="(step, index) in steps"
    :stepData="step"
    :index="index"
    :key="index + '-step-izgotovlenie'"
    class="mb-8"
  />

  <Contact data-aos="fade-up" />
</template>
