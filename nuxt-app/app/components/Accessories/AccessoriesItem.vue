<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col lg:flex-row-reverse items-center gap-6">
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg p-2 hover:scale-105 transition-transform duration-300"
      loading="lazy"
      format="webp"
    />

    <div class="flex-1 text-center md:text-left">
      <h3 class="text-xl font-semibold mb-3">
        {{ item.title }}
      </h3>
      
      <p class="line-clamp-2">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>