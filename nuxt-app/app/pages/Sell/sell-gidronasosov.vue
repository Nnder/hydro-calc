<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Slide from '~/components/Slider/Slide.vue'
import NewProductBanner from '~/components/ProductGalleryWithThumbnails/NewProductBanner.vue'

definePageMeta({
  path: '/sell/sell-gidronasosov',
})

useHead({
  title: 'Продажа гидравлических насосов',
  meta: [
    {
      name: 'description',
      content: 'Гидронасосы для спецтехники и промышленного оборудования в Нижнем Тагиле',
    },
  ],
})

const description = `<p class="text-lg">
         Наши специалисты помогут подобрать оптимальный гидронасос для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидронасосами!
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`

const imageUrl = '/nasosi/block1.png'
const title = 'Продажа гидронасосов в Нижнем Тагиле'

const items = ref([
  {
    image: 'vtulka.jpeg',
    title: 'Аксиально-поршневые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Шестеренные насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Пластинчатые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Радиально-поршневые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Героторные насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы высокого давления',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы низкого давления',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Регулируемые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Нерегулируемые насосы',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для спецтехники',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для станков',
  },
  {
    image: 'vtulka.jpeg',
    title: 'Насосы для прессов',
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

const mainSlideData = {
  src: '/nasosi/block1.png',
  title: 'Подбор и продажа гидронасосов',
  description:
    'Профессиональная продажа гидравлических насосов в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные гидронасосы по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент гидравлических насосов для различных отраслей промышленности: строительная техника, станкостроение, прессовое оборудование, автомобильная промышленность. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный гидронасос для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидронасосами!</p>`,
}

const slider = {
  img: '/nasosi/block2.jpg',
  tag: 'Профессионально',
  title: 'Продажа гидронасосов',
  text: 'Широкий выбор гидравлических насосов',
  features: ['Подбор по параметрам', 'Гарантия 12 месяцев', 'Техническая консультация'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Доставка по области',
}


const bannerProps = {
  products: [
    {
      title: 'Аксиально-поршневые насосы',
      type: 'flange',
      pdfUrl: '/pdf/fittingi-dlya-rvd.pdf',
      images: [
        'https://www.omtgroup.ru/wp-content/uploads/2020/08/img_omt_flange.jpg',
        'https://ar-hydra.com/d/3000/d/Фланцы_SAE.jpg',
        'https://www.hydropart.ru/upload/image/2223/370688da60fdaf0a7f290c3986a81bb5.jpg',
      ],
      parameters: [
        { label: 'Материал корпуса', value: 'Чугун' },
        { label: 'Рабочее давление', value: 'до 360 бар' },
        { label: 'Расходная характеристика', value: '' },
        { label: 'Температура', value: '-40°C до +120°C' },
      ],
      description: [
        'Фланцы SAE предназначены для соединения гидравлических компонентов и систем высокого давления. Изготавливаются из высокопрочной стали с антикоррозийным покрытием.',
        'Применяются в промышленном оборудовании, строительной технике и гидравлических системах. Обеспечивают надежное и герметичное соединение при рабочих давлениях до 600 бар.',
      ],
      gridItem: { 
        image: '/flanec_sae.jpg', 
        title: 'Фланец SAE'
      }
    },
    {
      title: 'Пластинчатые насосы',
      type: 'seal',
      pdfUrl: '/pdf/nippeli-rezbovye.pdf',
      images: [
        'https://сантехник-а.рф/upload/iblock/c0e/lc6oq8r25thjx8on3fu0085ortv5zpt4.jpg',
        'https://ita-filter.ru/image/cache/catalog/product/F9079-29-1000x1000.jpg',
        'https://lazer-technology.ru/images/detailed/2/full_Уплотнительное_кольцо_32.2×24×3.6×2.7__1_.jpg',
      ],
      parameters: [
        { label: 'Материал', value: 'NBR, Viton, EPDM' },
        { label: 'Температура', value: '-30°C до +200°C' },
        { label: 'Давление', value: 'до 700 бар' },
        { label: 'Стандарт', value: 'DIN, ISO' },
      ],
      description: [
        'Уплотнительные кольца изготавливаются из качественной резины NBR, Viton или EPDM для различных рабочих сред и температурных условий.',
        'Обеспечивают герметичность соединений в гидравлических системах, предотвращают утечки масла и других рабочих жидкостей.',
      ],
      gridItem: { 
        image: '/uplotnitelnoe_kolce.jpeg', 
        title: 'Уплотнительное кольцо'
      }
    },
    {
      title: 'Радиально-поршневые насосы',
      type: 'quick_connect',
      pdfUrl: '/pdf/mufty-soedinitelnye.pdf',
      images: [
        'https://oberon-weld.ru/upload/iblock/2d2/grgzqxh2p4hxvl69f04ynlzh9ce0u246/FA3047.png',
        'https://barshydraulic.ru/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/S/F/SF10-40.jpg',
        'https://st22.stpulscen.ru/images/product/445/686/695_original.jpg',
      ],
      parameters: [
        { label: 'Тип', value: 'ISO 16028' },
        { label: 'Давление', value: 'до 350 бар' },
        { label: 'Размер', value: '1/4" - 1"' },
        { label: 'Материал', value: 'Сталь, нерж. сталь' },
      ],
      description: [
        'Быстросъёмные соединения позволяют быстро и безопасно подсоединять и отсоединять гидравлические линии без утечки жидкости.',
        'Идеальное решение для частого подключения/отключения оборудования. Оснащены системой блокировки для предотвращения случайного отсоединения.',
      ],
      gridItem: { 
        image: '/bistrosemnoe_soedinenie.jpeg', 
        title: 'Быстросъёмное соединение'
      }
    },
    {
      title: 'Шестеренные насосы',
      type: 'protection',
      pdfUrl: '/pdf/zaglushki-perehodniki.pdf',
      images: [
        'https://www.vivtech.ru/upload/iblock/ba1/ndpxoi7aotw70sqbgjho1ml0fm6i056a/a17.jpg',
        'https://www.vivtech.ru/upload/iblock/e96/ov69907axb8a7aaikl7xu9602lrks0bp/a21.jpg',
        'https://avatars.mds.yandex.net/get-mpic/12261762/2a0000018c1aa38d6c5dc4a1d7d124390add/orig',
      ],
      parameters: [
        { label: 'Материал', value: 'Полиуретан, ПВХ' },
        { label: 'Диаметр', value: '6-32 мм' },
        { label: 'Температура', value: '-40°C до +90°C' },
        { label: 'Цвет', value: 'Черный, оранжевый' },
      ],
      description: [
        'Защитные оболочки предохраняют гидравлические шланги и кабели от механических повреждений, истирания и воздействия агрессивных сред.',
        'Изготавливаются из износостойких полимерных материалов, устойчивых к УФ-излучению и перепадам температур.',
      ],
      gridItem: { 
        image: '/zashitnie_obolochi.jpeg', 
        title: 'Защитные оболочки'
      }
    },
  ],
  
  gridItems: function() {
    return this.products.map(product => product.gridItem)
  },
  
  defaultImages: [
    'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  ],
  
  defaultDescription: [
    'Высококачественные комплектующие для РВД.',
    'Все компоненты соответствуют международным стандартам.',
  ],
  
  defaultParameters: [
    { label: 'Размер', value: 'Стандартный' },
    { label: 'Материал', value: 'Высокопрочный' },
    { label: 'Давление', value: 'до 300 бар' },
  ],
  
  defaultPdfUrl: '/pdf/komplektuyushchie-rvd-obshchiy.pdf',
  
  initialProductType: 'flange'
}
</script>

<template>
  <Slide :slider="slider" data-aos="fade-up" data-aos-delay="200" />

  <ProductionDescription
    :description="description"
    :image-url="imageUrl"
    :title="title"
    data-aos="fade-up"
    data-aos-delay="200"
  />

  <!-- <NewProductBanner :bannerProps="bannerProps" title="Варианты насосов" data-aos="fade-up" /> -->
  <!-- <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" /> -->
  <PartnerBlock :blockDataText="blockDataText" imageUrl="/nasosi/block1.png" variant="default" data-aos="fade-up" />
  <InformationBlock :blockData="blockData" data-aos="fade-up" />

  <!-- <AccessoriesGrid :items="items" data-aos="fade-up" /> -->
  <Contact />
</template>
