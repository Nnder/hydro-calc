<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="max-w-8xl flex items-center py-8 md:py-16 px-4">
    <!-- <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">Дополнительные комплектующие</h2>
      <p class="mt-2 text-sm md:text-base">Всегда в наличии расходные материалы для РВД</p>
      grid grid-cols-4 gap-4 md:gap-6 justify-center
    </div> -->

    <div 
      class="flex flex-1 flex-wrap justify-center gap-6"
    >
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="w-full xl:w-full max-w-[350px] xl:max-w-[400px]"
      />
    </div>
  </section>
</template>