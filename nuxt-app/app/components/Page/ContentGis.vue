<template>
  <div class="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-2/3 h-96 rounded-xl overflow-hidden shadow-lg">
          <Gis />
        </div>

        <div class="w-full lg:w-1/3">
          <div class="bg-white rounded-xl p-6 h-full">
            <div class="space-y-6">
              <div
                v-for="(branch, index) in branches"
                :key="index"
                class="cursor-pointer transition-colors duration-200 hover:bg-gray-50 p-4 rounded-lg"
              >
                <h3 class="text-xl font-semibold text-gray-800">{{ branch.name }}</h3>
                <p class="mt-2 text-gray-600">{{ branch.address }}</p>

                <div class="mt-3 space-y-1">
                  <p class="text-sm text-gray-500">Телефоны:</p>
                  <div class="ml-2 space-y-1">
                    <p class="text-gray-700">Общий: {{ branch.phones.general }}</p>
                    <p class="text-gray-700">Инженер: {{ branch.phones.engineer }}</p>
                    <p class="text-gray-700">Техподдержка: {{ branch.phones.support }}</p>
                    <p class="text-gray-700">Отдел продаж: {{ branch.phones.sales }}</p>
                  </div>
                </div>

                <div class="mt-3">
                  <p class="text-sm text-gray-500">Электронная почта:</p>
                  {{ branch.emails }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Gis from '../Map/2Gis.vue'

const branches = ref([
  {
    name: '"АбсолютТехно"',
    address: 'г. Нижний Тагил, Аганичева 101А',
    phones: {
      general: '+7 (800) 555-33-55',
      engineer: '+7 (800) 555-44-66',
      support: '+7 (800) 555-77-88',
      sales: '+7 (800) 555-99-00',
    },
    emails: 'mail@gmail.com',
  },
])
</script>
