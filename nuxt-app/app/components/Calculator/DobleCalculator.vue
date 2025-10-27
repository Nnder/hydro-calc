<script setup>
const tableData = [
  {
    title: 'Диаметр поршня, мм',
    values: ['32', '40', '50', '63', '80', '100']
  },
  {
    title: 'Диаметр штока, мм',
    values: ['16', '25', '28', '28', '30', '35', '40', '40', '45', '50', '70']
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="text-center mb-6">
      <div class="flex justify-center items-center mb-2">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-800">
          Таблица типовых соотношений размеров поршня и штока
        </h2>
      </div>
      <p class="text-slate-500 text-sm max-w-lg mx-auto">
        Справочная таблица стандартных диаметров гидроцилиндров
      </p>
    </div>


    <!-- Десктопная версия (md и выше) -->
    <div class="hidden md:block bg-white rounded-2xl shadow-md border border-blue-100/50 overflow-hidden">
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

    <!-- Альтернативный мобильный вариант (карточки) -->
    <div class="block md:hidden mt-6">
      <div class="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
        <div 
          v-for="(row, index) in tableData" 
          :key="`alt-${index}`"
          :class="[
            'p-4 border-b border-blue-50 last:border-b-0',
            index === 0 ? 'bg-blue-50/50' : 'bg-white'
          ]"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-slate-800 text-sm">
              {{ row.title }}
            </h3>
            <span class="text-xs text-slate-500 bg-blue-100 px-2 py-1 rounded-full">
              {{ row.values.length }} значений
            </span>
          </div>
          
          <!-- Значения в виде сетки -->
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
            <div
              v-for="(value, vIndex) in row.values"
              :key="vIndex"
              class="bg-white border border-blue-200 rounded-lg px-2 py-2 text-center shadow-sm"
            >
              <span class="text-slate-800 font-medium text-sm">
                {{ value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>