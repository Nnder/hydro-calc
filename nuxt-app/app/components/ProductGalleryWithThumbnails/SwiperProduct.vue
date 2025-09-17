<template>
  <div class="flex flex-col gap-4">
    <div class="w-full relative">
      <Swiper
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="main-swiper rounded-lg"
        :navigation="{
          nextEl: '.main-next',
          prevEl: '.main-prev',
        }"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" class="w-full h-96 object-cover" />
        </SwiperSlide>
        
      </Swiper>
    </div>

    <!-- Миниатюры -->
    <div class="w-full relative">
      <Swiper
        @swiper="setThumbsSwiper"
        :modules="modules"
        :slidesPerView="4"
        :spaceBetween="8"
        :watchSlidesProgress="true"
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
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation } from 'swiper/modules'

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const modules = [Thumbs, Navigation]
const images = [
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg',
  'https://st21.stpulscen.ru/images/localized/029/428/298_original.jpg'
]
</script>

<style scoped>
.thumbs-swiper {
  padding: 0 24px; 
}

.thumbs-swiper .swiper-slide-thumb-active img {
  border-color: #3b82f6 !important;
  border-width: 2px;
}
</style>