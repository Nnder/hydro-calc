<script setup>
import ThreeViewer from '../Three/ThreeViewer.vue'

const { open } = useModal()

defineProps({
  blockData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-hydro-power">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8">
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
              class="w-[512] max-h-96 object-contain"
              width="640"
              height="640"
              format="webp"
            />
            <ThreeViewer
              v-else
              :modelPath="blockData.modelSrc"
              :canvasColor="blockData.modelBgColor"
              class="!h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
