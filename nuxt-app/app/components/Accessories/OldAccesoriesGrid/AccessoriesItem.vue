<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['click'])
const handleClick = () => emit('click', props.item)
</script>

<template>
  <div
    class="bg-white rounded-md shadow-sm hover:shadow-md transition p-1 flex items-center justify-center cursor-pointer aspect-square"
    @click="handleClick"
  >
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-6 h-6 md:w-8 md:h-8 object-contain"
      loading="lazy"
      format="webp"
    />
  </div>
</template>