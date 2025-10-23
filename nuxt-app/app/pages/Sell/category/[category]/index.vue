<script setup>
import Consultation from '~/components/Block/Consultation.vue'
import { findCategoryByName } from '~/helpers/treeSearch'

definePageMeta({
  path: `/sell/category/:category?`,
})

useHead({
  title: `Продажа товаров - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров`,
    },
  ],
})

const route = useRoute()
const activeCategory = ref(route.params.category || 'kovshi')

const data = ref([])

// Используем useAsyncData для SSR, API теперь кеширует данные на сервере
const { data: xml } = await useAsyncData('xml-data', () => $fetch('/api/xml'))

// Теперь используем composable для парсинга (данные из кеша API)
const { sections } = xml.value

// Твоя логика с findCategoryFromUrl и data.value
const result = [] || findCategoryByName(sections, activeCategory.value)

// data.value = result?.children?.length ? result.children : result?.offers || []
console.log(xml.value)
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
          v-for="(service, index) in data"
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
