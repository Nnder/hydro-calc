<template>
  <section class="py-16 bg-gradient-to-br  bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl shadow-lg mb-6 transform rotate-6">
          <Icon name="mdi:clipboard-flow" class="w-8 h-8 text-white" />
        </div>
        <h2 class="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
          Этапы работы
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </h2>
        <p class="text-xl text-gray-600 font-light max-w-3xl mx-auto">
          Прозрачный путь вашего заказа от заявки до получения
        </p>
      </div>

      <div class="relative max-w-6xl mx-auto">
        <!-- <div class="absolute -top-6 -left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
        <div class="absolute top-1/2 -right-8 w-20 h-20 bg-indigo-200/40 rounded-full blur-xl"></div>
        <div class="absolute bottom-10 left-1/3 w-16 h-16 bg-blue-300/20 rounded-full blur-lg"></div> -->
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Левая колонка  -->
          <div class="space-y-12">
            <!-- Этап 1 (повыше) -->
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                1
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-blue-100/70 transform transition-all duration-300 hover:-translate-y-1 ml-6 mt-6">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:form-textbox" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Заявка</h3>
                    <p class="text-gray-600">
                      Клиент оставляет заявку на сайте или по телефону.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Этап 3 (повыше) -->
            <div class="relative mt-16">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                3
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-blue-100/70 transform transition-all duration-300 hover:-translate-y-1 ml-6 mt-6">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:file-document-outline" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Договор</h3>
                    <p class="text-gray-600">
                      Высылаем коммерческое предложение и договор.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Этап 5 (повыше) -->
            <div class="relative mt-16">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                5
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-blue-100/70 transform transition-all duration-300 hover:-translate-y-1 ml-6 mt-6">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:tools" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Выполнение работ</h3>
                    <p class="text-gray-600">
                      Выполняем работу качественно и в оговоренные сроки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Этап 7 (повыше) -->
            <div class="relative mt-16">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                7
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-blue-100/70 transform transition-all duration-300 hover:-translate-y-1 ml-6 mt-6">
                <div class="flex items-start gap-4">
                  <div class="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:handshake-outline" class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Получение</h3>
                    <p class="text-gray-600">
                      Клиент получает заказ и подписывает документы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Правая колонка -->
          <div class="space-y-12 mt-24">
            <!-- Этап 2 (пониже) -->
            <div class="relative">
              <div class="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                2
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100/70 transform transition-all duration-300 hover:-translate-y-1 mr-6">
                <div class="flex items-start gap-4">
                  <div class="bg-indigo-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:calculator" class="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Расчет стоимости</h3>
                    <p class="text-gray-600">
                      Менеджер уточняет детали и рассчитывает стоимость.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Этап 4 (пониже) -->
            <div class="relative mt-16">
              <div class="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                4
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100/70 transform transition-all duration-300 hover:-translate-y-1 mr-6">
                <div class="flex items-start gap-4">
                  <div class="bg-indigo-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:cash-check" class="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Предоплата</h3>
                    <p class="text-gray-600">
                      (Если требуется). После предоплаты начинаем работу.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Этап 6 (пониже) -->
            <div class="relative mt-16">
              <div class="absolute -top-4 -right-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                6
              </div>
              <div class="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100/70 transform transition-all duration-300 hover:-translate-y-1 mr-6">
                <div class="flex items-start gap-4">
                  <div class="bg-indigo-100 p-3 rounded-xl flex-shrink-0">
                    <Icon name="mdi:truck-delivery-outline" class="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Доставка</h3>
                    <p class="text-gray-600">
                      Согласовываем удобный способ доставки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

.container > * {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.container > *:nth-child(1) { animation-delay: 0.1s; }
.container > *:nth-child(2) { animation-delay: 0.2s; }

.bg-white {
  opacity: 0;
  animation: fadeInScale 0.6s ease forwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.relative:nth-child(1) .bg-white { animation-delay: 0.3s; }
.relative:nth-child(2) .bg-white { animation-delay: 0.4s; }
.relative:nth-child(3) .bg-white { animation-delay: 0.5s; }
.relative:nth-child(4) .bg-white { animation-delay: 0.6s; }
.relative:nth-child(5) .bg-white { animation-delay: 0.7s; }
.relative:nth-child(6) .bg-white { animation-delay: 0.8s; }
.relative:nth-child(7) .bg-white { animation-delay: 0.9s; }
</style>