<script setup>
import AccessoriesItem from './AccessoriesItem.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['item-click'])

const handleItemClick = item => {
  emit('item-click', item)
}
</script>

<template>
  <section class="max-w-4xl mx-auto py-2 md:py-4 px-2 sm:px-4">
    <div class="flex flex-wrap justify-center gap-1 md:gap-2">
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @click="handleItemClick"
        class="w-12 h-12 sm:w-14 sm:h-14"
      />
    </div>
  </section>
</template>
