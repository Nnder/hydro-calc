<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
    <div class="text-start space-y-2 mb-6">
      <p class="text-sm sm:text-base"><span class="font-bold">Внутренний слой:</span> черный проводящий NBR.</p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Армирование:</span> высокопрочные текстильные корды со встроенной стальной спиралью.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Внешний слой:</span> синий CR - устойчивый к истиранию, озону и углеводородам.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Применение:</span> всасывание и подача топлива, масла и гидравлических жидкостей.
      </p>
      <p class="text-sm sm:text-base">
        <span class="font-bold">Специально разработан</span> для применения в автоцистернах, где требуется
        исключительная гибкость при низких температурах.
      </p>
      <p class="text-sm sm:text-base"><span class="font-bold">Постоянная работа:</span> -54 +82 (-65 + 180)</p>
    </div>
    <div class="hidden md:block">
      <RvdTableDesktop :tableData="tableData" />
    </div>
    <div class="md:hidden space-y-4">
      <RvdTableMobile :tableData="tableData" />
    </div>
  </section>
</template>
