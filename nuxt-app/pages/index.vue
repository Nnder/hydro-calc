<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import Slider from '~/components/Slider/Slider.vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const selected = ref<null | number>(null)

const mockData = [
  { src: 'hydrocilinder.png', title: 'Гидроцилиндер' },
  { src: 'hydromotor.png', title: 'Гидромотор' },
  { src: 'hydronasos.png', title: 'Гидронасос' },
  { src: 'reductor.png', title: 'Редуктор' },
]

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремонта`,
    },
  ],
})

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
const categories = [
  {
    title: 'Гидравлическое оборудование',
    icon: 'mdi:hydraulic-oil-level',
    items: ['Гидроцилиндры', 'Гидронасосы', 'Гидромоторы', 'Гидрораспределители'],
    bgColor: 'bg-tech-dark/5',
    borderColor: 'border-tech-dark/20',
    iconColor: 'text-tech-dark',
  },
  {
    title: 'Пневматическое оборудование',
    icon: 'mdi:hammer-wrench',
    items: ['Пневмоцилиндры', 'Компрессоры', 'Пневмораспределители', 'Пневмоинструмент'],
    bgColor: 'bg-tech-dark/5',
    borderColor: 'border-tech-dark/20',
    iconColor: 'text-tech-dark',
  },
  {
    title: 'Электроинструмент',
    icon: 'mdi:power-socket-eu',
    items: ['Дрели и шуруповерты', 'Перфораторы', 'Болгарки', 'Шлифмашины'],
    bgColor: 'bg-tech-dark/5',
    borderColor: 'border-tech-dark/20',
    iconColor: 'text-tech-dark',
  },
  {
    title: 'Строительное оборудование',
    icon: 'mdi:hammer-wrench',
    items: ['Бетономешалки', 'Строительные леса', 'Лестницы', 'Строительные пылесосы'],
    bgColor: 'bg-tech-dark/5',
    borderColor: 'border-tech-dark/20',
    iconColor: 'text-tech-dark',
  },
]

const mainServices = [
  {
    title: 'Ремонт гидроцилиндров',
    description: 'Профессиональный ремонт с гарантией до 2 лет',
    icon: 'mdi:cylinder',
    price: 'от 5 000 ₽',
    badge: '',
    badgeColor: 'bg-hydro-danger',
  },
  {
    title: 'Диагностика оборудования',
    description: 'Комплексная проверка состояния техники',
    icon: 'mdi:engine-outline',
    price: 'от 1 500 ₽',
    badge: '',
    badgeColor: 'bg-hydro-power',
  },
  {
    title: 'Техническое обслуживание',
    description: 'Плановое ТО для продления срока службы',
    icon: 'mdi:wrench-outline',
    price: 'от 3 000 ₽',
  },
  {
    title: 'Аварийный ремонт',
    description: 'Срочный выезд мастера в течение 2 часов',
    icon: 'mdi:alarm-light-outline',
    price: 'от 8 000 ₽',
    badge: '',
    badgeColor: 'bg-hydro-danger',
  },
]
</script>

<template>
  <div class="bg-tech-light">
    <Slider />
    <section class="py-12 md:py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-10 md:mb-14">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-tech-dark mb-3">Категории оборудования</h2>
          <p class="text-hydro-steel/80 max-w-2xl mx-auto text-sm md:text-base">
            Широкий ассортимент оборудования для промышленности и строительства
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="group rounded-xl md:rounded-2xl p-6 md:p-8 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            :class="[category.bgColor, category.borderColor]"
          >
            <div class="flex items-center mb-4 md:mb-6">
              <div class="p-2.5 rounded-lg mr-4" :class="category.bgColor">
                <Icon :name="category.icon" class="text-xl md:text-2xl" :class="category.iconColor" />
              </div>
              <h3 class="text-lg md:text-xl font-bold text-tech-dark">
                {{ category.title }}
              </h3>
            </div>

            <ul class="space-y-2 md:space-y-3">
              <li
                v-for="(item, itemIndex) in category.items"
                :key="itemIndex"
                class="flex items-center text-sm md:text-base text-hydro-steel/80 hover:text-hydro-power transition-colors"
              >
                <Icon name="mdi:chevron-right" class="mr-2" :class="category.iconColor" />
                {{ item }}
              </li>
            </ul>

            <button
              class="mt-4 md:mt-6 font-medium flex items-center text-sm md:text-base group-hover:text-hydro-power transition-colors"
              :class="category.iconColor"
            >
              Смотреть все
              <Icon name="mdi:arrow-right" class="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-tech-light to-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-10 md:mb-14">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-tech-dark mb-3">Основные услуги</h2>
          <p class="text-hydro-steel/80 max-w-2xl mx-auto text-sm md:text-base">
            Профессиональный сервис и ремонт гидравлического оборудования
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(service, index) in mainServices"
            :key="index"
            class="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
          >
            <div
              v-if="service.badge"
              class="absolute top-4 right-4 text-white text-xs font-bold px-2.5 py-1 rounded-full"
              :class="service.badgeColor"
            >
              {{ service.badge }}
            </div>

            <div
              class="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6"
              :class="service.badge ? 'bg-hydro-power/5' : 'bg-hydro-steel/5'"
            >
              <Icon
                :name="service.icon"
                class="text-xl md:text-2xl"
                :class="service.badge ? 'text-hydro-power' : 'text-hydro-steel'"
              />
            </div>

            <h3 class="text-lg md:text-xl font-bold text-tech-dark mb-2 md:mb-3">
              {{ service.title }}
            </h3>
            <p class="text-hydro-steel/80 text-sm md:text-base mb-4 md:mb-6">
              {{ service.description }}
            </p>
            <div class="flex justify-between items-center">
              <span
                class="text-lg md:text-xl font-bold"
                :class="service.badge ? 'text-hydro-power' : 'text-hydro-steel'"
              >
                {{ service.price }}
              </span>
              <button
                class="font-medium flex items-center text-sm md:text-base hover:text-hydro-power transition-colors"
                :class="service.badge ? 'text-hydro-power' : 'text-hydro-steel'"
              >
                Подробнее <Icon name="mdi:arrow-right" class="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="mt-4 w-full">
    <h2 class="text-center text-2xl font-medium pb-2">Калькулятор</h2>
    <v-sheet :elevation="5" class="w-full p-4">
      <div>
        <h2 class="font-medium text-lg text-center">Выберите механическое устройство</h2>
      </div>
      <div class="flex flex-wrap gap-4 justify-evenly">
        <div
          class="flex-1 min-w-[150px] max-w-[200px] aspect-square"
          v-for="(item, index) in mockData"
          @click="selected = index"
        >
          <NuxtImg
            :src="item.src"
            :alt="item.title"
            class="w-full h-full object-contain"
            sizes="200px"
            loading="lazy"
          />
          <p class="text-center font-medium">{{ item.title }}</p>
        </div>
      </div>
    </v-sheet>
  </div>
  <div class="w-full h-full !flex flex-col items-center p-4" v-if="selected !== null">
    <h2 class="text-center text-2xl font-medium pb-2">{{ mockData[selected].title }}</h2>

    <Calculator
      :formSteps="formSteps"
      :callback="(data: []) => cartStore.addItem({ product: 'Гидроцилиндер', data: [...data] })"
    />
  </div>
  <div class="w-full p-4 flex flex-col gap-4" v-if="selected !== null"></div>
</template>

<style scoped>
.category-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}
</style>
