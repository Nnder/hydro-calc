<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-100 rounded-2xl h-auto md:h-[500px] relative overflow-hidden">
      <div class="flex flex-col md:flex-row h-full">
        <div class="w-full md:w-1/2 h-64 md:h-full">
          <NuxtImg 
            src="https://traktorodetal.ru/upload/resize_cache/iblock/9d9/p6pjux0iqn0du1e8g47ihk14a3mf59jb/968_504_1/traktorodetal_zapustila_tsekh_po_remontu.webp" 
            alt="Спецтехника на ремонте" 
            class="w-full h-full object-cover"
            sizes="sm:100vw md:50vw lg:800px"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2 px-8 md:px-12 flex flex-col justify-between">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {{ blockDataText.title }}
          </h2>

          <div class="text-lg text-gray-700 mb-8 leading-relaxed space-y-4" v-html="blockDataText.description">
            
          </div>

          <ul class="space-y-4 mb-8">
            <li v-for="(item, index) in blockDataText.benefits" :key="index" class="flex items-start gap-3">
              <div class="flex-shrink-0 mt-1">
                <Icon name="heroicons:check-badge" class="w-6 h-6 text-green-600" />
              </div>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  blockDataText: {
    type: Object,
    required: true
  },  
})
</script>