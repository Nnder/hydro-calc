<template>
  <ContentWithImage :mainSlideData="mainSlideData" data-aos="fade-up" data-aos-delay="200" />
  <div class="bg-tech-light" data-aos="fade-up" data-aos-delay="200">
    <div class="w-4/5 mx-auto py-8 md:py-6 px-4 sm:px-3 lg:px-4 rounded-2xl mt-8 mb-4">
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
                v-show="!part?.hidden"
                class="p-2 md:p-3 border rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between"
                :class="{
                  'border-hydro-power bg-hydro-power/5': part.selected,
                  'border-gray-200 hover:border-hydro-power/30': !part.selected,
                }"
                @click="(handlePartClick(index), part.onSelect())"
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
                        <span v-html="feature"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- Правая секция (изображение)  style="transform: rotate(90deg); transform-origin: center" -->
        <section class="flex-1 relative">
          <div class="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-100">
            <div class="relative">
              <NuxtImg
                :src="MainCalculatorImage"
                class="max-h-screen w-full object-contain"
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
                  'opacity-0': part.selected,
                  'opacity-100': part.selected,
                }"
              >
                <div
                  v-if="part.selected"
                  :class="'absolute border-2 rounded-md ' + part.color"
                  :style="getHighlightStyle(index)"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <InformationBlock :blockData="blockData" data-aos="fade-up" />
  <Stages :steps="repairSteps" :globalTitle="globalTitle" data-aos="fade-up" />
  <PartnerBlock :blockDataText="blockDataText" variant="default" data-aos="fade-up" />
  <!-- <PortfolioSection /> -->
  <!-- <Accordion data-aos="fade-up" v-model="fagItems" /> -->
  <Contact data-aos="fade-up" />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import TrustSection from '~/components/Main/TrustSection.vue'
import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import Accordion from '~/components/Page/Accordion.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

definePageMeta({
  path: '/remont-hydraulic-cylinders',
})

useHead({
  title: 'Профессиональный ремонт гидроцилиндров',
  meta: [
    {
      name: 'description',
      content: 'Инструменты и оборудование для строительства и ремонта',
    },
  ],
})

const fagItems = ref([
  {
    id: 1,
    question: 'Сколько стоит ремонт?????',
    answer:
      'Зависит&& от дефектовки. <strong>От 30 000 руб.</strong> за гидроцилиндр от 50 мм (не более 50-60% от стоимости нового).',
    isOpen: false,
  },
  {
    id: 2,
    question: 'Какие сроки ремонта?',
    answer: `
      <ul class="space-y-2">
        <li><span class="font-medium">Мелкий ремонт</span> (замена уплотнений): 1-2 недели</li>
        <li><span class="font-medium">Средний ремонт</span> (восстановление поверхностей): 2-3 недели</li>
        <li><span class="font-medium">Капитальный ремонт</span> (замена деталей): 3-5 недель</li>
        <li>Для цилиндров >150 мм диаметром и >2000 мм длиной: 6-8 недель</li>
        <li><span class="text-blue-600 font-medium">Срочный ремонт</span> возможен от 1 дня</li>
      </ul>
      <p class="mt-3">Если восстановление невозможно — изготавливаем детали заново.</p>
    `,
    isOpen: false,
  },
  {
    id: 3,
    question: 'На какую технику ремонтируете?',
    answer:
      'Дорожно-строительная, горная, карьерная, тоннеле-проходческая, металлообрабатывающая техника <strong>любых брендов</strong>.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Какие гидроцилиндры ремонтируете?',
    answer: '<strong>Любые, кроме телескопических</strong> (МАЗ, КамАЗ, Hiva).',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Есть ли уплотнения в наличии?',
    answer:
      'Все стандартные уплотнения — в наличии. Также производим <strong>нестандартные</strong> уплотнения под заказ.',
    isOpen: false,
  },
  {
    id: 6,
    question: 'Проводите испытания после ремонта?',
    answer:
      'Да, тестируем на давление с коэффициентом <strong>1.5 от номинального</strong>, проверяем протечки и статику.',
    isOpen: false,
  },
  {
    id: 7,
    question: 'Даёте гарантию на ремонт?',
    answer: 'Гарантия <strong>3-6 месяцев</strong> при соблюдении правил эксплуатации оборудования.',
    isOpen: false,
  },
])

const blockDataText = {
  title: 'Что мы делаем?',
  description: ``,
   benefits: [
    `Поршень гидроцилиндра

Часто встречающие проблемы — задиры, излом канавок, деформация, механические повреждения металла. Проводимые ремонтные работы — шлифовка поршня, полное изготовление нового поршня, замена (модернизация под современные уплотнения)`,
    `Комплект уплотнений

Часто встречающие проблемы — износ РТИ, замена РТИ по умолчанию происходит при переборке деталей. Проводимые ремонтные работы — замена РТИ, подбор комплектов уплотнений`,
    `Шток в сборе

Часто встречающие проблемы — Задиры штока, механические повреждения, нарушение геометрии штока (загиб). Проводимые ремонтные работы — Шлифовка, восстановление, полная замена штока`,
    `Крышки гидроцилиндра

Часто встречающие проблемы — задиры, механические повреждения по причине загиба штока. Проводимые ремонтные работы — восстановление, изготовление новой крышки гидроцилиндра`,
  ],
}

