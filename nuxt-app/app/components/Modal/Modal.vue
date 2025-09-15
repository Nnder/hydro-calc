<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
  },
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const handleOverlayClick = event => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}
</script>

<template>
  <ClientOnly>
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 bg-opacity-50"
      @click="handleOverlayClick"
    >
      <div
        v-bind="$attrs"
        class="bg-white md:rounded-lg shadow-lg w-full h-full md:h-auto p-6 max-h-screen overflow-y-auto"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <button @click="closeModal" class="text-gray-500 hover:text-primary-hover transition-colors">
            <Icon name="material-symbols:close-rounded" class="w-8 h-8" />
          </button>
        </div>
        <div class="">
          <slot></slot>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
