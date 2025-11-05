<script setup lang="ts">
import { findCategoryByName } from '~/helpers/treeSearch'

definePageMeta({
  path: `/sell/category/:category?/product/:product?`,
})

const route = useRoute()
const activeCategory = ref(route.params.category || 'kovshi')
const activeProduct = ref(route.params.product || 'kovshi')

// const { data: xml } = await useAsyncData('xml-data', () => $fetch('/api/xml'))

const { data: xml } = await useAsyncData(`xml-data-${activeProduct.value}`, () =>
  $fetch(`https://api.athydro.ru/offers?nameSearch=${activeProduct.value}`)
)

// const { sections } = xml.value

// const result = findCategoryByName(sections, activeCategory.value)
const selectedOffer = ref(xml.value[0])

selectedOffer.value.description =
  selectedOffer.value.params['Детальное описание товара2'] || selectedOffer.value.params['Описание товара']

function fixImageUrls(obj) {
  if (!obj.value || !obj.value.description) {
    return obj
  }

  const imgRegex = /<img([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi

  obj.value.description = obj.value.description.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return match
    }
    const fixedSrc = `https://www.tss.ru/${src}`
    return `<img${beforeSrc}src="${fixedSrc}"${afterSrc}>`
  })

  return obj
}

fixImageUrls(selectedOffer)

selectedOffer.value.descriptionSeo = selectedOffer.value.params['Описание товара']

const filterParams = ['Картинки2', 'Техническое обслуживание', 'Детальное описание товара2', 'Описание товара']

// Фильтруем объект: исключаем ключи из filterParams
selectedOffer.value.params = Object.fromEntries(
  Object.entries(selectedOffer.value.params).filter(([key]) => !filterParams.includes(key))
)

const currentImageIndex = ref(0)
const mainImage = computed(() => {
  return selectedOffer.value.pictures[currentImageIndex.value] || selectedOffer.value.pictures[0]
})

const nextImage = () => {
  if (selectedOffer.value.pictures.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedOffer.value.pictures.length
  }
}

const prevImage = () => {
  if (selectedOffer.value.pictures.length > 1) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + selectedOffer.value.pictures.length) % selectedOffer.value.pictures.length
  }
}

const selectImage = (index: number) => {
  currentImageIndex.value = index
}

const { open } = useModal()

const { newData } = useCalculatorSelector()
const handleOffer = () => {
  const result = {
    name: `Выбранный товар`,
    selected: [`${selectedOffer.value.title} ${selectedOffer.value.price ? selectedOffer.value.price + ' ₽' : ''}`],
    // selected: ['- Диаметр поршня (мм): ' + selectedOffer.value.title],
  }

  newData(result)
  open(false)
}

