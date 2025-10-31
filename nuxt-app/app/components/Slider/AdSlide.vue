<template>
  <div class="relative w-full h-[600px] flex items-center justify-center text-white">
    <!-- Фон с затемнением -->

    <div class="video-wrapper" v-if="slider.videoSrc">
      <video
        ref="videoRef"
        class="background-video"
        :poster="slider.img"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        loading="lazy"
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>

    <div v-else class="absolute inset-0 bg-black/80 after:absolute after:inset-0 after:bg-black/60">
      <NuxtImg
        format="webp"
        :src="slider?.img || '/images/uplotnenie/slider-uplatnenie.png'"
        alt="background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Контент -->
    <div class="relative z-10 w-full max-w-7xl px-6 flex flex-col gap-8">
      <!-- Верхний блок -->
      <div class="flex flex-col gap-4">
        <span
          v-if="slider.tag"
          class="bg-hydro-steel/20 text-white px-4 py-1.5 rounded-full w-fit font-semibold text-sm uppercase tracking-wider"
        >
          {{ slider.tag }}
        </span>
        <NuxtLink v-else :to="slider.link">
          <NuxtImg class="w-48 h-full" :src="slider.logo" />
        </NuxtLink>

        <h2 class="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-5xl">
          {{ slider.title }}
        </h2>
      </div>

      <!-- Средний блок -->
      <div>
        <p class="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow">
          {{ slider.text }}
        </p>

        <ul v-if="slider.features" class="mt-6 flex flex-col gap-3 text-lg list-none p-0">
          <li v-for="(feature, i) in slider.features" :key="i" class="flex items-center">
            <Icon name="mdi-check-circle" class="mr-2 text-hydro-power" />
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Нижний блок -->
      <div class="flex flex-col gap-6 mt-4">
        <NuxtLink
          :to="slider.buttonLink"
          class="w-fit uppercase py-3 px-5 shadow-xl text-white bg-hydro-power rounded-xl font-semibold text-base md:text-lg whitespace-nowrap flex items-center"
        >
          {{ slider.buttonText || 'Заказать' }}
          <Icon name="mdi-arrow-right" class="ml-2" />
        </NuxtLink>

        <div v-if="slider.additionalInfo" class="flex items-center text-sm opacity-90">
          <Icon name="mdi-information-outline" size="small" class="mr-1" />
          {{ slider.additionalInfo }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hls from 'hls.js'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slider: Object,
})

const videoRef = ref(null)

// Функция для инициализации видео (HLS или обычное MP4)
const initVideo = (video, videoSrc) => {
  if (!video || !videoSrc) return

  if (videoSrc.endsWith('.m3u8')) {
    // HLS для потокового видео
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoSrc)
      hls.attachMedia(video)
      video.hls = hls // Сохраняем для destroy

      // Обработка ошибок
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS Error:', data)
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback для Safari (native HLS)
      video.src = videoSrc
    } else {
      console.error('HLS не поддерживается в этом браузере')
    }
  } else {
    // Обычное видео (MP4 и т.д.)
    video.src = videoSrc

    // Обработка ошибок загрузки
    video.addEventListener('error', e => {
      console.error('Video load error:', e)
    })

    // Опционально: обработка успешной загрузки
    video.addEventListener('loadeddata', () => {
      console.log('Video loaded successfully')
    })
  }
}

onMounted(() => {
  if (props.slider.videoSrc && videoRef.value) {
    initVideo(videoRef.value, props.slider.videoSrc)
  }
})

// Очистка при размонтировании
onUnmounted(() => {
  if (videoRef.value && videoRef.value.hls) {
    videoRef.value.hls.destroy()
    delete videoRef.value.hls
  }
})
</script>

<style scoped>
.swiper-with-video {
  width: 100%;
  height: 600px;
  position: relative;
  --swiper-navigation-color: rgba(255, 255, 255, 0.4);
  --swiper-pagination-color: rgba(255, 255, 255, 0.4);
  --swiper-navigation-size: 36px;
}

.swiper-with-video .swiper-button-next,
.swiper-with-video .swiper-button-prev {
  opacity: 0.6; /* прозрачность */
  transform: scale(0.7); /* уменьшаем размер */
  transition: opacity 0.3s ease;
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
  background-color: rgba(0, 0, 0, 0.6);
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
  opacity: 0.9;
  z-index: -1;
}

.slide-content {
  position: relative;
  z-index: 1;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.top-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tag {
  background: rgba(var(--v-theme-primary), 0.2);
  color: rgba(var(--v-theme-primary), 1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  width: fit-content;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 800px;
}

.description {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 600px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.features {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.125rem;
  list-style: none;
  padding: 0;
}

.bottom-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.order-btn {
  width: fit-content;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.additional-info {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .swiper-with-video {
    height: 100vh;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.25rem;
  }

  .features {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .slide-content {
    padding: 0 1.5rem;
  }

  .title {
    font-size: 1.75rem;
  }

  .description {
    font-size: 1.1rem;
  }
}
</style>
