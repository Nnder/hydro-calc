<template>
  <div class="bg-tech-light py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-dark sm:text-4xl">
          Этапы ремонта гидроцилиндров
        </h2>
        <p class="mt-4 text-xl text-dark/80 max-w-3xl mx-auto">
          Полный цикл восстановления гидроцилиндров спецтехники
        </p>
      </div>

      <div class="hidden lg:block relative mb-16">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t-2 border-hydro-steel/20"></div>
        </div>
        <div class="relative flex justify-between">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-hydro-power shadow-lg z-10">
              <NuxtImg 
                :src="step.image" 
                :alt="step.title" 
                class="w-8 h-8 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-12 lg:hidden">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-hydro-steel/10"
        >
          <div class="p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-hydro-power/10 rounded-lg p-3 mr-4">
                <NuxtImg 
                  :src="step.image" 
                  :alt="step.title" 
                  class="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div class="flex items-center">
                  <span class="text-hydro-power font-bold text-lg mr-2">{{ (index + 1).toString().padStart(2, '0') }}</span>
                  <h3 class="text-lg font-semibold text-dark">{{ step.title }}</h3>
                </div>
                <p class="mt-2 text-dark/80">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:grid grid-cols-8 gap-0">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="bg-white p-6 border border-hydro-steel/10 shadow-sm hover:shadow-md transition-shadow"
          :class="{
            'rounded-l-xl': index === 0,
            'rounded-r-xl': index === steps.length - 1,
            'border-l-0': index > 0
          }"
        >
          <div class="flex flex-col items-center text-center">
            <div class="mb-4">
              <NuxtImg 
                :src="step.image" 
                :alt="step.title" 
                class="w-12 h-12 object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <span class="text-hydro-power font-bold text-lg mb-1">{{ (index + 1).toString().padStart(2, '0') }}</span>
            <h3 class="text-md font-semibold text-dark mb-2">{{ step.title }}</h3>
            <p class="text-sm text-dark/80">{{ step.shortDescription }}</p>
          </div>
        </div>
      </div>

      <div class="hidden lg:block mt-8 bg-white rounded-xl shadow-md p-8 border border-hydro-steel/10">
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="flex">
            <div class="flex-shrink-0 mr-6">
              <span class="flex items-center justify-center w-12 h-12 rounded-full bg-hydro-power text-white font-bold text-lg">
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-dark mb-2">{{ step.title }}</h3>
              <p class="text-dark/80">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: "Доставка и приемка",
    shortDescription: "Транспортировка и осмотр",
    description: "Мы организуем доставку гидроцилиндра на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания",
    image: "/icons/delivery-truck.svg"
  },
  {
    title: "Дефектовка",
    shortDescription: "Полная диагностика",
    description: "Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя",
    image: "/icons/magnifying-glass.svg"
  },
  {
    title: "Согласование",
    shortDescription: "Утверждение стоимости",
    description: "После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта",
    image: "/icons/handshake.svg"
  },
  {
    title: "Закупка материалов",
    shortDescription: "Комплектующие",
    description: "Приобретаем оригинальные запчасти и изготавливаем недостающие элементы: металлические детали, уплотнения и др.",
    image: "/icons/gears.svg"
  },
  {
    title: "Обработка",
    shortDescription: "Восстановление деталей",
    description: "Проводим хонингование, расхромирование, хромирование, шлифовку и полировку поверхностей",
    image: "/icons/tools.svg"
  },
  {
    title: "Сборка",
    shortDescription: "Комплектация",
    description: "Профессиональная сборка гидроцилиндра с использованием новых уплотнений и комплектующих",
    image: "/icons/assembly.svg"
  },
  {
    title: "Испытания",
    shortDescription: "Тестирование",
    description: "Проводим испытания на специализированном стенде, моделируя номинальные и максимальные нагрузки",
    image: "/icons/test.svg"
  },
  {
    title: "Отгрузка",
    shortDescription: "Возврат клиенту",
    description: "Упаковываем и доставляем отремонтированный гидроцилиндр с гарантией качества",
    image: "/icons/package.svg"
  }
]
</script>