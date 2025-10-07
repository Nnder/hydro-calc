<script setup>
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import RvdTableSlider from '~/components/Rvd-table/RvdTableSlider.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import AccessoriesGrid from '~/components/Accessories/AccessoriesGrid.vue'

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
  { value: 'от -50°C до +100°C', description: 'Температурный диапазон' },
])

const header = 'ПАРАМЕТРЫ ИЗГОТОВЛЯЕМЫХ РВД'

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" располагает современным производственным комплексом. Специализируемся на
          изготовлении рукавов высокого давления с использованием высококачественного оборудования.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества на каждом этапе
          производства.
        </p>`

const imageUrl = '/rvd.jpg'
const title = 'Изготовление и ремонт РВД по Свердловской области'

const items = ref([
  {
    image: '/flanec_sae.jpg',
    title: 'Фланец SAE',
  },
  {
    image: '/uplotnitelnoe_kolce.jpeg',
    title: 'Уплотнительное кольцо',
  },
  {
    image: '/bistrosemnoe_soedinenie.jpeg',
    title: 'Быстросъёмное соединение',
  },
  {
    image: '/zashitnie_obolochi.jpeg',
    title: 'Защитные оболочки',
  },
  {
    image: '/perehodnik.jpeg',
    title: 'Переходник',
  },
  {
    image: '/zalishki_2.jpeg',
    title: 'Заглушка',
  },
])


const blockData = {
  title: 'Производим рукава высокого давления по индивидуальным параметрам',
  description:
    'Изготовим РВД любого диаметра и конфигурации\nпо вашим техническим требованиям или образцу\nс гарантией до 12 месяцев',
  buttonText: 'Заказать РВД',
  imageUrl: '/rvd_3.png',
  imageAlt: 'Производство рукавов высокого давления',
}

const mainSlideData = {
  src: 'https://lirp.cdn-website.com/0f153195/dms3rep/multi/opt/1402189-2-Equipment-1920w.jpg',
  title: 'Изготовление гидравлических трубок по вашим размерам или образцу',
  description: 'Производим ремонт гидравлических трубок, изготовление и монтаж дополнительных гидравлических линий (гидролиний)',
}
</script>

<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <div class="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col gap-4 my-4">
     <p class="text-lg font-medium">Процесс производства гидролиний, предназначенных для дополнительного навесного оборудования, может показаться на первый взгляд несложным процессом, ведь это просто трубопроводы и рукава высокого давления.

Однако давайте взглянем подробнее на хронологию этого процесса, используя в качестве примера новый проект.</p>
    <h2 class="text-4xl font-bold">
      Этап 1. Сбор данных
    </h2>
   
    <NuxtImg src="https://www.tradicia-k.ru/images/articles/original/000/949/4862.jpg"/>

    <p class="text-lg font-medium">После подтверждения заказа высококвалифицированные конструкторы начинают сбор и анализ технической документации, включая гидравлические и электрические схемы, а также каталоги запасных частей.</p>
  </div>
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <ProductionEquipment data-aos="fade-up" />
  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" data-aos="fade-up" />
  <AccessoriesGrid :items="items" data-aos="fade-up" />
  <Contact data-aos="fade-up" />
</template>
