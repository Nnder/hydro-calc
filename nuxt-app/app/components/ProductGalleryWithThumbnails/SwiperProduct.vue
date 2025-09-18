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
        :key="forceUpdateKey"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" class="w-full h-96 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
      
    <div class="w-full relative">
      <Swiper
        @swiper="setThumbsSwiper"
        :modules="modules"
        :slidesPerView="4"
        :spaceBetween="8"
        :watchSlidesProgress="true"
        class="thumbs-swiper"
        :key="forceUpdateKey"
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, Navigation } from 'swiper/modules'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const thumbsSwiper = ref(null)
const forceUpdateKey = ref(0)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const modules = [Thumbs, Navigation]

// watch(() => props.images, () => {
//   forceUpdateKey.value++
// }, { deep: true })
</script>