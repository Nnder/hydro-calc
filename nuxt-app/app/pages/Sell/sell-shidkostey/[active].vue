<script setup>
import Contact from '~/components/Page/Contact.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'
import RepairPartsSelectorSpecial from '~/components/SpecialPages/RepairPartsSelectorSpecial.vue'
import RepairSpecialBlock from '~/components/SpecialPages/RepairSpecialBlock.vue'

definePageMeta({
  path: '/sell/sell-shidkostey/:active?',
})

useHead({
  title: 'Продажа ГСМ и технических жидкостей',
  meta: [
    {
      name: 'description',
      content: 'Горюче-смазочные материалы и технические жидкости для гидравлики в Нижнем Тагиле',
    },
  ],
})

const route = useRoute()
const { clearData } = useCalculatorSelector()
const activeSection = ref(route.params.active || 'hydraulic')

const blockData = {
  title: 'Качественные жидкости для надежной работы техники',
  description:
    'Сертифицированные ГСМ и технические жидкости обеспечивают оптимальную работу вашего оборудования и продлевают его срок службы',
  buttonText: 'Подобрать жидкость',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'ГСМ и технические жидкости',
}

const blockDataText = {
  imageurl: 'https://ecol.eu/wp-content/uploads/2023/02/badania-olejow-smarow-przemyslowych.webp',
  title: 'Продажа ГСМ',
  description: `<p>Широкий ассортимент горюче-смазочных материалов и технических жидкостей для различных отраслей промышленности: гидравлические масла, моторные масла, трансмиссионные жидкости, пластичные смазки, специальные жидкости. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальные жидкости для вашего оборудования, предоставят техническую документацию и профессиональную консультацию по применению. Обеспечьте надежную работу вашей техники с нашими ГСМ и техническими жидкостями!</p>`,
}

