<script setup>
import ThePageExtra from '~/components/PageExtra/ThePageExtra.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ParametersGrid from '~/components/Parameters/ParametersGrid.vue'
import ProductionEquipment from '~/components/Production/ProductionEquipment.vue'
import RvdTableWrapper from '~/components/Rvd-table/RvdTableWrapper.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

const header = 'ПАРАМЕТРЫ НАШИХ УТЕПЛИТЕЛЕЙ'

const description = `<p class="text-lg">
          Компания ООО "Абсолют Техно" является ведущим поставщиком высококачественных утеплителей в Нижнем Тагиле. 
          Мы предлагаем широкий ассортимент теплоизоляционных материалов для любых строительных задач.
        </p>
        <p class="text-lg">
          Все наши утеплители проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`

const imageUrl = 'https://www.slavyane8.ru/wp-content/uploads/2019/11/XXL-1.jpg'
const title = 'Продажа утеплителей в Нижнем Тагиле'

const items = ref([
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Минеральная вата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенополистирол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Базальтовые плиты',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Экструдированный пенополистирол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Фольгированный утеплитель',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенофол',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Стекловата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенопласт',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Керамзит',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Эковата',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пенополиуретан',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Пробковый утеплитель',
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13',
    title: 'Жидкая теплоизоляция',
  },
])

const blockData = {
  title: 'Эффективное утепление вашего дома',
  description:
    'Качественная теплоизоляция позволяет значительно снизить энергопотребление и создать комфортный микроклимат в помещении в любое время года',
  buttonText: 'Рассчитать стоимость',
  imageUrl: 'https://cmr24.by/uploads/Articles/42/ekskavator.png',
  imageAlt: 'утепление дома',
}

const mainSlideData = {
  src: 'https://lideron.by/wp-content/uploads/2024/02/recambios-coches1.jpg',
  title: 'Профессиональная продажа утеплителей',
  description:
    'Профессиональная продажа утеплителей в Нижнем Тагиле! Компания «ООО Абсолют Техно» предлагает качественные теплоизоляционные материалы по конкурентоспособным ценам с доставкой по всей Свердловской области.',
}

const blockDataText = {
  title: 'Что мы предлагаем?',
  description: `<p>Широкий ассортимент теплоизоляционных материалов для различных целей: утепление стен, полов, кровли, фасадов и фундаментов. Мы работаем с ведущими производителями и гарантируем высокое качество всей продукции.</p>
<p>Наши специалисты помогут подобрать оптимальный утеплитель для ваших задач, рассчитают необходимое количество материала и предоставят профессиональную консультацию по монтажу. Экономьте на отоплении и создайте комфортные условия в вашем доме!</p>`,
}

useHead({
  title: 'Уплатнение',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const slider = {
  videoSrc: '/videos/Lavrov.mp4',
  img: '/hydrocilinder.png',
  tag: 'Профессионально',
  title: 'Ремонт гидроцилиндров',
  text: 'Полный комплекс услуг по восстановлению гидравлики',
  features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Проектирование и изготовление гидроцилидров'],
  buttonText: 'Оставить заявку',
  additionalInfo: 'Срочный ремонт за 24 часа',
}
</script>

<template>
  <div class="relative w-full h-[600px] flex items-center justify-center text-white">
    <!-- Фон с затемнением -->
    <div class="absolute inset-0 bg-black/80 after:absolute after:inset-0 after:bg-black/60">
      <NuxtImg
        format="webp"
        src="/images/uplotnenie/slider-uplatnenie.png"
        alt="background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Контент -->
    <div class="relative z-10 w-full max-w-6xl px-6 flex flex-col gap-8">
      <!-- Верхний блок -->
      <div class="flex flex-col gap-4">
        <span
          v-if="slider.tag"
          class="bg-hydro-steel/20 text-white px-4 py-1.5 rounded-full w-fit font-semibold text-sm uppercase tracking-wider"
        >
          {{ slider.tag }}
        </span>
        <h2 class="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-3xl">
          {{ slider.title }}
        </h2>
      </div>

      <!-- Средний блок -->
      <div>
        <p class="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow">
          {{ slider.text }}
        </p>

        <ul v-if="slider.features" class="mt-6 flex flex-col gap-3 text-lg list-none p-0">
          <li v-for="(feature, i) in slider.features" :key="i" class="flex items-center">
            <Icon name="mdi-check-circle" class="mr-2 text-hydro-power" />
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Нижний блок -->
      <div class="flex flex-col gap-6 mt-4">
        <button
          class="w-fit uppercase py-3 px-5 shadow-xl text-white bg-hydro-power rounded-xl font-semibold text-base md:text-lg whitespace-nowrap flex items-center"
        >
          {{ slider.buttonText || 'Заказать' }}
          <Icon name="mdi-arrow-right" class="ml-2" />
        </button>

        <div v-if="slider.additionalInfo" class="flex items-center text-sm opacity-90">
          <Icon name="mdi-information-outline" size="small" class="mr-1" />
          {{ slider.additionalInfo }}
        </div>
      </div>
    </div>
  </div>

  <ProductionDescription :description="description" :image-url="imageUrl" :title="title" />
  <ContentWithImage :mainSlideData="mainSlideData" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" />
  <InformationBlock :blockData="blockData" />

  <AccessoriesGrid :items="items" />
  <Contact />
</template>
