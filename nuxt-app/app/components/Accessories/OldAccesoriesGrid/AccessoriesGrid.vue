<script setup>
import AccessoriesItem from './AccessoriesItem.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  activeItem: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['item-click'])
const handleItemClick = (item) => emit('item-click', item)
</script>

<template>
  <section class="max-w-4xl mx-auto py-4 px-2 sm:px-4">
    <div
      class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
    >
      <AccessoriesItem
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        :is-active="activeItem && activeItem.title === item.title"
        @click="handleItemClick"
        class="w-12 h-12 sm:w-20 sm:h-20 md:w-16 md:h-16"
      />
    </div>
  </section>
</template>
