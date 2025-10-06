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
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Уведомление -->
      <Transition name="fade">
        <div 
          v-if="notification.show"
          class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300"
        >
          {{ notification.message }}
        </div>
      </Transition>

      <!-- Заголовок -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-4">
          Расчет гидроцилиндров
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Определение усилий и производительности гидроцилиндра на основе входных параметров
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <!-- Левая колонка - Входные и выходные данные -->
        <div class="space-y-8">
          <!-- Входные данные -->
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-blue-100/50">
            <div class="flex items-center mb-8">
              <div class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
              <div>
                <h2 class="text-2xl font-bold text-slate-800">Входные данные</h2>
                <p class="text-slate-500 text-sm mt-1">Основные параметры гидроцилиндра</p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">
                    Диаметр поршня, D (мм)
                  </label>
                  <input 
                    type="number" 
                    class="w-full px-4 py-3.5 border border-slate-200 rounded-xl 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center"
                    v-model="formData.pistonDiameter"
                    placeholder="100"
                    min="1"
                  />
                </div>
                
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">
                    Диаметр штока, d (мм)
                  </label>
                  <input 
                    type="number" 
                    class="w-full px-4 py-3.5 border border-slate-200 rounded-xl 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center"
                    v-model="formData.rodDiameter"
                    placeholder="45"
                    min="1"
                    :max="formData.pistonDiameter * 0.9"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-semibold text-slate-700">
                  Давление (МПа)
                </label>
                <input 
                  type="number" 
                  class="w-full px-4 py-3.5 border border-slate-200 rounded-xl 
                         focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                         transition-all duration-200 bg-white placeholder-slate-400
                         shadow-sm text-center"
                  v-model="formData.pressure"
                  placeholder="20"
                  min="0.1"
                  step="0.1"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">
                    Ход гидроцилиндра, L (мм)
                  </label>
                  <input 
                    type="number" 
                    class="w-full px-4 py-3.5 border border-slate-200 rounded-xl 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center"
                    v-model="formData.strokeLength"
                    placeholder="500"
                    min="1"
                  />
                </div>
                
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-slate-700">
                    Время полного выдвижения(с)
                  </label>
                  <input 
                    type="number" 
                    class="w-full px-4 py-3.5 border border-slate-200 rounded-xl 
                           focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                           transition-all duration-200 bg-white placeholder-slate-400
                           shadow-sm text-center"
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
                        text-white font-semibold py-4 px-6 rounded-xl 
                        hover:from-slate-600 hover:to-slate-700 
                        transform hover:scale-[1.02] transition-all duration-200 
                        shadow-lg hover:shadow-xl active:scale-95
                        flex items-center justify-center space-x-3"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
                <span>Очистить все</span>
              </button>
            </div>
          </div>

          <!-- Выходные данные -->
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-blue-100/50">
            <div class="flex items-center mb-8">
              <div class="w-1.5 h-10 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
              <div>
                <h2 class="text-2xl font-bold text-slate-800">Выходные данные</h2>
                <p class="text-slate-500 text-sm mt-1">Результаты расчета (можно копировать)</p>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Сила выдвижения -->
              <div class="space-y-4">
                <h3 class="font-semibold text-slate-700 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  Сила выдвижения Fт:
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="block text-sm text-slate-600 text-center">Н</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        readonly
                        class="w-full px-4 py-3.5 border border-green-200 rounded-xl 
                               bg-green-50/50 text-slate-800 font-mono text-center
                               shadow-sm cursor-pointer transition-colors duration-200"
                        :value="extensionForceN"
                        placeholder="0"
                        @click="copyToClipboard(extensionForceN)"
                        :class="{
                          'hover:bg-green-100/70': extensionForceN,
                          'cursor-not-allowed': !extensionForceN
                        }"
                      />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button 
                          @click="copyToClipboard(extensionForceN)"
                          class="text-green-600 hover:text-green-700 transition-colors"
                          :disabled="!extensionForceN"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm text-slate-600 text-center">кгс</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        readonly
                        class="w-full px-4 py-3.5 border border-green-200 rounded-xl 
                               bg-green-50/50 text-slate-800 font-mono text-center
                               shadow-sm cursor-pointer transition-colors duration-200"
                        :value="extensionForceKg"
                        placeholder="0"
                        @click="copyToClipboard(extensionForceKg)"
                        :class="{
                          'hover:bg-green-100/70': extensionForceKg,
                          'cursor-not-allowed': !extensionForceKg
                        }"
                      />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button 
                          @click="copyToClipboard(extensionForceKg)"
                          class="text-green-600 hover:text-green-700 transition-colors"
                          :disabled="!extensionForceKg"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Сила втягивания -->
              <div class="space-y-4">
                <h3 class="font-semibold text-slate-700 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                  Сила втягивания Fвт:
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="block text-sm text-slate-600 text-center">Н</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        readonly
                        class="w-full px-4 py-3.5 border border-blue-200 rounded-xl 
                               bg-blue-50/50 text-slate-800 font-mono text-center
                               shadow-sm cursor-pointer transition-colors duration-200"
                        :value="retractionForceN"
                        placeholder="0"
                        @click="copyToClipboard(retractionForceN)"
                        :class="{
                          'hover:bg-blue-100/70': retractionForceN,
                          'cursor-not-allowed': !retractionForceN
                        }"
                      />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button 
                          @click="copyToClipboard(retractionForceN)"
                          class="text-blue-600 hover:text-blue-700 transition-colors"
                          :disabled="!retractionForceN"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm text-slate-600 text-center">кгс</label>
                    <div class="relative">
                      <input 
                        type="text" 
                        readonly
                        class="w-full px-4 py-3.5 border border-blue-200 rounded-xl 
                               bg-blue-50/50 text-slate-800 font-mono text-center
                               shadow-sm cursor-pointer transition-colors duration-200"
                        :value="retractionForceKg"
                        placeholder="0"
                        @click="copyToClipboard(retractionForceKg)"
                        :class="{
                          'hover:bg-blue-100/70': retractionForceKg,
                          'cursor-not-allowed': !retractionForceKg
                        }"
                      />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button 
                          @click="copyToClipboard(retractionForceKg)"
                          class="text-blue-600 hover:text-blue-700 transition-colors"
                          :disabled="!retractionForceKg"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Производительность -->
              <div class="space-y-4">
                <h3 class="font-semibold text-slate-700 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  Требуемая производительность гидростанции:
                </h3>
                <div class="space-y-2">
                  <label class="block text-sm text-slate-600 text-center">л/мин</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      readonly
                      class="w-full px-4 py-3.5 border border-purple-200 rounded-xl 
                             bg-purple-50/50 text-slate-800 font-mono text-center
                             shadow-sm cursor-pointer transition-colors duration-200"
                      :value="flowRate"
                      placeholder="0"
                      @click="copyToClipboard(flowRate)"
                      :class="{
                        'hover:bg-purple-100/70': flowRate,
                        'cursor-not-allowed': !flowRate
                      }"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button 
                        @click="copyToClipboard(flowRate)"
                        class="text-purple-600 hover:text-purple-700 transition-colors"
                        :disabled="!flowRate"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка - 2D Модель -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-blue-100/50 flex items-center justify-center min-h-[600px]">
          <div class="w-full h-full flex items-center justify-center">
            <NuxtImg 
              src="/scheme.jpg" 
              alt="Схема гидроцилиндра" 
              class="w-full h-auto max-h-[1000px] object-contain"
              :sizes="'(min-width: 1024px) 400px, 300px'"
              priority
            />
          </div>
        </div>
      </div>
      <DobleCalculator class="mt-16" />
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