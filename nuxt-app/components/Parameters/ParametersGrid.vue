<script setup>
defineProps({
  parameters: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
    <div 
      v-for="(param, index) in parameters"
      :key="index"
      class="bg-white p-3 sm:p-4"
    >
      <p class="text-lg sm:text-xl md:text-2xl font-bold text-hydro-power mb-1 sm:mb-2">
        {{ param.value }}
      </p>
      <div class="bg-hydro-power h-0.5 w-full mb-2 sm:mb-3"></div>
      <p class="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">
        {{ param.description }}
      </p>
    </div>
  </div>
</template>