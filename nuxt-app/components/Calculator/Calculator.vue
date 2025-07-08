<script setup lang="ts">
const selected = ref<null | number>(null)

const mockData = [
  { src: 'hydrocilinder.png', title: 'Гидроцилиндер', descriptionImg: 'description_hydrocilinder.jpg' },
  { src: 'hydromotor.png', title: 'Гидромотор', descriptionImg: 'description_hydromotor.png' },
  { src: 'hydronasos.png', title: 'Гидронасос', descriptionImg: '' },
  { src: 'reductor.png', title: 'Редуктор', descriptionImg: '' },
]

const elementType = ref<null | string>(null)
const elementSize = ref<null | number>(null)
const elementFieldOne = ref<null | number>(null)
const elementFieldTwo = ref<null | number>(null)
const elementFieldThree = ref<null | number>(null)

const calculated = computed(() => {
  let result = 0
  if (elementType.value !== null) {
    result += 1000
  }

  if (elementSize.value !== null) {
    result *= elementSize.value / 50
  }

  if (elementFieldOne.value !== null) {
    result *= elementFieldOne.value
  }

  if (elementFieldTwo.value !== null) {
    result *= elementFieldTwo.value
  }

  if (elementFieldThree.value !== null) {
    result *= elementFieldThree.value
  }

  return result
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full p-4 md:p-8 flex flex-col items-center gap-4 max-w-[1000px]">
      <p class="font-medium text-lg text-justify">
        Наш калькулятор позволяет быстро и точно рассчитать стоимость гидравлических компонентов с учетом всех
        технических параметров и требований вашего проекта. Выберите тип устройства, укажите параметры и мгновенно
        получите расчёт стоимости и сроков изготовления
      </p>

      <h2 class="font-bold text-4xl text-center my-2">Калькулятор стоимости</h2>
    </div>

    <div class="bg-white w-full p-4 md:p-8 flex flex-col items-center gap-4 max-w-[1000px]">
      <div class="mt-4 w-full">
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

      <v-sheet :elevation="5" class="w-full h-full !flex flex-col items-center p-4" v-if="selected !== null">
        <h2 class="text-center text-2xl font-medium">{{ mockData[selected].title }}</h2>
        <NuxtImg
          :src="mockData[selected].descriptionImg"
          :alt="mockData[selected].title"
          class="w-full h-full object-contain max-w-[800px]"
          sizes="800px"
          loading="lazy"
        />
      </v-sheet>

      <v-sheet :elevation="5" class="w-full p-4 flex flex-col gap-4" v-if="selected !== null">
        <v-select
          v-model="elementType"
          label="Тип работы"
          :items="[
            { title: 'Замена детали', props: { value: 1 } },
            { title: 'Проточка детали', props: { value: 2 } },
            { title: 'Восстановление', props: { value: 3 } },
          ]"
        ></v-select>
        <v-select
          v-model="elementSize"
          label="Размеры гидроцилиндра"
          :items="[
            { title: '200 мм', props: { value: 200 } },
            { title: '100 мм', props: { value: 100 } },
            { title: '50 мм', props: { value: 50 } },
          ]"
        ></v-select>

        <v-select
          v-model="elementFieldOne"
          label="Поршень"
          :items="[
            { title: 'Поршень 1', props: { value: 1 } },
            { title: 'Поршень 2', props: { value: 2 } },
            { title: 'Поршень 3', props: { value: 3 } },
          ]"
        ></v-select>

        <v-select
          v-model="elementFieldTwo"
          label="Шток"
          :items="[
            { title: 'Шток 1', props: { value: 1 } },
            { title: 'Шток 2', props: { value: 2 } },
            { title: 'Шток 3', props: { value: 3 } },
          ]"
        ></v-select>

        <v-select
          v-model="elementFieldThree"
          label="Распределительный узел"
          :items="[
            { title: 'Узел 1', props: { value: 1, price: 1500 } },
            { title: 'Узел 2', props: { value: 2, price: 2500 } },
            { title: 'Узел 3', props: { value: 3, price: 3500 } },
          ]"
        ></v-select>

        <div class="text-xl font-medium text-center">Стоимость: {{ calculated }} руб.</div>
        <div class="text-xl font-medium text-center" v-if="elementType !== null">от 5 рабочих дней</div>
      </v-sheet>
    </div>
  </div>
</template>
