<template>
  <ClientOnly>
    <swiper-container
      :loop="true"
      :navigation="true"
      :pagination="true"
      class="swiper-with-video"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide class="video-slide" v-for="(slider, index) in sliders" :key="slider.title + index">
        <div class="video-wrapper">
          <video ref="videoRef" class="background-video" :poster="slider.img" autoplay muted loop playsinline>
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
                  <v-icon icon="mdi-check-circle" color="primary" class="mr-2" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Нижний блок с кнопкой и доп информацией -->
            <div class="bottom-content">
              <v-btn color="primary" :ripple="false" elevation="12" size="x-large" rounded="xl" class="order-btn">
                {{ slider.buttonText || 'Заказать' }}
                <v-icon icon="mdi-arrow-right" class="ml-2" />
              </v-btn>

              <div class="additional-info" v-if="slider.additionalInfo">
                <v-icon icon="mdi-information-outline" size="small" class="mr-1" />
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

const sliders = [
  {
    videoSrc: '/videos/Lavrov.mp4',
    img: '/hydrocilinder.png',
    tag: 'Профессионально',
    title: 'Ремонт гидроцилиндров',
    text: 'Полный комплекс услуг по восстановлению гидравлики',
    features: ['Диагностика за 30 минут', 'Гарантия до 12 месяцев', 'Оригинальные запчасти'],
    buttonText: 'Оставить заявку',
    additionalInfo: 'Срочный ремонт за 24 часа',
  },
  {
    videoSrc: '/videos/Lavrov.mp4',
    img: '/hydrocilinder.png',
    tag: 'Качественно',
    title: 'Восстановление гидрооборудования',
    text: 'Специализированный сервис для промышленной техники',
    features: ['Собственная лаборатория', 'Опыт более 10 лет'],
  },
  {
    videoSrc: '/videos/Lavrov.mp4',
    img: '/hydrocilinder.png',
    title: 'Техническое обслуживание',
    text: 'Регулярный сервис для бесперебойной работы',
    buttonText: 'Записаться на ТО',
  },
]

const videoRef = ref(null)
</script>

<style scoped>
.swiper-with-video {
  width: 100%;
  height: 600px;
  position: relative;
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;
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
    height: 500px;
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

  .order-btn {
    width: 100%;
  }
}
</style>
