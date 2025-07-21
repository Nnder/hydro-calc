<template>
  <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Часто задаваемые вопросы</h2>
      <p class="mt-4 text-lg text-gray-600">Ответы на самые популярные вопросы о ремонте гидроцилиндров</p>
    </div>
    
    <div class="space-y-4">
      <div 
        v-for="(item, index) in faqItems" 
        :key="item.id"
        class="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:shadow-lg"
      >
        <button
          @click="toggle(index)"
          class="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
          :aria-expanded="item.isOpen"
        >
          <span class="text-lg font-semibold text-gray-900">{{ item.question }}</span>
          <Icon 
            name="heroicons:chevron-down" 
            class="w-6 h-6 flex-shrink-0 transform transition-transform duration-300 text-blue-600"
            :class="{ 'rotate-180': item.isOpen }"
          />
        </button>
        
        <Transition
          name="slide-fade"
          mode="out-in"
        >
          <div
            v-show="item.isOpen"
            class="px-6 pb-6 text-gray-600 prose prose-blue max-w-none"
          >
            <div v-html="item.answer"></div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqItems = ref([
  {
    id: 1,
    question: 'Сколько стоит ремонт?',
    answer: 'Зависит от дефектовки. <strong>От 30 000 руб.</strong> за гидроцилиндр от 50 мм (не более 50-60% от стоимости нового).',
    isOpen: false
  },
  {
    id: 2,
    question: 'Какие сроки ремонта?',
    answer: `
      <ul class="space-y-2">
        <li><span class="font-medium">Мелкий ремонт</span> (замена уплотнений): 1-2 недели</li>
        <li><span class="font-medium">Средний ремонт</span> (восстановление поверхностей): 2-3 недели</li>
        <li><span class="font-medium">Капитальный ремонт</span> (замена деталей): 3-5 недель</li>
        <li>Для цилиндров >150 мм диаметром и >2000 мм длиной: 6-8 недель</li>
        <li><span class="text-blue-600 font-medium">Срочный ремонт</span> возможен от 1 дня</li>
      </ul>
      <p class="mt-3">Если восстановление невозможно — изготавливаем детали заново.</p>
    `,
    isOpen: false
  },
  {
    id: 3,
    question: 'На какую технику ремонтируете?',
    answer: 'Дорожно-строительная, горная, карьерная, тоннеле-проходческая, металлообрабатывающая техника <strong>любых брендов</strong>.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Какие гидроцилиндры ремонтируете?',
    answer: '<strong>Любые, кроме телескопических</strong> (МАЗ, КамАЗ, Hiva).',
    isOpen: false
  },
  {
    id: 5,
    question: 'Есть ли уплотнения в наличии?',
    answer: 'Все стандартные уплотнения — в наличии. Также производим <strong>нестандартные</strong> уплотнения под заказ.',
    isOpen: false
  },
  {
    id: 6,
    question: 'Проводите испытания после ремонта?',
    answer: 'Да, тестируем на давление с коэффициентом <strong>1.5 от номинального</strong>, проверяем протечки и статику.',
    isOpen: false
  },
  {
    id: 7,
    question: 'Даёте гарантию на ремонт?',
    answer: 'Гарантия <strong>3-6 месяцев</strong> при соблюдении правил эксплуатации оборудования.',
    isOpen: false
  }
]);

const toggle = (index) => {
  faqItems.value.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false; // Закрываем другие элементы (аккордеон)
    }
  });
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
.prose li {
  margin-bottom: 0.5rem;
}
</style>