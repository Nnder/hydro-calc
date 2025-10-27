<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div v-for="(item, index) in tableData" :key="index" class="shadow-lg rounded-lg p-4">
    <h3 class="font-bold text-lg mb-3">Диаметр: {{ item.innerDiameterMm }} мм ({{ item.innerDiameterInch }})</h3>
    <div class="grid grid-cols-2 gap-2 text-sm">
      <div><span class="font-medium">Рабочее давление:</span> {{ item.workingPressureBar }} бар ({{ item.workingPressurePsi }} psi)</div>
      <div><span class="font-medium">Разрывное давление:</span> {{ item.burstPressureBar }} бар ({{ item.burstPressurePsi }} psi)</div>
      <div><span class="font-medium">Радиус изгиба:</span> {{ item.minBendRadiusMm }} мм ({{ item.minBendRadiusInch }})</div>
      <div><span class="font-medium">Вакуум:</span> {{ item.vacuum }}%</div>
      <div><span class="font-medium">Вес:</span> {{ item.weightKg }} кг/м ({{ item.weightLb }} фунт/фут)</div>
    </div>
  </div>
</template>