useHead({
  title: `${selectedOffer.value.title} - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: selectedOffer.value.descriptionSeo,
    },
  ],
})
</script>
<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
    <div class="container mx-auto max-w-7xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-6">
        <nav class="flex text-sm text-blue-600">
          <a href="/" class="hover:text-blue-800 transition-colors">Главная</a>
          <span class="mx-2">/</span>
          <a :href="selectedOffer.url" class="hover:text-blue-800 transition-colors">Каталог</a>
          <span class="mx-2">/</span>
          <span class="text-blue-400">{{ selectedOffer.name }}</span>
        </nav>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div class="space-y-4">
          <div class="relative rounded-2xl overflow-hidden bg-white shadow-lg aspect-square">
            <img :src="mainImage" :alt="selectedOffer.name" class="w-full h-full object-contain p-4" />

            <div
              v-if="selectedOffer.pictures.length > 1"
              class="absolute inset-0 flex items-center justify-between p-4"
            >
              <button
                @click="prevImage"
                class="bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextImage"
                class="bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Миниатюры -->
          <div v-if="selectedOffer.pictures.length > 1" class="grid grid-cols-4 gap-3">
            <button
              v-for="(image, index) in selectedOffer.pictures"
              :key="index"
              @click="selectImage(index)"
              class="rounded-xl overflow-hidden border-2 transition-all"
              :class="
                currentImageIndex === index ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-blue-300'
              "
            >
              <img
                :src="image"
                :alt="`${selectedOffer.name} - изображение ${index + 1}`"
                class="w-full h-20 object-cover"
              />
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <h1 class="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
              {{ selectedOffer.name }}
            </h1>
            <!-- <div class="flex flex-wrap gap-4 text-sm text-blue-600">
              <div><span class="font-semibold">Артикул:</span> {{ selectedOffer.article }}</div>
              <div>
                <span class="font-semibold">Артикул производителя:</span> {{ selectedOffer.manufacturersArticle }}
              </div>
            </div> -->
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-3xl font-bold text-blue-900">
                  {{ Number(selectedOffer.price) > 0 ? selectedOffer.price + ' ₽' : 'Товар доступен только под заказ' }}
                </div>
                <!-- <div class="text-sm text-blue-600 mt-1">Вес: {{ selectedOffer.weight }} кг</div> -->
              </div>
              <button
                @click="handleOffer"
                class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                {{ selectedOffer.price ? 'Купить' : 'Заказать' }}
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <h3 class="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <div class="p-2 bg-blue-100 rounded-xl mr-3 text-blue-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Основные характеристики
            </h3>

            <div class="space-y-3">
              <div
                class="flex justify-between py-2 border-b border-blue-100"
                v-for="(value, key) in Object.entries(selectedOffer.params).slice(0, 6)"
                :key="value + 'params'"
              >
                <span class="text-blue-800 font-medium">{{ value[0] }}:</span>
                <span class="text-blue-700">{{ value[1] }}</span>
              </div>
              <!-- <div class="flex justify-between py-2 border-b border-blue-100">
                <span class="text-blue-800 font-medium">Вес:</span>
                <span class="text-blue-700">{{ selectedOffer.weight }} кг</span>
              </div>
              <div class="flex justify-between py-2 border-b border-blue-100">
                <span class="text-blue-800 font-medium">Масса:</span>
                <span class="text-blue-700">{{ selectedOffer.massKg }} кг</span>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 mb-8">
        <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center">
          <div class="p-2 bg-blue-100 rounded-xl mr-3 text-blue-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          Описание товара
        </h3>

        <div class="space-y-4 text-blue-800/80 leading-relaxed">
          <p class="text-lg font-semibold text-blue-900 mb-4" v-html="selectedOffer?.description"></p>
          <p>{{ selectedOffer?.detailedDescription }}</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100">
        <h3 class="text-xl font-semibold text-blue-900 mb-6 flex items-center">
          <div class="p-2 bg-blue-100 rounded-xl mr-3 text-blue-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          Характеристики товара
        </h3>

        <div class="space-y-3">
          <div
            class="flex justify-between py-2 border-b border-blue-100"
            v-for="(value, key) in selectedOffer.params"
            :key="value + 'params'"
          >
            <span class="text-blue-800 font-medium">{{ key }}:</span>
            <span class="text-blue-700">{{ value }}</span>
          </div>
        </div>

        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-if="selectedOffer?.compatibility?.stamford" class="space-y-3">
            <h4 class="font-semibold text-blue-900 text-lg">Stamford</h4>
            <p class="text-blue-700 text-sm leading-relaxed">{{ selectedOffer.compatibility.stamford }}</p>
          </div>

          <div v-if="selectedOffer.compatibility.fuan" class="space-y-3">
            <h4 class="font-semibold text-blue-900 text-lg">Fuan</h4>
            <p class="text-blue-700 text-sm leading-relaxed">{{ selectedOffer.compatibility.fuan }}</p>
          </div>

          <div v-if="selectedOffer.compatibility.fujian" class="space-y-3">
            <h4 class="font-semibold text-blue-900 text-lg">Fujian</h4>
            <p class="text-blue-700 text-sm leading-relaxed">{{ selectedOffer.compatibility.fujian }}</p>
          </div>
        </div> -->

        <NuxtImg class="w-full mt-8" src="/certificates/tss.jpeg" />
      </div>
    </div>
  </section>
</template>