const mainSlideData = {
  src: '/recambios-coches1.jpg',
  title: 'Профессиональный ремонт гидроцилиндров',
  description:
    'Компания ООО «АбсолютТехно» производит ремонт гидроцилиндров для спецтехники и промышленного оборудования в Нижнем тагиле и Свердловской области.',
}

const globalTitle = ref({
  gtitle: 'Этапы ремонта Гидроцилиндров',
  subtitle: 'Полный цикл восстановления гидроцилиндров спецтехники',
})

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку гидроцилиндра на наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
    image: '/icons/delivery-truck.svg',
  },
  {
    title: 'Дефектовка',
    shortDescription: 'Полная диагностика',
    description:
      'Наши специалисты проводят полную диагностику, составляют конструкторскую документацию и выявляют причины выхода из строя',
    image: '/icons/magnifying-glass.svg',
  },
  {
    title: 'Согласование',
    shortDescription: 'Утверждение стоимости',
    description: 'После диагностики мы предоставляем детальную смету и согласовываем с вами стоимость и сроки ремонта',
    image: '/icons/handshake.svg',
  },
  {
    title: 'Закупка материалов',
    shortDescription: 'Комплектующие',
    description: 'Приобретаем оригинальные запчасти и изготавливаем недостающие элементы: детали, уплотнения и др.',
    image: '/icons/gears.svg',
  },
  {
    title: 'Обработка',
    shortDescription: 'Восстановление деталей',
    description:
      'Проводим хонингование,наплавку штоков коррзионостойкими материалами , шлифовку и полировку поверхностей',
    image: '/icons/tools.svg',
  },
  {
    title: 'Сборка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка гидроцилиндра с использованием новых уплотнений и комплектующих',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Испытания по ГОСТу 18464-96',
    shortDescription: 'Тестирование',
    description: 'Проводим испытания на специализированном стенде',
    image: '/icons/test.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированный гидроцилиндр с гарантией качества',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Ремонт гидроцилиндров и навестного оборудования для спецтехники',
  description:
    'Компания ООО АбсолютТехно выполняет ремонт гидроцилиндров диаметром до 300 мм и ходом поршня до 2200 мм с гарантией 12 месяцев',
  buttonText: 'Рассчитать стоимость',
  imageUrl: '/hydrocilindr.jpg',
  imageAlt: 'Гидроцилиндр',
  type: '3d',
  modelSrc: '/3d/011.57.01.01.00 Корпус.glb',
  modelBgColor: '#2563EB',
}

const MainCalculatorImage = ref('/calculator/1.png')

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description:
      'Полная диагностика гидроцилиндра с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
      'Составление карт проверов гильзы и штока',
      'Составление дефектовочной ведомости',
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' },
  },
  {
    name: 'Подбор и замена уплотнений',
    selected: false,
    show: false,
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' },
    color: 'bg-orange-400/50 border-orange-400',
  },
  {
    name: 'Изготовление и замена штока',
    selected: false,
    show: false,
    color: 'bg-green-500/50 border-green-500',
    highlight: { top: '25%', left: '30%', width: '20%', height: '50%' },
  },
  {
    name: 'Изготовление и замена поршня',
    selected: false,
    show: false,
    color: 'bg-teal-600/50 border-teal-600',
    highlight: { top: '40%', left: '45%', width: '15%', height: '10%' },
  },
  {
    name: 'Ремонт гильз',
    selected: false,
    show: false,
    color: 'bg-sky-700/50 border-sky-700',
    highlight: { top: '30%', left: '50%', width: '30%', height: '40%' },
  },
  {
    name: 'Замена крышек',
    selected: false,
    show: false,
    color: 'bg-blue-300/50 border-blue-300',
    highlight: { top: '20%', left: '80%', width: '15%', height: '60%' },
  },
  {
    name: 'Ремонт цапф',
    selected: false,
    show: false,
    color: 'bg-indigo-600/50 border-indigo-600',
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Замена проушин').hidden
      hydrantParts.value.find(item => item.name === 'Замена проушин').hidden = val
      if (val) {
        MainCalculatorImage.value = 'hydrocilinder1.webp'
      } else {
        MainCalculatorImage.value = 'hydrocilinder.webp'
      }
    },
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' },
  },
  {
    name: 'Замена проушин',
    selected: false,
    show: false,
    color: 'bg-orange-600/50 border-orange-600',
    onSelect: () => {
      const val = !hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden
      hydrantParts.value.find(item => item.name === 'Ремонт цапф').hidden = val
      if (val) {
        MainCalculatorImage.value = 'hydrocilinder1.webp'
      } else {
        MainCalculatorImage.value = 'hydrocilinder.webp'
      }
    },
    highlight: { top: '75%', left: '75%', width: '20%', height: '15%' },
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания гидрацилиндров по ГОСТу',
    features: [
      'Проверка на герметичность',
      'Испытание давлением P<span class="text-[10px]">раб</span> * 1,25',
      'Контроль плавности хода',
      'Фиксация результатов с занесением данных в паспорт',
    ],
    highlight: { top: '85%', left: '40%', width: '20%', height: '10%' },
  },
])

const selectedCount = computed(() => hydrantParts.value.filter(part => part.selected).length)

const handlePartClick = index => {
  hydrantParts.value[index].selected = !hydrantParts.value[index].selected
  hydrantParts.value[index].show = hydrantParts.value[index].selected

  // scrollToImage()
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
