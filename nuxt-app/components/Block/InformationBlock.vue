<template>
  <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-hydro-power">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div class="text-white max-w-2xl">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Изготовим нестандартное<br />
              оборудование по вашему проекту
            </h2>
            <p class="text-lg mb-6 opacity-90">
              Произведём гидроцилиндр по вашему чертежу,<br />
              техническому заданию или готовому образцу<br />
              с гарантией 12 месяцев
            </p>
            <button
              class="border-2 border-white text-black px-6 py-2 rounded-lg bg-white hover:bg-hydro-power hover:text-white transition-colors duration-300"
            >
              Рассчитать стоимость
            </button>
          </div>

          <div class="hidden md:block">
            <NuxtImg
              src="https://oboruduy.com/files/images/items/288/288279z5a7304d0.jpg"
              alt="Гидроцилиндр"
              class="w-64 h-64 object-contain"
              width="320"
              height="320"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
