<script setup lang="ts">
import Slider from '~/components/Slider/Slider.vue'
import ServiceBlock from '~/components/ServiceBlock/ServiceBlock.vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const selected = ref<null | number>(null)

const mockData = [
  { src: 'hydrocilinder.png', title: 'Гидроцилиндер' },
  { src: 'hydromotor.png', title: 'Гидромотор' },
  { src: 'hydronasos.png', title: 'Гидронасос' },
  { src: 'reductor.png', title: 'Редуктор' },
]

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремонта`,
    },
  ],
})
</script>

<template>
  <Slider />
  <ServiceBlock />
</template>

<style scoped>
.category-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}
</style>
