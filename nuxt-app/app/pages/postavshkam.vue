<template>
  <div class="min-h-screen bg-gradient-to-b from-tech-light to-blue-50 w-full py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок страницы -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">Сотрудничество с поставщиками</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Мы заинтересованы в установлении долгосрочных и взаимовыгодных партнерских отношений с производителями и
          поставщиками качественной продукции
        </p>
      </div>

      <div class="flex mb-20">
        <!-- Основной контент -->
        <div class="lg:col-span-2">
          <!-- Приветственный блок -->
          <div class="bg-white rounded-2xl p-8 shadow-lg mb-10" data-aos="fade-up" data-aos-delay="400">
            <div class="flex items-start mb-6">
              <div class="bg-blue-100 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Приглашаем к сотрудничеству</h2>
                <p class="text-gray-700">
                  Уважаемые производители и поставщики профессионального инструмента, строительного оборудования и
                  промышленных решений. Мы предлагаем взаимовыгодное партнерство, которое позволит значительно увеличить
                  объемы продаж вашей продукции.
                </p>
              </div>
            </div>
          </div>

          <!-- Требования к поставщикам -->
          <div class="bg-white rounded-2xl p-8 shadow-lg mb-10" data-aos="fade-up" data-aos-delay="600">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Наши требования к поставщикам</h2>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                Мы отдаем предпочтение партнерам, которые могут обеспечить:
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(item, index) in requirements"
                  :key="index"
                  class="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100"
                  data-aos="fade-up"
                  :style="`animation-delay: ${800 + index * 100}ms`"
                >
                  <div class="bg-white p-1 rounded mr-3 border border-blue-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-gray-800">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8" data-aos="fade-up">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-yellow-800">Обязательные условия</h3>
                  <div class="mt-2 text-yellow-700">
                    <p class="text-sm">• Сертифицированные и качественные товары</p>
                    <p class="text-sm">• Стабильность и ритмичность поставок</p>
                    <p class="text-sm">• Бесплатная доставка на наш склад</p>
                    <p class="text-sm">• Тара и упаковка включены в стоимость товара</p>
                    <p class="text-sm">• Работа по безналичному расчету с НДС</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-8" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Контактная информация</h2>
          <p class="text-gray-600 mt-2">Свяжитесь с нами для обсуждения условий сотрудничества</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 inline-flex items-center justify-center p-3 rounded-full mb-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Телефон</h3>
            <a href="tel:+73512181452" class="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium">
              +7 (123) 123-12-32
            </a>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 inline-flex items-center justify-center p-3 rounded-full mb-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Электронная почта</h3>
            <a
              href="mailto:parts@arsenalavto.ru"
              class="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium"
            >
              mail@mail.ru
            </a>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 inline-flex items-center justify-center p-3 rounded-full mb-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Режим работы</h3>
            <p class="text-gray-700 text-lg font-medium">пн-пт с 9:00 до 17:30</p>
          </div>
        </div>

        <div class="text-center mt-8">
          <button @click="open"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Отправить коммерческое предложение
          </button>

          <!-- <button
            class="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Скачать требования к поставщикам (PDF)
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Поставщики',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const requirements = [
  'Большой ассортимент в наличии на складе',
  'Регулярное информирование об ассортименте и складских остатках',
  'Минимальные сроки поставки',
  'Гибкую ценовую политику',
  'Техническую поддержку и обучение наших специалистов',
  'Маркетинговую поддержку и материалы',
]

const { open } = useModal()
</script>

<style scoped>
/* Плавная анимация для всех интерактивных элементов */
button,
a {
  transition: all 0.3s ease;
}
</style>
