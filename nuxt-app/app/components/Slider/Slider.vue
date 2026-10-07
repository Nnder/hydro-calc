<template>
  <div ref="heroRef" class="slider-hero">
    <swiper-container ref="swiperRef" init="false" class="swiper-with-video" :class="{ 'slider-ready': sliderReady }" @swiperslidechange="onSlideChange">
      <swiper-slide class="video-slide" v-for="(slider, index) in sliders" :key="slider.title + index">
        <div class="video-wrapper">
          <img :loading="index === 0 ? 'eager' : 'lazy'" :src="slider.img" alt="" class="slide-poster"
            width="1600" height="896" :fetchpriority="index === 0 ? 'high' : 'auto'" decoding="async" />
          <video
            :ref="el => setVideoRef(el, index)"
            class="background-video"
            muted
            loop
            playsinline
            preload="none"
            :class="{ 'background-video--ready': readyIndex === index }"
            @playing="onPlaying(index)"
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        <div class="slide-content">
          <div class="content-wrapper">
            <!-- Верхний блок с тегом и заголовком -->
            <div class="top-content">
              <span class="tag" v-if="slider.tag">{{ slider.tag }}</span>
              <h2 class="title">{{ slider.title }}</h2>
            </div>

            <!-- Центральный блок с текстом и списком -->
            <div class="middle-content">
              <p class="description">{{ slider.text }}</p>

              <ul class="features" v-if="slider.features">
                <li v-for="(feature, i) in slider.features" :key="i">
                  <Icon name="mdi-check-circle" color="primary" class="mr-2" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Нижний блок с кнопкой и доп информацией -->
            <div class="bottom-content">
              <NuxtLink
                :to="slider.link"
                class="w-fit uppercase py-3 px-5 shadow-xl text-white bg-hydro-power rounded-xl font-semibold text-base md:text-lg whitespace-nowrap flex items-center"
              >
                {{ slider.buttonText || 'Заказать' }}
                <Icon name="mdi-arrow-right" class="ml-2" />
              </NuxtLink>

              <div class="additional-info" v-if="slider.additionalInfo">
                <Icon name="mdi-information-outline" size="small" class="mr-1" />
                {{ slider.additionalInfo }}
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'

const heroRef = ref(null)
const swiperRef = ref(null)
const videoRefs = []
const sliderReady = ref(false)
const activeIndex = ref(0)
const readyIndex = ref(-1)
let hls = null
let generation = 0
let disposed = false
let inViewport = true
let observer
let hlsModule
const setVideoRef = (el, index) => { videoRefs[index] = el }
const onPlaying = index => {
  if (index === activeIndex.value) readyIndex.value = index
}

const sliders = [
  {
    videoSrc: '/videos/Ремонт_гидроцилиндра/Ремонт_гидроцилиндра.m3u8',
    img: '/images/slider/repair-poster.webp',
    tag: 'Профессионально',
    title: 'Ремонт гидроцилиндров',
    text: 'Полный комплекс услуг по восстановлению гидравлики',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Проектирование и изготовление гидроцилидров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-hydraulic-cylinders',
  },
  {
    videoSrc: '/videos/Испытательный_стенд/Испытательный_стенд.m3u8',
    img: '/images/slider/repair-poster.webp',
    tag: 'Качественно',
    title: 'Испытательный стенд для гидронасосов и гидроцилиндров',
    // text: 'Специализированный сервис для промышленной техники',
    features: ['Референт лист', 'Опыт более 10 лет'],
    buttonText: 'Подробнее',
    link: '/remont-hydraulic-cylinders',
  },
  {
    videoSrc: '/videos/конструкторская_документация/конструкторская_документация.m3u8',
    img: '/images/slider/repair-poster.webp',
    title: 'Разработка конструкторской документации и изготовление гидронасосных станций',
    // text: 'Регулярный сервис для бесперебойной работы',
    features: ['Референт лист', 'Опыт более 10 лет'],
    buttonText: 'Подробнее',
    link: '/proektirovanie-izgotovlenie-hydraulic-stantici',
  },
  {
    videoSrc: '/videos/обжим_рвд/обжим_рвд.m3u8',
    img: '/images/slider/repair-poster.webp',
    title: 'Изготовление рукава высокого давления (рвд)',
    // text: 'Регулярный сервис для бесперебойной работы',
    features: ['Любой обьем', 'Любая сложность'],
    buttonText: 'Подробнее',
    link: '/rukava-visokogo-davlenia-rvd',
  },
  {
    videoSrc: '/videos/Ремонт_гидронасоса/Ремонт_гидронасоса.m3u8',
    img: '/images/slider/repair-poster.webp',
    tag: 'Профессионально',
    title: 'Ремонт гидронасосов',
    text: 'Полный комплекс услуг по восстановлению гидронасосов',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и восстановление гидронасосов'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-nasosov-pumps',
  },
  {
    videoSrc: '/videos/Ремонт_гидромотора/Ремонт_гидромотора.m3u8',
    img: '/images/slider/repair-poster.webp',
    tag: 'Профессионально',
    title: 'Ремонт гидромоторов',
    text: 'Полный комплекс услуг по восстановлению гидромоторов',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и восстановление гидромотров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-hydraulic-motors',
  },
  {
    videoSrc:
      '/videos/навесное_оборудование_ковкши_гидромолоты_и_гидровращатели/навесное_оборудование_ковкши_гидромолоты_и_гидровращатели.m3u8',
    img: '/images/slider/repair-poster.webp',
    tag: 'Профессионально',
    title: 'Ремонт навестного оборудования',
    text: 'Полный комплекс услуг по восстановлению ковшей, гидромолотов и гидровращателей',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и продажа навестного оборудования'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-kovshey',
  },
  {
    videoSrc: '/videos/сварочные_токартные_работы/сварочные_токартные_работы.m3u8',
    img: '/images/slider/welding-poster.webp',
    tag: 'Профессионально',
    title: 'Сварочные и токарные работы',
    text: 'Полный комплекс услуг по восстановлению методом наплавки',
    features: ['Наплавка штоков', 'Сварка и восстановление проушин', 'Сварка корпусов гидроцилиндров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-svarkoy',
  },
]

// Release the previous player and requests before loading another slide.
const stopVideo = () => {
  generation++
  readyIndex.value = -1
  hls?.destroy()
  hls = null
  videoRefs.forEach(video => {
    if (!video) return
    video.pause()
    if (video.hasAttribute('src')) {
      video.removeAttribute('src')
      video.load()
    }
  })
}

const startVideo = async () => {
  stopVideo()
  if (disposed || !inViewport || document.hidden || navigator.connection?.saveData) return
  const index = activeIndex.value
  const video = videoRefs[index]
  if (!video) return
  const request = generation
  const src = sliders[index].videoSrc
  video.muted = true
  const play = () => video.play().catch(() => { /* Keep the poster if autoplay is blocked. */ })
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = src
    play()
    return
  }
  try {
    hlsModule ||= import('hls.js')
    const { default: Hls } = await hlsModule
    if (disposed || request !== generation || !Hls.isSupported()) return
    const player = new Hls({ maxBufferLength: 10, maxMaxBufferLength: 20, backBufferLength: 0 })
    hls = player
    player.on(Hls.Events.MANIFEST_PARSED, () => {
      if (request === generation) play()
    })
    player.on(Hls.Events.ERROR, (_, data) => {
      if (data.fatal && request === generation) stopVideo()
    })
    player.loadSource(src)
    player.attachMedia(video)
  } catch {
    // Leave the image and slide content visible if the player cannot load.
  }
}

