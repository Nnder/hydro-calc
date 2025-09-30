<template>
  <section class="min-h-screen flex items-center py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Доставка и оплата
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600 font-light">
          Мы оперативно доставляем заказы по всей России, чтобы вы могли получить необходимое гидравлическое оборудование без задержек.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="group relative bg-white  shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:bg-blue-600"
        >
          <div class="flex flex-col items-center">
            <div class="w-full aspect-video overflow-hidden">
              <NuxtImg 
                :src="card.image" 
                :alt="card.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            
            <div class="relative -mt-8 z-10">
              <div class="bg-black p-3 rounded-full shadow-lg mx-auto">
                <Icon :name="card.icon" class="w-8 h-8 text-white block mx-auto" />
              </div>
            </div>
            
            <div class="w-full p-6 lg:p-8 mt-2 ">
              <h3 
                class="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 text-center"
                :class="`group-hover:text-white`"
              >
                {{ card.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm lg:text-base text-center">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>


      <!-- <div class="mt-16 bg-white rounded-lg  p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Подробные условия доставки</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Способы доставки</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="mdi:truck" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Курьерская доставка по Москве и области - 1-2 дня</span>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:train" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Доставка транспортными компаниями по России - от 3 дней</span>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:package" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Самовывоз со склада в Москве - в день заказа</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Способы оплаты</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <Icon name="mdi:cash" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Наличными курьеру при получении</span>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:credit-card" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Банковской картой онлайн</span>
              </li>
              <li class="flex items-start">
                <Icon name="mdi:bank" class="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <span>Безналичный расчет для юридических лиц</span>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    image: '/plohaya.jpeg',
    icon: 'mdi:truck-fast',
    title: 'Быстрая доставка',
    description: 'Доставляем заказы по России в кратчайшие сроки с надежными транспортными компаниями',
  },
  {
    image: '/plohaya.jpeg',
    icon: 'mdi:credit-card-check',
    title: 'Удобная оплата',
    description: 'Принимаем различные формы оплаты: наличными, картой или безналичным расчетом',
  },
  {
    image: '/plohaya.jpeg',
    icon: 'mdi:headset',
    title: 'Поддержка 24/7',
    description: 'Наши менеджеры всегда на связи и готовы ответить на все вопросы о доставке и оплате',
  }
];
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Альтернатива invert для лучшей совместимости */
.group:hover .group-hover\:invert {
  filter: invert(1) brightness(2);
}
</style>