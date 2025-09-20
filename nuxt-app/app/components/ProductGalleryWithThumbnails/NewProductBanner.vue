<template>
  <section class="bg-gradient-to-br from-blue-50 to-white py-10 px-4 min-h-screen">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Левая колонка -->
        <div class="lg:w-1/2">
          <div class="sticky top-4">
            <SwiperProduct 
              :images="currentProductImages" 
              :key="imageKey" 
              class="rounded-xl shadow-lg overflow-hidden border border-blue-100"
            />
            
            <!-- Технические параметры - новый дизайн -->
            <div class="mt-6 bg-white rounded-xl p-5 shadow-md border border-blue-100">
              <h3 class="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Технические параметры
              </h3>
              
              <div class="space-y-3">
                <div v-for="(param, index) in currentPanelParams" :key="index" 
                     class="flex justify-between items-center py-2 border-b border-blue-50 last:border-b-0">
                  <span class="text-sm text-gray-600">{{ param.label }}:</span>
                  <span class="text-blue-800 font-medium">{{ param.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="lg:w-1/2">
          <h2 class="text-2xl font-bold text-blue-800 mb-6">
            Дополнительные компоненты
          </h2>
          
          <AccessoriesGrid 
            :items="items" 
            @item-click="handleItemClick"
            class="mb-6"
          />
          
          <!-- Описание -->
          <div class="bg-white rounded-xl p-5 shadow-md border border-blue-100">
            <h3 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Описание
            </h3>
            
            <div v-for="(paragraph, index) in currentTextContent" :key="index">
              <p class="text-gray-700 mb-3 text-sm">{{ paragraph }}</p>
            </div>
          </div>
          
          <!-- Кнопка действия -->
          <div class="mt-6">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SwiperProduct from './SwiperProduct.vue'
import AccessoriesGrid from '../Accessories/AccessoriesGrid.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  textContentMappings: {
    type: Object,
    required: true,
    default: () => ({})
  },
  panelParamsMappings: {
    type: Object,
    required: true,
    default: () => ({})
  },
  initialProduct: {
    type: String,
    default: ''
  },
  imageMappings: {
    type: Object,
    required: true,
    default: () => ({})
  },
  defaultImages: {
    type: Array,
    default: () => []
  },
  defaultTextContent: {
    type: Array,
    default: () => []
  },
  defaultPanelParams: {
    type: Array,
    default: () => []
  }
})

const currentProduct = ref(props.initialProduct || (props.items[0]?.title || ''))
const imageKey = ref(0)

const currentProductImages = computed(() => {
  return getImagesForProduct(currentProduct.value)
})

const currentTextContent = computed(() => {
  return props.textContentMappings[currentProduct.value] || props.defaultTextContent
})

const currentPanelParams = computed(() => {
  return props.panelParamsMappings[currentProduct.value] || props.defaultPanelParams
})


const handleItemClick = (item) => {
  currentProduct.value = item.title
  imageKey.value++ 
}

const getImagesForProduct = (productName) => {
  return props.imageMappings[productName] || props.defaultImages
}

if (props.initialProduct) {
  currentProduct.value = props.initialProduct
}
</script>