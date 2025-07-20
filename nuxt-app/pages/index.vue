<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import Slider from '~/components/Slider/Slider.vue'
import { useCartStore } from '~/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)

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

const formSteps = ref([
  {
    id: 1,
    title: 'Шаг',
    fieldLabel: 'Деталь 1',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 2,
    title: 'Шаг',
    fieldLabel: 'Деталь 2',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 3,
    title: 'Шаг',
    fieldLabel: 'Деталь 3',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 4,
    title: 'Шаг',
    fieldLabel: 'Деталь 4',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 5,
    title: 'Шаг',
    fieldLabel: 'Деталь 5',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
])
</script>

<template>
  <Slider/>

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
