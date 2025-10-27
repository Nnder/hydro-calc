<template>
  <div class="bg-tech-light">
    <div class="w-11/12 mx-auto py-8 md:py-12 px-5 sm:px-8 lg:px-10 rounded-2xl mt-8 mb-8 md:mt-12 md:mb-12">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <section class="w-full md:flex-1 p-5 sm:p-7 h-fit bg-white rounded-2xl shadow-lg overflow-visible">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-7 gap-5">
            <div class="space-y-3">
              <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-hydro-steel bg-gradient-to-r from-hydro-steel to-hydro-power bg-clip-text text-transparent"
              >
                {{ title }}
              </h2>
              <p class="text-xs sm:text-sm md:text-base text-hydro-steel/80 font-medium">{{ subtitle }}</p>
            </div>
            <div
              class="bg-gradient-to-r from-hydro-power/10 to-hydro-steel/10 text-hydro-power px-3 py-2 rounded-full text-sm font-semibold shadow-sm min-w-[100px] sm:min-w-[120px] text-center"
            >
              {{ selectedCount }}/{{ parts.length }}
            </div>
          </div>

          <div class="space-y-4" :class="parts.length > 6 ? 'space-y-2' : 'space-y-4'">
            <div v-for="(part, index) in parts" :key="index" class="group">
              <div
                v-show="!part?.hidden"
                class="rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between hover:shadow-md bg-white shadow-sm"
                :class="{
                  'shadow-md bg-gradient-to-r from-hydro-power/5 to-hydro-steel/5 ring-2 ring-hydro-power/20':
                    part.selected,
                  'hover:shadow-lg': !part.selected,
                  'p-2 sm:p-3': parts.length > 6,
                  'p-4 sm:p-5': parts.length <= 6,
                }"
                @click="handlePartClick(part, index)"
                role="button"
                tabindex="0"
                @keydown.enter="handlePartClick(part, index)"
              >
                <div
                  class="flex items-center flex-1 min-w-0"
                  :class="parts.length > 6 ? 'gap-2 sm:gap-3' : 'gap-3 sm:gap-4'"
                >
                  <div
                    class="rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm flex-shrink-0"
                    :class="{
                      'bg-hydro-power text-white shadow-hydro-power/30': part.selected,
                      'bg-tech-light text-hydro-steel/60 group-hover:bg-hydro-power/10 group-hover:text-hydro-power':
                        !part.selected,
                      'w-8 h-8 sm:w-10 sm:h-10': parts.length > 6,
                      'w-10 h-10 sm:w-12 sm:h-12': parts.length <= 6,
                    }"
                  >
                    <Icon
                      :name="getPartIcon(part)"
                      :class="parts.length > 6 ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div
                      class="font-semibold text-hydro-steel transition-colors duration-300 break-words overflow-visible whitespace-normal"
                      :class="{
                        'text-hydro-power': part.selected,
                        'text-sm': parts.length > 6,
                        'text-sm sm:text-base': parts.length <= 6,
                      }"
                    >
                      {{ part.name }}
                    </div>
                    <div
                      v-if="part.category"
                      class="text-hydro-steel/60 font-medium mt-1 break-words overflow-visible whitespace-normal"
                      :class="parts.length > 6 ? 'text-xs' : 'text-xs'"
                    >
                      {{ part.category }}
                    </div>
                  </div>
                </div>
                <div
                  class="transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                  :class="parts.length > 6 ? 'ml-1 sm:ml-2' : 'ml-2 sm:ml-3'"
                >
                  <Icon
                    v-if="part.selected"
                    name="mdi:check-circle"
                    :class="parts.length > 6 ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'"
                    class="text-hydro-power"
                  />
                  <Icon
                    v-else
                    name="mdi:plus-circle-outline"
                    :class="parts.length > 6 ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'"
                    class="text-gray-300 group-hover:text-hydro-power/70"
                  />
                </div>
              </div>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-250 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="expandedIndex === index && (part.description || part?.features?.length)"
                  class="overflow-hidden"
                >
                  <div
                    class="relative mt-3 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm"
                    :class="parts.length > 6 ? 'mt-2 p-3 sm:p-4' : 'mt-3 p-4 sm:p-5'"
                  >
                    <button
                      @click.stop="closeExpanded"
                      class="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-hydro-steel transition-colors duration-200"
                      :class="parts.length > 6 ? 'top-2 right-2 w-6 h-6' : 'top-3 right-3 w-7 h-7'"
                    >
                      <Icon name="mdi:close" :class="parts.length > 6 ? 'text-base' : 'text-lg'" />
                    </button>

                    <p
                      class="text-hydro-steel/80 pr-8 mb-4 break-words overflow-visible whitespace-normal"
                      :class="parts.length > 6 ? 'text-xs' : 'text-xs sm:text-sm'"
                    >
                      {{ part.description }}
                    </p>

                    <div v-if="part.features" class="space-y-2" :class="parts.length > 6 ? 'space-y-1' : 'space-y-2'">
                      <div v-for="(feature, i) in part.features" :key="i" class="flex items-start">
                        <Icon
                          name="mdi:check-circle"
                          class="text-hydro-power mt-0.5 mr-2 shrink-0"
                          :class="parts.length > 6 ? 'text-sm' : 'text-sm sm:text-base'"
                        />
                        <span
                          class="text-hydro-steel/80 font-medium break-words overflow-visible whitespace-normal"
                          :class="parts.length > 6 ? 'text-xs' : 'text-xs'"
                          v-html="feature"
                        ></span>
                      </div>
                    </div>

                    <div
                      v-if="part.price"
                      class="mt-4 pt-3 border-t border-gray-200"
                      :class="parts.length > 6 ? 'mt-3 pt-2' : 'mt-4 pt-3'"
                    >
                      <div class="flex justify-between items-center">
                        <span class="text-hydro-steel/60" :class="parts.length > 6 ? 'text-xs' : 'text-xs'"
                          >Стоимость:</span
                        >
                        <span
                          class="text-hydro-power font-bold"
                          :class="parts.length > 6 ? 'text-sm' : 'text-sm sm:text-base'"
                          >{{ part.price }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <section class="w-full md:flex-1 relative">
          <div
            class="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-100 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
          >
            <div class="relative inline-block" id="image-container">
              <!-- Картинка -->
              <NuxtImg
                :src="mainImage"
                ref="imageRef"
                class="block w-full h-auto max-h-[600px] object-contain select-none"
                :alt="imageAlt"
                loading="lazy"
                format="webp"
                quality="80"
              />

              <!-- SVG -->
              <svg
                ref="svgRef"
                class="absolute top-0 left-0 w-full h-full pointer-events-none"
                :viewBox="computedViewBox"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g v-for="(part, index) in sortedParts" :key="'highlight-' + index">
                  <template v-if="highlightMode === 'single' ? activeHighlight === index : part.selected">
                    <template v-for="(shape, sIndex) in normalizedShapes(part.highlight)" :key="sIndex">
                      <rect
                        v-if="shape.type === 'rect'"
                        :x="percentToPx(shape.left, imageWidth)"
                        :y="percentToPx(shape.top, imageHeight)"
                        :width="percentToPx(shape.width, imageWidth)"
                        :height="percentToPx(shape.height, imageHeight)"
                        :fill="getFill(part)"
                        :stroke="getStroke(part)"
                        :stroke-width="part.selected ? 2 : 1"
                        rx="2"
                      />
                      <polygon
                        v-else-if="shape.type === 'poly' || shape.type === 'polygon'"
                        :points="convertPolyPoints(shape.points)"
                        :fill="getFill(part)"
                        :stroke="getStroke(part)"
                        :stroke-width="part.selected ? 2 : 1"
                      />
                      <circle
                        v-else-if="shape.type === 'circle'"
                        :cx="percentToPx(shape.cx, imageWidth)"
                        :cy="percentToPx(shape.cy, imageHeight)"
                        :r="percentToPx(shape.r, Math.min(imageWidth, imageHeight))"
                        :fill="getFill(part)"
                        :stroke="getStroke(part)"
                        :stroke-width="part.selected ? 2 : 1"
                      />
                    </template>
                  </template>
                </g>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Выберите детали для ремонта' },
  subtitle: { type: String, default: 'Отметьте необходимые компоненты' },
  parts: { type: Array, required: true },
  mainImage: { type: String, required: true },
  imageAlt: { type: String, default: 'Профессиональный ремонт' },
  imageId: { type: String, default: 'repairImage' },
  imageStyle: { type: String, default: '' },
  highlightMode: { type: String, default: 'multiple' },
})

