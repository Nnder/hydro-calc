<script setup>
import DobleCalculator from './DobleCalculator.vue'
const formData = reactive({
  pistonDiameter: '',
  rodDiameter: '',
  pressure: '',
  strokeLength: '',
  extensionTime: ''
})

// Реактивный объект для выходных данных
const results = reactive({
  extensionForceN: '',
  extensionForceKg: '',
  retractionForceN: '',
  retractionForceKg: '',
  flowRate: ''
})

// Вычисляемые свойства
const extensionForceN = computed(() => {
  if (!formData.pistonDiameter || !formData.pressure) return ''
  const D = formData.pistonDiameter / 1000
  const P = formData.pressure * 1e6
  const pistonArea = (Math.PI * Math.pow(D, 2)) / 4
  return Math.round((pistonArea * P))
})

const extensionForceKg = computed(() => {
  if (!extensionForceN.value) return ''
  return  Math.round(extensionForceN.value / 9.81)
})

const retractionForceN = computed(() => {
  if (!formData.pistonDiameter || !formData.rodDiameter || !formData.pressure) return ''
  const D = formData.pistonDiameter / 1000
  const d = formData.rodDiameter / 1000
  const P = formData.pressure * 1e6
  const pistonArea = (Math.PI * Math.pow(D, 2)) / 4
  const rodArea = (Math.PI * Math.pow(d, 2)) / 4
  const annulusArea = pistonArea - rodArea
  return  Math.round(annulusArea * P)
})

const retractionForceKg = computed(() => {
  if (!retractionForceN.value) return ''
  return  Math.round(retractionForceN.value / 9.81)
})

const flowRate = computed(() => {
  if (!formData.pistonDiameter || !formData.strokeLength || !formData.extensionTime) return ''
  const D = formData.pistonDiameter / 1000
  const L = formData.strokeLength / 1000
  const pistonArea = (Math.PI * Math.pow(D, 2)) / 4
  const volume = pistonArea * L
  const flowM3PerSec = volume / formData.extensionTime
  return  Math.round(flowM3PerSec * 60000)
})

// Состояние для уведомлений
const notification = reactive({
  show: false,
  message: ''
})

const clearForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })
}

// Функции для копирования в буфер обмена
const copyToClipboard = async (text) => {
  if (!text) return
  
  try {
    await navigator.clipboard.writeText(text)
    notification.message = 'Скопировано в буфер обмена!'
    notification.show = true
    setTimeout(() => {
      notification.show = false
    }, 2000)
  } catch (err) {
    notification.message = 'Ошибка копирования'
    notification.show = true
    setTimeout(() => {
      notification.show = false
    }, 2000)
  }
}

