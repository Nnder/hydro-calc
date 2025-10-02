<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    @click="emit('click', item)"
    :class="[
      'rounded-lg border-2 transition-all duration-200 hover:scale-105',
      'flex items-center justify-center bg-white shadow-sm',
      isActive 
        ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg scale-110 bg-blue-50' 
        : 'border-gray-200 hover:border-gray-300'
    ]"
  >
    <NuxtImg 
      v-if="item.image" 
      :src="item.image" 
      :alt="item.title"
      class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
    />
    <span 
      v-else 
      :class="[
        'text-xs',
        isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'
      ]"
    >
      {{ item.title }}
    </span>
  </button>
</template>