<template>
  <div class="flex justify-center pt-8 px-4 sm:px-6 lg:px-8">
    <div class="container space-y-6">
      <div class="flex">
        <div class="flex-1 flex-grow-[2] space-y-6 py-4">
          <h1 class="text-3xl md:text-5xl font-bold md:text-nowrap md:pb-6">Доставка по всей России</h1>
          <p class="text-lg md:text-xl md:font-semibold text-justify">
            Мы организуем доставку изготовленных гидроцилиндров в любой регион России — от крупных промышленных центров
            до отдалённых населённых пунктов. Надежная логистика — важная часть нашей работы, и мы уделяем ей особое
            внимание.
          </p>

          <p class="text-lg md:text-xl md:font-semibold text-justify">
            Мы сопровождаем каждый заказ до момента получения и всегда на связи, чтобы вы могли быть уверены: ваша
            продукция приедет вовремя и в идеальном состоянии.
          </p>

          <p class="text-lg md:text-xl md:font-semibold text-justify">
            Работаем с проверенными транспортными компаниями, такими как СДЭК, Деловые Линии, ПЭК, КИТ и другими.
            Возможна отправка до терминала или прямо до двери.
          </p>
        </div>
        <div class="flex-1 flex-grow pl-8 hidden xl:block">
          <NuxtImg format="webp" class="w-full h-fit" src="/delivery.png" />
        </div>
      </div>
    </div>
  </div>

  <Gis />
</template>

<script setup lang="js">
import Gis from '~/components/Map/2Gis.vue'
</script>
