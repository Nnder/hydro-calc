<template>
  <div class="bg-white w-full overflow-hidden py-16 lg:py-24">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20 lg:mb-28" data-aos="fade-up" data-aos-delay="400">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div class="lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              ООО "АбсолютТехно" -
              <span class="text-blue-600">Ваш надежный партнер</span> в гидравлике
            </h2>
            <div class="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
              <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="600">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p>
                  <strong class="text-blue-600">ООО "АбсолютТехно"</strong> - специализированный центр по
                  <strong>ремонту, продаже и изготовлению</strong> гидроцилиндров и сварочного оборудования. Работаем с
                  2010 года, помогая предприятиям поддерживать технику в идеальном состоянии.
                </p>
              </div>
              <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="700">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p>
                  Наша команда - это <strong>опытные инженеры и техники</strong>, прошедшие обучение у ведущих
                  производителей гидравлического оборудования. Мы знаем все нюансы работы гидросистем.
                </p>
              </div>
              <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="800">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p>
                  Сегодня мы - <strong>не просто сервисный центр</strong>, а технологический партнер, предлагающий
                  комплексные решения для строительной, сельскохозяйственной и промышленной техники.
                </p>
              </div>
            </div>

            <!-- <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12" data-aos="fade-up" data-aos-delay="900">
              <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">14+</div>
                <div class="text-sm lg:text-base text-gray-600">лет на рынке</div>
              </div>
              <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5000+</div>
                <div class="text-sm lg:text-base text-gray-600">отремонтированных цилиндров</div>
              </div>
              <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div class="text-sm lg:text-base text-gray-600">срочный ремонт</div>
              </div>
            </div> -->
          </div>

          <div class="lg:w-1/2" data-aos="fade-left" data-aos-delay="600">
            <div class="relative">
              <div class="absolute -inset-4 rounded-2xl"></div>
              <NuxtImg
                src="full_logo_text.svg"
                alt="ООО АбсолютТехно - ремонт и продажа гидроцилиндров"
                class="w-full h-auto object-cover relative z-10 rounded-lg"
                loading="lazy"
                sizes="sm:100vw md:50vw lg:800px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20 lg:mb-28" data-aos="fade-up" data-aos-delay="600">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(priority, index) in priorities.items"
            :key="index"
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 relative overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="200 + index * 100"
          >
            <div class="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full"></div>

            <div class="flex items-start space-x-4 mb-6 relative z-10">
              <div
                class="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
              >
                <Icon :name="priority.icon" class="text-2xl text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 pt-2">
                {{ priority.title }}
              </h3>
            </div>

            <p class="text-gray-700 text-lg leading-relaxed relative z-10">
              {{ priority.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'О компании - АбсолютТехно | Ремонт и продажа гидроцилиндров',
  meta: [
    {
      name: 'description',
      content:
        'ООО АбсолютТехно - специализированный центр по ремонту, продаже и изготовлению гидроцилиндров, сварочного оборудования. Работаем с 2010 года. Гарантия качества, срочный ремонт, выездной сервис.',
    },
    {
      name: 'keywords',
      content:
        'ремонт гидроцилиндров, продажа гидроцилиндров, сварочное оборудование, гидравлика, сервис гидроцилиндров, АбсолютТехно',
    },
  ],
})

const priorities = {
  items: [
    {
      id: 1,
      icon: 'material-symbols:percent-rounded',
      title: 'Вычет НДС до 20%',
      description: 'Cможете сэкономить, если работаете на ОСН',
    },
    {
      id: 2,
      icon: 'material-symbols:person-outline-rounded',
      title: 'Гарантия на все виды работы',
      description: 'Предоставляем гарантию от 6 месяцев до 12 месяцев',
    },
    {
      id: 3,
      icon: 'material-symbols:description-outline-rounded',
      title: 'ЭДО',
      description: 'Или бумажные документы — как удобнее',
    },
    {
      id: 4,
      icon: 'material-symbols:schedule-outline-rounded',
      title: 'Отсрочка платежа',
      description: 'Для каждого клиента индивидуальные условия',
    },
    {
      id: 5,
      icon: 'material-symbols:description-outline-rounded',
      title: 'Доставка по всей России',
      description: 'Работаем со всеми транспортными компаниями',
    },
    {
      id: 6,
      icon: 'material-symbols:engineering-outline-rounded',
      title: 'Работа с организациями и физ лицами',
      description: 'Любая форма оплаты',
    },
  ],
}
</script>

<style scoped>
.group:hover {
  transform: translateY(-5px);
  border-left-color: #2563eb;
}
</style>
