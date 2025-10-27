<script setup lang="ts">

</script>

<template>
  <section class="relative w-full h-48 md:h-64 lg:h-72 xl:h-80">
    <NuxtImg
      src="https://i.ytimg.com/vi/ppYC-lnfutA/maxresdefault.jpg"
      alt="Logistics services"
      class="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      sizes="sm:100vw md:100vw lg:100vw"
      :modifiers="{ quality: 80 }"
    />
    
    <div
      class="absolute inset-x-0 top-1/4 min-w-72 bg-white/90 flex items-center justify-center py-6 backdrop-blur-sm"
    >
      <h2 class="text-2xl  md:text-3xl lg:text-4xl font-semibold text-blue-800/95 tracking-wide">
        LOGISTICS
      </h2>
    </div>
  </section>
</template>