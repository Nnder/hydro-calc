<template>
  <div class="min-h-screen bg-gray-50">
    <section class="relative bg-gradient-to-b from-tech-dark to-hydro-steel text-white pt-28 pb-40">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-2xl mb-16">
          <div class="inline-flex items-center bg-hydro-power/20 text-hydro-power px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="mdi:certificate" class="mr-2" /> Официальный сервисный центр
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">Гидроцилиндер</h1>
          <p class="text-xl opacity-90 mb-8">Комплексные решения для промышленных и мобильных гидросистем с гарантией качества</p>
          <div class="flex flex-wrap gap-4">
            <button class="bg-hydro-power hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl flex items-center">
              <Icon name="mdi:calendar-clock" class="mr-2" />
              Записаться на диагностику
            </button>
            <button class="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-6 rounded-full transition-all flex items-center">
              <Icon name="mdi:phone" class="mr-2" />
              8 (800) 350-60-70
            </button>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mt-16">
          <div v-for="(service, index) in services" :key="index" 
               class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
            <div class="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Icon :name="service.icon" class="text-white text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
            <p class="text-white/80 mb-5">{{ service.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-white">{{ service.price }}</span>
              <button class="text-white hover:text-hydro-power font-medium flex items-center">
                Подробнее <Icon name="mdi:arrow-right" class="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white border-t border-b border-hydro-steel/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="">
            <h2 class="text-3xl font-bold text-red-800 mb-4 flex items-center">
              <Icon name="mdi:calculator-variant" class="text-red-600 mr-3" />
              Калькулятор стоимости
            </h2>
            
            <div class="bg-white p-8 rounded-lg border-2 border-dashed border-red-300">
              <div class="flex flex-col items-center justify-center min-h-[300px]">
                <Icon name="mdi:calculator" class="text-red-400 text-5xl mb-4" />
                <h3 class="text-xl font-medium text-gray-600 mb-2">Калькулятор будет здесь</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="lg:w-1/2">
            <div class="sticky top-28">
              <h2 class="text-3xl font-bold text-tech-dark mb-8">Почему клиенты выбирают нас</h2>
              
              <div class="space-y-6">
                <div v-for="(item, index) in trustItems" :key="index" 
                     class="flex items-start bg-gray-50/80 p-6 rounded-xl border border-hydro-steel/10 hover:border-hydro-power/30 transition-all">
                  <div class="bg-hydro-power/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon :name="item.icon" class="text-hydro-power text-xl" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-hydro-steel mb-2">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/2">
            <div class="bg-tech-dark text-white rounded-3xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold mb-8 flex items-center">
                <Icon name="mdi:clock-outline" class="text-hydro-power mr-3" />
                Процесс работы
              </h3>
              
              <div class="space-y-6 mb-10">
                <div v-for="(step, index) in process" :key="index" class="flex items-start">
                  <div class="bg-hydro-power/20 text-hydro-power rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0 text-sm font-bold">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h4 class="font-bold text-lg mb-1">{{ step.title }}</h4>
                    <p class="text-gray-300">{{ step.description }}</p>
                    <div v-if="step.price" class="mt-2 text-white font-medium">{{ step.price }}</div>
                  </div>
                </div>
              </div>
              
              <div class="bg-hydro-steel/20 rounded-xl p-6">
                <h4 class="font-bold text-lg mb-4 flex items-center">
                  <Icon name="mdi:currency-rub" class="text-hydro-power mr-2" />
                  Примерная стоимость
                </h4>
                <div class="space-y-3">
                  <div v-for="(price, index) in priceExamples" :key="index" class="flex justify-between">
                    <span class="text-white">{{ price.service }}</span>
                    <span class="font-medium">{{ price.cost }}</span>
                  </div>
                </div>
                <button class="mt-6 w-full bg-hydro-power hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Получить точный расчет
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="lg:w-2/3">
            <h2 class="text-3xl font-bold text-tech-dark mb-8">Примеры наших работ</h2>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(project, index) in portfolio" :key="index" 
                   class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div class="h-48 bg-hydro-steel/10 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-t from-tech-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 class="text-white text-xl font-bold">{{ project.title }}</h3>
                  </div>
                  <Icon name="mdi:hydraulic-oil-level" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-hydro-steel/20 text-5xl" />
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-hydro-steel">{{ project.title }}</h3>
                    <span class="text-hydro-steel/50 text-sm">{{ project.year }}</span>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" 
                          class="bg-hydro-steel/5 text-hydro-steel text-xs px-3 py-1 rounded-full">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lg:w-1/3">
            <div class="sticky top-28 space-y-8">
              <div class="bg-white rounded-2xl shadow-md p-6">
                <h3 class="text-xl font-bold text-hydro-steel mb-6 flex items-center">
                  <Icon name="mdi:certificate" class="text-hydro-power mr-2" />
                  Наши сертификаты
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(cert, index) in certificates" :key="index" 
                       class="border-2 border-hydro-steel/10 rounded-xl p-4 hover:border-hydro-power/30 transition-colors cursor-pointer">
                    <div class="aspect-square bg-hydro-steel/5 flex items-center justify-center mb-3 rounded-lg">
                      <Icon name="mdi:file-document" class="text-hydro-steel/50 text-4xl" />
                    </div>
                    <h4 class="text-center text-sm font-medium text-hydro-steel">{{ cert.name }}</h4>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl shadow-md p-6">
                <h3 class="text-xl font-bold text-hydro-steel mb-6 flex items-center">
                  <Icon name="mdi:help-circle" class="text-hydro-power mr-2" />
                  Частые вопросы
                </h3>
                <div class="space-y-4">
                  <div v-for="(faq, index) in faqs" :key="index" 
                       class="border-b border-hydro-steel/10 pb-4 last:border-0 last:pb-0">
                    <button 
                      @click="toggleFaq(index)"
                      class="flex justify-between items-center w-full text-left text-hydro-steel hover:text-hydro-power transition-colors"
                    >
                      <span class="font-medium">{{ faq.question }}</span>
                      <Icon :name="openFaq === index ? 'mdi:minus' : 'mdi:plus'" class="text-hydro-steel" />
                    </button>
                    <div 
                      v-show="openFaq === index"
                      class="mt-2 text-gray-600 text-sm"
                    >
                      {{ faq.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const openFaq = ref(null);
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

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

const portfolio = [
  {
    title: 'Ремонт экскаватора Hitachi',
    description: 'Полное восстановление гидросистемы после аварии',
    year: '2023',
    tags: ['Экскаватор', 'Гидроцилиндры', 'Срочный ремонт']
  },
  {
    title: 'Обслуживание башенного крана',
    description: 'Комплексное ТО гидравлической системы',
    year: '2023',
    tags: ['Кран', 'Профилактика', 'Гидронасосы']
  },
  {
    title: 'Ремонт пресса 500 тонн',
    description: 'Замена гидроцилиндров и клапанной группы',
    year: '2022',
    tags: ['Промоборудование', 'Гидроцилиндры']
  },
  {
    title: 'Восстановление насоса',
    description: 'Капитальный ремонт гидронасоса Bosch Rexroth',
    year: '2022',
    tags: ['Гидронасос', 'Капитальный ремонт']
  }
];

const certificates = [
  { name: 'ISO 9001' },
  { name: 'Лицензия' },
  { name: 'Специалисты' },
  { name: 'СРО' }
];

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

<style>
button, a, .group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon {
  display: inline-flex;
  vertical-align: middle;
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>