<script setup>
import { ref, computed } from 'vue';

const categories = ref([
  {
    name: 'Ремонт',
    active: true,
    bgText: 'Ремонт',
    services: [
      {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Насосов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Моторов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Клапанов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Насосов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Моторов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Ремонт Клапанов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      }
    ]
  },
  {
    name: 'Изготовление',
    active: false,
    bgText: 'Изготовление',
    services: [
      {
        title: 'Изготовление Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Изготовление Кронштейнов',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      }
    ]
  },
  {
    name: 'Продажа',
    active: false,
    bgText: 'Продажа',
    services: [
      {
        title: 'Продажа Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      },
      {
        title: 'Продажа Запчастей',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
      }
    ]
  },
]);

const switchCategory = (index) => {
  categories.value.forEach((cat, i) => {
    cat.active = i === index;
  });
};

const activeServices = computed(() => {
  return categories.value.find(cat => cat.active)?.services || [];
});

const activeBgText = computed(() => {
  return categories.value.find(cat => cat.active)?.bgText || 'Услуги';
});
</script>

<template>
  <div class="bg-gray-50 relative overflow-hidden min-h-screen py-8 md:py-12">
    <div class="absolute top-[40%] md:top-[30%] left-0 right-0 flex items-center justify-center pointer-events-none z-0 opacity-50 md:opacity-70">
      <span class="text-[18vw] md:text-[18vw] font-black whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500">
        {{ activeBgText }}
      </span>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 relative z-10">
      <div class="text-center mb-8 md:mb-12">
        <h6 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 relative inline-block">
          <span class="relative z-10">Услуги компании</span>
          <span class="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-blue-500/30 z-0 -mb-0.5 md:-mb-1"></span>
        </h6>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Мы предлагаем широкий спектр услуг для вашей техники
        </p>
      </div>

      <div class="space-y-6 md:space-y-8">
        <div class="flex flex-wrap justify-center gap-2 md:gap-4">
          <button 
            v-for="(category, index) in categories"
            :key="index"
            @click="switchCategory(index)"
            :class="[
              'px-4 py-2  rounded-full md:px-6 md:py-3 text-xs md:text-sm lg:text-base font-medium transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 md:focus:ring-offset-2',
              'w-full sm:w-auto',
              category.active 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md md:shadow-lg shadow-blue-500/20'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm md:shadow-md'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div 
            v-for="(service, index) in activeServices"
            :key="index"
            class="group relative rounded-xl shadow-md md:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-64 md:h-80"
          >
            <NuxtImg 
              :src="service.image" 
              :alt="service.title" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:400px"
            />
            
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
            
            <div class="relative z-10 p-4 md:p-6 flex flex-col items-center text-center h-full justify-between">
              <h3 class="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                {{ service.title }}
              </h3>
              
              <button class="mt-auto px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium rounded-full bg-white/90 text-blue-600 hover:bg-white transition-all duration-300 transform group-hover:scale-105 shadow-sm md:shadow-md">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}


@media (hover: hover) {
  .group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
  }
  .hover\:shadow-xl:hover {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  }
}
</style>