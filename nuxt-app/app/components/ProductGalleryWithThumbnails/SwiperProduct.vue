<template>
  <ClientOnly>
    <div class="flex flex-col gap-4">
      <div class="w-full relative">
        <Swiper
          :modules="modules"
          class="main-swiper rounded-lg"
          :navigation="{
            nextEl: '.main-next',
            prevEl: '.main-prev',
          }"
          :thumbs="{ swiper: thumbsSwiper }"
          :slidesPerView="1"
          :slidesPerGroup="1" 
          :spaceBetween="0"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" class="w-full h-96 object-cover" />
          </SwiperSlide>
          
          <!-- Navigation arrows for main swiper -->
          <div class="main-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md cursor-pointer transition-all duration-200 group">
            <svg class="w-6 h-6 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div class="main-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md cursor-pointer transition-all duration-200 group">
            <svg class="w-6 h-6 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </Swiper>
      </div>
        
      <div class="w-full relative">
        <Swiper
          :modules="modules"
          :slidesPerView="Math.min(4, images.length)"
          :spaceBetween="8"
          :watchSlidesProgress="true"
          @swiper="setThumbsSwiper"
          class="thumbs-swiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="relative group">
              <img :src="image" class="w-full h-20 object-cover cursor-pointer rounded border-2 border-transparent transition-all group-hover:border-blue-400" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation } from 'swiper/modules'
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

<style scoped>
.main-next:hover, .main-prev:hover {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.swiper-slide-thumb-active .group) {
  border-color: #3b82f6 !important;
  border-width: 2px;
}
</style>