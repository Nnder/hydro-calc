<script setup>
const services = ref([
  {
    title: 'Ремонт Гидроцилиндров',
    image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13',
    category: 'repair'
  },
  {
    title: 'Изготовление Гидроцилиндров',
    image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13',
    category: 'manufacturing'
  },
  {
    title: 'Продажа Гидроцилиндров',
    image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13',
    category: 'sale'
  },
  {
    title: 'Гидроцилиндры для спецтехники',
    image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13',
    category: 'equipment'
  },
]);

const activeCategory = ref('all');
const categories = [
  { id: 'all', name: 'Все услуги' },
  { id: 'repair', name: 'Ремонт' },
  { id: 'manufacturing', name: 'Изготовление' },
  { id: 'sale', name: 'Продажа' },
  { id: 'equipment', name: 'Виды техники' }
];

const filteredServices = computed(() => {
  if (activeCategory.value === 'all') return services.value;
  return services.value.filter(service => service.category === activeCategory.value);
});
</script>

<template>
  <section class="bg-tech-light py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Услуги компании
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Качественные решения для вашей техники
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-2 rounded-full text-lg font-medium transition-colors',
            activeCategory === category.id
              ? 'bg-yellow-500 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in filteredServices"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="p-6 flex flex-col items-center">
            <div class="flex-shrink-0 mb-4">
              <NuxtImg
                :src="service.image"
                :alt="service.title"
                class="h-16 w-16 object-contain"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <h3 class="text-lg font-medium text-gray-900 text-center">
              {{ service.title }}
            </h3>
            <button
              class="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>