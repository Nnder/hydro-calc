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
})
</script>

<template>
  <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-hydro-power">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div
          class="flex flex-col items-center justify-between w-full gap-8"
          :class="[position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse']"
        >
          <div class="text-white max-w-2xl">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              {{ blockData.title }}
            </h2>
            <p class="text-lg mb-6 opacity-90">
              {{ blockData.description }}
            </p>
            <button
              @click="open()"
              class="border-2 border-white text-black px-6 py-2 rounded-lg bg-white hover:bg-hydro-power hover:text-white transition-colors duration-300"
            >
              {{ blockData.buttonText }}
            </button>
          </div>

          <div class="hidden md:block !w-[640px]">
            <NuxtImg
              v-if="blockData.type !== '3d'"
              :src="blockData.imageUrl"
              :alt="blockData.imageAlt"
              class="object-fill"
              format="webp"
            />
            <div v-else class="relative" @click="() => (hint = false)">
              <ThreeViewer
                :modelPath="blockData.modelSrc"
                :canvasColor="blockData.modelBgColor"
                :screenIncrease="blockData.scale || 0.5"
                :loadFunc="blockData?.loadFunc"
                class="!h-[400px]"
              />

              <div
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
