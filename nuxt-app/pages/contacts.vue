<script setup>
import Gis from '~/components/Map/2Gis.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  console.log('Форма отправлена:', form)
}
</script>

<template>
  <div class="min-h-screen bg-tech-light">
    <div class="bg-tech-dark text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.1)_0%,rgba(0,0,0,0)_50%)]"></div>
      <div class="container mx-auto px-6 py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-1 bg-hydro-power mx-auto mb-6 rounded-full"></div>

          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="text-white">Контакты</span>
          </h1>

          <p class="text-xl text-hydro-steel max-w-2xl mx-auto mb-8">
            Свяжитесь с нами для решения ваших технических задач
          </p>

          <div class="flex justify-center gap-6">
            <a href="/" class="group flex items-center gap-2 text-hydro-steel hover:text-white transition-colors">
              <div class="bg-hydro-power/10 group-hover:bg-hydro-power/20 p-3 rounded-full transition-all">
                <Icon name="heroicons:phone" class="w-5 h-5" />
              </div>
              <span>+7 (800) 555-33-55</span>
            </a>
            <a href="/" class="group flex items-center gap-2 text-hydro-steel hover:text-white transition-colors">
              <div class="bg-hydro-power/10 group-hover:bg-hydro-power/20 p-3 rounded-full transition-all">
                <Icon name="heroicons:envelope" class="w-5 h-5" />
              </div>
              <span>mail@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-hydro-steel/10">
            <div class="flex items-start gap-6">
              <div class="bg-hydro-power/10 p-4 rounded-full flex-shrink-0">
                <Icon name="heroicons:building-office" class="w-8 h-8 text-hydro-power" />
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4 text-tech-dark">Наш офис</h3>
                <p class="text-hydro-steel text-lg mb-2">г. Нижний Тагил, Аганичева 101А</p>
                <p class="text-hydro-steel text-lg">"Абсолют Техно"</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-hydro-steel/10">
            <div class="flex items-start gap-6">
              <div class="bg-hydro-power/10 p-4 rounded-full flex-shrink-0">
                <Icon name="heroicons:phone" class="w-8 h-8 text-hydro-power" />
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4 text-tech-dark">Телефоны</h3>
                <p class="text-hydro-steel text-lg mb-2">+7 (800) 555-33-55</p>
                <p class="text-hydro-steel text-lg">+7 (800) 555-33-55</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-hydro-steel/10">
            <div class="flex items-start gap-6">
              <div class="bg-hydro-power/10 p-4 rounded-full flex-shrink-0">
                <Icon name="heroicons:envelope" class="w-8 h-8 text-hydro-power" />
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4 text-tech-dark">Электронная почта</h3>
                <p class="text-hydro-steel text-lg mb-2">mail@gmail.com</p>
                <p class="text-hydro-steel text-lg">mail@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="bg-hydro-power/5 p-8 rounded-xl border border-hydro-power/10">
            <h3 class="text-2xl font-bold mb-6 text-tech-dark">Часы работы</h3>
            <div class="space-y-4">
              <div class="flex justify-between pb-4 border-b border-hydro-steel/10">
                <span class="text-hydro-steel">Офис</span>
                <span class="font-medium">Пн-Пт: 9:00-18:00</span>
              </div>
              <div class="flex justify-between pb-4 border-b border-hydro-steel/10">
                <span class="text-hydro-steel">Техподдержка</span>
                <span class="font-medium">Пн-Сб: 8:00-20:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-hydro-steel">Выходные</span>
                <span class="font-medium">Закрыто</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-10 rounded-xl shadow-sm border border-hydro-steel/10">
          <h2 class="text-3xl font-bold mb-8 text-tech-dark">Напишите нам</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-hydro-steel mb-2">Ваше имя</label>
                <input
                  v-model="form.name"
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  class="w-full py-3 px-4 border border-hydro-steel/20 rounded-lg focus:ring-2 focus:ring-hydro-power focus:border-transparent transition bg-white"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-hydro-steel mb-2">Email</label>
                <input
                  v-model="form.email"
                  id="email"
                  type="email"
                  placeholder="mailname@gmail.com"
                  required
                  class="w-full py-3 px-4 border border-hydro-steel/20 rounded-lg focus:ring-2 focus:ring-hydro-power focus:border-transparent transition bg-white"
                />
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-hydro-steel mb-2">Тема</label>
              <input
                v-model="form.subject"
                id="subject"
                type="text"
                placeholder="О чем вы хотите поговорить?"
                required
                class="w-full py-3 px-4 border border-hydro-steel/20 rounded-lg focus:ring-2 focus:ring-hydro-power focus:border-transparent transition bg-white"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-hydro-steel mb-2">Сообщение</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="5"
                placeholder="Ваше сообщение..."
                required
                class="w-full py-3 px-4 border border-hydro-steel/20 rounded-lg focus:ring-2 focus:ring-hydro-power focus:border-transparent transition bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-hydro-power hover:bg-hydro-power/90 text-white font-medium py-4 px-6 rounded-lg transition duration-300 hover:shadow-md text-lg flex items-center justify-center gap-2"
            >
              <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>

      <div class="mt-16">
        <div class="rounded-xl shadow-sm overflow-hidden border border-hydro-steel/10 h-[500px] relative">
          <Gis />
          <div
            class="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-md border border-hydro-steel/10 flex items-center gap-3"
          >
            <div class="bg-hydro-power p-2 rounded-full">
              <Icon name="heroicons:map-pin" class="w-5 h-5 text-white" />
            </div>
            <span class="font-medium text-tech-dark">Свердловская область</span>
          </div>
          <div
            class="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-md border border-hydro-steel/10"
          >
            <h3 class="font-bold text-lg">Мы работаем по всей Свердловской области</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.font-industrial {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}
</style>
