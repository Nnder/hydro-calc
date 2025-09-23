<template>
  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-4 py-12" data-aos="fade-up" data-aos-delay="400">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-blue-800 mb-8">Доставка по всей России</h1>
          <div class="space-y-6 text-lg text-gray-700">
            <p class="leading-relaxed">
              Мы организуем доставку изготовленных гидроцилиндров в любой регион России — от крупных промышленных
              центров до отдалённых населённых пунктов. Надежная логистика — важная часть нашей работы, и мы уделяем ей
              особое внимание.
            </p>

            <p class="leading-relaxed">
              Мы сопровождаем каждый заказ до момента получения и всегда на связи, чтобы вы могли быть уверены: ваша
              продукция приедет вовремя и в идеальном состоянии.
            </p>

            <p class="leading-relaxed">
              Работаем с проверенными транспортными компаниями, такими как СДЭК, Деловые Линии, ПЭК, КИТ и другими.
              Возможна отправка до терминала или прямо до двери.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div class="rounded-2xl p-6">
            <img src="/delivery.png" alt="Доставка по России" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </main>
    <Gis data-aos="fade-up" />
  </div>
</template>

<script setup lang="js">
import Gis from '~/components/Map/2Gis.vue'
</script>
