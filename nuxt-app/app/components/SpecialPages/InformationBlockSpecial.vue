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

const setActiveSection = (section) => {
  emit('section-change', section)
}
</script>

<template>
  <section class="w-full h-full">
    <div class="w-full h-full min-h-[300px] flex items-center bg-hydro-power">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div
          class=" flex flex-col items-start lg:items-center justify-between w-full gap-8"
          :class="[position === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse']"
        >
          <div class="w-full lg:w-1/2 mt-8 lg:mt-0 text-white xl:max-w-2xl">
            <h2 class="text-2xl xl:text-4xl font-bold mb-4 leading-tight">
              {{ blockData.title }}
            </h2>
            <p class="text-lg mb-6 opacity-90">
              {{ blockData.description }}
            </p>

            <div class="space-y-4 mb-6">
              <div
                v-for="(feature, index) in blockData.features"
                :key="index"
                class="flex items-start gap-3"
              >
                <Icon :name="feature.icon" class="text-2xl shrink-0 text-white" />
                <p class="text-base opacity-90">{{ feature.text }}</p>
              </div>
            </div>

            <button
              @click="open()"
              class="border-2 border-white text-black px-6 py-2 rounded-lg bg-white hover:bg-hydro-power hover:text-white transition-colors duration-300"
            >
              {{ blockData.buttonText }}
            </button>
          </div>

          <div class="w-full lg:w-1/2 xl:!w-[640px]">
            <!-- Кнопки переключения для 3D модели -->
            <div v-if="blockData.type === '3d'" class="flex justify-center mb-4 space-x-2">
              <button
                @click="setActiveSection('kovshi')"
                class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                :class="activeSection === 'kovshi' 
                  ? 'bg-white text-hydro-power shadow-lg' 
                  : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'"
              >
                Ковши
              </button>
              <button
                @click="setActiveSection('hydrovrashateli')"
                class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                :class="activeSection === 'hydrovrashateli' 
                  ? 'bg-white text-hydro-power shadow-lg' 
                  : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'"
              >
                Гидровращатели
              </button>
              <button
                @click="setActiveSection('hydromoloty')"
                class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                :class="activeSection === 'hydromoloty' 
                  ? 'bg-white text-hydro-power shadow-lg' 
                  : 'bg-hydro-power/20 text-white border border-white/30 hover:bg-white/10'"
              >
                Гидромолоты
              </button>
            </div>

            <div class="flex justify-center" v-if="blockData.type !== '3d'">
              <NuxtImg
              :src="blockData.imageUrl"
              :alt="blockData.imageAlt"
              class="object-fill"
              format="webp"
            />
            </div>
           
            <div v-else class="relative" @click="() => (hint = false)">
              <ThreeViewer
                :modelPath="blockData.modelSrc"
                :canvasColor="blockData.modelBgColor"
                :screenIncrease="blockData.scale || 0.5"
                :loadFunc="blockData?.loadFunc"
                class="!h-[400px]"
              />

              <div
                v-if="hint"
                class="absolute z-50 bottom-14 left-10 px-6 py-2 text-white font-medium rounded-2xl bg-gradient-to-r from-blue-500/80 to-indigo-600/80 backdrop-blur-md shadow-lg shadow-blue-900/40 animate-bounce"
              >
                Покрути меня
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>