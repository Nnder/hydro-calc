<script setup>
import { ref, computed } from 'vue'
import SwiperProduct from './SwiperProduct.vue'
import AccessoriesGrid from '../Accessories/OldAccesoriesGrid/AccessoriesGrid.vue'
import DownloadPdfButton from '../Button/DownloadPdfButton.vue'

const props = defineProps({
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

if (props.bannerProps.initialProductType) {
  currentProductType.value = props.bannerProps.initialProductType
}
</script>

<template>
  <section class="bg-gradient-to-br from-blue-50 to-white py-6 px-3">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl font-bold mb-8 text-center text-blue-800">
        Дополнительные компоненты
      </h2>

      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <div class="lg:w-1/2">
          <div class="sticky top-2">
            <SwiperProduct
              :images="currentProductImages"
              :key="imageKey"
              class="rounded-lg shadow-md overflow-hidden border border-blue-100"
            />
          </div>
        </div>

        <div class="lg:w-1/2">
          <h2 class="text-2xl text-blue-800 font-bold text-center">
            {{ currentProduct?.title }}
          </h2>
          <AccessoriesGrid :items="gridItems" @item-click="handleItemClick" />

          <div class="mt-4 bg-white rounded-lg p-4 shadow-sm border border-blue-100">
            <h3 class="text-2xl font-semibold text-blue-800 mb-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Технические параметры
            </h3>

            <div class="space-y-2 text-sm">
              <div
                v-for="(param, index) in currentParameters"
                :key="index"
                class="flex justify-between items-center py-1 border-b border-blue-50 last:border-b-0"
              >
                <span class="text-gray-600">{{ param.label }}:</span>
                <span class="text-blue-800 font-medium">{{ param.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col min-h-[200px] bg-white rounded-xl p-5 shadow-md border border-blue-100 mt-6"
      >
        <div>
          <h3 class="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Описание
          </h3>

          <div v-for="(paragraph, index) in currentDescription" :key="index">
            <p class="text-gray-700 mb-3 text-sm">{{ paragraph }}</p>
          </div>
        </div>

        <div class="mt-auto flex justify-end">
          <DownloadPdfButton
            :pdf-url="currentPdfUrl"
            :file-name="currentPdfFileName"
          />
        </div>
      </div>
    </div>
  </section>
</template>