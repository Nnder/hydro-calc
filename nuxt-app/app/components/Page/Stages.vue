<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-tech-light pb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-dark sm:text-4xl">Этапы ремонта гидроцилиндров</h2>
        <p class="mt-4 text-xl text-dark/80 max-w-3xl mx-auto">Полный цикл восстановления гидроцилиндров спецтехники</p>
      </div>

      <div class="hidden lg:block mt-8 bg-white rounded-xl shadow-md p-8 border border-hydro-steel/10">
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="flex">
            <div class="flex-shrink-0 mr-6">
              <span
                class="flex items-center justify-center w-12 h-12 rounded-full bg-hydro-power text-white font-bold text-lg"
              >
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-dark mb-2">{{ step.title }}</h3>
              <p class="text-dark/80">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>