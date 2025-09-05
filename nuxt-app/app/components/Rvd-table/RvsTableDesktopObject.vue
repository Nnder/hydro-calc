<script setup>
defineProps({
  tableDataObject: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-300 text-sm">
      <thead>
        <tr class="bg-blue-500 bg-opacity-25 ">
          <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Номинальный диаметр</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Внутренний Ø</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Оплетка Ø</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Наружный Ø</th>
          <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Рабочее давление</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Давление испытания</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Давление разрыва</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Радиус изгиба</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Вес</th>
        </tr>
        <tr class="bg-blue-500 bg-opacity-25">
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">psi</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
          <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">кг/м</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableDataObject" :key="index" :class="{'bg-gray-50': index % 2 === 1}">
          <td class="border border-gray-300 p-1 sm:p-2 text-center bg-blue-500 bg-opacity-25">{{ item.nominalMm }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center bg-blue-500 bg-opacity-25">{{ item.nominalInch }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.innerDiameter }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.braidDiameter }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.outerDiameter }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressureBar }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressurePsi }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.testPressure }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.burstPressureBar }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.bendRadius }}</td>
          <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.weight }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>