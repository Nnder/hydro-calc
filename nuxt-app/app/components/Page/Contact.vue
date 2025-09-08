<template>
  <section class="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
    <!-- Фоновые абстрактные фигуры -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Основной градиентный фон -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/80"></div>

      <!-- Абстрактные фигуры -->
      <div class="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>

      <!-- Большие круги -->
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-indigo-300/15 rounded-full animate-float"></div>

      <!-- Геометрические фигуры -->
      <div class="absolute top-20 right-20 w-32 h-32 bg-blue-300/10 rotate-45 animate-rotate-slow"></div>
      <div
        class="absolute bottom-20 left-20 w-24 h-24 bg-indigo-400/10 rounded-2xl rotate-12 animate-bounce-slow"
      ></div>

      <!-- Волны -->
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/20 to-transparent"></div>

      <!-- Сетка из треугольников и кругов -->
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute top-0 left-0 w-full h-full pattern-geometric"></div>
      </div>

      <!-- Плавающие элементы -->
      <div class="absolute top-10 left-10 w-16 h-16 bg-blue-300/10 rounded-lg rotate-45 animate-float-reverse"></div>
      <div class="absolute top-40 right-40 w-20 h-20 bg-indigo-300/10 rounded-full animate-bounce"></div>
      <div class="absolute bottom-40 left-40 w-12 h-12 bg-blue-400/15 rotate-12 animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Заголовок секции -->
      <div class="text-center mb-12 md:mb-16">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mb-6 shadow-lg"
        >
          <Icon name="mdi:tools" class="text-white text-3xl" />
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Профессиональная
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">консультация</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Экспертная помощь от сертифицированных технических специалистов
        </p>
      </div>

      <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Левая часть - форма -->
          <div class="p-10 md:p-14 bg-white/90 relative">
            <!-- Декоративные элементы на форме -->
            <div class="absolute top-5 right-5 w-16 h-16 bg-blue-400/10 rounded-full"></div>
            <div class="absolute bottom-5 left-5 w-12 h-12 bg-indigo-400/10 rounded-2xl rotate-45"></div>

            <div class="relative z-10">
              <div class="text-center lg:text-left mb-10">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Бесплатная консультация</h3>
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <p class="text-gray-600 mb-3 font-medium">Оставьте заявку и получите:</p>
                  <ul class="text-sm text-gray-500 space-y-2">
                    <li class="flex items-center">
                      <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Icon name="mdi:check" class="text-blue-600 text-sm" />
                      </div>
                      Бесплатную диагностику по телефону
                    </li>
                    <li class="flex items-center">
                      <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Icon name="mdi:check" class="text-blue-600 text-sm" />
                      </div>
                      Предварительную оценку стоимости
                    </li>
                    <li class="flex items-center">
                      <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Icon name="mdi:check" class="text-blue-600 text-sm" />
                      </div>
                      Консультацию по решению проблемы
                    </li>
                  </ul>
                </div>
              </div>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">Ваше имя *</label>
                    <input
                      type="text"
                      v-model="form.name"
                      placeholder="Иван Иванов"
                      required
                      :class="[
                        'w-full px-5 py-4 border-2 rounded-xl transition-all duration-300',
                        'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
                        'placeholder-gray-400 text-gray-700',
                        'shadow-sm hover:shadow-md',
                        formErrors.name ? 'border-red-400 bg-red-50' : 'border-blue-100 hover:border-blue-300',
                      ]"
                      @input="clearError('name')"
                    />
                    <p v-if="formErrors.name" class="text-red-500 text-xs mt-2 flex items-center">
                      <Icon name="mdi:alert-circle" class="mr-1" />
                      {{ formErrors.name }}
                    </p>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">Телефон *</label>
                    <input
                      type="tel"
                      v-model="form.phone"
                      placeholder="+7 (999) 999-99-99"
                      required
                      :class="[
                        'w-full px-5 py-4 border-2 rounded-xl transition-all duration-300',
                        'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
                        'placeholder-gray-400 text-gray-700',
                        'shadow-sm hover:shadow-md',
                        formErrors.phone ? 'border-red-400 bg-red-50' : 'border-blue-100 hover:border-blue-300',
                      ]"
                      @input="clearError('phone')"
                    />
                    <p v-if="formErrors.phone" class="text-red-500 text-xs mt-2 flex items-center">
                      <Icon name="mdi:alert-circle" class="mr-1" />
                      {{ formErrors.phone }}
                    </p>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3">Опишите проблему</label>
                  <textarea
                    rows="4"
                    v-model="form.description"
                    placeholder="Подробно опишите вашу проблему, оборудование и симптомы..."
                    :class="[
                      'w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 resize-none',
                      'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
                      'placeholder-gray-400 text-gray-700',
                      'shadow-sm hover:shadow-md',
                      'border-blue-100 hover:border-blue-300',
                    ]"
                  ></textarea>
                </div>

                <div>
                  <input
                    type="file"
                    :class="[
                      'w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 resize-none',
                      'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
                      'placeholder-gray-400 text-gray-700',
                      'shadow-sm hover:shadow-md',
                      'border-blue-100 hover:border-blue-300',
                    ]"
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isSending || !form.agreement"
                  :class="[
                    'w-full font-bold py-5 px-8 rounded-2xl transition-all duration-400 flex items-center justify-center gap-3',
                    'transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl',
                    'text-lg',
                    isSending || !form.agreement
                      ? 'bg-gradient-to-r from-blue-300 to-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/40',
                  ]"
                >
                  <Icon v-if="isSending" name="svg-spinners:ring-resize" class="text-2xl" />
                  <Icon v-else name="mdi:phone-in-talk" class="text-2xl" />
                  {{ isSending ? 'Отправляем заявку...' : 'Получить консультацию' }}
                </button>
              </form>
            </div>
          </div>

          <!-- Правая часть - картинка и преимущества -->
          <div class="relative bg-gradient-to-br from-blue-50/80 to-indigo-100/60">
            <!-- Картинка -->
            <div class="h-full w-full flex items-center justify-center p-10 md:p-14">
              <div class="relative w-full h-80 md:h-96 lg:h-[500px]">
                <NuxtImg
                  src="/images/technical-specialist-consultation.jpg"
                  alt="Технический специалист за работой"
                  class="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                  :imgAttrs="{ style: 'object-position: center 30%' }"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent rounded-3xl"></div>

                <!-- Плавающие элементы -->
                <div
                  class="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg animate-float"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-sm font-medium text-gray-700">Online сейчас</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Преимущества -->
            <div class="absolute bottom-10 left-10 right-10">
              <div class="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Icon name="mdi:star-circle" class="text-blue-600 mr-3 text-2xl" />
                  Почему выбирают нас?
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div
                    v-for="(benefit, index) in benefits"
                    :key="index"
                    class="flex items-start space-x-4 group hover:bg-blue-50/50 p-4 rounded-2xl transition-all duration-300"
                  >
                    <div
                      class="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon :name="benefit.icon" class="text-white text-base" />
                    </div>
                    <div>
                      <div
                        class="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {{ benefit.title }}
                      </div>
                      <div class="text-sm text-gray-600 mt-1">{{ benefit.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Уведомление об успешной отправке -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-10 scale-95"
    >
      <div
        v-if="showSuccess"
        class="fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-5 rounded-2xl shadow-2xl z-50 max-w-md border-l-4 border-emerald-400 backdrop-blur-sm"
      >
        <div class="flex items-start space-x-4">
          <Icon name="mdi:check-circle" class="text-3xl flex-shrink-0" />
          <div class="flex-1">
            <div class="font-bold text-lg">Заявка принята!</div>
            <div class="text-sm opacity-90 mt-2">Технический специалист свяжется с вами в течение 15 минут</div>
          </div>
          <button @click="showSuccess = false" class="text-white/80 hover:text-white transition-colors">
            <Icon name="mdi:close" class="text-xl" />
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
// Script часть остается без изменений
const form = ref({
  name: '',
  phone: '',
  description: '',
  agreement: false,
})

const formErrors = ref({
  name: '',
  phone: '',
})

const isSending = ref(false)
const showSuccess = ref(false)

const stats = [
  { value: '15 мин', label: 'Среднее время ответа' },
  { value: '24/7', label: 'Круглосуточная поддержка' },
  { value: '10+ лет', label: 'Опыт работы' },
  { value: '100%', label: 'Гарантия конфиденциальности' },
]

const benefits = [
  {
    icon: 'mdi:account-tie',
    title: 'Сертифицированные специалисты',
    description: 'Высокая квалификация',
  },
  {
    icon: 'mdi:wrench',
    title: 'Современное оборудование',
    description: 'Профессиональная техника',
  },
  {
    icon: 'mdi:shield-check',
    title: 'Гарантия качества',
    description: 'На все виды работ',
  },
  {
    icon: 'mdi:clock-fast',
    title: 'Срочный выезд',
    description: 'В течение 60 минут',
  },
  {
    icon: 'mdi:certificate',
    title: 'Официальный договор',
    description: 'Все документы',
  },
  {
    icon: 'mdi:headset',
    title: 'Техподдержка',
    description: 'После выполнения работ',
  },
]

const validateForm = () => {
  let isValid = true
  formErrors.value = { name: '', phone: '' }

  if (!form.value.name.trim()) {
    formErrors.value.name = 'Введите ваше имя'
    isValid = false
  } else if (form.value.name.trim().length < 2) {
    formErrors.value.name = 'Имя должно быть не короче 2 символов'
    isValid = false
  }

  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  if (!form.value.phone.trim()) {
    formErrors.value.phone = 'Введите номер телефона'
    isValid = false
  } else if (!phoneRegex.test(form.value.phone.replace(/\s/g, ''))) {
    formErrors.value.phone = 'Введите корректный номер телефона'
    isValid = false
  }

  return isValid
}

const clearError = field => {
  if (formErrors.value[field]) {
    formErrors.value[field] = ''
  }
}

const submitForm = async () => {
  if (!validateForm()) return

  isSending.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    form.value = { name: '', phone: '', description: '', agreement: false }

    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Ошибка отправки:', error)
    alert('Произошла ошибка при отправке. Попробуйте еще раз.')
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
}

@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 5s ease-in-out infinite;
}

.animate-rotate-slow {
  animation: rotate-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Геометрический паттерн */
.pattern-geometric {
  background-image:
    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 2px, transparent 2px),
    linear-gradient(
      45deg,
      transparent 48%,
      rgba(59, 130, 246, 0.05) 49%,
      rgba(59, 130, 246, 0.05) 51%,
      transparent 52%
    ),
    linear-gradient(-45deg, transparent 48%, rgba(79, 70, 229, 0.05) 49%, rgba(79, 70, 229, 0.05) 51%, transparent 52%);
  background-size:
    100px 100px,
    100px 100px,
    50px 50px,
    50px 50px;
}

@media (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
