<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import Slider from '~/components/Slider/Slider.vue'

// const {
//   public: { backendUrl },
// } = useRuntimeConfig()

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремота`,
    },
  ],
})

// const { data: category } = await useAsyncData(`category-list`, () =>
//   $fetch(`${backendUrl}/api/categories`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
//     },
//   })
// )

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
  <Calculator :formSteps="formSteps" :callback="data => console.log('data', data)" />
</template>
