<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import AccessoriesGrid from '~/components/Accessories/AccessoriesGrid.vue'
import { accessoriesItems } from '~/data/mocks'
import InformationBlockLeft from '~/components/Block/InformationBlockLeft.vue'

definePageMeta({
  path: '/sell/sell-uplotnenie',
})

useHead({
  title: 'Продажа уплотнений для гидравлики',
  meta: [
    {
      name: 'description',
      content: 'Качественные уплотнения для гидравлических систем по доступным ценам в Нижнем Тагиле',
    },
  ],
})

const imageUrl = 'images/uplotnenie/block.jpeg'



const blockData = {
  title: 'Надежные уплотнения для вашей техники',
  description:
    'Качественные уплотнительные элементы обеспечивают герметичность гидравлических систем и продлевают срок службы оборудования',
  buttonText: 'Подобрать уплотнение',
  imageUrl: 'images/uplotnenie/i.png',
  imageAlt: 'гидравлические уплотнения',
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональная продажа уплотнений',
  description:
    'Профессиональная продажа уплотнительных элементов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные уплотнения по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Продажа уплотнений в Нижнем Тагиле',
  description: `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных уплотнительных элементов в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент уплотнений для гидравлических систем любого типа и сложности.
        </p>
        <p class="text-lg">
          Все наши уплотнения проходят строгий контроль качества и соответствуют международным стандартам. 
        </p>`
}

const slider = {
  img: '/images/uplotnenie/slider-uplatnenie.png',
  tag: 'Профессионально',
  title: 'Продажа уплотнений',
  text: 'Полный ассортимент уплотнительных элементов для гидравлики',
  features: ['Подбор за 30 минут', 'Гарантия качества', 'Оригиналы и аналоги'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Быстрая доставка',
}

const handlePartSelected = ({ part, index }) => {
  // Дополнительная логика при выборе детали
  console.log('Part selected:', part.name)
}

const handleImageChanged = newImage => {
  console.log('Image changed to:', newImage)
}

const MainCalculatorImage = ref('/calculator/1.png')

const hydrantParts = ref([
    {
    name: 'Грязесьемники',
    features: [
  'Для гидроцилиндров',
'Для штока',
'Для направляющих',
'Для оптических линеек',
    ],
    description: '',
    selected: false,
    show: false,
    color: 'bg-indigo-600/50 border-indigo-600',
    // onSelect: () => {
    //   const val = !hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden
    //   hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden = val
    //   if (val) {
    //     MainCalculatorImage.value = '/calculator/1.png'
    //   } else {
    //     MainCalculatorImage.value = '/calculator/1.png'
    //   }
    // },
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' },
  },
   {
    name: 'Уплотнения для штока',
    description: `Уплотнение штока предназначено для уплотнения гидравлических и пневматических систем. Отличие манжеты для уплотнения штока заключается в назначении и способе монтажа.  Штоковое уплотнение устанавливается в посадочное место на внутренней поверхности гидросистемы или пневмосистемы, при этом рабочая кромка уплотнения штока находится на наружной поверхности штока, совершающего поступательное движение, предотвращая утечки в гидравлических и пневматических системах.

Классификация штокового уплотнения:
`,

features: [
  'Односторонние (манжета воротниковая)',
'Двухсторонние',
'Уплотнение штока гидроцилиндра',
'Уплотнение штока пневмоцилиндра',
'Составные уплотнения штока',
'Не составные уплотнения штока',
    ],
    selected: false,
    show: false,
    color: 'bg-blue-300/50 border-blue-300',
    highlight: { top: '20%', left: '80%', width: '15%', height: '60%' },
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Замена проушин').hidden
      hydrantParts.value.find(item => item.name === 'Замена проушин').hidden = val
      if (val) {
        MainCalculatorImage.value = '/calculator/1.png'
      } else {
        MainCalculatorImage.value = '/calculator/1.png'
      }
    },
  },

{
    name: 'Направляющие кольца',
    description: 'Предназначено для предотвращения контакта при линейном возвратно поступательном перемещении между поршнем (наружной поверхностью) и цилиндром (внутренней поверхностью гильзы) или между крышкой цилиндра и штоком. Опорно-направляющее кольцо штока и поршня для гидроцилиндра. Обычно для облегчения монтажа направляющие кольца уплотнения изготавливают разрезными – разрез под углом 45 градусов.',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },


  {
    name: 'Опорные кольца',
    selected: false,
    show: false,
    description:
      'Опорные кольца (защитные кольца для уплотнительных колец) используются как силовые элементы в системах гидравлических уплотнений, а также для предотвращения повреждения манжет при больших уплотнительных зазорах. Материалы для изготовления  могут содержать различные добавки для более длительной и продуктивной эксплуатации в узлах гидравлических и пневматических систем, в том числе изготавливается из:',
    features: [
      'Полиуретана',
      'Фторопласта',
      'Полиацеталя',
    ],
    highlight: { top: '25%', left: '30%', width: '20%', height: '50%' }, 
  },
  
  {
    name: 'Уплотнительные кольца',
    description: 'Деталь в виде обруча с круглым поперечным сечением, позволяющая изолировать друг от друга две среды. Назначение колец заключается в уплотнении подвижных деталей (насосов, гидроцилиндров, поршней) и неподвижных соединений различных агрегатов и устройств: гидравлических; пневматических; смазочных; топливных. Уплотняющее воздействие достигается за счет осевого или радиального сжатия. Если статическое уплотнение для гидравлики (уплотнительное кольцо) работает некачественно, то изоляция элементов нарушается. Это приводит к выходу из строя либо конкретного узла (где было установлено кольцо), либо оборудования в целом. Для беспрерывной работы деталей оборудования необходимо своевременно приобрести и заменить кольца РТИ. В зависимости от сечения кольца (seal-ring) делятся на o-ring, x-ring.'
    ,
    features: [
      'Термостойкие',
      'Резиновые',
      'Полиуретановые',
      'Полиамидные',
      'Фторопластовые',
      'Фторкаучуковые',
    ],
    selected: false,
    show: false,
    color: 'bg-green-500/50 border-green-500',
    highlight: { top: '25%', left: '30%', width: '20%', height: '50%' },
  },
  {
    name: 'Уплотнения для поршня',
    description: 'Уплотнение гидроцилиндра поршня - это манжета поршневая предназначенная для обеспечения герметичности в зазоре поршень-цилиндр. Отсутствие уплотнения поршня приводит к снижению коэффициента полезного действия двигателя, усилию гидропривода. С ростом зазора возрастает риск полного отказа оборудования. Уплотнение поршня имеет форму кольца. Оно фиксируется в открытых или закрытых проточенных канавках и состоит из одного или нескольких элементов. Изготавливается из фторопласта, полиуретана , резины (или с наполнителями).',
    selected: false,
    show: false,
    color: 'bg-teal-600/50 border-teal-600',
    highlight: { top: '40%', left: '45%', width: '15%', height: '10%' },
  },
  {
    name: 'Уплотнения для ротора',
    description: `Роторное уплотнение
При работе двигателя вал и другие элементы испытывают поступательное и вращательное движение, которое может негативно сказаться на целостности элементов механизма. Чтобы не допустить этого, используются роторные уплотнения, которые состоят из неразъемного уплотнительного кольца и поджимного кольца круглого сечения.

Разновидности уплотнения для вращающихся деталей
Уплотнение ротора турбины по принципу действия разделяется на контактное и бесконтактное. В первом случае защита обеспечивается за счет плотного контакта деталей в уплотнениях, такой метод используется при средних и низких скоростях вращения вала. Это защищает двигатель не только от механических повреждений, но еще и от загрязнений и утечек масла.

Контактные уплотнители делятся на несколько разновидностей:

`,
features: [
      'Торцевые по кольцевой поверхности',
      'Сальниковые',
      'Манжетные',
      'Разрезные пружинные кольца',
    ],
    selected: false,
    show: false,
    color: 'bg-sky-700/50 border-sky-700',
    highlight: { top: '30%', left: '50%', width: '30%', height: '40%' },
  },
 
])

