<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
import CookieConsent from '~/components/CookieConsent/CookieConsent.vue';

const route = useRoute()
</script>

<template>
  <Header />
  <div class="min-h-[50vh] flex flex-col">
    <slot />
  </div>
  <Footer />
  <CookieConsent :key="route.path" />
</template>
