<script setup>
import MainForm from '~/components/Forms/MainForm.vue'

useHead({
  title: 'Контакты | Абсолют Техно - ремонт гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Контакты ООО Абсолют Техно. Ремонт и продажа гидроцилиндров. Телефоны, адрес, электронная почта. Свяжитесь для консультации и сотрудничества.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Герой секция -->
    <div class="bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.1)_0%,rgba(0,0,0,0)_50%)]"></div>
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/30">
            Свяжитесь с нами
          </span>

          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="text-white">Контакты</span>
          </h1>

          <p class="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Готовы ответить на ваши вопросы по ремонту и продаже гидроцилиндров
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+78005553355" class="group flex items-center justify-center gap-3 text-white hover:text-blue-100 transition-colors">
              <div class="bg-white/10 group-hover:bg-white/20 p-3 rounded-full transition-all">
                <Icon name="mdi:phone" class="w-6 h-6" />
              </div>
              <span class="text-lg font-semibold">+7 (800) 555-33-55</span>
            </a>
            <a href="mailto:info@absolyut-tekno.ru" class="group flex items-center justify-center gap-3 text-white hover:text-blue-100 transition-colors">
              <div class="bg-white/10 group-hover:bg-white/20 p-3 rounded-full transition-all">
                <Icon name="mdi:email" class="w-6 h-6" />
              </div>
              <span class="text-lg font-semibold">info@absolyut-tekno.ru</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Основной контент -->
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Контактные карточки -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <!-- Адрес -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="500">
          <div class="flex items-start gap-6">
            <div class="bg-blue-100 p-4 rounded-xl flex-shrink-0">
              <Icon name="mdi:office-building" class="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">Наш офис</h3>
              <p class="text-gray-700 text-lg mb-2">г. Москва, ул. Промышленная, д. 15</p>
              <p class="text-gray-600">Бизнес-центр "Технопарк"</p>
            </div>
          </div>
        </div>

        <!-- Почта -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="550">
          <div class="flex items-start gap-6">
            <div class="bg-blue-100 p-4 rounded-xl flex-shrink-0">
              <Icon name="mdi:email" class="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">Электронная почта</h3>
              <p class="text-gray-700 text-lg mb-2">info@absolyut-tekno.ru</p>
              <p class="text-gray-700 text-lg">sales@absolyut-tekno.ru</p>
            </div>
          </div>
        </div>

        <!-- Телефоны -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="600">
          <div class="flex items-start gap-6">
            <div class="bg-blue-100 p-4 rounded-xl flex-shrink-0">
              <Icon name="mdi:phone" class="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">Телефоны</h3>
              <div class="space-y-3">
                <div>
                  <p class="font-medium text-gray-900 mb-1">Общий</p>
                  <a href="tel:+78005553355" class="text-blue-600 text-lg font-semibold hover:text-blue-700">+7 (800) 555-33-55</a>
                </div>
                <div>
                  <p class="font-medium text-gray-900 mb-1">Техподдержка</p>
                  <a href="tel:+78005553356" class="text-blue-600 text-lg font-semibold hover:text-blue-700">+7 (800) 555-33-56</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Детальная информация -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Часы работы -->
        <div class="bg-blue-50 p-8 rounded-2xl border border-blue-200" data-aos="fade-up" data-aos-delay="650">
          <h3 class="text-3xl font-bold mb-8 text-gray-900">Часы работы</h3>
          <div class="space-y-6">
            <div class="flex justify-between items-center pb-4 border-b border-blue-200">
              <div class="flex items-center gap-3">
                <Icon name="mdi:office-building" class="w-6 h-6 text-blue-600" />
                <span class="text-gray-700 font-medium">Офис</span>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">Пн-Пт: 9:00-18:00</p>
                <p class="text-gray-600 text-sm">Сб-Вс: Выходной</p>
              </div>
            </div>
            <div class="flex justify-between items-center pb-4 border-b border-blue-200">
              <div class="flex items-center gap-3">
                <Icon name="mdi:tools" class="w-6 h-6 text-blue-600" />
                <span class="text-gray-700 font-medium">Сервисный центр</span>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">Пн-Сб: 8:00-20:00</p>
                <p class="text-gray-600 text-sm">Вс: 9:00-17:00</p>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <Icon name="mdi:headset" class="w-6 h-6 text-blue-600" />
                <span class="text-gray-700 font-medium">Техподдержка</span>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">Пн-Сб: 8:00-20:00</p>
                <p class="text-gray-600 text-sm">Вс: Выходной</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Дополнительная информация -->
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="700">
          <h3 class="text-3xl font-bold mb-8 text-gray-900">Как нас найти</h3>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <Icon name="mdi:subway" class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p class="font-semibold text-gray-900 mb-1">Метро</p>
                <p class="text-gray-700">Станция "Промышленная" (5 минут пешком)</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <Icon name="mdi:bus" class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p class="font-semibold text-gray-900 mb-1">Автобус</p>
                <p class="text-gray-700">Остановка "Технопарк" (маршруты 34, 56, 89)</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <Icon name="mdi:car" class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p class="font-semibold text-gray-900 mb-1">Парковка</p>
                <p class="text-gray-700">Бесплатная парковка для клиентов (20 мест)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Форма обратной связи -->
      <div class="relative" data-aos="fade-up" data-aos-delay="750">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl blur-lg"></div>
        <div class="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-lg border border-blue-200">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="text-4xl font-bold mb-6 text-gray-900">Напишите нам</h2>
              <p class="text-xl text-gray-700 mb-8 leading-relaxed">
                Есть вопросы по ремонту гидроцилиндров? Нужна консультация специалиста? 
                Заполните форму и мы свяжемся с вами в течение 30 минут.
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <Icon name="mdi:clock-outline" class="w-6 h-6 text-blue-600" />
                  <span class="text-gray-700">Ответ в течение 30 минут</span>
                </div>
                <div class="flex items-center gap-4">
                  <Icon name="mdi:expert" class="w-6 h-6 text-blue-600" />
                  <span class="text-gray-700">Консультация специалиста</span>
                </div>
                <div class="flex items-center gap-4">
                  <Icon name="mdi:calculator" class="w-6 h-6 text-blue-600" />
                  <span class="text-gray-700">Бесплатный расчет стоимости</span>
                </div>
              </div>
            </div>
            <div>
              <MainForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили для улучшения внешнего вида */
.bg-gradient-to-br {
  background-image: linear-gradient(135deg, var(--tw-gradient-stops));
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style>