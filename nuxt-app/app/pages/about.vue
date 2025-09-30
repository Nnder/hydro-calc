<template>
  <div class="bg-white w-full py-16 lg:py-24">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20 lg:mb-28" data-aos="fade-up" data-aos-delay="400">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div class="lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
            <h2
              class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight"
            >
              ООО "Абсолют Техно" - 
              <span class="text-blue-600">Ваш надежный партнер</span> в гидравлике
            </h2>
            <div class="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg lg:text-xl">
              <div class="flex items-start space-x-3" data-aos="fade-up" data-aos-delay="600">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p>
                  <strong class="text-blue-600">ООО "Абсолют Техно"</strong> - специализированный центр по 
                  <strong>ремонту, продаже и изготовлению</strong> гидроцилиндров и сварочного оборудования. 
                  Работаем с 2010 года, помогая предприятиям поддерживать технику в идеальном состоянии.
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
                  Сегодня мы - <strong>не просто сервисный центр</strong>, а технологический партнер, 
                  предлагающий комплексные решения для строительной, сельскохозяйственной и промышленной техники.
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
                alt="ООО Абсолют Техно - ремонт и продажа гидроцилиндров"
                class="w-full h-auto object-cover relative z-10 rounded-lg"
                loading="lazy"
                sizes="sm:100vw md:50vw lg:800px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-20 lg:mb-28" data-aos="fade-up" data-aos-delay="600">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {{ priorities.title }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы строим долгосрочные отношения с клиентами, основанные на доверии и качестве
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(priority, index) in priorities.items"
            :key="index"
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 relative overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="400 + (index * 200)"
          >
            <div class="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full"></div>
            
            <div class="flex items-start space-x-4 mb-6 relative z-10">
              <div class="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
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
  title: 'О компании - Абсолют Техно | Ремонт и продажа гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'ООО Абсолют Техно - специализированный центр по ремонту, продаже и изготовлению гидроцилиндров, сварочного оборудования. Работаем с 2010 года. Гарантия качества, срочный ремонт, выездной сервис.',
    },
    {
      name: 'keywords',
      content: 'ремонт гидроцилиндров, продажа гидроцилиндров, сварочное оборудование, гидравлика, сервис гидроцилиндров, Абсолют Техно'
    }
  ],
})

const priorities = {
  title: "Наши приоритеты",
  items: [
    {
      title: "Профессионализм",
      icon: "mdi:account-hard-hat",
      description: "Наши специалисты имеют многолетний опыт в ремонте гидравлики. Регулярно проходим обучение и используем профессиональное диагностическое оборудование."
    },
    {
      title: "Качество работ", 
      icon: "mdi:quality-high",
      description: "Используем только оригинальные запчасти и сертифицированные материалы. Даем гарантию до 12 месяцев на все виды ремонтных работ."
    },
    {
      title: "Срочный ремонт",
      icon: "mdi:clock-fast",
      description: "Понимаем ценность вашего времени. Осуществляем срочный ремонт гидроцилиндров с выездом на объект. Минимальный простой техники."
    },
    {
      title: "Доступные цены",
      icon: "mdi:cash-multiple",
      description: "Прямые поставки запчастей позволяют предлагать конкурентные цены. Гибкая система скидок для постоянных клиентов."
    },
    {
      title: "Выездной сервис",
      icon: "mdi:van-utility",
      description: "Осуществляем диагностику и ремонт на территории заказчика. Современное оборудование позволяет работать в полевых условиях."
    },
    {
      title: "Гарантии",
      icon: "mdi:shield-check",
      description: "Все работы сопровождаются официальной гарантией. Прозрачная смета и договор. Несем ответственность за результат."
    }
  ],
}
</script>

<style scoped>
.group:hover {
  transform: translateY(-5px);
  border-left-color: #2563eb;
}
</style>