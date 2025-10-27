<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import Stats from 'stats.js'

let stats: Stats

onMounted(() => {
  stats = new Stats()
  stats.showPanel(0) // 0 = FPS, 1 = ms, 2 = memory
  document.body.appendChild(stats.dom)

  const animate = () => {
    stats.begin()

    // здесь просто рендерим сайт — никаких действий не нужно
    stats.end()

    requestAnimationFrame(animate)
  }

  animate()
})

onBeforeUnmount(() => {
  if (stats && stats.dom.parentNode) {
    stats.dom.parentNode.removeChild(stats.dom)
  }
})
</script>
<template></template>
