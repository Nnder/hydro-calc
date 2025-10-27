<script setup>
import { SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import ThreeViewer from '../Three/ThreeViewer.vue'
const { sm } = useScreenSize()

defineProps({
  sliders: {
    type: Array,
    required: true,
  },
})

const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
  import('swiper/element/bundle').then(({ register }) => {
    register()
  })
})
</script>
<template>
  <div v-if="!isHydrated">
    <!-- Fallback контент -->
    <div class="h-[600px] flex items-center justify-center"></div>
  </div>
  <ClientOnly>
    <swiper-container
      v-show="isHydrated"
      :loop="true"
      :navigation="sm"
      :pagination="true"
      :allowTouchMove="false"
      :preload-images="false"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide class="video-slide" v-for="(slider, index) in sliders" :key="slider.src + index">
        <div class="slide-content">
          <div class="content-wrapper">
            <img v-if="slider.type === 'img'" :src="slider.src" :alt="slider.src" class="w-full h-full" />
            <ThreeViewer v-else :modelPath="slider.src" />
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>
