<template>
  <div class="bg-tech-light">
    <div class="w-4/5 mx-auto py-8  md:py-12 px-4 sm:px-6 lg:px-8  rounded-2xl mt-8 mb-16">
      <section class="mb-4 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-hydro-power">Профессиональный ремонт <br />гидроцилиндров</h1>
        <p class="text-xl text-hydro-steel/80 max-w-3xl mx-auto leading-relaxed">
          Компания «СДМ Гидравлика» — лидер в ремонте гидроцилиндров для спецтехники и промышленного оборудования в Москве
          и области.
        </p>
      </section>

      <section class="mb-2 relative">
        <div
          class="rounded-2xl overflow-hidden   transform hover:scale-[1.01] transition-transform duration-300 relative"
        >
          <NuxtImg
            src="hydrocilinder.webp"
            class="w-full h-auto object-cover"
            alt="Профессиональный ремонт гидроцилиндров"
            loading="lazy"
            sizes="sm:100vw md:80vw lg:1024px"
            format="webp"
            quality="80"
          />
          
          <div 
            v-for="(part, index) in hydrantParts" 
            :key="'highlight-'+index"
            class="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            :class="{
              'opacity-0': !part.selected,
              'opacity-100': part.selected,
            }"
          >
            <div 
              class="absolute bg-red-500/50 border-2 border-red-600 rounded-md"
              :style="getHighlightStyle(index)"
            ></div>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 gap-2 md:gap-4">
          <div>
            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-hydro-steel mb-1 md:mb-2">Выберите детали для ремонта</h2>
            <p class="text-sm md:text-base text-hydro-steel/70">Отметьте необходимые компоненты гидроцилиндра</p>
          </div>
          <div class="bg-hydro-power/10 text-hydro-power px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium">
            Выбрано: {{ selectedCount }} из {{ hydrantParts.length }}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          <div 
            v-for="(part, index) in hydrantParts" 
            :key="index"
            class="group"
          >
            <div
              @click="toggleSelection(index)"
              class="p-3 md:p-4 border rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between"
              :class="{
                'border-hydro-power bg-hydro-power/5': part.selected,
                'border-gray-200 hover:border-hydro-power/30': !part.selected,
              }"
              role="button"
              tabindex="0"
              @keydown.enter.space="toggleSelection(index)"
            >
              <div class="flex items-center gap-2 md:gap-3">
                <div
                  class="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                  :class="{
                    'bg-hydro-power/10 text-hydro-power': part.selected,
                    'bg-tech-light text-hydro-steel/50 group-hover:bg-hydro-power/5': !part.selected,
                  }"
                >
                  <Icon :name="part.icon || 'mdi:engine-outline'" class="text-xl md:text-2xl" />
                </div>
                <div class="text-left">
                  <span class="text-base md:text-lg font-medium text-hydro-steel block">{{ part.name }}</span>
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
              <div 
                v-if="part.selected && part.description" 
                class="overflow-hidden"
              >
                <div class="mt-2 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200 text-hydro-steel/80 text-sm md:text-base">
                  <p class="mb-2">{{ part.description }}</p>
                  <div v-if="part.features" class="mt-2 md:mt-3">
                    <div 
                      v-for="(feature, i) in part.features" 
                      :key="i"
                      class="flex items-start mb-1 md:mb-2"
                    >
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
    </div>
  </div>
  <Stages />
  <Contact />
</template>

<script setup>
import Stages from '~/components/Page/Stages.vue'
import Contact from '~/components/Page/Contact.vue'

const hydrantParts = ref([
  { 
    name: 'Диагностика (дефектовка)', 
    selected: false,
    description: 'Полная диагностика гидроцилиндра с использованием современного оборудования для выявления всех дефектов.',
    features: [
      'Визуальный осмотр на предмет повреждений',
      'Проверка герметичности системы',
      'Измерение параметров штока и гильзы',
      'Составление дефектовочной ведомости'
    ],
    highlight: { top: '10%', left: '50%', width: '40%', height: '15%' }
  },
  { 
    name: 'Подбор и замена уплотнений', 
    selected: false,
    description: 'Комплексная замена всех уплотнительных элементов гидроцилиндра.',
    features: [
      'Подбор оригинальных или аналоговых уплотнений',
      'Замена манжет, колец и сальников',
      'Проверка совместимости материалов',
      'Контрольная сборка и проверка'
    ],
    highlight: { top: '30%', left: '20%', width: '60%', height: '10%' }
  },
  { 
    name: 'Изготовление и замена штока', 
    selected: false,
    description: 'Восстановление или полная замена штока гидроцилиндра.',
    highlight: { top: '25%', left: '30%', width: '20%', height: '50%' }
  },
  { 
    name: 'Изготовление и замена поршня', 
    selected: false,
    description: 'Производство нового поршня или восстановление существующего.',
    highlight: { top: '40%', left: '45%', width: '15%', height: '10%' }
  },
  { 
    name: 'Ремонт гильз', 
    selected: false,
    description: 'Комплексный ремонт гильз гидроцилиндров с восстановлением рабочей поверхности.',
    features: [
      'Расточка внутренней поверхности',
      'Хонингование до нужной шероховатости',
      'Наплавка и шлифовка при необходимости',
      'Контроль геометрии'
    ],
    highlight: { top: '30%', left: '50%', width: '30%', height: '40%' }
  },
  { 
    name: 'Замена крышек', 
    selected: false,
    description: 'Изготовление и установка новых крышек гидроцилиндра.',
    highlight: { top: '20%', left: '80%', width: '15%', height: '60%' }
  },
  { 
    name: 'Ремонт цапф', 
    selected: false,
    description: 'Восстановление посадочных мест цапф гидроцилиндра.',
    features: [
      'Дефектовка цапф',
      'Наплавка изношенных поверхностей',
      'Механическая обработка',
      'Контроль качества'
    ],
    highlight: { top: '70%', left: '10%', width: '15%', height: '15%' }
  },
  { 
    name: 'Замена проушин', 
    selected: false,
    highlight: { top: '75%', left: '75%', width: '20%', height: '15%' }
  },
  { 
    name: 'Гидравлические испытания', 
    selected: false,
    description: 'Контрольные испытания под давлением после ремонта.',
    features: [
      'Проверка на герметичность',
      'Испытание рабочим давлением',
      'Контроль плавности хода',
      'Фиксация результатов'
    ],
    highlight: { top: '85%', left: '40%', width: '20%', height: '10%' }
  }
])

const selectedCount = computed(() => {
  return hydrantParts.value.filter(part => part.selected).length
})

const toggleSelection = (index) => {
  hydrantParts.value[index].selected = !hydrantParts.value[index].selected
}

const getHighlightStyle = (index) => {
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