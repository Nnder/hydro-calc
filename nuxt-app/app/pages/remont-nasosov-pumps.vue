<template>
  <div class="bg-tech-light">
    <div class="w-4/5 mx-auto py-8 md:py-6 px-4 sm:px-3 lg:px-4 rounded-2xl mt-8 mb-4">
      <section class="mb-4 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-hydro-power">
          Профессиональный ремонт <br />гидронасосов
        </h1>
        <p class="text-xl text-hydro-steel/80 max-w-3xl mx-auto leading-relaxed">
         Профессиональный ремонт гидронасосов в Нижнем Тагиле! Компания «ООО АбсолютТехно» качественно и быстро обслуживает предприятия и частных клиентов по всей Свердловской области.
        </p>
      </section>
      <div class="flex min-h-[600px] gap-4">
        <!-- Левая секция (список деталей) -->
        <section class="flex-1 p-2 bg-white rounded-xl md:rounded-2xl overflow-auto">
          <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 gap-2 md:gap-4"
          >
            <div>
              <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-hydro-steel mb-1 md:mb-2">
                Выберите детали для ремонта
              </h2>
              <p class="text-sm md:text-base text-hydro-steel/70">Отметьте необходимые компоненты гидроцилиндра</p>
            </div>
            <div
              class="bg-hydro-power/10 text-hydro-power px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium"
            >
              Выбрано: {{ selectedCount }} из {{ hydrantParts.length }}
            </div>
          </div>

          <div class="grid grid-cols-1 gap-1 md:gap-2">
            <div v-for="(part, index) in hydrantParts" :key="index" class="group">
              <div
                class="p-2 md:p-3 border rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between"
                :class="{
                  'border-hydro-power bg-hydro-power/5': part.selected,
                  'border-gray-200 hover:border-hydro-power/30': !part.selected,
                }"
                @click="handlePartClick(index)"
                role="button"
                tabindex="0"
                @keydown.enter.space="handlePartClick(index)"
              >
                <div class="flex items-center gap-2 md:gap-2 flex-1">
                  <div
                    class="w-10 h-8 md:w-12 md:h-10 rounded-lg flex items-center justify-center"
                    :class="{
                      'bg-hydro-power/10 text-hydro-power': part.selected,
                      'bg-tech-light text-hydro-steel/50 group-hover:bg-hydro-power/5': !part.selected,
                    }"
                  >
                    <Icon :name="part.icon || 'mdi:engine-outline'" class="text-xl md:text-2xl" />
                  </div>
                  <div class="text-base md:text-lg font-medium text-hydro-steel block text-left flex-1">
                    {{ part.name }}
                  </div>
                </div>
                <Icon
                  v-if="part.selected"
                  name="mdi:check-circle"
                  class="text-xl md:text-2xl text-hydro-power shrink-0"
                />
                <Icon
                  v-else
                  name="mdi:plus-circle-outline"
                  class="text-xl md:text-2xl text-gray-300 shrink-0 group-hover:text-hydro-power/50"
                />
              </div>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="part.show && part.description" class="overflow-hidden">
                  <div
                    class="relative mt-2 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200 text-hydro-steel/80 text-sm md:text-base"
                  >
                    <div class="text-right">
                      <button @click="part.show = false" class="text-2xl font-bold cursor-pointer">×</button>
                    </div>
                    <p class="mb-2">{{ part.description }}</p>
                    <div v-if="part.features" class="mt-2 md:mt-3">
                      <div v-for="(feature, i) in part.features" :key="i" class="flex items-start mb-1 md:mb-2">
                        <Icon name="mdi:check-circle" class="text-hydro-power mt-0.5 mr-2 shrink-0" />
                        <span>{{ feature }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- Правая секция (изображение) -->
        <section class="flex-1 relative">
          <div class="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-100">
            <div class="relative" style="transform: rotate(90deg); transform-origin: center">
              <NuxtImg
                src="hydrocilinder.webp"
                class="max-h-screen w-auto object-contain"
                alt="Профессиональный ремонт гидроцилиндров"
                loading="lazy"
                format="webp"
                quality="80"
                id="hydroImage"
              />

              <div
                v-for="(part, index) in hydrantParts"
                :key="'highlight-' + index"
                class="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                :class="{
                  'opacity-0': activeHighlight !== index,
                  'opacity-100': activeHighlight === index,
                }"
              >
                <div
                  class="absolute bg-red-500/50 border-2 border-red-600 rounded-md"
                  :style="getHighlightStyle(index)"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <!-- <InformationBlock :blockData="blockData" /> -->
  <Stages :steps="repairSteps" />
  <Contact />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description: 'Мы организуем доставку гидронасоса на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Разборка и мойка',
    shortDescription: 'Предварительная подготовка',
    description: 'Разборка гидронасоса, тщательная мойка всех деталей',
    image: '/icons/tools.svg',
  },
  {
    title: 'Дефектовка',
    shortDescription: 'Полная диагностика',
    description: 'Наши специалисты проводят полную диагностику всех узлов и деталей, составляют техническое заключение и выявляют причины неисправности',
    image: '/icons/magnifying-glass.svg',
  },
  {
    title: 'Согласование',
    shortDescription: 'Утверждение стоимости',
    description: 'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта гидронасоса',
    image: '/icons/handshake.svg',
  },
  {
    title: 'Закупка материалов',
    shortDescription: 'Комплектующие',
    description: 'Приобретаем оригинальные запчасти или аналоги неуступающие по качеству',
    image: '/icons/gears.svg',
  },
  {
    title: 'Восстановление',
    shortDescription: 'Ремонт деталей',
    description: 'Проводим шлифовку валов, восстановление рабочих поверхностей, притирку рабочих поверхностей деталей роторной группы, замену изношенных деталей и ревизию корпусных частей',
    image: '/icons/repair.svg',
  },
  {
    title: 'Сборка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка гидронасоса с использованием новых уплотнений, подшипников и комплектующих',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Испытания',
    shortDescription: 'Тестирование',
    description: 'Проводим испытания на специализированном стенде под нагрузкой, проверяем рабочее давление, производительность и КПД',
    image: '/icons/test.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированный гидронасос с гарантией качества и технической документацией',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Изготовим нестандартное оборудование по вашему проекту',
  description: 'Произведём гидроцилиндр по вашему чертежу,\nтехническому заданию или готовому образцу\nс гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: 'https://oboruduy.com/files/images/items/288/288279z5a7304d0.jpg',
  imageAlt: 'Гидроцилиндр'
}

