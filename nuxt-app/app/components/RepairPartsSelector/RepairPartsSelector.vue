<template>
  <div class="bg-tech-light" data-aos="fade-up" data-aos-delay="200">
    <div class="w-11/12 mx-auto py-8 md:py-12 px-5 sm:px-8 lg:px-10 rounded-2xl mt-8 mb-8 md:mt-12 md:mb-12">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <section class="w-full md:flex-1 p-5 sm:p-7 h-fit bg-white rounded-2xl shadow-lg overflow-visible">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-7 gap-5">
            <div class="space-y-3">
              <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-hydro-steel bg-gradient-to-r from-hydro-steel to-hydro-power bg-clip-text text-transparent">
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
                class="p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between hover:shadow-md bg-white shadow-sm"
                :class="{
                  'shadow-md bg-gradient-to-r from-hydro-power/5 to-hydro-steel/5 ring-2 ring-hydro-power/20': part.selected,
                  'hover:shadow-lg': !part.selected,
                  'p-3 sm:p-4': parts.length > 6,
                  'p-4 sm:p-5': parts.length <= 6
                }"
                @click="handlePartClick(part, index)"
                role="button"
                tabindex="0"
                @keydown.enter="handlePartClick(part, index)"
              >
                <div class="flex items-center gap-3 sm:gap-4 flex-1 min-w-0" :class="parts.length > 6 ? 'gap-2 sm:gap-3' : 'gap-3 sm:gap-4'">
                  <div
                    class="rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm flex-shrink-0"
                    :class="{
                      'bg-hydro-power text-white shadow-hydro-power/30': part.selected,
                      'bg-tech-light text-hydro-steel/60 group-hover:bg-hydro-power/10 group-hover:text-hydro-power': !part.selected,
                      'w-8 h-8 sm:w-10 sm:h-10': parts.length > 6,
                      'w-10 h-10 sm:w-12 sm:h-12': parts.length <= 6
                    }"
                  >
                    <Icon :name="getPartIcon(part)" :class="parts.length > 6 ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-semibold text-hydro-steel transition-colors duration-300 break-words overflow-visible whitespace-normal"
                         :class="{
                           'text-hydro-power': part.selected,
                           'text-sm': parts.length > 6,
                           'text-sm sm:text-base': parts.length <= 6
                         }">
                      {{ part.name }}
                    </div>
                    <div v-if="part.category" class="text-hydro-steel/60 font-medium mt-1 break-words overflow-visible whitespace-normal"
                         :class="parts.length > 6 ? 'text-xs' : 'text-xs'">
                      {{ part.category }}
                    </div>
                  </div>
                </div>
                <div class="ml-2 sm:ml-3 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                     :class="parts.length > 6 ? 'ml-1 sm:ml-2' : 'ml-2 sm:ml-3'">
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
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 max-h-0 -translate-y-2"
                enter-to-class="opacity-100 max-h-96 translate-y-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="part.show && (part.description || part?.features?.length)" class="overflow-visible">
                  <div
                    class="relative mt-3 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm"
                    :class="parts.length > 6 ? 'mt-2 p-3 sm:p-4' : 'mt-3 p-4 sm:p-5'"
                  >
                    <button 
                      @click="part.show = false" 
                      class="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-hydro-steel transition-colors duration-200"
                      :class="parts.length > 6 ? 'top-2 right-2 w-6 h-6' : 'top-3 right-3 w-7 h-7'"
                    >
                      <Icon name="mdi:close" :class="parts.length > 6 ? 'text-base' : 'text-lg'" />
                    </button>
                    
                    <p class="text-hydro-steel/80 pr-8 mb-4 break-words overflow-visible whitespace-normal"
                       :class="parts.length > 6 ? 'text-xs' : 'text-xs sm:text-sm'">
                      {{ part.description }}
                    </p>
                    
                    <div v-if="part.features" class="space-y-2" :class="parts.length > 6 ? 'space-y-1' : 'space-y-2'">
                      <div v-for="(feature, i) in part.features" :key="i" class="flex items-start">
                        <Icon name="mdi:check-circle" 
                              class="text-hydro-power mt-0.5 mr-2 shrink-0"
                              :class="parts.length > 6 ? 'text-sm' : 'text-sm sm:text-base'" />
                        <span class="text-hydro-steel/80 font-medium break-words overflow-visible whitespace-normal"
                              :class="parts.length > 6 ? 'text-xs' : 'text-xs'"
                              v-html="feature"></span>
                      </div>
                    </div>
                    
                    <div v-if="part.price" class="mt-4 pt-3 border-t border-gray-200"
                         :class="parts.length > 6 ? 'mt-3 pt-2' : 'mt-4 pt-3'">
                      <div class="flex justify-between items-center">
                        <span class="text-hydro-steel/60" :class="parts.length > 6 ? 'text-xs' : 'text-xs'">Стоимость:</span>
                        <span class="text-hydro-power font-bold" :class="parts.length > 6 ? 'text-sm' : 'text-sm sm:text-base'">{{ part.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <section class="w-full md:flex-1 relative">
          <div class="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-100 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
            <div class="relative w-full h-full flex items-center justify-center" :style="imageStyle">
              <NuxtImg
                :src="mainImage"
                class="h-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] object-contain"
                :alt="imageAlt"
                loading="lazy"
                format="webp"
                quality="80"
                :id="imageId"
              />

              <div
                v-for="(part, index) in parts"
                :key="'highlight-' + index"
                class="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                :class="{
                  'opacity-0': highlightMode === 'single' ? activeHighlight !== index : !part.selected,
                  'opacity-100': highlightMode === 'single' ? activeHighlight === index : part.selected,
                }"
              >
                <div
                  v-if="part.highlight && (highlightMode === 'single' ? activeHighlight === index : part.selected)"
                  :class="'absolute border-2 rounded-md ' + (part.color || 'bg-red-500/50 border-red-600')"
                  :style="getHighlightStyle(part)"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name:{
    type: String,
    default: '',
  },
  selectorData: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Выберите детали для ремонта'
  },
  subtitle: {
    type: String,
    default: 'Отметьте необходимые компоненты'
  },
  parts: {
    type: Array,
    required: true,
    default: () => []
  },
  mainImage: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Профессиональный ремонт'
  },
  imageId: {
    type: String,
    default: 'repairImage'
  },
  imageStyle: {
    type: String,
    default: ''
  },
  highlightMode: {
    type: String,
    default: 'multiple'
  }
})

