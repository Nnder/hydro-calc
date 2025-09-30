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
  <section class="flex justify-center">
    <div class="max-w-7xl w-full py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 sm:mb-6 md:mb-8">
        {{ header }}
      </h2>

      <div class="flex flex-wrap gap-3 sm:gap-4 md:gap-6 w-full">
        <div
          v-for="(param, index) in parameters"
          :key="index"
          class="w-full bg-white p-3 sm:p-4 flex-1 min-w-[calc(100%-12px)] lg:min-w-[calc(25%)]"
        >
          <p class="text-lg sm:text-xl md:text-2xl font-bold text-hydro-power mb-1 sm:mb-2">{{ param.value }}</p>
          <div class="bg-hydro-power max-h-[1px] h-0.5 w-full mb-2 sm:mb-3"></div>
          <p class="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">{{ param.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
