<script setup>
const equipmentItems = [
  'отрезной станок - необходим для того, чтобы отрезать рукав по длине строго перпендикулярно оси рукова;',
  'окорочной станок - позволяет подготовить концы рукава к установке фитингов;',
  'обжимной станок - фиксирует муфты и фитинги с помощью набора кулачков;',
  'испытательный стенд высокого давления - контроль качества сборки РВД.',
]
</script>

<template>
  <section class="max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Техническое оснащение для производства РВД</h1>

      <p class="text-gray-700 mb-6">
        В состав оборудования для изготовления шлангов РВД входит несколько станков. На них выполняются основные
        операции отрезки, опрессовки обжимом и испытания изделия.
      </p>

      <h2 class="text-xl font-semibold text-gray-800 mb-4">Оборудование:</h2>

      <ul class="space-y-3 mb-6">
        <li v-for="(item, index) in equipmentItems" :key="index" class="flex items-start">
          <Icon name="mdi:square-outline" class="w-5 h-5 text-gray-600 mr-2 mt-0.5" />
          <span class="text-gray-700">{{ item }}</span>
        </li>
      </ul>

      <p class="text-gray-700">
        Важное вспомогательное оборудование для производства РВД — размотчик, позволяющий быстро отбирать шланг из бухты
        и подавать на отрезку.
      </p>
    </div>
  </section>
</template>
