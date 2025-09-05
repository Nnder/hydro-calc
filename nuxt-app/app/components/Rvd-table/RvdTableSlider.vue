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
        delay: 10000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide 
        v-for="(tableData, index) in tables" 
        :key="'table-' + index"
        class="table-slide"
      >
        <div class="slide-content bg-white rounded-lg shadow-lg p-4 mx-auto">
        <div class="overflow-x-auto">
          <RvdTableWrapperObject :table-data-object="tableData.data" />
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
import RvdTableWrapperObject from './RvdTableWrapperObject.vue'

const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
  // Динамический импорт Swiper
  import('swiper/element/bundle').then(({ register }) => {
    register()
  })
})

defineProps({
  tables: {
    type: Array,
    required: true,
  },
})

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
  color: rgb(49, 30, 30);
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
