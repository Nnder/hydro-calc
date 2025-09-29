<template>
  <section class="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 overflow-hidden">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <NuxtImg
        src="blue_bg.jpg"
        alt="Геометрический паттерн"
        class="absolute inset-0 w-full h-full object-cover pattern-geometric"
        loading="lazy"
      />
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-6 sm:mb-8 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-white">
          Профессиональная
          <span class="text-white">консультация</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto px-2">
          Экспертная помощь от сертифицированных технических специалистов
        </p>
      </div>

      <div
        class="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden border border-white/20"
      >
        <div class="flex flex-col lg:grid lg:grid-cols-2">
          <div class="p-4 sm:p-6 lg:p-8 xl:p-10 bg-white/90 relative order-2 lg:order-1">
            <div class="relative z-10">
              <div class="text-center lg:text-left mb-4 sm:mb-6 lg:mb-8">
                <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Бесплатная консультация</h3>
                <div
                  class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-blue-100"
                >
                  <p class="text-gray-600 mb-2 sm:mb-3 font-medium text-xs sm:text-sm lg:text-base">Оставьте заявку и получите:</p>
                  <ul class="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                    <li class="flex items-center">
                      <div
                        class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                      >
                        <Icon name="mdi:check" class="text-blue-600 text-xs sm:text-sm" />
                      </div>
                      Бесплатная консультация по телефону
                    </li>
                    <li class="flex items-center">
                      <div
                        class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                      >
                        <Icon name="mdi:check" class="text-blue-600 text-xs sm:text-sm" />
                      </div>
                      Предварительную оценку стоимости
                    </li>
                    <li class="flex items-center">
                      <div
                        class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                      >
                        <Icon name="mdi:check" class="text-blue-600 text-xs sm:text-sm" />
                      </div>
                      Консультацию по решению проблемы
                    </li>
                  </ul>
                </div>
              </div>

              <MainForm />
            </div>
          </div>

          <div class="relative order-1 lg:order-2">
            <div class="h-48 sm:h-64 lg:h-80 xl:h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <div class="relative w-full h-full">
                <NuxtImg
                  src="/callback.webp"
                  alt="Технический специалист за работой"
                  class="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-3xl shadow-md sm:shadow-lg lg:shadow-xl border-2 sm:border-4 border-white/20"
                  :imgAttrs="{ style: 'object-position: center 30%' }"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent rounded-lg sm:rounded-xl lg:rounded-3xl"
                ></div>
              </div>
            </div>

            <div
              class="overflow-hidden relative lg:absolute lg:bottom-2 lg:left-2 lg:right-2 xl:bottom-4 xl:left-4 xl:right-4 mt-3 sm:mt-4 lg:mt-0 p-3 sm:p-4 lg:p-0"
            >
              <div
                class="!overflow-hidden bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-sm sm:shadow-md lg:shadow-lg border border-white/20 lg:max-h-[40vh] overflow-y-auto"
              >
                <h3
                  class="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 flex items-center"
                >
                  <Icon name="mdi:star-circle" class="text-blue-600 mr-2 text-base sm:text-lg lg:text-xl" />
                  Почему выбирают нас?
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <div
                    v-for="(benefit, index) in benefits"
                    :key="index"
                    class="flex items-start space-x-2 sm:space-x-3 group hover:bg-blue-50/50 p-2 sm:p-3 rounded-md sm:rounded-lg lg:rounded-xl transition-all duration-300"
                  >
                    <div
                      class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon :name="benefit.icon" class="text-white text-xs sm:text-sm" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {{ benefit.title }}
                      </div>
                      <div class="text-sm xs:text-xs sm:text-sm text-gray-600 mt-0.5">
                        {{ benefit.description }}
                      </div>
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
        class="fixed top-3 sm:top-4 right-3 sm:right-4 left-3 sm:left-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl z-50 border-l-4 border-emerald-400 backdrop-blur-sm max-w-sm sm:max-w-md mx-auto sm:mx-0"
      >
        <div class="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
          <Icon name="mdi:check-circle" class="text-xl sm:text-2xl lg:text-3xl flex-shrink-0" />
          <div class="flex-1">
            <div class="font-bold text-sm sm:text-base lg:text-lg">Заявка принята!</div>
            <div class="text-xs sm:text-sm opacity-90 mt-0.5 sm:mt-1">Технический специалист свяжется с вами</div>
          </div>
          <button @click="showSuccess = false" class="text-white/80 hover:text-white transition-colors">
            <Icon name="mdi:close" class="text-base sm:text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>
<script setup>
import MainForm from '../Forms/MainForm.vue'

const form = ref({
  name: '',
  phone: '',
  description: '',
  agreement: false,
  files: [],
})

const formErrors = ref({
  name: '',
  phone: '',
})

function handleFiles(event) {
  form.value.files = Array.from(event.target.files)
}

const isSending = ref(false)
const showSuccess = ref(false)

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
