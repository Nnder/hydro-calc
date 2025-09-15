<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-extrabold text-dark sm:text-4xl">Наши услуги</h2>
      <p class="mt-4 max-w-2xl text-xl text-dark/80 mx-auto">Профессиональный ремонт и обслуживание гидроцилиндров</p>
    </div>

    <div class="space-y-24">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <NuxtImg
          src="honingovannaya_trubka_prim.jpeg"
          alt="Ремонт гидроцилиндров"
          class="w-full md:w-1/2 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-hydro-steel/10"
          format="webp"
          loading="lazy"
        />
        <div class="w-full md:w-1/2 space-y-6">
          <h3 class="text-2xl sm:text-3xl font-bold text-dark">Ремонт гидроцилиндров</h3>
          <p class="text-lg text-dark/80 leading-relaxed">
            Комплексный ремонт гидроцилиндров любой сложности с использованием оригинальных запчастей и современного
            оборудования.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Диагностика за 30 минут</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Гарантия до 12 месяцев</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Срочный ремонт за 24 часа</span>
            </li>
          </ul>
          <button
            class="mt-6 px-8 py-3 bg-hydro-power text-white font-medium rounded-lg hover:bg-hydro-power/90 transition-colors shadow-md hover:shadow-lg"
          >
            Подробнее
          </button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
        <NuxtImg
          src="worker_2.jpg"
          alt="Техническое обслуживание"
          class="w-full md:w-1/2 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-hydro-steel/10"
          format="webp"
          loading="lazy"
        />
        <div class="w-full md:w-1/2 space-y-6">
          <h3 class="text-2xl sm:text-3xl font-bold text-dark">Техническое обслуживание</h3>
          <p class="text-lg text-dark/80 leading-relaxed">
            Регулярное техническое обслуживание для продления срока службы оборудования и предотвращения неожиданных
            поломок.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Комплексная диагностика</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Замена расходных материалов</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Контроль герметичности</span>
            </li>
          </ul>
          <button
            class="mt-6 px-8 py-3 bg-hydro-power text-white font-medium rounded-lg hover:bg-hydro-power/90 transition-colors shadow-md hover:shadow-lg"
          >
            Записаться на ТО
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
