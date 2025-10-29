<script setup>
import { ref, computed } from 'vue'
import SwiperProduct from './SwiperProduct.vue'
import OldAccessoriesGrid from '../Accessories/OldAccesoriesGrid/AccessoriesGrid.vue'
import DownloadPdfButton from '../Button/DownloadPdfButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  bannerProps: {
    type: Object,
    required: true,
    default: () => ({
      products: [],
      gridItems: [],
      defaultImages: [],
      defaultDescription: [],
      defaultParameters: [],
      defaultPdfUrl: '',
      initialProductType: '',
      title: `<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">
          Дополнительные
          <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">компоненты</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed px-2">
          Откройте для себя премиальные аксессуары, которые расширяют возможности вашего оборудования
        </p>`,
    }),
  },
})

const currentProductType = ref(props.bannerProps.initialProductType || props.bannerProps.products[0]?.type || '')
const imageKey = ref(0)

const currentProduct = computed(() => {
  return (
    props.bannerProps.products.find(product => product.type === currentProductType.value) ||
    props.bannerProps.products[0]
  )
})

const gridItems = computed(() => {
  return props.bannerProps.products.map(product => product.gridItem)
})

const currentProductImages = computed(() => currentProduct.value?.images || props.bannerProps.defaultImages)
const currentDescription = computed(() => currentProduct.value?.description || props.bannerProps.defaultDescription)
const currentParameters = computed(() => currentProduct.value?.parameters || props.bannerProps.defaultParameters)
const currentPdfUrl = computed(() => currentProduct.value?.pdfUrl || false)
const currentPdfFileName = computed(() => `${currentProduct.value?.title}.pdf` || 'document.pdf')

const handleItemClick = item => {
  const product = props.bannerProps.products.find(p => p.gridItem.title === item.title)
  if (product) {
    currentProductType.value = product.type
    imageKey.value++
  }
}

const activeGridItem = computed(() => {
  const product = props.bannerProps.products.find(p => p.type === currentProductType.value)
  return product?.gridItem || null
})

if (props.bannerProps.initialProductType) {
  currentProductType.value = props.bannerProps.initialProductType
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden" id="variants">
    <div class="container mx-auto max-w-7xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- <div class="text-center mb-10 sm:mb-16 px-2" v-html="'<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 leading-tight">Дополнительные<span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">компоненты</span></h2><p class="text-base sm:text-lg lg:text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed px-2">Откройте для себя премиальные аксессуары, которые расширяют возможности вашего оборудования</p>'">
      </div> -->

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
        <div class="relative lg:order-none">
          <div class="sticky top-8">
            <div class="relative rounded-2xl overflow-hidden group shadow-lg sm:shadow-xl">
              <SwiperProduct :images="currentProductImages" :key="imageKey" class="rounded-2xl" />
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="bg-white rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-blue-100 transition-all hover:shadow-xl"
          >
            <h1 class="text-2xl sm:text-3xl text-center font-bold text-blue-900">
              {{ currentProduct?.title }}
            </h1>
          </div>

          <OldAccessoriesGrid
            :items="gridItems"
            :active-item="activeGridItem"
            @item-click="handleItemClick"
            class="bg-white rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-blue-100 transition-all hover:shadow-xl"
          />

          <div
            class="bg-white rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg border border-blue-100 transition-all hover:shadow-xl"
          >
            <h3 class="text-lg sm:text-xl font-semibold text-blue-900 mb-4 sm:mb-6 flex items-center">
              <div class="p-2 px-3 sm:px-4 bg-blue-100 rounded-xl mr-2 sm:mr-3 text-blue-700">
                <Icon name="mdi:cogs" />
              </div>
              Технические параметры
            </h3>

            <div class="space-y-0 overflow-hidden rounded-xl border border-blue-100 bg-blue-50/50">
              <div
                v-for="(param, index) in currentParameters"
                :key="index"
                class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 px-4 sm:px-6 border-b border-blue-100 last:border-b-0 hover:bg-blue-100/50 transition-colors duration-200 group"
              >
                <span class="text-blue-800 font-medium group-hover:text-blue-900 mb-1 sm:mb-0 text-nowrap">
                  {{ param.label }}:
                </span>
                <span class="text-blue-700 font-semibold text-right">
                  {{ param.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-2xl p-4 sm:p-8 shadow-md sm:shadow-lg border border-blue-100 transition-all hover:shadow-xl"
      >
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <h3 class="text-lg sm:text-xl font-semibold text-blue-900 flex items-center mb-4 lg:mb-0">
            <div class="p-2 bg-blue-100 rounded-xl mr-3 text-blue-700">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            Описание продукта
          </h3>

          <DownloadPdfButton
            v-if="currentPdfUrl"
            :pdf-url="currentPdfUrl"
            :file-name="currentPdfFileName"
            class="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          />
        </div>

        <div class="space-y-4">
          <p
            v-for="(paragraph, index) in currentDescription"
            :key="index"
            class="text-blue-800/80 leading-relaxed text-base sm:text-lg"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
