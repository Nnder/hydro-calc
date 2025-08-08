<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-100 rounded-2xl h-auto md:h-[500px] relative overflow-hidden">
      <div class="flex flex-col md:flex-row h-full">
        <div class="w-full md:w-1/2 h-64 md:h-full">
          <NuxtImg 
            src="https://traktorodetal.ru/upload/resize_cache/iblock/9d9/p6pjux0iqn0du1e8g47ihk14a3mf59jb/968_504_1/traktorodetal_zapustila_tsekh_po_remontu.webp" 
            alt="Спецтехника на ремонте" 
            class="w-full h-full object-cover"
            sizes="sm:100vw md:50vw lg:800px"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Почему мы являемся надёжными партнерами?
          </h2>

          <p class="text-lg text-gray-700 mb-8 leading-relaxed">
            Мы быстро (от 1 дня) и эффективно устраним поломки, восстановим работу вашей техники и снизим риск повторных сбоев. Гарантируем качественный ремонт, чтобы ваши проекты могли продолжаться без задержек.
          </p>

          <ul class="space-y-4 mb-8">
            <li v-for="(item, index) in benefits" :key="index" class="flex items-start gap-3">
              <div class="flex-shrink-0 mt-1">
                <Icon name="heroicons:check-badge" class="w-6 h-6 text-green-600" />
              </div>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>

          <p class="text-gray-700 italic mb-8">
            Не допустите, чтобы проблемы с техникой останавливали ваш бизнес. Мы сделаем все возможное, чтобы ваша спецтехника была в отличном состоянии.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300">
              Заказать диагностику
            </button>
            <button class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-xl transition duration-300">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const benefits = [
  "Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.",
  "Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.",
  "Соблюдаем все стандарты и требования безопасности в процессе ремонта.",
  "Используем первоклассное оборудование и технологии для точной диагностики.",
  "Эффективно организуем обслуживание больших парков техники с индивидуальным графиком."
]
</script>