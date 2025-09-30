<template>
  <div class="bg-tech-light" data-aos="fade-up" data-aos-delay="200">
    <div class="w-4/5 mx-auto py-8 md:py-6 px-4 sm:px-3 lg:px-4 rounded-2xl mt-8 mb-4">
      <div class="flex items-center">
        <!-- Левая секция (список деталей) -->
        <section class="flex-1 p-4 h-fit bg-white rounded-2xl shadow-lg overflow-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
            <div class="space-y-1">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-hydro-steel bg-gradient-to-r from-hydro-steel to-hydro-power bg-clip-text text-transparent">
                {{ title }}
              </h2>
              <p class="text-sm md:text-base text-hydro-steel/80 font-medium">{{ subtitle }}</p>
            </div>
            <div
              class="bg-gradient-to-r from-hydro-power/10 to-hydro-steel/10 text-hydro-power px-3 py-2 rounded-full text-sm font-semibold shadow-sm min-w-[120px] text-center"
            >
              {{ selectedCount }}/{{ parts.length }}
            </div>
          </div>

          <div class="space-y-2">
            <div v-for="(part, index) in parts" :key="index" class="group">
              <div
                v-show="!part?.hidden"
                class="p-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between hover:shadow-md bg-white shadow-sm"
                :class="{
                  'shadow-md bg-gradient-to-r from-hydro-power/5 to-hydro-steel/5 ring-2 ring-hydro-power/20': part.selected,
                  'hover:shadow-lg': !part.selected,
                }"
                @click="handlePartClick(part, index)"
                role="button"
                tabindex="0"
                @keydown.enter.space="handlePartClick(part, index)"
              >
                <div class="flex items-center gap-3 flex-1 min-w-0">
                  <!-- Иконка -->
                  <div
                    class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm flex-shrink-0"
                    :class="{
                      'bg-hydro-power text-white shadow-hydro-power/30': part.selected,
                      'bg-tech-light text-hydro-steel/60 group-hover:bg-hydro-power/10 group-hover:text-hydro-power': !part.selected,
                    }"
                  >
                    <Icon :name="getPartIcon(part)" class="text-xl" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-base font-semibold text-hydro-steel transition-colors duration-300 truncate"
                         :class="{'text-hydro-power': part.selected}">
                      {{ part.name }}
                    </div>
                    <div v-if="part.category" class="text-xs text-hydro-steel/60 font-medium mt-0.5 truncate">
                      {{ part.category }}
                    </div>
                  </div>
                </div>
                <div class="ml-2 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  <Icon
                    v-if="part.selected"
                    name="mdi:check-circle"
                    class="text-xl text-hydro-power"
                  />
                  <Icon
                    v-else
                    name="mdi:plus-circle-outline"
                    class="text-xl text-gray-300 group-hover:text-hydro-power/70"
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
                <div v-if="part.show && part.description" class="overflow-hidden">
                  <div
                    class="relative mt-2 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm"
                  >
                    <button 
                      @click="part.show = false" 
                      class="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-hydro-steel transition-colors duration-200"
                    >
                      <Icon name="mdi:close" class="text-base" />
                    </button>
                    
                    <p class="text-hydro-steel/80 text-sm pr-6 mb-3">{{ part.description }}</p>
                    
                    <div v-if="part.features" class="space-y-1">
                      <div v-for="(feature, i) in part.features" :key="i" class="flex items-start">
                        <Icon name="mdi:check-circle" class="text-hydro-power mt-0.5 mr-2 shrink-0 text-base" />
                        <span class="text-hydro-steel/80 text-xs font-medium" v-html="feature"></span>
                      </div>
                    </div>
                    
                    <div v-if="part.price" class="mt-3 pt-2 border-t border-gray-200">
                      <div class="flex justify-between items-center">
                        <span class="text-hydro-steel/60 text-xs">Стоимость:</span>
                        <span class="text-hydro-power font-bold text-base">{{ part.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- Правая секция (изображение) -->
        <section class="flex-1 relative">
          <div class="w-full h-full rounded-2xl overflow-hidden relative flex items-start justify-center bg-gray-100 ">
            <div class="relative" :style="imageStyle">
              <NuxtImg
                :src="mainImage"
                class="h-full max-h-[500px] w-full max-w-[500px] object-contain"
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
    default: 'multiple' // 'multiple' или 'single'
  }
})

const emit = defineEmits(['part-selected', 'image-changed'])

const activeHighlight = ref(null)
const selectedCount = computed(() => props.parts.filter(part => part.selected).length)

// Функция для получения иконок в зависимости от типа детали
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
  
  // Ищем по ключевым словам в названии
  const name = part.name.toLowerCase()
  for (const [key, icon] of Object.entries(iconMap)) {
    if (name.includes(key)) {
      return icon
    }
  }
  
  // Возвращаем иконку из пропсов или дефолтную
  return part.icon || 'mdi:car-wrench'
}

const handlePartClick = (part, index) => {
  part.selected = !part.selected
  part.show = part.selected

  // Для режима одиночного выделения
  if (props.highlightMode === 'single') {
    activeHighlight.value = index
    setTimeout(() => {
      if (activeHighlight.value === index) {
        activeHighlight.value = null
      }
    }, 3000)
  }

  // Вызываем кастомную функцию если есть
  if (part.onSelect) {
    part.onSelect()
  }

  emit('part-selected', { part, index })

  // Прокрутка к изображению
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

// Watch для изменения главного изображения
watch(() => props.mainImage, (newImage) => {
  emit('image-changed', newImage)
})
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
</style>