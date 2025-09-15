<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  },
  globalTitle: {
    type: Object,
    default: () => ({
      gtitle: "Гидроцилиндр",
      subtitle: "Полный цикл восстановления гидроцилиндров спецтехники",
    })
  }
})
</script>

<template>
  <div class="bg-tech-light pb-8 md:pb-12 lg:pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mt-6 md:mt-8 lg:mt-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-dark">Этапы ремонта {{ globalTitle.gtitle }}</h2>
        <p class="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-dark/80 max-w-3xl mx-auto px-2">
          {{ globalTitle.subtitle }}
        </p>
      </div>

      <div class="hidden lg:block mt-6 md:mt-8 lg:mt-10 bg-white rounded-xl shadow-md p-6 md:p-8 border border-hydro-steel/10">
        <div class="grid grid-cols-2 gap-6 md:gap-8">
          <div v-for="(step, index) in steps" :key="index" class="flex">
            <div class="flex-shrink-0 mr-4 md:mr-6">
              <span
                class="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-hydro-power text-white font-bold text-base md:text-lg"
              >
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
            </div>
            <div>
              <h3 class="text-base md:text-lg font-semibold text-dark mb-2">{{ step.title }}</h3>
              <p class="text-sm md:text-base text-dark/80">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden mt-6 md:mt-8">
        <div class="space-y-4 md:space-y-6">
          <div v-for="(step, index) in steps" :key="index" 
               class="bg-white rounded-lg md:rounded-xl shadow-sm md:shadow-md p-4 md:p-6 border border-hydro-steel/10">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <span
                  class="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-hydro-power text-white font-bold text-sm md:text-base"
                >
                  {{ (index + 1).toString().padStart(2, '0') }}
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base md:text-lg font-semibold text-dark mb-1 md:mb-2">
                  {{ step.title }}
                </h3>
                <p class="text-sm md:text-base text-dark/80 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>