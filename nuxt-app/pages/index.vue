<script setup lang="ts">
import Calculator from '~/components/Calculator/Calculator.vue'
import DeviceSelector from '~/components/App/DeviceSelector.vue'
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
</script>

<template>
  <DeviceSelector/>
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
