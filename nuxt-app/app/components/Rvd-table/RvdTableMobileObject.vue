<script setup>
defineProps({
  tableDataObject: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="space-y-4">
    <div 
      v-for="(item, index) in tableDataObject" 
      :key="index" 
      class="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden transition-all duration-200 hover:shadow-xl"
    >
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <h3 class="font-bold text-lg text-center">
          Диаметр: {{ item.nominalMm }} мм ({{ item.nominalInch }}")
        </h3>
      </div>

      <div class="p-4">
        <div class="grid grid-cols-1 gap-3 text-sm">
          <div class="flex justify-between items-center py-2 border-b border-blue-100">
            <span class="font-semibold text-blue-800">Внутренний Ø:</span>
            <span class="text-gray-700 font-medium">{{ item.innerDiameter }} мм</span>
          </div>
          
          <div class="flex justify-between items-center py-2 border-b border-blue-100">
            <span class="font-semibold text-blue-800">Оплетка Ø:</span>
            <span class="text-gray-700 font-medium">{{ item.braidDiameter }} мм</span>
          </div>
          
          <div class="flex justify-between items-center py-2 border-b border-blue-100">
            <span class="font-semibold text-blue-800">Наружный Ø:</span>
            <span class="text-gray-700 font-medium">{{ item.outerDiameter }} мм</span>
          </div>

          <div class="bg-blue-25 rounded-lg p-3 mt-2">
            <div class="flex justify-between items-center py-1">
              <span class="font-semibold text-blue-800">Рабочее давление:</span>
              <span class="text-gray-700 font-medium">{{ item.workingPressureBar }} бар</span>
            </div>
            <div class="flex justify-between items-center py-1">
              <span class="font-semibold text-blue-800">В PSI:</span>
              <span class="text-gray-700 font-medium">{{ item.workingPressurePsi }} psi</span>
            </div>
          </div>

          <div class="flex justify-between items-center py-2 border-b border-blue-100">
            <span class="font-semibold text-blue-800">Давление испытания:</span>
            <span class="text-gray-700 font-medium">{{ item.testPressure }} бар</span>
          </div>

          <div class="bg-red-25 rounded-lg p-3">
            <div class="flex justify-between items-center py-1">
              <span class="font-semibold text-red-700">Давление разрыва:</span>
              <span class="text-gray-700 font-medium">{{ item.burstPressureBar }} бар</span>
            </div>
          </div>

          <div class="flex justify-between items-center py-2 border-b border-blue-100">
            <span class="font-semibold text-blue-800">Радиус изгиба:</span>
            <span class="text-gray-700 font-medium">{{ item.bendRadius }} мм</span>
          </div>

          <div class="flex justify-between items-center py-2">
            <span class="font-semibold text-blue-800">Вес:</span>
            <span class="text-gray-700 font-medium">{{ item.weight }} кг/м</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blue-25 {
  background-color: rgba(59, 130, 246, 0.08);
}

.bg-red-25 {
  background-color: rgba(239, 68, 68, 0.08);
}


@media (max-width: 480px) {
  .grid {
    gap: 2px;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  h3 {
    font-size: 1rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
}
</style>