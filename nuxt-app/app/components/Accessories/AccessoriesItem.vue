<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 flex flex-col items-center justify-center aspect-square">
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-8 h-8 md:w-12 md:h-12 object-contain"
      loading="lazy"
      format="webp"
    />
    <!-- <p class="mt-1 text-hydro-power text-xs md:text-sm font-medium text-gray-800 text-center">
      {{ item.title }}
    </p> -->
  </div>
</template>