const slider = {
  img: 'https://grizly.club/uploads/posts/2023-02/1675382192_grizly-club-p-zamena-masla-klipart-31.jpg',
  tag: 'Профессионально',
  title: 'Продажа ГСМ и жидкостей',
  text: 'Широкий выбор технических жидкостей',
  features: ['Подбор по спецификациям', 'Сертификаты качества', 'Техническое консультирование'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка и хранение',
}

const sectionsData = {
  hydraulic: {
    type: 'Гидравлические',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          dataSelect: true,
          childComponent: RepairSpecialBlock,
          options: [
            {
              name: 'Объем',
              variants: [
                { name: '2л', value: 2, type: 'btn' },
                { name: '5л', value: 5, type: 'btn' },
                { name: '20л', value: 20, type: 'btn' },
              ],
            },
            {
              name: 'Вязкость',
              variants: [
                { name: '2', value: 2, type: 'btn' },
                { name: '10', value: 5, type: 'btn' },
                { name: '30', value: 20, type: 'btn' },
              ],
            },
            {
              name: 'Кол-во',
              variants: [
                { name: '2', value: 2, type: 'input' },
                { name: '10', value: 5, type: 'input' },
                { name: '30', value: 20, type: 'input' },
              ],
            },
          ],
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
          dataSelect: true,
          childComponent: RepairSpecialBlock,
          options: [
            {
              name: 'Объем',
              variants: [
                { name: '2л', value: 2, type: 'btn' },
                { name: '5л', value: 5, type: 'btn' },
                { name: '20л', value: 20, type: 'btn' },
              ],
            },
            {
              name: 'Кол-во',
              variants: [
                { name: '2', value: 2, type: 'input' },
                { name: '10', value: 5, type: 'input' },
                { name: '30', value: 20, type: 'input' },
              ],
            },
          ],
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  motors: {
    type: 'Моторные',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  transmition: {
    type: 'Трансмосионные',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  hydroTrans: {
    type: 'Гидро-трансмиссионные',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  compress: {
    type: 'Компрессорное',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  liquid: {
    type: 'Смазки',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  antifreeze: {
    type: 'Антифриз',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
  SOSH: {
    type: 'СОЖ',
    globalTable: {
      title: 'Выберите производителя',
      subtitle: 'Отметьте необходимые компоненты для выбора масла',
      parts: [
        {
          name: 'Vitex',
          selected: false,
          show: false,
          description:
            'Полная диагностика ковша с использованием современного оборудования для выявления всех дефектов.',
          features: [
            'hvlp-15: ',
            'Промер отверстий под пальцы с выявлением степени износа',
            'Составление дефектовочной ведомости',
          ],
          highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
          icon: 'mdi:magnify',
        },
        {
          name: 'Ремонт или замена режущих ножей',
          selected: false,
          show: false,
          description: 'Восстановление или замена изношенных режущих кромок ковша.',
          features: ['Замена изношенных ножей', 'Восстановление режущей кромки', 'Усиление конструкции'],
          highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
          color: 'bg-orange-400/50 border-orange-400',
          icon: 'mdi:knife',
        },
        {
          name: 'Усиление стенок и днища',
          selected: false,
          show: false,
          description: 'Усиление конструктивных элементов ковша для повышения износостойкости.',
          features: ['Наварка дополнительных листов', 'Усиление ребер жесткости', 'Замена изношенных участков'],
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
        {
          name: 'Ремонт и восстановление проушин',
          selected: false,
          show: false,
          description: 'Расточка проушин на ремонтный размер или восстановление методом наплавки',
          highlight: { top: '45%', left: '25%', width: '50%', height: '20%' },
          color: 'bg-blue-400/50 border-blue-400',
          icon: 'mdi:hammer-wrench',
        },
      ],
      mainImage: '/calculator/Сборка ковша.png',
      imageAlt: 'Профессиональный ремонт ковшей',
      imageId: 'kovshiImage',
      highlightMode: 'single',
      name: 'Здравствуйте необходимый перечень работ по ковшам',
      selectorData: true,
    },
    title: {
      gtitle: 'Этапы ремонта Ковшей',
      subtitle: 'Полный цикл восстановления Ковшей',
    },
    infoBlock: {
      title: 'Ремонт ковшей',
      description:
        'Восстановление режущих элементов, усиление днища и стенок ковша, восстановление отверстий под пальцы. Профессиональный подход к ремонту ковшей.',
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
    header: 'Технические характеристики ремонта ковшей',
    partnerBlock: {
      imageurl: 'https://www.wearpartsco.com/images/services/serv-bucketrep_01.jpg',
      title: 'Почему выбирают наш ремонт ковшей?',
      description: `<p>Мы специализируемся на восстановлении ковшей для экскаваторов, погрузчиков и другой спецтехники. Используем только сертифицированные материалы и современное оборудование.</p>
<p>Наши технологии позволяют не просто восстановить геометрию ковша, но и значительно увеличить его износостойкость за счет применения специальных наплавочных материалов.</p>`,
      benefits: [
        'Увеличение срока службы в 1,5-2 раза',
        'Снижение эксплуатационных расходов',
        'Соблюдение заводских допусков и параметров',
        'Работаем с ковшами всех производителей',
      ],
    },
    position: 'right',
  },
}

const setActiveSection = section => {
  activeSection.value = section
}

const currentGlobalTable = computed(() => {
  clearData()
  return sectionsData[activeSection.value].globalTable
})
const currentSteps = computed(() => sectionsData[activeSection.value].steps)
const currentTitle = computed(() => sectionsData[activeSection.value].title)
const currentInfoBlock = computed(() => sectionsData[activeSection.value].infoBlock)
const currentParameters = computed(() => sectionsData[activeSection.value].parameters)
const currentHeader = computed(() => sectionsData[activeSection.value].header)
const currentPartnerBlock = computed(() => sectionsData[activeSection.value].partnerBlock)
const currentPosition = computed(() => sectionsData[activeSection.value].position)
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <!-- <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  /> -->

  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->
  <PartnerBlock
    :blockDataText="blockDataText"
    imageUrl="/nasosi/block1.png"
    variant="image-right"
    data-aos="fade-up"
    data-aos-delay="200"
  />

  <!-- <NewProductBanner :bannerProps="bannerProps" data-aos="fade-up" /> -->
  <h2 class="text-3xl font-bold text-center">Выбирите техническую жидкость</h2>
  <div class="max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8">
    <div class="flex gap-4 flex-wrap items-center">
      <button
        v-for="(item, value) in sectionsData"
        class="w-72 justify-center mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        :class="{ 'ring-2 ring-offset-2 ring-hydro-power scale-105': activeSection === value }"
        @click="setActiveSection(value)"
      >
        {{ item.type }}
      </button>
    </div>
  </div>
  <RepairPartsSelectorSpecial :GlobalTable="currentGlobalTable" data-aos="fade-up" />
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact data-aos="fade-up" />
</template>
