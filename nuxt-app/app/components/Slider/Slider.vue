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
      :preload-images="false"
      class="swiper-with-video"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide class="video-slide" v-for="(slider, index) in sliders" :key="slider.title + index">
        <div class="video-wrapper">
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
            <source :src="slider.videoSrc" type="video/mp4" />
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
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
const { sm } = useScreenSize()
const { open } = useModal()
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
  // Динамический импорт Swiper
  import('swiper/element/bundle').then(({ register }) => {
    register()
  })
})

const sliders = [
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    tag: 'Профессионально',
    title: 'Ремонт гидроцилиндров',
    text: 'Полный комплекс услуг по восстановлению гидравлики',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Проектирование и изготовление гидроцилидров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-hydraulic-cylinders',
  },
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    tag: 'Качественно',
    title: 'Испытательный стенд для гидронасосов и гидроцилиндров',
    // text: 'Специализированный сервис для промышленной техники',
    features: ['Референт лист', 'Опыт более 10 лет'],
    buttonText: 'Подробнее',
    link: '/remont-hydraulic-cylinders',
  },
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    title: 'Разработка конструкторской документации и изготовление гидронасосных станций',
    // text: 'Регулярный сервис для бесперебойной работы',
    features: ['Референт лист', 'Опыт более 10 лет'],
    buttonText: 'Подробнее',
    link: '/proektirovanie-izgotovlenie-hydraulic-stantici',
  },
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    title: 'Изготовление рукава высокого давления (рвд)',
    // text: 'Регулярный сервис для бесперебойной работы',
    features: ['Любой обьем', 'Любая сложность'],
    buttonText: 'Подробнее',
    link: '/rukava-visokogo-davlenia-rvd',
  },
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    tag: 'Профессионально',
    title: 'Ремонт гидронасосов',
    text: 'Полный комплекс услуг по восстановлению гидронасосов',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и восстановление гидронасосов'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-nasosov-pumps',
  },
  {
    videoSrc: '/videos/video3.mp4',
    img: '/images/standVideo/video3photo.png',
    tag: 'Профессионально',
    title: 'Ремонт гидромоторов',
    text: 'Полный комплекс услуг по восстановлению гидромоторов',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и восстановление гидромотров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-hydraulic-motors',
  },
  {
    videoSrc: '/videos/навесное_оборудование_ковкши_гидромолоты_и_гидровращатели_2.mp4',
    img: '/images/standVideo/video3photo.png',
    tag: 'Профессионально',
    title: 'Ремонт навестного оборудования',
    text: 'Полный комплекс услуг по восстановлению ковшей, гидромолотов и гидровращателей',
    features: ['Диагностика за 2 часа', 'Гарантия до 12 месяцев', 'Ремонт и продажа навестного оборудования'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-kovshey',
  },
  {
    videoSrc: '/videos/сварочные токартные работы.mp4',
    img: '/https://optim.tildacdn.com/tild6631-3561-4331-b439-353433326666/-/resize/970x/-/format/webp/photo_1.jpg.webp',
    tag: 'Профессионально',
    title: 'Сварочные и токарные работы',
    text: 'Полный комплекс услуг по восстановлению методом наплавки',
    features: ['Наплавка штоков', 'Сварка и восстановление проушин', 'Сварка корпусов гидроцилиндров'],
    buttonText: 'Подробнее',
    additionalInfo: 'Срочный ремонт за 24 часа',
    link: '/remont-svarkoy',
  },
]

const videoRef = ref(null)
</script>

<style scoped>
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
