<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import Slider from '~/components/Slider/Slider.vue'
import { useCartStore } from '~/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремота`,
    },
  ],
})

const formSteps = ref([
  {
    id: 1,
    title: 'Шаг',
    fieldLabel: 'Введите ваше имя',
    image: '/images/form-step1.jpg',
    value: '',
  },
  {
    id: 2,
    title: 'Шаг',
    fieldLabel: 'Введите ваш email',
    image: '/images/form-step2.jpg',
    value: '',
  },
  {
    id: 3,
    title: 'Шаг',
    fieldLabel: 'Введите ваш email',
    image: '/images/form-step2.jpg',
    value: '',
  },
  {
    id: 4,
    title: 'Шаг',
    fieldLabel: 'Введите ваш email',
    image: '/images/form-step2.jpg',
    value: '',
  },
  {
    id: 5,
    title: 'Шаг',
    fieldLabel: 'Введите ваш телефон',
    image: '/images/form-step3.jpg',
    value: '',
  },
])
</script>

<template>
  <Slider />
  <Calculator
    :formSteps="formSteps"
    :callback="(data: []) => cartStore.addItem({ product: 'Гидроцилиндер', data: [...data] })"
  />
</template>
