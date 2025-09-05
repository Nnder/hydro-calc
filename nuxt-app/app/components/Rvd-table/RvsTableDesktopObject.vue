<script setup>
defineProps({
  tableDataObject: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <table class="min-w-full border border-gray-300 text-sm">
    <thead>
      <tr class="bg-gray-100">
        <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Внутренний диаметр</th>
        <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Наружный диаметр</th>
        <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Рабочее давление</th>
        <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Разрывное давление</th>
        <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Минимальный радиус изгиба</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Вакуум</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Вес</th>
      </tr>
      <tr class="bg-gray-50">
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">psi</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">psi</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">%</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">кг/м</th>
        <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">фунт/фут</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index" :class="{'bg-gray-50': index % 2 === 1}">
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.innerDiameterMm }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.innerDiameterInch }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.outerDiameterMm }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.outerDiameterInch }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressureBar }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressurePsi }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.burstPressureBar }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.burstPressurePsi }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.minBendRadiusMm }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.minBendRadiusInch }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.vacuum }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.weightKg }}</td>
        <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.weightLb }}</td>
      </tr>
    </tbody>
  </table>
</template>