const emit = defineEmits(['part-selected', 'image-changed'])

const activeHighlight = ref(null)
const selectedCount = computed(() => props.parts.filter(part => part.selected).length)

const getPartIcon = (part) => {
  const iconMap = {
    'engine': 'mdi:engine',
    'battery': 'mdi:battery',
    'tire': 'mdi:car-tire-alert',
    'brake': 'mdi:car-brake-parking',
    'filter': 'mdi:filter',
    'light': 'mdi:car-light-high',
    'suspension': 'mdi:car-suspension',
    'transmission': 'mdi:gear',
    'electronics': 'mdi:chip',
  }
  
  const name = part.name.toLowerCase()
  for (const [key, icon] of Object.entries(iconMap)) {
    if (name.includes(key)) {
      return icon
    }
  }
  
  return part.icon || 'mdi:car-wrench'
}

const handlePartClick = (part, index) => {
  part.selected = !part.selected
  part.show = part.selected

  if(props.selectorData)
  addData({name:props.name, selected:part.name})

  if (props.highlightMode === 'single') {
    activeHighlight.value = index
    setTimeout(() => {
      if (activeHighlight.value === index) {
        activeHighlight.value = null
      }
    }, 3000)
  }

  if (part.onSelect) {
    part.onSelect()
  }

  emit('part-selected', { part, index })

  scrollToImage()
}

const scrollToImage = () => {
  const element = document.getElementById(props.imageId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
}

const getHighlightStyle = (part) => {
  if (!part.highlight) return {}
  return {
    top: part.highlight.top,
    left: part.highlight.left,
    width: part.highlight.width,
    height: part.highlight.height,
  }
}

watch(() => props.mainImage, (newImage) => {
  emit('image-changed', newImage)
})

const { addData } = useCalculatorSelector()
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-hydro-power\/30 {
  box-shadow: 0 4px 14px 0 rgba(0, 105, 255, 0.3);
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

@media (max-width: 768px) {
  .w-11\/12 {
    width: 94%;
  }
}

@media (max-width: 640px) {
  .w-11\/12 {
    width: 97%;
  }
}
</style>