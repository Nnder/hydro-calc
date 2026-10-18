<script setup lang="ts">
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  modelPath: String,
  canvasColor: String,
  screenIncrease: { type: Number, default: 0.5 },
  img: { type: Object, default: () => ({ src: '', alt: '' }) },
  loadFunc: Function,
})
const ThreeScene = defineAsyncComponent(() => import('./ThreeScene.vue'))
const container = ref<HTMLElement | null>(null)
const activated = ref(false)
const visible = ref(false)
let observer: IntersectionObserver | undefined
onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    visible.value = entry.isIntersecting
    if (entry.isIntersecting) activated.value = true
  })
  if (container.value) observer.observe(container.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div ref="container" class="w-full h-[600px] relative" :style="{ backgroundColor: canvasColor || '#f0f0f0' }">
    <ThreeScene v-if="activated" v-bind="props" :active="visible" class="!h-full" />
    <div v-else class="absolute inset-0 flex items-center justify-center">
      <img v-if="img.src" :src="img.src" :alt="img.alt" loading="lazy" class="w-full h-full object-contain" />
      <span v-else class="text-sm text-gray-600">3D-модель</span>
    </div>
  </div>
</template>
