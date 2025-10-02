<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-row-reverse items-start">
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-36 h-36 md:w-48 md:h-48 object-contain"
      loading="lazy"
      format="webp"
    />

    <p class="mt-8 text-hydro-steel text-base md:text-lg font-medium text-gray-800 text-center">
      {{ item.title }}
    </p>
  </div>
</template>