// Оптимизированные computed свойства
const sortedParts = computed(() => {
  return [...props.parts].sort((a, b) => (a.z || 0) - (b.z || 0))
})

const selectedCount = computed(() => {
  return props.parts.filter(p => p.selected).length
})

const imageRef = ref(null)
const svgRef = ref(null)
const imageWidth = ref(100)
const imageHeight = ref(100)
const activeHighlight = ref(null)
const expandedIndex = ref(null) // Новое: индекс раскрытого элемента

const computedViewBox = computed(() => `0 0 ${imageWidth.value} ${imageHeight.value}`)

// Мемоизированные функции для лучшей производительности
const iconMap = {
  'Диагностика (дефектовка)': 'mdi:engine',
  'Подбор и замена уплотнений': 'mdi:filter',
  'Изготовление и замена штока': 'mdi:cog',
  'Изготовление и замена поршня': 'mdi:hammer',
  'Ремонт гильз': 'mdi:tools',
  'Замена крышек': 'mdi:shield',
  'Ремонт цапф': 'mdi:wrench',
  'Замена проушин': 'material-symbols:location-on',
  'Гидравлические испытания': 'mdi:test-tube',
}

const getPartIcon = part => {
  return iconMap[part.name] || 'mdi:wrench'
}

const normalizedShapes = highlight => {
  if (!highlight) return []
  return Array.isArray(highlight) ? highlight : [highlight]
}

