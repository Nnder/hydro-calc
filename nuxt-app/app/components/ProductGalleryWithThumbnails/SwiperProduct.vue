<template>
  <div v-if="!isHydrated">
    <!-- Fallback контент -->
    <div class="aspect-square w-full flex items-center justify-center bg-gray-100 rounded-lg"></div>
  </div>
  <ClientOnly>
    <swiper-container
      v-show="isHydrated"
      ref="mainSwiperEl"
      :loop="true"
      :navigation="true"
      :pagination="true"
      :preload-images="false"
      :thumbs-swiper="thumbsSwiper"
      class="swiper-product"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <NuxtImg
          :src="image"
          :alt="`Image ${index + 1}`"
          class="w-full h-full object-cover rounded-lg"
          loading="lazy"
          sizes="100vw md:50vw lg:33vw"
        />
      </swiper-slide>
    </swiper-container>

    <swiper-container
      v-show="isHydrated"
      class="thumbs-swiper mt-4"
      :slides-per-view="Math.min(4, images.length)"
      :space-between="8"
      watch-slides-progress
      free-mode="true"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="relative group">
          <NuxtImg
            :src="image"
            :alt="`Thumbnail ${index + 1}`"
            class="w-full h-16 sm:h-20 object-cover cursor-pointer rounded border-2 border-transparent transition-all hover:border-blue-400"
            loading="lazy"
            sizes="20vw"
            @click="slideTo(index)"
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
const mainSwiperEl = ref(null)
const thumbsSwiper = ref(null)

const slideTo = (index) => {
  if (mainSwiperEl.value && mainSwiperEl.value.swiper) {
    mainSwiperEl.value.swiper.slideTo(index)
  }
}


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
  aspect-ratio: 1; 
  --swiper-pagination-color: rgba(0, 0, 0, 0.6);
}

:deep(.swiper-slide-thumb-active img) {
  border-color: #3b82f6 !important;
  border-width: 2px;
}
</style>
