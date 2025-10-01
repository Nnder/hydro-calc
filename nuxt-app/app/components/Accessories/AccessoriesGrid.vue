<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">Дополнительные комплектующие</h2>
      <p class="mt-2 text-sm md:text-base">Всегда в наличии расходные материалы для РВД</p>
    </div>

    <div 
      v-if="items.length === 6" 
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 justify-center"
    >
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>

    <div 
      v-else 
      class="flex flex-wrap justify-center gap-4 md:gap-6"
    >
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
      />
    </div>
  </section>
</template>