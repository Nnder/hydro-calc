<template>
  <section class="py-12 sm:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="bg-white mt-10 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6">
        <h3 class="text-lg sm:text-xl font-bold text-hydro-steel mb-4 sm:mb-6 flex items-center">
          <Icon name="mdi:help-circle" class="text-hydro-power mr-1.5 sm:mr-2" />
          Частые вопросы
        </h3>
        <div class="space-y-3 sm:space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="border-b border-hydro-steel/10 pb-3 sm:pb-4 last:border-0 last:pb-0">
            <button 
              @click="toggleFaq(index)"
              class="flex justify-between items-center w-full text-left text-hydro-steel hover:text-hydro-power transition-colors text-sm sm:text-base"
            >
              <span class="font-medium">{{ faq.question }}</span>
              <Icon :name="openFaq === index ? 'mdi:minus' : 'mdi:plus'" class="text-hydro-steel" />
            </button>
            <div 
              v-show="openFaq === index"
              class="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openFaq = ref(null);
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const faqs = [
  {
    question: 'Какие марки оборудования вы ремонтируете?',
    answer: 'Мы работаем со всеми основными производителями гидравлического оборудования: Bosch Rexroth, Parker, Eaton, Kawasaki, Liebherr и другими.'
  },
  {
    question: 'Как быстро можно получить ремонт?',
    answer: 'Стандартные сроки - 1-3 рабочих дня. Для срочных заказов доступен экспресс-ремонт за 12-24 часа.'
  },
  {
    question: 'Работаете ли вы с юридическими лицами?',
    answer: 'Да, мы заключаем договоры и предоставляем все необходимые бухгалтерские документы для юрлиц.'
  },
  {
    question: 'Есть ли выездная диагностика?',
    answer: 'Да, наши специалисты могут приехать к вам для первичной диагностики (услуга бесплатна в пределах Москвы).'
  }
];
</script>