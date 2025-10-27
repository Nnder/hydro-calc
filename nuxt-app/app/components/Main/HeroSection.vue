<template>
  <section class="relative bg-gradient-to-b from-tech-dark to-hydro-steel text-white pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="max-w-2xl mb-8 md:mb-10 lg:mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight">Гидроцилиндр</h1>
        <p class="text-lg md:text-xl opacity-90 mb-6 md:mb-7">Комплексные решения для промышленных и мобильных гидросистем с гарантией качества</p>
        <div class="flex flex-wrap gap-3 md:gap-4">
          <button class="bg-hydro-power hover:bg-blue-700 text-white font-bold py-3 px-6 md:py-3.5 md:px-7 rounded-full transition-all duration-300 hover:shadow-xl flex items-center text-sm md:text-base">
            <Icon name="mdi:calendar-clock" class="mr-1.5" />
            Записаться на диагностику
          </button>
          <button class="border-2 border-white/30 hover:border-white/60 text-white font-bold py-3 px-4 md:py-3.5 md:px-5 rounded-full transition-all flex items-center text-sm md:text-base">
            <Icon name="mdi:phone" class="mr-1.5" />
            8 (800) 350-60-70
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 lg:mt-12">
        <div v-for="(service, index) in services" :key="index" 
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-xl lg:rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-1.5">
          <div class="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-5">
            <Icon :name="service.icon" class="text-white text-xl md:text-2xl" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{{ service.title }}</h3>
          <p class="text-white/80 mb-4 md:mb-5 text-sm md:text-base">{{ service.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-lg md:text-xl font-bold text-white">{{ service.price }}</span>
            <button class="text-white hover:text-hydro-power font-medium flex items-center text-sm md:text-base">
              Подробнее <Icon name="mdi:arrow-right" class="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Ремонт гидроцилиндров',
    description: 'Восстановление работоспособности с гарантией',
    price: 'от 5 000 ₽',
    icon: 'mdi:cylinder'
  },
  {
    title: 'Ремонт гидронасосов',
    description: 'Диагностика и профессиональный ремонт',
    price: 'от 8 000 ₽',
    icon: 'mdi:pump'
  },
  {
    title: 'Обслуживание гидросистем',
    description: 'Комплексное ТО и профилактика',
    price: 'от 3 500 ₽',
    icon: 'mdi:pipe-valve'
  }
];
</script>