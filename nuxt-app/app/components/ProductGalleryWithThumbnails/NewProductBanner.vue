<template>
  <section class="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div class="lg:w-1/2">
          <div class="sticky top-6">
            <SwiperProduct 
              :images="currentProductImages" 
              :key="imageKey" 
              class="rounded-2xl shadow-lg overflow-hidden border-2 border-blue-100"
            />
          </div>
        </div>

        <div class="lg:w-1/2">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ">
            Дополнительные компоненты
          </h2>
          
          <AccessoriesGrid 
            :items="items" 
            @item-click="handleItemClick"
            class=""
          />
          
          <div class="bg-white rounded-2xl p-6 shadow-md border border-blue-100 mb-2 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-center mb-4">
            
              <h3 class="text-xl font-semibold text-blue-800">Описание</h3>
            </div>
            
            <div v-for="(paragraph, index) in currentTextContent" :key="index">
              <p class="text-gray-700 mb-4 leading-relaxed">{{ paragraph }}</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md border border-blue-200 mb-6 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-center mb-4">
             
              <h3 class="text-xl font-semibold text-blue-800">Технические параметры</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(param, index) in currentPanelParams" :key="index" 
                   class="bg-white p-4 rounded-xl border border-blue-100 transition-colors duration-300 hover:bg-blue-50">
                <span class="text-blue-600 text-sm font-medium block mb-1">{{ param.label }}:</span>
                <span class="text-blue-900 font-semibold text-lg">{{ param.value }}</span>
              </div>
            </div>
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


// const handleItemClick = (item) => {
//   currentProduct.value = item.title
//   imageKey.value++ 
// }

const getImagesForProduct = (productName) => {
  return props.imageMappings[productName] || props.defaultImages
}

if (props.initialProduct) {
  currentProduct.value = props.initialProduct
}
</script>