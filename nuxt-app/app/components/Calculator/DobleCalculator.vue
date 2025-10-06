<script setup>
const tableData = ref([
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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">
      Таблица типовых соотношений размеров поршня и штока
    </h2>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="grid grid-cols-7 gap-4 justify-between items-center p-4">
                  <td class="text-center font-medium text-gray-900 ">Диаметр поршня, мм</td>
                  <td class="text-center">32</td>
                  <td class="text-center">40</td>
                  <td class="text-center">50</td>
                  <td class="text-center">63</td>
                  <td class="text-center">80</td>
                  <td class="text-center">100</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>    
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="grid grid-cols-12  gap-4 justify-between items-center p-4">
                  <td class="text-center font-medium text-gray-900 text-nowrap">Диаметрштока, мм</td>
                  <td class="text-center">16</td>
                  <td class="text-center">25</td>
                  <td class="text-center">28</td>
                  <td class="text-center">28</td>
                  <td class="text-center">30</td>
                  <td class="text-center">35</td>
                  <td class="text-center">40</td>
                  <td class="text-center">40</td>
                  <td class="text-center">45</td>
                  <td class="text-center">50</td>
                  <td class="text-center">70</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>