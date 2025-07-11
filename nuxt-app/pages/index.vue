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
</script>

<template>
  <Slider />
  <Calculator />
</template>
