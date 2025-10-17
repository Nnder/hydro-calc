<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 w-full py-12">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up">
          Сотрудничество с 
          <span class="text-blue-600">поставщиками</span>
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Мы заинтересованы в установлении долгосрочных и взаимовыгодных партнерских отношений с производителями 
          гидравлических компонентов и промышленного оборудования
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-20">
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="400">
            <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div class="bg-blue-100 p-3 sm:p-4 rounded-lg md:rounded-xl flex-shrink-0 self-center sm:self-start">
                <Icon name="mdi:handshake" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div class="flex-1 text-center sm:text-left">
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Приглашаем к сотрудничеству
                </h2>
                <p class="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Уважаемые производители и поставщики гидроцилиндров, гидравлических компонентов, 
                  сварочного оборудования и промышленных решений. Мы предлагаем взаимовыгодное партнерство, 
                  которое позволит значительно увеличить объемы продаж вашей продукции на российском рынке.
                </p>
              </div>
            </div>
          </div>

          <!-- Требования к поставщикам -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-blue-100" data-aos="fade-up" data-aos-delay="600">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Наши требования к поставщикам</h2>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">
                Мы отдаем предпочтение партнерам, которые могут обеспечить:
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(item, index) in requirements"
                  :key="index"
                  class="flex items-start p-4 bg-blue-50 rounded-xl border border-blue-200 group hover:bg-blue-100 transition-colors"
                  data-aos="fade-up"
                  :data-aos-delay="200 + index * 100"
                >
                  <div class="bg-white  rounded-lg mr-4 border border-blue-300 group-hover:border-blue-400 transition-colors">
                    <Icon name="mdi:check" class="w-5 h-5 text-blue-600 mt-1 mx-1" />
                  </div>
                  <span class="text-gray-800 font-medium text-lg">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-xl" data-aos="fade-up">
              <div class="flex items-start gap-4">
                <Icon name="mdi:alert-circle" class="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-xl font-semibold text-amber-800 mb-3">Обязательные условия сотрудничества</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div class="flex items-center gap-2">
                      <Icon name="mdi:certificate" class="w-4 h-4 text-amber-600" />
                      <span class="text-amber-700 text-sm">Сертифицированные и качественные товары</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="mdi:truck-delivery" class="w-4 h-4 text-amber-600" />
                      <span class="text-amber-700 text-sm">Стабильность и ритмичность поставок</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="mdi:package-variant" class="w-4 h-4 text-amber-600" />
                      <span class="text-amber-700 text-sm">Бесплатная доставка на наш склад</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Icon name="mdi:currency-rub" class="w-4 h-4 text-amber-600" />
                      <span class="text-amber-700 text-sm">Работа по безналичному расчету с НДС</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-16 border-t border-blue-200" data-aos="fade-up">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Контактная информация</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с отделом закупок для обсуждения условий сотрудничества
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <div class="bg-blue-100 inline-flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
              <Icon name="mdi:phone" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">Телефон отдела закупок</h3>
            <a href="tel:+78005553357" class="text-blue-600 hover:text-blue-800 transition-colors text-xl font-semibold">
              +7 (800) 555-33-57
            </a>
          </div>

          <div class="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <div class="bg-blue-100 inline-flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
              <Icon name="mdi:email" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">Электронная почта</h3>
            <a
              href="mailto:procurement@absolyut-tekno.ru"
              class="text-blue-600 hover:text-blue-800 transition-colors text-xl font-semibold"
            >
              procurement@absolyut-tekno.ru
            </a>
          </div>

          <div class="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <div class="bg-blue-100 inline-flex items-center justify-center p-4 rounded-full mb-4 mx-auto">
              <Icon name="mdi:clock-outline" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">Режим работы отдела</h3>
            <p class="text-gray-700 text-xl font-semibold">пн-пт с 9:00 до 18:00</p>
          </div>
        </div>

        <div class="text-center">
          <button @click="open"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl"
          >
            <Icon name="mdi:file-send" class="w-6 h-6 mr-3" />
            Отправить коммерческое предложение
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Сотрудничество с поставщиками | Абсолют Техно',
  meta: [
    {
      name: 'description',
      content: 'Станьте поставщиком ООО Абсолют Техно. Сотрудничество с производителями гидроцилиндров, гидравлических компонентов и промышленного оборудования.',
    },
  ],
})

const requirements = [
  'Большой ассортимент в наличии на складе',
  'Регулярное информирование об ассортименте и остатках',
  'Минимальные сроки поставки',
  'Гибкую ценовую политику',
  'Техническую поддержку наших специалистов',
  'Маркетинговую поддержку и материалы',
  'Сертификаты качества на продукцию',
  'Гарантийное обслуживание'
]

const { open } = useModal()
</script>

<style scoped>
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-blue-50 {
  background-color: #eff6ff;
}

.border-blue-200 {
  border-color: #bfdbfe;
}
</style>