<script setup>
import ThreeViewer from '../Three/ThreeViewer.vue'

const { open } = useModal()
const hint = ref(true)

defineProps({
  blockData: {
    type: Object,
    required: true,
  },
  position: {
    type: String,
    default: 'right',
  },
  activeSection: {
    type: String,
    default: 'kovshi',
  },
})

const emit = defineEmits(['section-change'])
const setActiveSection = section => emit('section-change', section)
</script>

<template>
  <section class="w-full bg-hydro-power">
    <div
      class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-8"
    >
      <div class="w-full lg:w-1/2 text-white text-center lg:text-left xl:max-w-2xl">
        <div v-if="blockData.type === '3d'" class="flex-wrap gap-2 mb-8 hidden lg:flex">
          <button
            @click="setActiveSection('kovshi')"
            class="px-4 py-2 text-sm xl:px-6 xl:py-3 xl:text-xl font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'kovshi'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Ковши
          </button>
          <button
            @click="setActiveSection('hydrovrashateli')"
            class="px-4 py-2 text-sm xl:px-6 xl:py-3 xl:text-xl font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'hydrovrashateli'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Гидровращатели
          </button>
          <button
            @click="setActiveSection('hydromoloty')"
            class="px-4 py-2 text-sm xl:px-6 xl:py-3 xl:text-xl font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'hydromoloty'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Гидромолоты
          </button>
        </div>

        <h2 class="text-xl sm:text-2xl xl:text-4xl font-bold mb-4 leading-tight">
          {{ blockData.title }}
        </h2>
        <p class="text-base sm:text-lg mb-6 opacity-90">
          {{ blockData.description }}
        </p>

        <div class="space-y-3 sm:space-y-4 mb-6">
          <div
            v-for="(feature, index) in blockData.features"
            :key="index"
            class="flex items-start gap-3 justify-center lg:justify-start text-left"
          >
            <Icon :name="feature.icon" class="text-xl sm:text-2xl shrink-0 text-white" />
            <p class="text-sm sm:text-base opacity-90">{{ feature.text }}</p>
          </div>
        </div>

        <button
          @click="open(true, blockData.typeContact)"
          class="border-2 border-white w-full sm:w-auto text-black px-6 py-2 rounded-lg bg-white hover:bg-hydro-power hover:text-white transition-colors duration-300"
        >
          {{ blockData.buttonText }}
        </button>
      </div>

      <div class="w-full lg:w-1/2 xl:!w-[640px] pt-4 flex flex-col items-center">
        <div v-if="blockData.type === '3d'" class="lg:hidden flex flex-wrap justify-center gap-2 mb-4">
          <button
            @click="setActiveSection('kovshi')"
            class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'kovshi'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Ковши
          </button>
          <button
            @click="setActiveSection('hydrovrashateli')"
            class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'hydrovrashateli'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Гидровращатели
          </button>
          <button
            @click="setActiveSection('hydromoloty')"
            class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
            :class="
              activeSection === 'hydromoloty'
                ? 'bg-white text-hydro-power shadow-lg'
                : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'
            "
          >
            Гидромолоты
          </button>
        </div>

        <div class="flex justify-center w-full" v-if="blockData.type !== '3d'">
          <NuxtImg
            :src="blockData.imageUrl"
            :alt="blockData.imageAlt"
            class="object-contain rounded-lg w-full max-w-sm sm:max-w-none h-[240px] sm:h-[400px]"
            format="webp"
          />
        </div>

        <div v-else class="relative w-full max-w-sm sm:max-w-none" @click="() => (hint = false)">
          <ClientOnly>
            <ThreeViewer
              :modelPath="blockData.modelSrc"
              :canvasColor="blockData.modelBgColor"
              :screenIncrease="blockData.scale || 0.5"
              :loadFunc="blockData?.loadFunc"
              :img="blockData.img"
              class="!h-[240px] sm:!h-[400px]"
            />
          </ClientOnly>

          <div
            v-if="hint"
            class="absolute z-50 bottom-6 left-4 px-4 py-2 text-white text-sm sm:text-base font-medium rounded-2xl bg-gradient-to-r from-blue-500/80 to-indigo-600/80 backdrop-blur-md shadow-lg shadow-blue-900/40 animate-bounce"
          >
            Покрути меня
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
