<template>
  <section class="bg-gradient-to-b from-hydro-power/10 bg-tech-light py-12 md:py-16 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto bg-tech-light rounded-xl shadow-lg overflow-hidden">
      <div class="grid grid-cols-1">
        <div class="p-6 md:p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-hydro-steel mb-4">Получите консультацию инженера</h2>
          <p class="text-hydro-steel/80 mb-6">Оставьте контакты и мы перезвоним в течение 15 минут</p>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <input
                type="text"
                v-model="form.name"
                placeholder="Ваше имя"
                required
                class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg"
              />
            </div>

            <div>
              <input
                type="tel"
                v-model="form.phone"
                placeholder="Телефон"
                required
                class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg"
              />
            </div>

            <textarea
              rows="5"
              class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg"
              placeholder="Описание проблемы"
            ></textarea>

            <button
              type="submit"
              class="w-full bg-hydro-power hover:bg-hydro-power/90 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <Icon name="mdi:phone-outline" class="text-xl" />
              Получить консультацию
            </button>

            <div class="text-xs text-gray-500">
              Нажимая кнопку, вы соглашаетесь с
              <a href="#" class="text-hydro-power hover:underline">политикой конфиденциальности</a>
            </div>
          </form>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 border-t border-gray-200">
        <div class="p-4 text-center">
          <div class="text-hydro-power text-2xl font-bold">15</div>
          <div class="text-sm text-gray-600">минут среднее время ответа</div>
        </div>
        <div class="p-4 text-center">
          <div class="text-hydro-power text-2xl font-bold">24/7</div>
          <div class="text-sm text-gray-600">принимаем заявки</div>
        </div>
        <div class="p-4 text-center">
          <div class="text-hydro-power text-2xl font-bold">10+</div>
          <div class="text-sm text-gray-600">лет опыта</div>
        </div>
        <div class="p-4 text-center">
          <div class="text-hydro-power text-2xl font-bold">100%</div>
          <div class="text-sm text-gray-600">конфиденциальность</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  phone: '',
  problemType: '',
})

const submitForm = async () => {
  // isSending.value = true
  try {
    await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        to: 'ваш-email@example.com',
        subject: 'Новое сообщение с сайта',
        text: `Email: ${form.value.name}\nСообщение: ${form.value.phone}`,
        html: `<p>Email: ${form.value.name}</p><p>Сообщение: ${form.value.phone}</p>`,
      },
    })
    // isSent.value = true
    // form.value = { email: '', message: '' }
  } catch (error) {
    alert('Ошибка отправки!')
  } finally {
    // isSending.value = false
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .divide-x > :not(:first-child) {
    border-left: 1px solid #e5e7eb;
  }
}
</style>
