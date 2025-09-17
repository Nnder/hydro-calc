<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto py-4 md:py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-center gap-2 md:gap-3">
      <AccessoriesItem 
        v-for="(item, index) in items" 
        :key="index" 
        :item="item" 
        class="w-16 h-16 sm:w-18 sm:h-18 md:w-16 md:h-16"
      />
    </div>
  </section>
</template>