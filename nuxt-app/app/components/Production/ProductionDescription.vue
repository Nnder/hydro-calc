<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
})
</script>

<template>
  <section class="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      <div class="w-full lg:w-1/2 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
          {{ title }}
        </h2>
        <div class="space-y-4" v-html="description"></div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center">
        <div class="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
          <NuxtImg
            :src="imageUrl"
            alt="Производство РВД на оборудовании OR"
            class="w-full h-full object-contain lg:object-fill"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:800px"
            format="webp"
            quality="80"
          />
        </div>
      </div>
    </div>
  </section>
</template>
