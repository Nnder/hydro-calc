[file name]: components/RepairPartsSelector.vue
[file content begin]
<template>
  <div class="bg-tech-light" data-aos="fade-up" data-aos-delay="200">
    <div class="w-4/5 mx-auto py-8 md:py-6 px-4 sm:px-3 lg:px-4 rounded-2xl mt-8 mb-4">
      <div class="flex min-h-[600px] gap-4">
        <!-- Левая секция (список деталей) -->
        <section class="flex-1 p-2 bg-white rounded-xl md:rounded-2xl overflow-auto">
          <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 gap-2 md:gap-4"
          >
            <div>
              <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-hydro-steel mb-1 md:mb-2">
                {{ title }}
              </h2>
              <p class="text-sm md:text-base text-hydro-steel/70">{{ subtitle }}</p>
            </div>
            <div
              class="bg-hydro-power/10 text-hydro-power px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium"
            >
              Выбрано: {{ selectedCount }} из {{ parts.length }}
            </div>
          </div>

          <div class="grid grid-cols-1 gap-1 md:gap-2">
            <div v-for="(part, index) in parts" :key="index" class="group">
              <div
                v-show="!part?.hidden"
                class="p-2 md:p-3 border rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between"
                :class="{
                  'border-hydro-power bg-hydro-power/5': part.selected,
                  'border-gray-200 hover:border-hydro-power/30': !part.selected,
                }"
                @click="handlePartClick(part, index)"
                role="button"
                tabindex="0"
                @keydown.enter.space="handlePartClick(part, index)"
              >
                <div class="flex items-center gap-2 md:gap-2 flex-1">
                  <div
                    class="w-10 h-8 md:w-12 md:h-10 rounded-lg flex items-center justify-center"
                    :class="{
                      'bg-hydro-power/10 text-hydro-power': part.selected,
                      'bg-tech-light text-hydro-steel/50 group-hover:bg-hydro-power/5': !part.selected,
                    }"
                  >
                    <Icon :name="part.icon || 'mdi:engine-outline'" class="text-xl md:text-2xl" />
                  </div>
                  <div class="text-base md:text-lg font-medium text-hydro-steel block text-left flex-1">
                    {{ part.name }}
                  </div>
                </div>
                <Icon
                  v-if="part.selected"
                  name="mdi:check-circle"
                  class="text-xl md:text-2xl text-hydro-power shrink-0"
                />
                <Icon
                  v-else
                  name="mdi:plus-circle-outline"
                  class="text-xl md:text-2xl text-gray-300 shrink-0 group-hover:text-hydro-power/50"
                />
              </div>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="part.show && part.description" class="overflow-hidden">
                  <div
                    class="relative mt-2 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200 text-hydro-steel/80 text-sm md:text-base"
                  >
                    <div class="text-right">
                      <button @click="part.show = false" class="text-2xl font-bold cursor-pointer">×</button>
                    </div>
                    <p class="mb-2">{{ part.description }}</p>
                    <div v-if="part.features" class="mt-2 md:mt-3">
                      <div v-for="(feature, i) in part.features" :key="i" class="flex items-start mb-1 md:mb-2">
                        <Icon name="mdi:check-circle" class="text-hydro-power mt-0.5 mr-2 shrink-0" />
                        <span v-html="feature"></span>
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
          <div class="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gray-100">
            <div class="relative" :style="imageStyle">
              <NuxtImg
                :src="mainImage"
                class="max-h-screen w-full object-contain"
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
  transition-duration: 200ms;
}

.shadow-xl {
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

button:hover {
  transform: translateY(-1px);
}
</style>
[file content end]