<template>
  <div class="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-100 rounded-xl sm:rounded-2xl h-fit lg:max-h-[600px] relative overflow-hidden">
      <div class="flex flex-col h-fit" :class="flexDirection">
        <!-- Левая колонка с картинкой -->
        <div class="w-full xl:w-1/2 flex">
          <NuxtImg
            :src="imageUrl"
            :alt="imageAlt"
            class="w-full h-full object-cover"
            sizes="sm:100vw lg:50vw xl:800px"
            loading="lazy"
          />
        </div>

        <!-- Правая колонка с текстом -->
        <div class="w-full xl:w-1/2 flex flex-col mt-4 lg:mt-0 px-4 sm:px-6 lg:px-8" :class="contentPadding">
          <div :class="textAlignment">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              {{ blockDataText.title }}
            </h2>

            <div
              class="text-base sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4"
              v-html="processedDescription"
            ></div>

            <ul v-if="blockDataText.benefits" class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li
                v-for="(item, index) in blockDataText.benefits"
                :key="index"
                class="flex items-start gap-3"
                :class="benefitsAlignment"
              >
                <div class="flex-shrink-0 mt-0.5 sm:mt-1">
                  <Icon name="heroicons:check-badge" class="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <span class="text-base sm:text-base text-gray-700" v-html="item"></span>
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
    required: true,
    default: {
  title: 'Продажа гидронасосов в Нижнем Тагиле',
  description:  `<p class="text-lg">
         Наши специалисты помогут подобрать оптимальный гидронасос для ваших задач, рассчитают необходимые параметры и предоставят профессиональную консультацию по установке и эксплуатации. Обеспечьте надежную работу вашего оборудования с нашими гидронасосами!
        </p>
        <p class="text-lg">
          Все наши гидронасосы проходят строгий контроль качества и соответствуют ГОСТам. 
        </p>`
}
  },
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'image-right', 'text-left', 'text-right', 'mixed-alignment'].includes(value),
  },
  imageUrl: {
    type: String,
    default: 'worker_3.webp',
  },
  imageAlt: {
    type: String,
    default: 'Спецтехника на ремонте',
  },
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
      return 'lg:flex-row-reverse'
    case 'text-left':
    case 'mixed-alignment':
      return 'lg:flex-row'
    default:
      return 'lg:flex-row'
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