const hydrantParts = ref([
  {
    name: 'Дефектовка (разборка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика гидронасосов с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Разборка гидронасоса, осмотр всех комплектующих на наличие поверхностных дефектов',
      'Составление дефектовочной ведомости',
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    description: 'Комплексная замена всех уплотнительных элементов гидронасоса.',
    features: [
      'Подбор оригинальных уплатнений или аналогов',
      'Замена манжет, колец и сальников',
    ],
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
  },
  {
    name: 'Ремонт или замена рабочей группы',
    selected: false,
    show: false,
    description: 'Притирка рабочих поверхностей блока и распределителя или замена на оригинальные запчасти',
    features: [],
    highlight: { top: '1%', left: '25%', width: '45%', height: '10%' },
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания на специализированном стенде.',
    features: [
      'Проверка на герметичность',
      'Контроль расходных характеристик насоса',
      'Контроль рабочего давления',
      'Фиксация результатов с занесением данных в паспорт',
    ],
    highlight: { top: '85%', left: '40%', width: '20%', height: '10%' },
  },
])

const activeHighlight = ref(null)
const selectedCount = computed(() => hydrantParts.value.filter(part => part.selected).length)

const handlePartClick = index => {
  hydrantParts.value[index].selected = !hydrantParts.value[index].selected
  hydrantParts.value[index].show = hydrantParts.value[index].selected
  activeHighlight.value = index

  scrollToImage()
  setTimeout(() => {
    if (activeHighlight.value === index) {
      activeHighlight.value = null
    }
  }, 3000)
}

const scrollToImage = () => {
  const element = document.getElementById('hydroImage')
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}

const getHighlightStyle = index => {
  const part = hydrantParts.value[index]
  return {
    top: part.highlight.top,
    left: part.highlight.left,
    width: part.highlight.width,
    height: part.highlight.height,
  }
}
</script>

<style>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.shadow-xl {
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

button:hover {
  transform: translateY(-1px);
}
</style>
