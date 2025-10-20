<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <main class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="300">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Доставка по
          <span class="text-blue-600">всей России</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Быстрая и надежная доставка гидроцилиндров в любой регион страны
        </p>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div class="lg:w-1/2">
          <div class="space-y-8 text-gray-700">
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="500">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon name="mdi:truck-delivery" class="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Надежная логистика</h3>
                <p class="text-lg leading-relaxed">
                  Организуем доставку изготовленных гидроцилиндров в любой регион России — от крупных промышленных
                  центров до отдалённых населённых пунктов. Надежная логистика — важная часть нашей работы.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon name="mdi:headset" class="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Сопровождение заказов</h3>
                <p class="text-lg leading-relaxed">
                  Сопровождаем каждый заказ до момента получения и всегда на связи, чтобы вы могли быть уверены: ваша
                  продукция приедет вовремя и в идеальном состоянии.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="700">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon name="mdi:shield-check" class="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Проверенные перевозчики</h3>
                <p class="text-lg leading-relaxed">
                  Работаем с проверенными транспортными компаниями: СДЭК, Деловые Линии, ПЭК, КИТ и другими. Возможна
                  отправка до терминала или прямо до двери.
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12" data-aos="fade-up">
            <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <Icon name="mdi:clock-outline" class="text-3xl text-blue-600 mb-3" />
              <h4 class="font-bold text-gray-900 mb-2">Сроки доставки</h4>
              <p class="text-gray-700 text-sm">От 2 до 7 дней в зависимости от региона</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <Icon name="mdi:package-variant" class="text-3xl text-blue-600 mb-3" />
              <h4 class="font-bold text-gray-900 mb-2">Упаковка</h4>
              <p class="text-gray-700 text-sm">Надежная упаковка, защищающая от повреждений</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2" data-aos="fade-left" data-aos-delay="600">
          <div class="relative">
            <div class="absolute -inset-4 rounded-2xl"></div>
            <NuxtImg
              src="/delivery.png"
              alt="Доставка гидроцилиндров по России"
              class="w-full h-auto object-cover relative z-10 rounded-2xl"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:600px"
            />
          </div>
        </div>
      </div>

      <Gis data-aos="fade-up" />
    </main>
  </div>
</template>

<script setup lang="js">
import Gis from '~/components/Map/2Gis.vue'

useHead({
  title: 'Доставка по России | АбсолютТехно - гидроцилиндры',
  meta: [
    {
      name: 'description',
      content:
        'Доставка гидроцилиндров по всей России. СДЭК, Деловые Линии, ПЭК, КИТ. Надежная упаковка, отслеживание заказов, быстрые сроки.',
    },
  ],
})
</script>

<style scoped>
.bg-blue-50 {
  background-color: #eff6ff;
}
.border-blue-100 {
  border-color: #dbeafe;
}
</style>
