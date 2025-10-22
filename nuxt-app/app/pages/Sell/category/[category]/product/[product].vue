<script setup>
definePageMeta({
  path: `/sell/category/:category?/product/:product?`,
})

useHead({
  title: `Продажа товаров - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров`,
    },
  ],
})

const route = useRoute()
const activeCategory = ref(route.params.category || 'kovshi')
const activeProduct = ref(route.params.product || 'kovshi')

const data = ref([])
</script>

<template>
  <div>any</div>
</template>
