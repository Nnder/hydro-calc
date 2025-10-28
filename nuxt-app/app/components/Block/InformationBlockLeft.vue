<template>
  <section class="w-full bg-white">
    <div
      class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8"
    >
      <div class="w-full lg:w-1/2 xl:!w-[640px] flex justify-center">
        <NuxtImg
          v-if="blockData.type !== '3d'"
          :src="blockData.imageUrl"
          :alt="blockData.imageAlt"
          class="object-contain rounded-lg w-full max-w-sm sm:max-w-none h-[240px] sm:h-[400px]"
          format="webp"
        />

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

      <div class="w-full lg:w-1/2 text-center lg:text-left xl:max-w-2xl">
        <h2 class="text-xl sm:text-2xl xl:text-4xl font-bold mb-4 leading-tight text-gray-900">
          {{ blockData.title }}
        </h2>
        <p class="text-base sm:text-lg mb-6 opacity-90 text-gray-700">
          {{ blockData.description }}
        </p>

        <button
          @click="open()"
          class="border-2 border-blue-600 w-full sm:w-auto text-white px-6 py-2 rounded-lg bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors duration-300"
        >
          {{ blockData.buttonText }}
        </button>
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
