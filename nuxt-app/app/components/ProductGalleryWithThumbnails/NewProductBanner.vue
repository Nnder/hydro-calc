<template>
  <section class="bg-white py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <div class="lg:w-1/2">
          <SwiperProduct />
        </div>

        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold text-stone-800 mb-4">Дополнительные компоненты</h2>
          <AccessoriesGrid :items="items" />
          
          <div class="bg-white rounded-xl p-6 shadow-md border border-stone-200">
            <div v-for="(paragraph, index) in textContent" :key="index">
              <p class="text-stone-700 mb-6 leading-relaxed">{{ paragraph }}</p>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-md mb-6 border border-blue-100">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">Параметры панели</h3>
            
            <div class="flex flex-col gap-4">
              <div v-for="(param, index) in panelParams" :key="index" class="flex flex-row items-start">
                <div class="flex flex-col">
                  <span class="text-blue-600 text-sm font-medium">{{ param.label }}:</span>
                  <span class="text-blue-900 font-semibold">{{ param.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SwiperProduct from './SwiperProduct.vue'
import AccessoriesGrid from '../Accessories/AccessoriesGrid.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const textContent = [
  "текст1",
  "текст2",
]

const panelParams = [
  { label: 'Размер, мм', value: '3600 х 190 х 8' },
  { label: 'Площадь, м²', value: '0,684' },
  { label: 'Вес, кг', value: '11-12 кг' },
  { label: 'Плотность, кг/м³', value: '1800' }
]
</script>