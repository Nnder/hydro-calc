<script setup>
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

<template>
  <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div class="md:col-span-2 lg:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-2 md:mb-3">Ваше имя *</label>
        <input
          type="text"
          v-model="form.name"
          placeholder="Иван Иванов"
          required
          :class="[
            'w-full px-4 md:px-5 py-3 md:py-4 border-2 rounded-lg md:rounded-xl transition-all duration-300',
            'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
            'placeholder-gray-400 text-slate-900',
            'shadow-sm hover:shadow-md',
            formErrors.name ? 'border-red-500 bg-red-50' : 'border-blue-300 hover:border-blue-800',
          ]"
          @input="clearError('name')"
        />
        <p v-if="formErrors.name" class="text-red-500 text-xs mt-1 md:mt-2 flex items-center">
          <Icon name="mdi:alert-circle" class="mr-1" />
          {{ formErrors.name }}
        </p>
      </div>

      <div class="md:col-span-2 lg:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-2 md:mb-3">Телефон *</label>
        <input
          type="tel"
          v-model="form.phone"
          placeholder="+7 (999) 999-99-99"
          required
          :class="[
            'w-full px-4 md:px-5 py-3 md:py-4 border-2 rounded-lg md:rounded-xl transition-all duration-300',
            'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
            'placeholder-gray-400 text-gray-700',
            'shadow-sm hover:shadow-md',
            formErrors.phone ? 'border-red-500 bg-red-50' : 'border-blue-300 hover:border-blue-800',
          ]"
          @input="clearError('phone')"
        />
        <p v-if="formErrors.phone" class="text-red-500 text-xs mt-1 md:mt-2 flex items-center">
          <Icon name="mdi:alert-circle" class="mr-1" />
          {{ formErrors.phone }}
        </p>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2 md:mb-3">Опишите проблему</label>
      <textarea
        rows="3"
        v-model="form.description"
        placeholder="Подробно опишите вашу проблему..."
        :class="[
          'w-full px-4 md:px-5 py-3 md:py-4 border-2 rounded-lg md:rounded-xl transition-all duration-300 resize-none',
          'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
          'placeholder-gray-400 text-gray-700',
          'shadow-sm hover:shadow-md',
          'border-blue-300 hover:border-blue-800',
        ]"
      ></textarea>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2 md:mb-3"> Добавьте файлы </label>

      <!-- Скрытый input -->
      <input id="file-upload" type="file" class="hidden" multiple @change="handleFiles" />

      <!-- Кастомная кнопка -->
      <label
        for="file-upload"
        class="flex items-center justify-center w-full px-4 py-3 md:px-5 md:py-4 border-2 border-blue-300 rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 text-slate-600 hover:text-blue-600 hover:border-blue-800 shadow-sm hover:shadow-md"
      >
        <Icon name="mdi:paperclip" class="mr-2 text-lg" />
        Выберите файлы
      </label>

      <!-- Список выбранных файлов -->
      <ul v-if="form.files.length" class="mt-3 space-y-1 text-sm text-gray-600">
        <li v-for="(file, i) in form.files" :key="i" class="flex items-center gap-2">
          <Icon name="mdi:file" class="text-gray-400" />
          {{ file.name }}
        </li>
      </ul>
    </div>

    <div class="flex items-start space-x-2 md:space-x-3">
      <input
        id="agreement"
        type="checkbox"
        v-model="form.agreement"
        class="mt-0.5 md:mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label for="agreement" class="text-xs md:text-sm text-gray-600 leading-tight">
        Я согласен на обработку персональных данных и принимаю условия
        <a href="#" class="text-blue-600 hover:underline">политики конфиденциальности</a>
      </label>
    </div>

    <button
      type="submit"
      :disabled="isSending || !form.agreement"
      :class="[
        'w-full font-bold py-3 md:py-4 lg:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-400 flex items-center justify-center gap-2 md:gap-3',
        'transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl',
        'text-base md:text-lg',
        isSending || !form.agreement
          ? 'bg-gradient-to-r from-blue-300 to-blue-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/40',
      ]"
    >
      <Icon v-if="isSending" name="svg-spinners:ring-resize" class="text-xl md:text-2xl" />
      <Icon v-else name="mdi:phone-in-talk" class="text-xl md:text-2xl" />
      {{ isSending ? 'Отправляем...' : 'Получить консультацию' }}
    </button>
  </form>
</template>
