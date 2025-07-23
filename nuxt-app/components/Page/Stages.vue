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