// Автоматическая валидация диаметра штока
watch([() => formData.pistonDiameter, () => formData.rodDiameter], ([piston, rod]) => {
  if (piston && rod && Number(rod) >= Number(piston)) {
    formData.rodDiameter = (Number(piston) * 0.7).toFixed(0)
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-6 px-3">
    <div class="max-w-5xl mx-auto">
      <Transition name="fade">
        <div 
          v-if="notification.show"
          class="fixed top-3 right-3 bg-green-500 text-white px-4 py-2.5 rounded-lg shadow-lg z-50 text-sm"
        >
          {{ notification.message }}
        </div>
      </Transition>

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2">
          Расчет гидроцилиндров
        </h1>
        <p class="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Определение усилий и производительности гидроцилиндра
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6 border border-blue-100/50">
            <div class="flex items-center mb-6">
              <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></div>
              <div>
                <h2 class="text-xl font-semibold text-slate-800">Входные данные</h2>
                <p class="text-slate-500 text-xs mt-0.5">Основные параметры гидроцилиндра</p>
              </div>
            </div>

            <div class="space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Диаметр поршня, D (мм)</label>
                  <input 
                    type="number"
                    class="w-full px-3 py-2.5 border border-slate-200 rounded-lg 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center text-sm"
                    v-model="formData.pistonDiameter"
                    placeholder="100"
                    min="1"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Диаметр штока, d (мм)</label>
                  <input 
                    type="number"
                    class="w-full px-3 py-2.5 border border-slate-200 rounded-lg 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center text-sm"
                    v-model="formData.rodDiameter"
                    placeholder="45"
                    min="1"
                    :max="formData.pistonDiameter * 0.9"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700">Рабочее давление (МПа)</label>
                <input 
                  type="number"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg 
                         focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                         transition-all duration-200 bg-white placeholder-slate-400
                         shadow-sm text-center text-sm"
                  v-model="formData.pressure"
                  placeholder="20"
                  min="0.1"
                  step="0.1"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Ход, L (мм)</label>
                  <input 
                    type="number"
                    class="w-full px-3 py-2.5 border border-slate-200 rounded-lg 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center text-sm"
                    v-model="formData.strokeLength"
                    placeholder="500"
                    min="1"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Время выдвижения (с)</label>
                  <input 
                    type="number"
                    class="w-full px-3 py-2.5 border border-slate-200 rounded-lg 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center text-sm"
                    v-model="formData.extensionTime"
                    placeholder="10"
                    min="0.1"
                    step="0.1"
                  />
                </div>
              </div>

              <button 
                @click="clearForm"
                class="w-full bg-gradient-to-r from-slate-500 to-slate-600 
                        text-white font-semibold text-sm py-3 rounded-lg 
                        hover:from-slate-600 hover:to-slate-700 
                        transform hover:scale-[1.01] transition-all duration-200 
                        shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
              >
                <Icon name="mdi:trash-can-outline" class="w-4 h-4" />
                <span>Очистить</span>
              </button>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 border border-blue-100/50">
            <div class="flex items-center mb-6">
              <div class="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></div>
              <div>
                <h2 class="text-xl font-semibold text-slate-800">Выходные данные</h2>
                <p class="text-slate-500 text-xs mt-0.5">Результаты расчета (можно копировать)</p>
              </div>
            </div>

            <div class="space-y-5">
              <div>
                <h3 class="font-medium text-slate-700 text-sm flex items-center mb-1">
                  <Icon name="mdi:arrow-up-bold" class="w-4 h-4 mr-2 text-green-500" />
                  Сила выдвижения Fт:
                </h3>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs text-slate-600 text-center mb-1">Н</label>
                    <input 
                      readonly
                      class="w-full px-3 py-2.5 border border-green-200 rounded-lg 
                             bg-green-50/50 text-slate-800 font-mono text-center text-sm shadow-sm
                             hover:bg-green-100/60 cursor-pointer transition"
                      :value="extensionForceN"
                      @click="copyToClipboard(extensionForceN)"
                    />
                  </div>
                  <div>
                    <label class="block text-xs text-slate-600 text-center mb-1">кгс</label>
                    <input 
                      readonly
                      class="w-full px-3 py-2.5 border border-green-200 rounded-lg 
                             bg-green-50/50 text-slate-800 font-mono text-center text-sm shadow-sm
                             hover:bg-green-100/60 cursor-pointer transition"
                      :value="extensionForceKg"
                      @click="copyToClipboard(extensionForceKg)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 class="font-medium text-slate-700 text-sm flex items-center mb-1">
                  <Icon name="mdi:arrow-down-bold" class="w-4 h-4 mr-2 text-blue-500" />
                  Сила втягивания Fвт:
                </h3>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs text-slate-600 text-center mb-1">Н</label>
                    <input 
                      readonly
                      class="w-full px-3 py-2.5 border border-blue-200 rounded-lg 
                             bg-blue-50/50 text-slate-800 font-mono text-center text-sm shadow-sm
                             hover:bg-blue-100/60 cursor-pointer transition"
                      :value="retractionForceN"
                      @click="copyToClipboard(retractionForceN)"
                    />
                  </div>
                  <div>
                    <label class="block text-xs text-slate-600 text-center mb-1">кгс</label>
                    <input 
                      readonly
                      class="w-full px-3 py-2.5 border border-blue-200 rounded-lg 
                             bg-blue-50/50 text-slate-800 font-mono text-center text-sm shadow-sm
                             hover:bg-blue-100/60 cursor-pointer transition"
                      :value="retractionForceKg"
                      @click="copyToClipboard(retractionForceKg)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 class="font-medium text-slate-700 text-sm flex items-center mb-1">
                  <Icon name="mdi:water-pump" class="w-4 h-4 mr-2 text-purple-500" />
                  Требуемая производительность гидростанции:
                </h3>
                <label class="block text-xs text-slate-600 text-center mb-1">л/мин</label>
                <input 
                  readonly
                  class="w-full px-3 py-2.5 border border-purple-200 rounded-lg 
                         bg-purple-50/50 text-slate-800 font-mono text-center text-sm shadow-sm
                         hover:bg-purple-100/60 cursor-pointer transition"
                  :value="flowRate"
                  @click="copyToClipboard(flowRate)"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-blue-100/50 items-center justify-center min-h-[450px] hidden md:flex">
          <NuxtImg 
            src="/scheme.jpg" 
            alt="Схема гидроцилиндра" 
            class="w-full h-auto max-h-[800px] object-contain"
            :sizes="'(min-width: 1024px) 400px, 300px'"
            priority
          />
        </div>
      </div>

      <DobleCalculator class="mt-12" />
    </div>
  </div>
</template>




<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input:focus {
  outline: none;
}

/* Стили для полей вывода */
input[readonly] {
  cursor: pointer;
}

input[readonly]:hover {
  background-color: rgba(239, 246, 255, 0.8);
}
</style>