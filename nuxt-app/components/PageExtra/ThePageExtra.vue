<script setup>
import { ref } from 'vue';

const items = ref([
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
])

const parameters = ref([
  { value: 'до 200', description: 'Диаметр поршня, мм' },
  { value: 'до 2400', description: 'Ход поршня, мм' },
  { value: 'до 40', description: 'Max давление, МПа' },
])

</script>

<template>
  <section class="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">Дополнительные комплектующие</h2>
      <p class="mt-2 text-sm md:text-base">Всегда в наличии расходные материалы для РВД</p>
    </div>
    
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      <div 
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center"
      >
        <NuxtImg 
          :src="item.image" 
          :alt="item.title" 
          class="w-12 h-12 md:w-16 md:h-16 object-contain"
          loading="lazy"
        />
        <p class="mt-2 text-hydro-power text-sm md:text-base font-medium text-gray-800 text-center">{{ item.title }}</p>
      </div>
    </div>
  </section >

  <section class="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-start text-gray-900 mb-4 sm:mb-6 md:mb-8">
        ПАРАМЕТРЫ НАШИХ ГИДРОЦИЛИНДРОВ
    </h2>
    
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div 
        v-for="(param, index) in parameters"
        :key="index"
        class="bg-white p-3 sm:p-4"
        >
        <p class="text-lg sm:text-xl md:text-2xl font-bold text-hydro-power mb-1 sm:mb-2">{{ param.value }}</p>
        <div class="bg-hydro-power h-0.5 w-full mb-2 sm:mb-3"></div>
        <p class="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">{{ param.description }}</p>
        </div>
    </div>
   </section>

   <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-purple-800">
        <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div class="text-white max-w-2xl">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Изготовим нестандартное<br>
                оборудование по вашему проекту
            </h2>
            <p class="text-lg mb-6 opacity-90">
                Произведём гидроцилиндр по вашему чертежу,<br>
                техническому заданию или готовому образцу<br>
                с гарантией 12 месяцев
            </p>
            <button class="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-purple-800 transition-colors duration-300">
                Рассчитать стоимость
            </button>
            </div>
            
            <div class="hidden md:block">
            <NuxtImg 
                src="https://oboruduy.com/files/images/items/288/288279z5a7304d0.jpg" 
                alt="Гидроцилиндр" 
                class="w-64 h-64 object-contain"
                width="320"
                height="320"
            />
            </div>
        </div>
        </div>
    </div>
   </section>
</template>