const onSlideChange = event => {
  const swiper = event.detail?.[0] || swiperRef.value?.swiper
  if (!swiper || swiper.realIndex === activeIndex.value) return
  activeIndex.value = swiper.realIndex
  startVideo()
}

const syncPlayback = () => {
  if (document.hidden || !inViewport) {
    swiperRef.value?.swiper?.autoplay?.stop()
    stopVideo()
  } else {
    swiperRef.value?.swiper?.autoplay?.start()
    startVideo()
  }
}

onMounted(async () => {
  const rect = heroRef.value.getBoundingClientRect()
  inViewport = rect.bottom > 0 && rect.top < window.innerHeight
  document.addEventListener('visibilitychange', syncPlayback)
  observer = new IntersectionObserver(([entry]) => {
    if (inViewport !== entry.isIntersecting) {
      inViewport = entry.isIntersecting
      syncPlayback()
    }
  })
  observer.observe(heroRef.value)
  try {
    const { register } = await import('swiper/element/bundle')
    if (disposed) return
    register()
    Object.assign(swiperRef.value, {
      loop: true,
      navigation: true,
      pagination: { clickable: true },
      autoplay: { delay: 5000, disableOnInteraction: true },
    })
    sliderReady.value = true
    await nextTick()
    if (disposed) return
    swiperRef.value.initialize()
    syncPlayback()
  } catch {
    // The server-rendered first slide remains usable if Swiper cannot load.
  }
})

onUnmounted(() => {
  disposed = true
  observer?.disconnect()
  document.removeEventListener('visibilitychange', syncPlayback)
  stopVideo()
})
</script>

<style scoped>
.slider-hero { background: #17212e; }
.swiper-with-video { display: block; overflow: hidden; }
.swiper-with-video:not(.slider-ready) > swiper-slide:not(:first-child) { display: none; }
.video-slide { display: block; }
.slide-poster { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.video-wrapper::after { content: ''; position: absolute; inset: 0; background: rgb(0 0 0 / 45%); pointer-events: none; }

.swiper-with-video {
  width: 100%;
  height: 600px;
  position: relative;
  --swiper-navigation-color: rgba(255, 255, 255, 0.6);
  --swiper-pagination-color: rgba(255, 255, 255, 1);
  --swiper-navigation-size: 50px;
}

.swiper-with-video .swiper-button-next,
.swiper-with-video .swiper-button-prev {
  opacity: 0.7; /* прозрачность */
  transform: scale(1.5); /* уменьшаем размер */
  transition: opacity 0.3s ease;
}

.video-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
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
  opacity: 0;
  transition: opacity 350ms ease;
}

.background-video--ready { opacity: 1; }

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
