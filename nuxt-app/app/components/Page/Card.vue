<template>
  <div class="bg-white rounded-lg shadow-lg p-6 text-left">
    <div class="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded mb-4 text-2xl">
      {{ icon }}
    </div>
    <h3 class="font-semibold text-lg mb-2 text-blue-900">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>
