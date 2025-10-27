<script setup>
defineProps({
  parameters: {
    type: Array,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="flex justify-center mt-4 lg:mt-2">
    <div class="max-w-7xl w-full py-6 sm:py-8 md:py-12 px-4 sm:px-2 lg:px-8">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 sm:mb-6 md:mb-8">
        {{ header }}
      </h2>

      <div class="flex flex-wrap justify-center flex-col md:flex-row gap-3 md:gap-2 lg:gap-6 w-full">
        <div 
          v-for="(param, index) in parameters"
          :key="index"
          class="w-full xl:text-nowrap bg-white p-3 sm:p-4 flex-1 max-w-[calc(100%-12px)] lg:max-w-[calc(33%-12px)]"
        >
          <p class="text-2xl md:text-lg xl:text-2xl font-bold text-hydro-power mb-1 sm:mb-2">{{ param.value }}</p>
          <div class="bg-hydro-power max-h-[1px] h-0.5 w-full mb-2 sm:mb-3"></div>
          <p class="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">{{ param.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
