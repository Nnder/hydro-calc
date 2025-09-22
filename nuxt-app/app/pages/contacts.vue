<script setup>
import MainForm from '~/components/Forms/MainForm.vue'

useHead({
  title: 'Наши контакты',
  meta: [
    {
      name: 'description',
      content: 'Свяжитесь с нами для консультации и сотрудничества',
    },
  ],
})
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

          <p class="text-xl text-white max-w-2xl mx-auto mb-8">Свяжитесь с нами для решения ваших технических задач</p>

          <div class="flex justify-center gap-6">
            <a href="/" class="group flex items-center gap-2 text-white hover:text-white transition-colors">
              <div class="bg-hydro-power/10 group-hover:bg-hydro-power/20 p-3 rounded-full transition-all">
                <Icon name="heroicons:phone" class="w-5 h-5" />
              </div>
              <span>+7 (800) 555-33-55</span>
            </a>
            <a href="/" class="group flex items-center gap-2 text-white hover:text-white transition-colors">
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

      <div class="space-y-6 mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Icon name="heroicons:envelope" class="w-8 h-8 text-hydro-power" />
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4 text-tech-dark">Электронная почта</h3>
                <p class="text-hydro-steel text-lg mb-2">mail@gmail.com</p>
                <p class="text-hydro-steel text-lg">mail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm border border-hydro-steel/10">
          <div class="flex items-start gap-6">
            <div class="bg-hydro-power/10 p-4 rounded-full flex-shrink-0">
              <Icon name="heroicons:phone" class="w-8 h-8 text-hydro-power" />
            </div>
            <div class="w-full">
              <h3 class="text-2xl font-bold mb-6 text-tech-dark">Телефоны</h3>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-hydro-power/5 rounded-lg hover:bg-hydro-power/10 transition-colors">
                  <p class="font-medium text-tech-dark mb-2">Общий</p>
                  <p class="text-hydro-steel text-lg font-semibold">+7 (800) 555-33-55</p>
                </div>
                <div class="text-center p-4 bg-hydro-power/5 rounded-lg hover:bg-hydro-power/10 transition-colors">
                  <p class="font-medium text-tech-dark mb-2">Инженер</p>
                  <p class="text-hydro-steel text-lg font-semibold">+7 (800) 555-44-66</p>
                </div>
                <div class="text-center p-4 bg-hydro-power/5 rounded-lg hover:bg-hydro-power/10 transition-colors">
                  <p class="font-medium text-tech-dark mb-2">Техподдержка</p>
                  <p class="text-hydro-steel text-lg font-semibold">+7 (800) 555-77-88</p>
                </div>
                <div class="text-center p-4 bg-hydro-power/5 rounded-lg hover:bg-hydro-power/10 transition-colors">
                  <p class="font-medium text-tech-dark mb-2">Отдел продаж</p>
                  <p class="text-hydro-steel text-lg font-semibold">+7 (800) 555-99-00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-hydro-power/5 p-8 rounded-xl border border-hydro-power/10">
          <h3 class="text-2xl font-bold mb-6 text-tech-dark">Часы работы</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex justify-between pb-4 border-b border-hydro-steel/10">
                <span class="text-hydro-steel font-medium">Офис</span>
                <div class="text-right">
                  <p class="font-medium">Пн-Пт: 9:00-18:00</p>
                  <p class="text-hydro-steel text-sm">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between pb-4 border-b border-hydro-steel/10">
                <span class="text-hydro-steel font-medium">Техподдержка</span>
                <div class="text-right">
                  <p class="font-medium">Пн-Сб: 8:00-20:00</p>
                  <p class="text-hydro-steel text-sm">Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-start pt-8">
        <div class="bg-white p-10 rounded-xl text-start w-1/2 shadow-sm border border-hydro-steel/10 mb-12">
          <h2 class="text-3xl font-bold mb-8 text-tech-dark text-center">Напишите нам</h2>
          <MainForm />
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