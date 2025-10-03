<template>
  <div v-if="!isHydrated">
    <!-- Fallback контент -->
    <div class="h-[500px] flex items-center justify-center bg-gray-100 rounded-lg"></div>
  </div>
  <ClientOnly>
    <swiper-container
      v-show="isHydrated"
      :loop="true"
      :navigation="true"
      :pagination="true"
      :preload-images="false"
      class="swiper-product"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="w-full h-96 object-cover rounded-lg" />
      </swiper-slide>
    </swiper-container>

    <swiper-container
      v-show="isHydrated"
      class="thumbs-swiper mt-4"
      :slides-per-view="Math.min(4, images.length)"
      :space-between="8"
      watch-slides-progress
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="relative group">
          <img
            :src="image"
            class="w-full h-20 object-cover cursor-pointer rounded border-2 border-transparent transition-all group-hover:border-blue-400"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
  // динамический импорт Swiper Element API
  import('swiper/element/bundle').then(({ register }) => {
    register()
  })
})
</script>

<style scoped>
.swiper-product {
  width: 100%;
  height: 400px;
  --swiper-navigation-color: rgba(0, 0, 0, 0.6);
  --swiper-pagination-color: rgba(0, 0, 0, 0.6);
}

:deep(.swiper-slide-thumb-active img) {
  border-color: #3b82f6 !important;
  border-width: 2px;
}
</style>
