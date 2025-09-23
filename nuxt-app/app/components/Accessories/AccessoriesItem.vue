<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center">
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-12 h-12 md:w-16 md:h-16 object-contain"
      loading="lazy"
      format="webp"
    />

    <p class="mt-2 text-hydro-power text-sm md:text-base font-medium text-gray-800 text-center">
      {{ item.title }}
    </p>
  </div>
</template>
