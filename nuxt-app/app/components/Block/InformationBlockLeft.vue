<template>
  <section class="w-full h-full min-h-[300px]">
    <div class="w-full h-full bg-white">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div
          class=" flex flex-col py-4 items-start lg:items-center justify-between w-full gap-8"
          :class="[position === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse']"
        >
          <div class="w-full lg:w-1/2 mt-8 lg:mt-0 xl:max-w-2xl">
            <h2 class="text-2xl xl:text-4xl font-bold mb-4 leading-tight">
              {{ blockData.title }}
            </h2>
            <p class="text-lg mb-6 opacity-90">
              {{ blockData.description }}
            </p>
            <button
              @click="open()"
              class="border-2 border-blue-600 text-white px-6 py-2 rounded-lg bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              {{ blockData.buttonText }}
            </button>
          </div>

          <div class="w-full lg:w-1/2 xl:!w-[640px]">
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
                :img="blockData.img"
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
