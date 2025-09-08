<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-100 rounded-2xl h-auto md:h-[500px] relative overflow-hidden">
      <div class="flex flex-col md:flex-row h-full" :class="flexDirection">
        <div class="w-full md:w-1/2 h-64 md:h-full">
          <NuxtImg 
            :src="imageUrl" 
            :alt="imageAlt" 
            class="w-full h-full object-cover"
            sizes="sm:100vw md:50vw lg:800px"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2 flex flex-col justify-center" :class="contentPadding">
          <div :class="textAlignment">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {{ blockDataText.title }}
            </h2>

            <div class="text-lg text-gray-700 mb-8 leading-relaxed space-y-4" v-html="processedDescription"></div>

            <ul v-if="blockDataText.benefits" class="space-y-4 mb-8">
              <li v-for="(item, index) in blockDataText.benefits" :key="index" class="flex items-start gap-3" :class="benefitsAlignment">
                <div class="flex-shrink-0 mt-1">
                  <Icon name="heroicons:check-badge" class="w-6 h-6 text-green-600" />
                </div>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blockDataText: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'image-right', 'text-left', 'text-right', 'mixed-alignment'].includes(value)
  },
  imageUrl: {
    type: String,
    default: 'https://traktorodetal.ru/upload/resize_cache/iblock/9d9/p6pjux0iqn0du1e8g47ihk14a3mf59jb/968_504_1/traktorodetal_zapustila_tsekh_po_remontu.webp'
  },
  imageAlt: {
    type: String,
    default: 'Спецтехника на ремонте'
  }
})

const processedDescription = computed(() => {
  if (props.variant === 'mixed-alignment' && props.blockDataText.description) {
    return props.blockDataText.description
      .replace('<p>', '<p class="text-left">')
      .replace('<p>', '<p class="text-right">')
  }
  return props.blockDataText.description
})

const flexDirection = computed(() => {
  switch (props.variant) {
    case 'image-right':
    case 'text-right':
      return 'md:flex-row-reverse'
    case 'text-left':
    case 'mixed-alignment':
      return 'md:flex-row'
    default:
      return 'md:flex-row'
  }
})

const contentPadding = computed(() => {
  switch (props.variant) {
    case 'text-left':
      return 'px-6 md:px-10 pl-8'
    case 'text-right':
      return 'px-6 md:px-10 pr-8'
    case 'mixed-alignment':
      return 'px-6 md:px-12'
    default:
      return 'px-8 md:px-12'
  }
})

const textAlignment = computed(() => {
  switch (props.variant) {
    case 'text-left':
      return 'text-left'
    case 'text-right':
      return 'text-right'
    case 'mixed-alignment':
      return 'text-left'
    default:
      return 'text-left'
  }
})

const benefitsAlignment = computed(() => {
  switch (props.variant) {
    case 'text-right':
      return 'justify-end'
    case 'mixed-alignment':
      return 'justify-start'
    default:
      return 'justify-start'
  }
})
</script>