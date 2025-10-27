<script setup>
defineProps({
  tableDataObject: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto rounded-lg shadow-lg">
    <table class="min-w-full border-collapse text-sm font-sans">
      <thead>
        <tr class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <th colspan="2" class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Номинальный диаметр</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Внутренний Ø</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Оплетка Ø</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Наружный Ø</th>
          <th colspan="2" class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Рабочее давление</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Давление испытания</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Давление разрыва</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Радиус изгиба</th>
          <th class="border border-blue-500 p-2 sm:p-3 text-center font-semibold text-sm uppercase tracking-wide">Вес</th>
        </tr>
        <tr class="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">мм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">дюйм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">мм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">мм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">мм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">бар</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">psi</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">бар</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">бар</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">мм</th>
          <th class="border border-blue-400 p-2 sm:p-3 text-center font-medium">кг/м</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(item, index) in tableDataObject" 
          :key="index" 
          class="transition-all duration-200 hover:bg-blue-50"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-blue-25'"
        >
          <td class="border border-blue-200 p-2 sm:p-3 text-center font-semibold text-blue-800 bg-blue-75">
            {{ item.nominalMm }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center font-semibold text-blue-800 bg-blue-75">
            {{ item.nominalInch }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.innerDiameter }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.braidDiameter }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.outerDiameter }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700 font-medium">
            {{ item.workingPressureBar }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700 font-medium">
            {{ item.workingPressurePsi }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.testPressure }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700 font-medium">
            {{ item.burstPressureBar }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.bendRadius }}
          </td>
          <td class="border border-blue-200 p-2 sm:p-3 text-center text-gray-700">
            {{ item.weight }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.bg-blue-25 {
  background-color: rgba(59, 130, 246, 0.05);
}
.bg-blue-75 {
  background-color: rgba(59, 130, 246, 0.1);
}
</style>