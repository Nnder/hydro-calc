<template>
  <section class="py-12 sm:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-10">
        <div class="lg:w-1/2">
          <div class="sticky top-20 sm:top-28">
            <h2 class="text-2xl sm:text-3xl font-bold text-tech-dark mb-6 sm:mb-8">Почему клиенты выбирают нас</h2>
            
            <div class="space-y-4 sm:space-y-6">
              <div v-for="(item, index) in trustItems" :key="index" 
                   class="flex items-start bg-gray-50/80 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-hydro-steel/10 hover:border-hydro-power/30 transition-all">
                <div class="bg-hydro-power/10 p-2 sm:p-3 rounded sm:rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Icon :name="item.icon" class="text-hydro-power text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-semibold text-hydro-steel mb-1 sm:mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600 text-sm sm:text-base">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2">
          <div class="bg-tech-dark text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center">
              <Icon name="mdi:clock-outline" class="text-hydro-power mr-2 sm:mr-3" />
              Процесс работы
            </h3>
            
            <div class="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <div v-for="(step, index) in process" :key="index" class="flex items-start">
                <div class="bg-hydro-power/20 text-hydro-power rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 text-xs sm:text-sm font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="font-bold text-base sm:text-lg mb-1">{{ step.title }}</h4>
                  <p class="text-gray-300 text-sm sm:text-base">{{ step.description }}</p>
                  <div v-if="step.price" class="mt-1 sm:mt-2 text-white font-medium text-sm sm:text-base">{{ step.price }}</div>
                </div>
              </div>
            </div>
            
            <div class="bg-hydro-steel/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h4 class="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                <Icon name="mdi:currency-rub" class="text-hydro-power mr-1.5 sm:mr-2" />
                Примерная стоимость
              </h4>
              <div class="space-y-2 sm:space-y-3">
                <div v-for="(price, index) in priceExamples" :key="index" class="flex justify-between text-sm sm:text-base">
                  <span class="text-white">{{ price.service }}</span>
                  <span class="font-medium">{{ price.cost }}</span>
                </div>
              </div>
              <button class="mt-4 sm:mt-6 w-full bg-hydro-power hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-lg transition-colors text-sm sm:text-base">
                Получить точный расчет
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const trustItems = [
  {
    title: '15 лет опыта',
    description: 'Работаем на рынке гидравлического оборудования с 2008 года',
    icon: 'mdi:calendar-star'
  },
  {
    title: 'Гарантия 24 месяца',
    description: 'Максимальная гарантия на все виды ремонтных работ',
    icon: 'mdi:shield-check'
  },
  {
    title: 'Собственный склад запчастей',
    description: 'Более 5000 оригинальных деталей в наличии',
    icon: 'mdi:warehouse'
  },
  {
    title: 'Выездная служба',
    description: 'Экспресс-диагностика на вашем объекте в день обращения',
    icon: 'mdi:van-utility'
  }
];

const process = [
  {
    title: 'Заявка',
    description: 'Оставляете заявку на сайте или по телефону'
  },
  {
    title: 'Диагностика',
    description: 'Бесплатная диагностика оборудования',
    price: '0 ₽'
  },
  {
    title: 'Согласование',
    description: 'Утверждаем стоимость и сроки ремонта'
  },
  {
    title: 'Ремонт',
    description: 'Выполняем работы с использованием профессионального оборудования'
  },
  {
    title: 'Тестирование',
    description: 'Проверка работоспособности на стенде'
  },
  {
    title: 'Сдача работы',
    description: 'Демонстрация результата и подписание актов'
  }
];

const priceExamples = [
  { service: 'Диагностика', cost: 'Бесплатно' },
  { service: 'Замена уплотнений', cost: 'от 1 500 ₽' },
  { service: 'Ремонт штока', cost: 'от 8 000 ₽' },
  { service: 'Замена гильзы', cost: 'от 12 000 ₽' },
  { service: 'Чистка гидросистемы', cost: 'от 3 500 ₽' }
];
</script>