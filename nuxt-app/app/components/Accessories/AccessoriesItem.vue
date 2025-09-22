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
    class="bg-white rounded-md shadow-sm hover:shadow transition-shadow p-1 flex flex-col items-center justify-center aspect-square cursor-pointer"
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