<template>
  <div class="max-w-7xl mx-auto py-12 md:py-4 px-2 sm:px-4 bg-white ">
    <div class="grid grid-cols-1 mb-12 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="group relative bg-white p-6 lg:p-7 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-50 hover:border-blue-100 flex flex-col justify-between min-h-[220px] opacity-0 animate-slide-in-right"
        :style="{
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'forwards'
        }"
      >
        <!-- Декоративные элементы только для последней карточки -->
        <div 
          v-if="index === cards.length - 1" 
          class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-20 translate-x-20"
        ></div>
        <div 
          v-if="index === cards.length - 1" 
          class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/15 to-transparent rounded-full translate-y-12 -translate-x-12"
        ></div>
        
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-4">
            <div class="p-3 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-100">
              <Icon 
                :name="card.icon" 
                class="h-8 w-8 text-blue-600" 
              />
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
              {{ card.title }}
            </h3>
            <p class="text-base text-gray-600 leading-relaxed">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    icon: "material-symbols:percent-rounded",
    title: "Вычет НДС до 20%",
    description: "Cможете сэкономить, если работаете на ОСН"
  },
  {
    id: 2,
    icon: "material-symbols:person-outline-rounded",
    title: "Гарантия на все виды работы",
    description: "Предоставляем гарантию от 6 месяцев до 12 месяцев"
  },
  {
    id: 3,
    icon: "material-symbols:description-outline-rounded",
    title: "ЭДО",
    description: "Или бумажные документы — как удобнее"
  },
  {
    id: 4,
    icon: "material-symbols:schedule-outline-rounded",
    title: "Отсрочка платежа",
    description: "Для каждого клиента индивидуальные условия"
  },
    {
        id: 5,
        icon: "material-symbols:description-outline-rounded",
        title: "Доставка по всей России",
        description: "Работаем со всеми транспортными компаниями"
    },
    {
        id: 6,
        icon: "material-symbols:engineering-outline-rounded",
        title: "Работа с организациями и физ лицами",
        description: "Любая форма оплаты"
    }
];
</script>

<style>
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out;
}
</style>