<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.item)
}
</script>

<template>
  <div 
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 flex flex-col items-center justify-center aspect-square cursor-pointer"
    @click="handleClick"
  >
    <NuxtImg
      :src="item.image"
      :alt="item.title"
      class="w-8 h-8 md:w-12 md:h-12 object-contain"
      loading="lazy"
      format="webp"
    />
  </div>
</template>