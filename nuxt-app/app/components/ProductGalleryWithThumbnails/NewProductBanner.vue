<script setup>
import { ref, computed } from 'vue'
import SwiperProduct from './SwiperProduct.vue'
import AccessoriesGrid from '../Accessories/OldAccesoriesGrid/AccessoriesGrid.vue'
import DownloadPdfButton from '../Button/DownloadPdfButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
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
      initialProductType: ''
    })
  }
})

const currentProductType = ref(props.bannerProps.initialProductType || props.bannerProps.products[0]?.type || '')
const imageKey = ref(0)

const currentProduct = computed(() => {
  return props.bannerProps.products.find(product => product.type === currentProductType.value) || props.bannerProps.products[0]
})

const gridItems = computed(() => {
  return props.bannerProps.products.map(product => product.gridItem)
})

const currentProductImages = computed(() => currentProduct.value?.images || props.bannerProps.defaultImages)
const currentDescription = computed(() => currentProduct.value?.description || props.bannerProps.defaultDescription)
const currentParameters = computed(() => currentProduct.value?.parameters || props.bannerProps.defaultParameters)
const currentPdfUrl = computed(() => currentProduct.value?.pdfUrl || props.bannerProps.defaultPdfUrl)
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
  <section class="min-h-screen relative overflow-hidden">
    <div class="container mx-auto max-w-5xl">
      <NuxtImg
      src="https://img.freepik.com/free-photo/abstract-sale-busioness-background-banner-design-multipurpose_1340-16799.jpg?semt=ais_hybrid&w=740&q=80"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover"
      priority
      />
      <h2 class="text-3xl font-bold mb-8 text-center text-blue-800">
        {{ title }}
      </h2>

    </div>
    <div class="relative z-10 container mx-auto max-w-7xl py-12 px-4">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-white mb-4">
          Дополнительные 
          <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">компоненты</span>
        </h2>
        
        <p class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Откройте для себя премиальные аксессуары, которые расширяют возможности вашего оборудования
        </p>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
        <div class="relative">
          <div class="sticky top-8">
            <div class="relative rounded-3xl overflow-hidden group">
              <SwiperProduct
              :images="currentProductImages"
              :key="imageKey"
              class="rounded-lg shadow-md overflow-hidden"
            />
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6  hover:transition-all duration-300">
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 class="text-3xl font-bold text-white">
                  {{ currentProduct?.title }}
                </h1>
              </div>
            </div>
          </div>

          <AccessoriesGrid 
            :items="gridItems" 
            :active-item="activeGridItem"
            @item-click="handleItemClick"
            class="bg-white/5 backdrop-blur-xl rounded-3xl p-6  hover: transition-all duration-300"
          />

          <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover: transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
              <div class="p-2 px-4 bg-cyan-500/20 rounded-xl mr-3 ">
               <Icon name="mdi:cogs"/>
              </div>
              Технические параметры
            </h3>

            <div class="space-y-0 overflow-hidden rounded-2xl  bg-white/5">
              <div
                v-for="(param, index) in currentParameters"
                :key="index"
                class="flex justify-between items-center py-4 px-6  hover:bg-white/5 transition-colors duration-200 group"
              >
                <span class="text-white/70 font-medium group-hover:text-white transition-colors">
                  {{ param.label }}:
                </span>
                <span class="text-cyan-400 font-semibold text-right">
                  {{ param.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div class="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:transition-all duration-300">
          <h3 class="text-xl font-semibold text-white mb-6 flex items-center">
            <div class="p-2 bg-purple-500/20 rounded-xl mr-3">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            Описание продукта
            <div class="ml-auto">
            <DownloadPdfButton
                :pdf-url="currentPdfUrl"
                :file-name="currentPdfFileName"
                class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              />
            </div>
          </h3>

          

          <div class="space-y-4">
            <p 
              v-for="(paragraph, index) in currentDescription" 
              :key="index"
              class="text-white/80 leading-relaxed text-lg"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>