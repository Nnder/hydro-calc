<script setup>
import MainForm from '~/components/Forms/MainForm.vue'

useHead({
  title: 'Контакты | АбсолютТехно - ремонт гидроцилиндров',
  meta: [
    {
      name: 'description',
      content:
        'Контакты ООО АбсолютТехно. Ремонт и продажа гидроцилиндров. Телефоны, адрес, электронная почта. Свяжитесь для консультации и сотрудничества.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <div
      class="bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.1)_0%,rgba(0,0,0,0)_50%)]"></div>
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span class="text-white">Контакты</span>
          </h1>

          <p class="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8">
            Готовы ответить на ваши вопросы по ремонту и продаже гидроцилиндров
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="tel:+78005553355"
              class="group flex items-center justify-center gap-3 text-white hover:text-blue-100 transition-colors py-2"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 group-hover:bg-white/20 rounded-full transition-all"
              >
                <Icon name="mdi:phone" class="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span class="text-base sm:text-lg font-semibold">+7 (800) 555-33-55</span>
            </a>
            <a
              href="mailto:info@absolyut-tekno.ru"
              class="group flex items-center justify-center gap-3 text-white hover:text-blue-100 transition-colors py-2"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 group-hover:bg-white/20 rounded-full transition-all"
              >
                <Icon name="mdi:email" class="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span class="text-base sm:text-lg font-semibold">info@absolyut-tekno.ru</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
        <div
          class="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-3 sm:mb-4"
            >
              <Icon name="mdi:office-building" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Наш офис</h3>
            <p class="text-gray-700 text-base sm:text-lg mb-2">г.Нижний Тагил, ул. Аганичева 101</p>
            <p class="text-gray-600 text-sm sm:text-base">АбсолютТехно</p>
          </div>
        </div>

        <div
          class="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-3 sm:mb-4"
            >
              <Icon name="mdi:email" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Электронная почта</h3>
            <a
              href="mailto:info@absolyut-tekno.ru"
              class="text-blue-600 hover:text-blue-700 text-base sm:text-lg font-semibold mb-2 block break-words"
            >
              info@absolyut-tekno.ru
            </a>
            <a
              href="mailto:sales@absolyut-tekno.ru"
              class="text-blue-600 hover:text-blue-700 text-base sm:text-lg font-semibold block break-words"
            >
              sales@absolyut-tekno.ru
            </a>
          </div>
        </div>

        <div
          class="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-3 sm:mb-4"
            >
              <Icon name="mdi:phone" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Основные телефоны</h3>
            <div class="space-y-2 sm:space-y-3 w-full">
              <div>
                <p class="font-medium text-gray-900 mb-1 text-sm sm:text-base">Общий</p>
                <a href="tel:+78005553355" class="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700"
                  >+7 (800) 555-33-55</a
                >
              </div>
              <div>
                <p class="font-medium text-gray-900 mb-1 text-sm sm:text-base">Инженер</p>
                <a href="tel:+78005553356" class="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700"
                  >+7 (800) 555-44-66</a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-3 sm:mb-4"
            >
              <Icon name="mdi:tools" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Технические отделы</h3>
            <div class="space-y-2 sm:space-y-3 w-full">
              <div>
                <p class="font-medium text-gray-900 mb-1 text-sm sm:text-base">Техподдержка</p>
                <a href="tel:+78005553357" class="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700"
                  >+7 (800) 555-33-57</a
                >
              </div>
              <div>
                <p class="font-medium text-gray-900 mb-1 text-sm sm:text-base">Сервисный центр</p>
                <a href="tel:+78005553358" class="text-blue-600 text-base sm:text-lg font-semibold hover:text-blue-700"
                  >+7 (800) 555-33-58</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-blue-200 mb-12 sm:mb-16"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <h3 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 text-center">Часы работы</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div class="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-blue-100">
            <Icon
              name="mdi:office-building"
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mb-2 sm:mb-3 mx-auto"
            />
            <h4 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Офис</h4>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">Пн-Пт: 9:00-18:00</p>
            <p class="text-gray-600 text-xs sm:text-sm">Сб-Вс: Выходной</p>
          </div>
          <div class="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-blue-100">
            <Icon name="mdi:tools" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mb-2 sm:mb-3 mx-auto" />
            <h4 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Сервисный центр</h4>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">Пн-Сб: 8:00-20:00</p>
            <p class="text-gray-600 text-xs sm:text-sm">Вс: 9:00-17:00</p>
          </div>
          <div class="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-blue-100">
            <Icon name="mdi:headset" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 mb-2 sm:mb-3 mx-auto" />
            <h4 class="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Техподдержка</h4>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">Пн-Сб: 8:00-20:00</p>
            <p class="text-gray-600 text-xs sm:text-sm">Вс: Выходной</p>
          </div>
        </div>
      </div>

      <div class="relative" data-aos="fade-up" data-aos-delay="750">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl blur-sm sm:blur-lg"
        ></div>
        <div
          class="relative bg-white bg-opacity-90 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-lg border border-blue-200"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Напишите нам</h2>
              <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Есть вопросы по ремонту гидроцилиндров? Нужна консультация специалиста? Заполните форму и мы свяжемся с
                вами в течение 30 минут.
              </p>
              <div class="space-y-3 sm:space-y-4">
                <div class="flex items-center gap-3 sm:gap-4">
                  <Icon name="mdi:clock-outline" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span class="text-gray-700 text-sm sm:text-base">Ответ в течение 30 минут</span>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                  <Icon name="mdi:account-tie" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span class="text-gray-700 text-sm sm:text-base">Консультация специалиста</span>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                  <Icon name="mdi:calculator" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span class="text-gray-700 text-sm sm:text-base">Бесплатный расчет стоимости</span>
                </div>
              </div>
            </div>
            <div class="w-full">
              <ClientOnly>
                <MainForm :lazy="true" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-to-br {
  background-image: linear-gradient(135deg, var(--tw-gradient-stops));
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

img,
.lazy-loaded {
  content-visibility: auto;
}
</style>
