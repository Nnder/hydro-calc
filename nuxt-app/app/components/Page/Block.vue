<script setup>
const { open } = useModal()
</script>
<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="space-y-24">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <NuxtImg
          src="https://ireland.apollo.olxcdn.com/v1/files/eymh9prwp1152-UA/image"
          alt="Расточка проушин гидроцилиндров"
          class="w-full md:w-1/2 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-hydro-steel/10"
          format="webp"
          loading="lazy"
        />
        <div class="w-full md:w-1/2 space-y-6">
          <h3 class="text-2xl sm:text-3xl font-bold text-dark">Расточка проушин</h3>
          <p class="text-lg text-dark/80 leading-relaxed">
            Восстановление геометрии проушин гидроцилиндров на современном токарном оборудовании с точностью до 0,01 мм.
            Устраняем износ и эллипсность, возвращая первоначальные параметры.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Точная обработка до номинальных размеров</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Восстановление соосности отверстий</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Установка ремонтных втулок при сильном износе</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
        <NuxtImg
          src="https://btomo.ru/files/images/foto1.jpg"
          alt="Восстановление штоков методом наплавки"
          class="w-full md:w-1/2 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-hydro-steel/10"
          format="webp"
          loading="lazy"
        />
        <div class="w-full md:w-1/2 space-y-6">
          <h3 class="text-2xl sm:text-3xl font-bold text-dark">Восстановление штоков методом наплавки</h3>
          <p class="text-lg text-dark/80 leading-relaxed">
            Качественное восстановление штоков гидроцилиндров методом плавки с последующей механической обработкой. 
            Устраняем глубокие риски, коррозию и износ, возвращая штоку первоначальные характеристики.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Наплавка износостойкими материалами</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Шлифовка до зеркального состояния</span>
            </li>
            <li class="flex items-start">
              <Icon name="mdi:check-circle" class="h-6 w-6 text-hydro-power mr-2" />
              <span class="text-dark">Хромирование для защиты от коррозии</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>