<script setup>
const tableData = ([
  {
    title: 'Диаметр поршня, мм',
    values: ['32', '40', '50', '63', '80', '100']
  },
  {
    title: 'Диаметр штока, мм',
    values: ['16', '25', '28', '28', '30', '35', '40', '40', '45', '50', '70']
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="text-center mb-8">
      <div class="flex justify-center items-center mb-2">
        <Icon name="mdi:table-large" class="text-blue-600 w-6 h-6 mr-2" />
        <h2 class="text-2xl font-bold text-slate-800">
          Таблица типовых соотношений размеров поршня и штока
        </h2>
      </div>
      <p class="text-slate-500 text-sm max-w-lg mx-auto">
        Справочная таблица стандартных диаметров гидроцилиндров
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-md border border-blue-100/50 overflow-hidden">
      <table class="w-full border-collapse text-sm text-slate-700 text-center">
        <thead>
          <tr
            v-for="(row, index) in tableData"
            :key="index"
            :class="[
              'border-b border-blue-100',
              index === 0 ? 'bg-gradient-to-r from-blue-50 to-white' : 'bg-gradient-to-r from-blue-50/60 to-white'
            ]"
          >
            <th
              class="py-4 px-4 font-semibold text-slate-800 text-left w-[20%] whitespace-nowrap"
            >
              {{ row.title }}
            </th>

            <th class="py-4 px-4 w-[80%]" :colspan="row.values.length">
              <div class="flex justify-between w-full px-4">
                <span
                  v-for="(value, vIndex) in row.values"
                  :key="vIndex"
                  class="text-slate-800"
                >
                  {{ value }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
