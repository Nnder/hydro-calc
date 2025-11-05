<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CallBackModal />
  <!-- <PerformanceChecker /> -->
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>

<script setup lang="ts">
import { defineOrganization, defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'
import PerformanceChecker from './components/PerformanceChecker/PerformanceChecker.vue'
import CallBackModal from './components/Modal/CallBackModal.vue'
// import { useCartStore } from '~/stores/cart'

// const cartStore = useCartStore()

// onMounted(() => {
//   cartStore.setCart()
// })

const { clearData } = useCalculatorSelector()
const router = useRouter()

router.beforeEach((to, from, next) => {
  clearData()
  next()
})

const route = useRoute()

useHead({
  templateParams: {
    schemaOrg: {
      host: 'https://nuxtseo.com',
      path: route.path,
      inLanguage: 'en',
    },
  },
})

useSchemaOrg([
  defineWebPage(),
  defineWebSite({
    name: 'Nuxt SEO',
    description: 'Nuxt SEO is a collection of hand-crafted Nuxt Modules to help you rank higher in search engines.',
  }),
  defineOrganization({
    name: 'Nuxt SEO',
  }),
])
</script>
