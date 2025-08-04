<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
    <AccessoriesItem 
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>