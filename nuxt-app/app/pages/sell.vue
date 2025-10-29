<script setup>
import Consultation from '~/components/Block/Consultation.vue'

definePageMeta({
  path: `/sell`,
})

useHead({
  title: `Продажа товаров - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров. Большой ассортимент строительного оборудования, гидравлики и электростанций`,
    },
  ],
})

const categories = ref([
  {
    name: 'Продажа',
    active: true,
    bgText: 'Продажа',
    services: [
      {
        title: 'Уплотнения гидравлические',
        image: 'https://www.hydrott.ru/wp-content/uploads/2017/01/9117192.jpg',
        description: 'Широкий ассортимент уплотнительных элементов для гидроцилиндров',
        link: '/sell/sell-uplotnenie',
      },
      {
        title: 'Гидронасосы',
        image: 'https://gidromotor.by/img/pages/347-s.jpg?ver=172837676133&w=320',
        description: 'Гидравлические насосы ведущих производителей',
        link: '/sell/sell-gidronasosov',
      },
      {
        title: 'Гидроцилиндры',
        image: 'https://ozpp.ru/images/ozpp/gidrocilindr-0286.jpg',
        description: 'Готовые гидроцилиндры различных типоразмеров',
        link: '/sell/sell-gidrocilindrov',
      },
      {
        title: 'Фильтрующие элементы',
        image: 'https://fim.by/images/lp-photo/gidravlika.jpg',
        description: 'Фильтры для гидравлических систем',
        link: '/sell/sell-filtrov',
      },
      {
        title: 'Комплектующие РВД',
        image: 'https://rvdmarket.ru/thumb/2/X7X17oYARuFUVi_KYI5o5g/340r/d/rvd_v_zashchite.jpg',
        description: 'Фитинги и соединительные элементы для РВД',
        link: '/sell/sell-komplektushie-rvd',
      },
      {
        title: 'ГСМ и технические жидкости',
        image: 'https://ammoxx.ru/upload/medialibrary/577/57778c5c2b33268e2910c96f080beb6c.jpg',
        description: 'Масла и жидкости для гидравлических систем',
        link: '/sell/sell-shidkostey',
      },
      {
        title: 'Электростанции',
        image: 'https://tss.ru/upload/iblock/7fc/xilvh1zxj50p1434qffaquamxsbauann.jpg',
        description: 'Дизельные, безниновые и сварочные электростанции',
        link: '/sell/category/electrostancii',
      },
      {
        title: 'Строительное оборудование',
        image: 'https://tss.ru/upload/iblock/69c/0t7ppxa89e0ey7eb5h1r3h1i6r8hjsqa.jpg',
        description: 'Виброплиты, вибротрамбовки, мотопомпы и затирочные машины',
        link: '/sell/category/stroitelnoe-oborydovanie',
      },
      // {
      //   title: 'Режущие элементы для дорожной и строительной техники',
      //   image: 'https://avatars.mds.yandex.net/get-altay/11860411/2a0000018def25b2ab632cdef682b947d6c3/XXL_height',
      //   description: 'Ножи, коронки, зубъя, бокорезы, пиши, шнеки,',
      //   link: '/sell/sell-shidkostey',
      // },
      // {
      //   title: 'Ковшевая обвязка (пальцев, втулки)',
      //   image: 'https://avatars.mds.yandex.net/get-altay/11860411/2a0000018def25b2ab632cdef682b947d6c3/XXL_height',
      //   description: 'Ножи, коронки, зубъя, бокорезы',
      //   link: '/sell/sell-shidkostey',
      // },
      // {
      //   title: 'Ходовые элементы спецтехники',
      //   image: 'https://avatars.mds.yandex.net/get-altay/11860411/2a0000018def25b2ab632cdef682b947d6c3/XXL_height',
      //   description: 'Ножи, коронки, зубъя, бокорезы',
      //   link: '/sell/sell-shidkostey',
      // },
      // {
      //   title: 'Шнеки',
      //   image: 'https://avatars.mds.yandex.net/get-altay/11860411/2a0000018def25b2ab632cdef682b947d6c3/XXL_height',
      //   description: 'Ножи, коронки, зубъя, бокорезы',
      //   link: '/sell/sell-shidkostey',
      // },
      // {
      //   title: 'Буры',
      //   image: 'https://avatars.mds.yandex.net/get-altay/11860411/2a0000018def25b2ab632cdef682b947d6c3/XXL_height',
      //   description: 'Ножи, коронки, зубъя, бокорезы',
      //   link: '/sell/sell-shidkostey',
      // },
    ],
  },
])

const activeServices = computed(() => {
  return categories.value.find(cat => cat.active)?.services || []
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden py-8">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span class="text-blue-600">Продажа</span> Товаров
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Широкий вид ассортимента товаров</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink
          :to="service.link"
          v-for="(service, index) in activeServices"
          :key="index"
          class="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <div class="relative h-48 overflow-hidden flex-shrink-0">
            <NuxtImg
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:400px"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
              {{ service.description }}
            </p>

            <div
              class="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 hover:gap-3"
            >
              <span>Подробнее</span>
              <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <Consultation />
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
