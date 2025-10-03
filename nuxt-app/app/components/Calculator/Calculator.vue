<script setup>
const pistonDiameter = ref('')
const rodDiameter = ref('')
const pressure = ref('')
const efficiency = ref('0.9')
const safetyFactor = ref('1.5')

const extensionForce = computed(() => {
  if (!pistonDiameter.value || !pressure.value) return 0
  const area = (Math.PI * Math.pow(pistonDiameter.value / 2, 2)) / 100
  return (area * pressure.value * efficiency.value / safetyFactor.value).toFixed(2)
})

const retractionForce = computed(() => {
  if (!pistonDiameter.value || !rodDiameter.value || !pressure.value) return 0
  const pistonArea = (Math.PI * Math.pow(pistonDiameter.value / 2, 2)) / 100
  const rodArea = (Math.PI * Math.pow(rodDiameter.value / 2, 2)) / 100
  const effectiveArea = pistonArea - rodArea
  return (effectiveArea * pressure.value * efficiency.value / safetyFactor.value).toFixed(2)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-blue-900 mb-4">Расчет гидроцилиндров</h1>
        <p class="text-lg text-blue-700 max-w-3xl mx-auto leading-relaxed">
          Калькулятор поможет определить усилия выдвижения и втягивания штока гидроцилиндра 
          при определенном диаметре поршня и штока.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Левая колонка - Входные данные -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div class="flex items-center mb-6">
            <div class="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
            <h2 class="text-2xl font-bold text-blue-900">Входные параметры</h2>
          </div>

          <div class="space-y-6">
            <!-- Основные параметры -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Диаметр поршня (D), мм
                </label>
                <input 
                  type="number" 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="pistonDiameter"
                  placeholder="Например: 100"
                />
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Диаметр штока (d), мм
                </label>
                <input 
                  type="number" 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="rodDiameter"
                  placeholder="Например: 45"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-blue-800 mb-2">
                Рабочее давление (P), МПа
              </label>
              <input 
                type="number" 
                class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-all duration-200 bg-blue-50/50"
                v-model="pressure"
                placeholder="Например: 20"
              />
            </div>

            <!-- Дополнительные параметры -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  КПД гидроцилиндра
                </label>
                <select 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="efficiency"
                >
                  <option value="0.85">0.85</option>
                  <option value="0.9">0.9</option>
                  <option value="0.95">0.95</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Коэффициент запаса
                </label>
                <select 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="safetyFactor"
                >
                  <option value="1.2">1.2</option>
                  <option value="1.5">1.5</option>
                  <option value="2.0">2.0</option>
                </select>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <!-- Основные параметры -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Диаметр поршня (D), мм
                </label>
                <input 
                  type="number" 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="pistonDiameter"
                  placeholder="Например: 100"
                />
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Диаметр штока (d), мм
                </label>
                <input 
                  type="number" 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="rodDiameter"
                  placeholder="Например: 45"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-blue-800 mb-2">
                Рабочее давление (P), МПа
              </label>
              <input 
                type="number" 
                class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-all duration-200 bg-blue-50/50"
                v-model="pressure"
                placeholder="Например: 20"
              />
            </div>

            <!-- Дополнительные параметры -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  КПД гидроцилиндра
                </label>
                <select 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="efficiency"
                >
                  <option value="0.85">0.85</option>
                  <option value="0.9">0.9</option>
                  <option value="0.95">0.95</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-blue-800 mb-2">
                  Коэффициент запаса
                </label>
                <select 
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200 bg-blue-50/50"
                  v-model="safetyFactor"
                >
                  <option value="1.2">1.2</option>
                  <option value="1.5">1.5</option>
                  <option value="2.0">2.0</option>
                </select>
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-blue-500 to-blue-600 
                          text-white font-semibold py-4 px-6 rounded-xl 
                          hover:from-blue-600 hover:to-blue-700 
                          transform hover:scale-[1.02] transition-all duration-200 
                          shadow-lg hover:shadow-xl">
              Рассчитать
            </button>
          </div>
        </div>

        <!-- Правая колонка - Результаты и модель -->
        <div class="space-y-8">

          <!-- Модель гидроцилиндра -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div class="flex items-center mb-6">
              <div class="w-2 h-8 bg-purple-500 rounded-full mr-3"></div>
              <h2 class="text-2xl font-bold text-blue-900"> Модель</h2>
            </div>
            
            <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 
                        border-2 border-dashed border-blue-200">
              <NuxtImg 
                src="/calculator-model.png" 
                alt=" модель гидроцилиндра" 
                width="400" 
                height="300" 
                class="mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <p class="text-center text-blue-600 mt-4 font-medium">
                Интерактивная  модель гидроцилиндра
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные кастомные стили */
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>