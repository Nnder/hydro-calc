<script setup lang="ts">
import { findCategoryByName } from '~/helpers/treeSearch'

definePageMeta({
  path: `/sell/category/:category?/product/:product?`,
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
const activeProduct = ref(route.params.product || 'kovshi')

const { data: xml } = await useAsyncData('xml-data', () => $fetch('/api/xml'))

const { sections } = xml.value

const result = findCategoryByName(sections, activeCategory.value)

console.log(result)

const currentImageIndex = ref(0)
const mainImage = computed(() => {
  return selectedOffer.value.images[currentImageIndex.value] || selectedOffer.value.images[0]
})

const nextImage = () => {
  if (selectedOffer.value.images.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedOffer.value.images.length
  }
}

const prevImage = () => {
  if (selectedOffer.value.images.length > 1) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + selectedOffer.value.images.length) % selectedOffer.value.images.length
  }
}

const selectImage = (index: number) => {
  currentImageIndex.value = index
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: selectedOffer.value.currency,
  }).format(price)
}

const data = ref([])

const selectedOffer = ref({
  id: '1',
  url: 'https://tss.ru/catalog/sinkhronnye_generatory/regulyatory_napryazheniya_dlya_sinkhronnykh_generatorov_avr_1/regulyatory_napryazheniya_stamford_avr/regulyator_napryazheniya_sa_30_avr_sx460_020172',
  price: 3135.6,
  currency: 'RUB',
  categoryId: '194678',
  images: [
    'https://tss.ru/upload/iblock/848/0gcezfqmvmxjr692esg9azumk3qnhasy.jpg',
    'https://tss.ru/upload/iblock/c2b/12lxgfo67jrt40dtveaic97a77vnd9zb.jpg',
  ],
  name: 'Регулятор напряжения SA-30/AVR SX460',
  description: 'Регулятор напряжения SA-30,60,100,120 /AVR SX460 (E000-24600)',
  article: '020172',
  manufacturersArticle: 'SX460, E000-24600, WZ460',
  weight: '0.31',
  massKg: '0.3',
  detailedDescription:
    'Регулятор напряжения для генератора (SX460) Вес=0,31 кг, размеры в упаковке 15×11,5×5,0 см. Маркировка E000-24600. Размеры платы: 136×102 мм.',
  compatibility: {
    stamford:
      'BCA162, BCI162, BCA164, BCI164, BCL164, BCL184A, BCA182, BCI182, BCI184, UCD22-27, UC122-1, UCI224, UCI274 и другие модели',
    fuan: 'ZC164A, ZC164B, ZC164C, ZC164D, ZC184E, ZC184F, ZC184G, ZC184H, ZC184J, ZC224C, ZC224D, ZC224E, ZC224F, ZC224G, ZC274C, ZC274D, ZC274E, ZC274F, ZC274G, ZC274H, ZC274J, ZC274K',
    fujian:
      'BW-164A, BW-164B, BW-164C, BW-164D, BW-184E, BW-184F, BW-184G, BW-184H, BW-224C, BW-224D, BW-224E, BW-224F, BW-224G, BW-274C, BW-274DS, BW-274D, BW-274E, BW-274FS, BW-274F, BW-274G, BW-274H, BW-274J, BW-274K',
  },
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

            <div v-if="selectedOffer.images.length > 1" class="absolute inset-0 flex items-center justify-between p-4">
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
          <div v-if="selectedOffer.images.length > 1" class="grid grid-cols-4 gap-3">
            <button
              v-for="(image, index) in selectedOffer.images"
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
            <div class="flex flex-wrap gap-4 text-sm text-blue-600">
              <div><span class="font-semibold">Артикул:</span> {{ selectedOffer.article }}</div>
              <div>
                <span class="font-semibold">Артикул производителя:</span> {{ selectedOffer.manufacturersArticle }}
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="text-3xl font-bold text-blue-900">
                  {{ formatPrice(selectedOffer.price) }}
                </div>
                <div class="text-sm text-blue-600 mt-1">Вес: {{ selectedOffer.weight }} кг</div>
              </div>
              <button
                class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Купить
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
              <div class="flex justify-between py-2 border-b border-blue-100">
                <span class="text-blue-800 font-medium">Категория:</span>
                <span class="text-blue-700">Регуляторы напряжения</span>
              </div>
              <div class="flex justify-between py-2 border-b border-blue-100">
                <span class="text-blue-800 font-medium">Вес:</span>
                <span class="text-blue-700">{{ selectedOffer.weight }} кг</span>
              </div>
              <div class="flex justify-between py-2 border-b border-blue-100">
                <span class="text-blue-800 font-medium">Масса:</span>
                <span class="text-blue-700">{{ selectedOffer.massKg }} кг</span>
              </div>
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
          <p class="text-lg font-semibold text-blue-900 mb-4">{{ selectedOffer.description }}</p>
          <p>{{ selectedOffer.detailedDescription }}</p>
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
          Описание товара 2
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-if="selectedOffer.compatibility.stamford" class="space-y-3">
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
        </div>
      </div>
    </div>
  </section>
</template>
