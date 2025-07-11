<template>
  <ClientOnly>
    <swiper-container :modules="modules" :loop="true" :navigation="true" :pagination="true" class="swiper-with-video">
      <swiper-slide class="video-slide">
        <div class="video-wrapper">
          <video ref="videoRef" class="background-video" poster="/hydrocilinder.png" autoplay muted loop playsinline>
            <source :src="videoSrc" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        <div class="slide-content flex">
          <div class="px-4 flex flex-col gap-4">
            <h2 class="text-2xl sm:text-4xl font-bold">Ремонт гидравлики</h2>
            <p class="text-xl sm:text-2xl font-bold">Свяжитесь с нами</p>
            <v-btn size="large" rounded="xl">Заказать диагностику</v-btn>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper-container>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const videoSrc = '/videos/Lavrov.mp4'
const modules = [Autoplay, Navigation]
const videoRef = ref(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(e => {
      console.error('Autoplay error:', e)
    })
  }
})
</script>

<style scoped>
.swiper-with-video {
  width: 100%;
  height: 500px;
  position: relative;
}

.video-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7); /* Затемнение */
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
}

.slide-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  height: 100%;
  display: flex;
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
