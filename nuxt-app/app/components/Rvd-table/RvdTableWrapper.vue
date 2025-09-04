<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="w-full py-4 sm:py-6 md:py-8 px-2 sm:px-4 lg:px-6 lg:max-w-7xl lg:mx-auto">
    <div class="text-start space-y-2 mb-6">
      <p class="text-sm sm:text-base"><span class="font-bold">Внутренний слой:</span> нитрил (NBR), фторкаучук (Viton).</p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Армирование:</span> высокопрочные текстильные корды со встроенной стальной спиралью.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Внешний слой:</span> нитрилкаулчук - устойчивый к истиранию, озону и углеводородам.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Применение:</span> всасывание и подача топлива, масла и гидравлических жидкостей.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Специально разработан</span> для применения в гидравлики на подвижных элементов исполнительных механизмов, где требуется
        исключительная гибкость.
      </p>
      <p class="text-sm sm:text-base"><span class="font-bold">Постоянная работа:</span> -54 +82 (-65 + 180)</p>
    </div>
    <div class="hidden lg:block">
      <RvdTableDesktop :tableData="tableData" />
    </div>
    <div class="lg:hidden space-y-4">
      <RvdTableMobile :tableData="tableData" />
    </div>
  </section>
</template>