const percentToPx = (val, total) => {
  if (!val) return 0
  const s = String(val).trim()
  if (s.endsWith('%')) return (parseFloat(s) / 100) * total
  return parseFloat(s)
}

const convertPolyPoints = points => {
  if (!points) return ''
  return points
    .split(',')
    .map(p => {
      const [x, y] = p.trim().split(/\s+/)
      return `${percentToPx(x, imageWidth.value)},${percentToPx(y, imageHeight.value)}`
    })
    .join(' ')
}

const getFill = p => p.fill || p.color || 'rgba(0,105,255,0.35)'
const getStroke = p => p.stroke || 'rgba(0,105,255,1)'

// Оптимизированный обработчик кликов
const handlePartClick = (part, index) => {
  // Используем requestAnimationFrame для плавности
  requestAnimationFrame(() => {
    part.selected = !part.selected

    // Логика для раскрытия: только один раскрыт
    if (expandedIndex.value === index) {
      expandedIndex.value = null // Закрыть, если уже раскрыт
    } else {
      expandedIndex.value = index // Открыть новый, закрыв предыдущий
    }

    if (props.highlightMode === 'single') {
      activeHighlight.value = part.selected ? index : null
    }

    emit('part-selected', { part, index, selected: part.selected })
  })
}

// Функция для закрытия раскрытого элемента (по кнопке X)
const closeExpanded = () => {
  expandedIndex.value = null
}

const emit = defineEmits(['part-selected', 'image-changed'])

// Оптимизированная загрузка изображения
const updateImageDimensions = async () => {
  await nextTick()
  const img = imageRef.value?.$el || imageRef.value
  if (img && img.naturalWidth && img.naturalHeight) {
    imageWidth.value = img.naturalWidth
    imageHeight.value = img.naturalHeight
  }
}

onMounted(() => {
  updateImageDimensions()

  // Добавляем обработчик загрузки изображения
  const img = imageRef.value?.$el || imageRef.value
  if (img) {
    if (img.complete) {
      updateImageDimensions()
    } else {
      img.addEventListener('load', updateImageDimensions)
    }
  }
})
</script>

<style scoped>
#image-container {
  position: relative;
  display: inline-block;
}
#image-container img {
  width: 100%;
  height: auto;
}
#image-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
