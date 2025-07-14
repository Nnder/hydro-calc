<template>
  <div class="min-h-screen bg-gray-50">
    <section
      class="relative bg-gradient-to-b from-tech-dark to-hydro-steel text-white pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20"
    >
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-2xl mb-8 md:mb-10 lg:mb-12">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 leading-tight">Гидроцилиндр</h1>
          <p class="text-lg md:text-xl opacity-90 mb-6 md:mb-7">
            Комплексные решения для промышленных и мобильных гидросистем с гарантией качества
          </p>
          <div class="flex flex-wrap gap-3 md:gap-4">
            <button
              class="bg-hydro-power hover:bg-blue-700 text-white font-bold py-3 px-6 md:py-3.5 md:px-7 rounded-full transition-all duration-300 hover:shadow-xl flex items-center text-sm md:text-base"
            >
              <Icon name="mdi:calendar-clock" class="mr-1.5" />
              Записаться на диагностику
            </button>
            <button
              class="border-2 border-white/30 hover:border-white/60 text-white font-bold py-3 px-4 md:py-3.5 md:px-5 rounded-full transition-all flex items-center text-sm md:text-base"
            >
              <Icon name="mdi:phone" class="mr-1.5" />
              8 (800) 350-60-70
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 lg:mt-12">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-xl lg:rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-1.5"
          >
            <div
              class="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-5"
            >
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

    <section class="py-12 sm:py-16 bg-white border-t border-b border-hydro-steel/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-red-800 mb-3 sm:mb-4 flex items-center">
              <Icon name="mdi:calculator-variant" class="text-red-600 mr-2 sm:mr-3" />
              Калькулятор стоимости
            </h2>

            <div class="bg-white p-6 sm:p-8 rounded-lg">
              <div class="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[300px]">
                <Calculator
                  :formSteps="formSteps"
                  :callback="(data: []) => cartStore.addItem({ product: 'Гидроцилиндер', data: [...data] })"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-6 sm:gap-10">
          <div class="lg:w-1/2">
            <div class="sticky top-20 sm:top-28">
              <h2 class="text-2xl sm:text-3xl font-bold text-tech-dark mb-6 sm:mb-8">Почему клиенты выбирают нас</h2>

              <div class="space-y-4 sm:space-y-6">
                <div
                  v-for="(item, index) in trustItems"
                  :key="index"
                  class="flex items-start bg-gray-50/80 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-hydro-steel/10 hover:border-hydro-power/30 transition-all"
                >
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
                  <div
                    class="bg-hydro-power/20 text-hydro-power rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 text-xs sm:text-sm font-bold"
                  >
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h4 class="font-bold text-base sm:text-lg mb-1">{{ step.title }}</h4>
                    <p class="text-gray-300 text-sm sm:text-base">{{ step.description }}</p>
                    <div v-if="step.price" class="mt-1 sm:mt-2 text-white font-medium text-sm sm:text-base">
                      {{ step.price }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-hydro-steel/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h4 class="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                  <Icon name="mdi:currency-rub" class="text-hydro-power mr-1.5 sm:mr-2" />
                  Примерная стоимость
                </h4>
                <div class="space-y-2 sm:space-y-3">
                  <div
                    v-for="(price, index) in priceExamples"
                    :key="index"
                    class="flex justify-between text-sm sm:text-base"
                  >
                    <span class="text-white">{{ price.service }}</span>
                    <span class="font-medium">{{ price.cost }}</span>
                  </div>
                </div>
                <button
                  class="mt-4 sm:mt-6 w-full bg-hydro-power hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-lg transition-colors text-sm sm:text-base"
                >
                  Получить точный расчет
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-6 sm:gap-10">
          <div class="lg:w-2/3">
            <h2 class="text-2xl sm:text-3xl font-bold text-tech-dark mb-6 sm:mb-8">Примеры наших работ</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div
                v-for="(project, index) in portfolio"
                :key="index"
                class="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div class="h-40 sm:h-48 bg-hydro-steel/10 relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-tech-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6"
                  >
                    <h3 class="text-white text-lg sm:text-xl font-bold">{{ project.title }}</h3>
                  </div>
                  <Icon
                    name="mdi:hydraulic-oil-level"
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-hydro-steel/20 text-4xl sm:text-5xl"
                  />
                </div>
                <div class="p-4 sm:p-6">
                  <div class="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 class="font-bold text-hydro-steel text-sm sm:text-base">{{ project.title }}</h3>
                    <span class="text-hydro-steel/50 text-xs sm:text-sm">{{ project.year }}</span>
                  </div>
                  <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span
                      v-for="(tag, tagIndex) in project.tags"
                      :key="tagIndex"
                      class="bg-hydro-steel/5 text-hydro-steel text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/3">
            <div class="sticky top-20 sm:top-28 space-y-6 sm:space-y-8">
              <div class="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6">
                <h3 class="text-lg sm:text-xl font-bold text-hydro-steel mb-4 sm:mb-6 flex items-center">
                  <Icon name="mdi:certificate" class="text-hydro-power mr-1.5 sm:mr-2" />
                  Наши сертификаты
                </h3>
                <div class="grid grid-cols-2 gap-3 sm:gap-4">
                  <div
                    v-for="(cert, index) in certificates"
                    :key="index"
                    class="border-2 border-hydro-steel/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-hydro-power/30 transition-colors cursor-pointer"
                  >
                    <div
                      class="aspect-square bg-hydro-steel/5 flex items-center justify-center mb-2 sm:mb-3 rounded sm:rounded-lg"
                    >
                      <Icon name="mdi:file-document" class="text-hydro-steel/50 text-3xl sm:text-4xl" />
                    </div>
                    <h4 class="text-center text-xs sm:text-sm font-medium text-hydro-steel">{{ cert.name }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-10 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-hydro-steel mb-4 sm:mb-6 flex items-center">
            <Icon name="mdi:help-circle" class="text-hydro-power mr-1.5 sm:mr-2" />
            Частые вопросы
          </h3>
          <div class="space-y-3 sm:space-y-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="border-b border-hydro-steel/10 pb-3 sm:pb-4 last:border-0 last:pb-0"
            >
              <button
                @click="toggleFaq(index)"
                class="flex justify-between items-center w-full text-left text-hydro-steel hover:text-hydro-power transition-colors text-sm sm:text-base"
              >
                <span class="font-medium">{{ faq.question }}</span>
                <Icon :name="openFaq === index ? 'mdi:minus' : 'mdi:plus'" class="text-hydro-steel" />
              </button>
              <div v-show="openFaq === index" class="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

const openFaq = ref(null)
const toggleFaq = index => {
  openFaq.value = openFaq.value === index ? null : index
}

const formSteps = ref([
  {
    id: 1,
    title: 'Шаг',
    fieldLabel: 'Деталь 1',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 2,
    title: 'Шаг',
    fieldLabel: 'Деталь 2',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 3,
    title: 'Шаг',
    fieldLabel: 'Деталь 3',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 4,
    title: 'Шаг',
    fieldLabel: 'Деталь 4',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
  {
    id: 5,
    title: 'Шаг',
    fieldLabel: 'Деталь 5',
    image: '/description_hydrocilinder.jpg',
    value: '',
  },
])

const services = [
  {
    title: 'Ремонт гидроцилиндров',
    description: 'Восстановление работоспособности с гарантией',
    price: 'от 5 000 ₽',
    icon: 'mdi:cylinder',
  },
  {
    title: 'Ремонт гидронасосов',
    description: 'Диагностика и профессиональный ремонт',
    price: 'от 8 000 ₽',
    icon: 'mdi:pump',
  },
  {
    title: 'Обслуживание гидросистем',
    description: 'Комплексное ТО и профилактика',
    price: 'от 3 500 ₽',
    icon: 'mdi:pipe-valve',
  },
]

const trustItems = [
  {
    title: '15 лет опыта',
    description: 'Работаем на рынке гидравлического оборудования с 2008 года',
    icon: 'mdi:calendar-star',
  },
  {
    title: 'Гарантия 24 месяца',
    description: 'Максимальная гарантия на все виды ремонтных работ',
    icon: 'mdi:shield-check',
  },
  {
    title: 'Собственный склад запчастей',
    description: 'Более 5000 оригинальных деталей в наличии',
    icon: 'mdi:warehouse',
  },
  {
    title: 'Выездная служба',
    description: 'Экспресс-диагностика на вашем объекте в день обращения',
    icon: 'mdi:van-utility',
  },
]

const process = [
  {
    title: 'Заявка',
    description: 'Оставляете заявку на сайте или по телефону',
  },
  {
    title: 'Диагностика',
    description: 'Бесплатная диагностика оборудования',
    price: '0 ₽',
  },
  {
    title: 'Согласование',
    description: 'Утверждаем стоимость и сроки ремонта',
  },
  {
    title: 'Ремонт',
    description: 'Выполняем работы с использованием профессионального оборудования',
  },
  {
    title: 'Тестирование',
    description: 'Проверка работоспособности на стенде',
  },
  {
    title: 'Сдача работы',
    description: 'Демонстрация результата и подписание актов',
  },
]

const priceExamples = [
  { service: 'Диагностика', cost: 'Бесплатно' },
  { service: 'Замена уплотнений', cost: 'от 1 500 ₽' },
  { service: 'Ремонт штока', cost: 'от 8 000 ₽' },
  { service: 'Замена гильзы', cost: 'от 12 000 ₽' },
  { service: 'Чистка гидросистемы', cost: 'от 3 500 ₽' },
]

const portfolio = [
  {
    title: 'Ремонт экскаватора Hitachi',
    description: 'Полное восстановление гидросистемы после аварии',
    year: '2023',
    tags: ['Экскаватор', 'Гидроцилиндры', 'Срочный ремонт'],
  },
  {
    title: 'Обслуживание башенного крана',
    description: 'Комплексное ТО гидравлической системы',
    year: '2023',
    tags: ['Кран', 'Профилактика', 'Гидронасосы'],
  },
  {
    title: 'Ремонт пресса 500 тонн',
    description: 'Замена гидроцилиндров и клапанной группы',
    year: '2022',
    tags: ['Промоборудование', 'Гидроцилиндры'],
  },
  {
    title: 'Восстановление насоса',
    description: 'Капитальный ремонт гидронасоса Bosch Rexroth',
    year: '2022',
    tags: ['Гидронасос', 'Капитальный ремонт'],
  },
]

const certificates = [{ name: 'ISO 9001' }, { name: 'Лицензия' }, { name: 'Специалисты' }, { name: 'СРО' }]

const faqs = [
  {
    question: 'Какие марки оборудования вы ремонтируете?',
    answer:
      'Мы работаем со всеми основными производителями гидравлического оборудования: Bosch Rexroth, Parker, Eaton, Kawasaki, Liebherr и другими.',
  },
  {
    question: 'Как быстро можно получить ремонт?',
    answer: 'Стандартные сроки - 1-3 рабочих дня. Для срочных заказов доступен экспресс-ремонт за 12-24 часа.',
  },
  {
    question: 'Работаете ли вы с юридическими лицами?',
    answer: 'Да, мы заключаем договоры и предоставляем все необходимые бухгалтерские документы для юрлиц.',
  },
  {
    question: 'Есть ли выездная диагностика?',
    answer: 'Да, наши специалисты могут приехать к вам для первичной диагностики (услуга бесплатна в пределах Москвы).',
  },
]
</script>

<style>
button,
a,
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon {
  display: inline-flex;
  vertical-align: middle;
}
</style>
