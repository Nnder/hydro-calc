<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="max-w-8xl flex items-center py-8 md:py-16">
    <!-- <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">Дополнительные комплектующие</h2>
      <p class="mt-2 text-sm md:text-base">Всегда в наличии расходные материалы для РВД</p>
      grid grid-cols-4 gap-4 md:gap-6 justify-center
    </div> -->

    <div 
      v-if="items.length === 6" 
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 justify-center items-center "
    >
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>

    <div 
      v-else 
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