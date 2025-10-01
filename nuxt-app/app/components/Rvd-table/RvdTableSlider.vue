<template>
  <div v-if="!isHydrated">
    <div class="h-[800px] flex items-center justify-center"></div>
  </div>
  
  <ClientOnly>
    <div v-show="isHydrated" class="w-full" data-aos="fade-up">
      <div class="hidden lg:block">
        <swiper-container
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
          <swiper-slide v-for="(tableData, index) in tables" :key="'desktop-table-' + index" class="table-slide">
            <div class="relative z-10 h-full">
              <div class="text-center mb-6">
                <h2 class="text-3xl font-bold text-black drop-shadow-md">
                  {{ tableData.title || `Тип ${index + 1}` }}
                </h2>
                <p class="text-black text-opacity-90 max-w-2xl mx-auto drop-shadow-md">
                  {{ tableData.description }}
                </p>
              </div>

              <div class="bg-white bg-opacity-90 rounded-lg backdrop-blur-sm h-full flex flex-col">
                <div class="flex-1 overflow-auto min-h-[600px]">
                  <RvdTableWrapperObject :table-data-object="tableData.data" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
</script>

<style scoped>
.swiper-with-video {
  width: 100%;
  height: 800px;
  position: relative;
  --swiper-navigation-color: #2563ed;
  --swiper-pagination-color: #2563ed;
}

.table-slide {
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
}

.mobile-table-swiper {
  width: 100%;
  height: 700px;
  --swiper-pagination-color: #2563ed;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
}

.mobile-table-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* Убираем отступы между слайдами и скрываем соседние */
.mobile-table-swiper::v-deep .swiper-slide {
  width: 100% !important;
  margin-right: 0 !important;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-table-swiper::v-deep .swiper-slide-active {
  opacity: 1;
}

.mobile-table-swiper::v-deep .swiper-slide-next,
.mobile-table-swiper::v-deep .swiper-slide-prev {
  opacity: 0;
  pointer-events: none;
}

/* Скрываем часть следующего слайда, которая может быть видна */
.mobile-table-swiper::v-deep .swiper-wrapper {
  overflow: hidden;
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .mobile-table-swiper {
    height: 650px;
  }
}

@media (max-width: 480px) {
  .mobile-table-swiper {
    height: 600px;
  }
  
  .mobile-table-slide {
    padding: 1rem 0.5rem;
  }
}

/* Стили для скролла таблицы */
:deep(.overflow-x-auto) {
  max-height: 100%;
  height: 100%;
}

:deep(table) {
  min-height: 500px;
}

:deep(tbody) {
  height: auto;
}
</style>