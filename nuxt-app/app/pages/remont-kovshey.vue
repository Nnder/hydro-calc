<template>
  <ContentWithImage :mainSlideData="mainSlideData" />
  <div class="bg-tech-light">
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
                        <span v-html="feature"></span>
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
  <ParametersGrid :parameters="parameters" :header="header" />
  <PartnerBlock :blockDataText="blockDataText" />
  <InformationBlock :blockData="blockData" />
  <Stages :steps="repairSteps" />
  <!-- <PortfolioSection /> -->
  <Accordion />
  <Contact />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'
import InformationBlock from '~/components/Block/InformationBlock.vue'
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
// import PortfolioSection from '~/components/Main/PortfolioSection.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Accordion from '~/components/Page/Accordion.vue'

const mainSlideData = {
  src: 'https://lorry-group.ru/wp-content/uploads/2020/parser/cat_6015_B.jpg',
  title: 'Осуществим ремонт ковшей экскаваторов, бульдозеров и другой техники',
  description: 'Замена днища, замена режущей кромки или другие ремонтные работы, которые мы выполняем профессионально',
}

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
    'Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.',
    'Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.',
    'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
    'Используем первоклассное оборудование и технологии для точной диагностики.',
    'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
  ],
}

const parameters = ref([
  { value: 'до 3 тонн', description: 'Максимальный вес' },
  { value: 'до 40', description: 'Рабочее давление, МПа' },
  { value: 'от -50°C до +100°C', description: 'Температурный диапазон' },
])

const header = 'ПАРАМЕТРЫ КОВШЕЙ'

const repairSteps = ref([
  {
    title: 'Доставка и приемка',
    shortDescription: 'Транспортировка и осмотр',
    description:
      'Мы организуем доставку ковшами наш склад, проводим первичный осмотр и присваиваем ремонтный номер для отслеживания',
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
    description: 'Приобретаем сертефицированные запчасти и детали для ремонта ковшей',
    image: '/icons/gears.svg',
  },
  {
    title: 'Сборка и сварка',
    shortDescription: 'Комплектация',
    description: 'Профессиональная сборка и сварка ковша с использованием комплектующих, а также усилиение ковша',
    image: '/icons/assembly.svg',
  },
  {
    title: 'Отгрузка',
    shortDescription: 'Возврат клиенту',
    description: 'Упаковываем и доставляем отремонтированный ковш с гарантией качества',
    image: '/icons/package.svg',
  },
])

const blockData = {
  title: 'Увеличьте ресурс ваших машин',
  description:
    'Абразивное влияние грунта на материал конструкции при интенсивной эксплуатации оборудования приводит к быстрому износу ее отдельных элементов',
  buttonText: 'Связаться с нами',
  imageUrl: 'https://cmr24.by/uploads/Articles/42/ekskavator.png',
  imageAlt: 'ковш',
}

const hydrantParts = ref([
  {
    name: 'Диагностика (дефектовка)',
    selected: false,
    show: false,
    description: 'Полная диагностика ковшас использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
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
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' },
  },
  {
    name: 'Замена проушин',
    selected: false,
    show: false,
    color: 'bg-orange-600/50 border-orange-600',
    highlight: { top: '75%', left: '75%', width: '20%', height: '15%' },
  },
  {
    name: 'Гидравлические испытания',
    selected: false,
    show: false,
    description: 'Контрольные испытания под давлением после ремонта.',
    features: [
      'Проверка на герметичность',
      'Испытание рабочим давлением P<span class="text-[10px]">раб</span> * 1,25',
      'Контроль плавности хода',
      'Фиксация результатов',
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