const items = ref([
  {
    image: 'https://quers.ru/upload/iblock/fb1/ql3pw6g3v5buegssu02i46ffazmz4ati/opornoe_koltso.png',
    title: 'Опорные кольца',
  },
  {
    image: 'https://quers.ru/upload/iblock/5d0/utqpcuxpoxualvgepbftqmlyfnmn2qlb/napravlyayushchee_koltso.png',
    title: 'Направляющие кольца ',
  },
  {
    image: 'https://quers.ru/upload/iblock/96c/uw0a66rmoxh2g5be63v4w8byenyh7pl7/koltso_poliuretanovoe0.png',
    title: 'Уплотнительные кольца',
  },
  {
    image: 'https://quers.ru/upload/iblock/877/zotf6amq29k3blq0m4sfaug6jdllde05/uplotneniya-dlya-porshnya.png',
    title: 'Уплотнения для поршня',
  },
  {
    image: 'https://quers.ru/upload/iblock/9c7/ckigau3mojo97712hdgff1xtg47b2b59/uplotnenie-dlya-vala.png',
    title: 'Уплотнения для ротора',
  },
  {
    image: 'https://quers.ru/upload/iblock/e01/5p8nhogpwgvn406k1ip1iibeq0pzfnm9/uplotnenie-shtoka.png',
    title: 'Уплотнения для штока',
  },
  {
    image: 'https://quers.ru/upload/iblock/3b8/bcje6rm00fsha1d6qftsy9ha2iicp79z/gryazesemnik2_0-_1_.png',
    title: 'Грязесьемникиы',
  },
])
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->

  <!-- <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  /> -->

  <PartnerBlock :blockDataText="blockDataText" :imageUrl="imageUrl" variant="image-right" data-aos="fade-up" data-aos-delay="200"/>

  <!-- Уплотнительные элементы -->

  <RepairPartsSelector
    :title="'Выберите детали для ремонта'"
    :subtitle="'Отметьте необходимые компоненты гидроцилиндра'"
    :parts="hydrantParts"
    :main-image="MainCalculatorImage"
    :image-alt="'Профессиональный ремонт гидроцилиндров'"
    image-id="hydroImage"
    :selectorData="true"
    @part-selected="handlePartSelected"
    @image-changed="handleImageChanged"
  />

  <AccessoriesGrid :items="items"/>
   
  <!-- <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" /> -->
  <!-- <InformationBlock :blockData="blockData" data-aos="fade-up" /> -->
  <InformationBlockLeft :blockData="blockData" position="left" data-aos="fade-up" />

  <!-- блок картинками в ряд на всю ширину при нажатии нужно чтобы раскрывалась элемента появлялся текст -->


  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
