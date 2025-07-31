<template>
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
    </div>
  </section>
</template>

<script setup>
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
    title: 'Восстановление гидронасоса',
    description: 'Капитальный ремонт гидронасоса Bosch Rexroth',
    year: '2022',
    tags: ['Гидронасос', 'Капитальный ремонт'],
  },
]

const certificates = [{ name: 'ISO 9001' }, { name: 'Лицензия' }, { name: 'Специалисты' }, { name: 'СРО' }]
</script>
