<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
</script>

<template>
  <Header />
  <div class="min-h-[50vh] flex flex-col">
    <slot />
  </div>
  <Footer />
</template>
