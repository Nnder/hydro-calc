<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
  },
})
</script>

<template>
  <section class="max-w-8xl flex flex-col items-center py-8 md:py-16 px-4">
    <div class="text-center mb-8 md:mb-12" v-if="title">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">{{ title }}</h2>
    </div>

    <div class="flex flex-1 flex-wrap justify-center gap-6">
      <AccessoriesItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="w-full xl:w-full max-w-[350px] xl:max-w-[400px]"
      />
    </div>
  </section>
</template>
