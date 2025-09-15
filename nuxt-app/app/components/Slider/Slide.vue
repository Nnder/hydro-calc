<script setup>
defineProps({
  slider: Object,
})

const { open } = useModal()
</script>
<template>
  <div class="relative w-full h-[600px] flex items-center justify-center text-white">
    <!-- Фон с затемнением -->
    <div class="absolute inset-0 bg-black/80 after:absolute after:inset-0 after:bg-black/60">
      <NuxtImg
        format="webp"
        src="/images/uplotnenie/slider-uplatnenie.png"
        alt="background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Контент -->
    <div class="relative z-10 w-full max-w-6xl px-6 flex flex-col gap-8">
      <!-- Верхний блок -->
      <div class="flex flex-col gap-4">
        <span
          v-if="slider.tag"
          class="bg-hydro-steel/20 text-white px-4 py-1.5 rounded-full w-fit font-semibold text-sm uppercase tracking-wider"
        >
          {{ slider.tag }}
        </span>
        <h2 class="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg max-w-3xl">
          {{ slider.title }}
        </h2>
      </div>

      <!-- Средний блок -->
      <div>
        <p class="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow">
          {{ slider.text }}
        </p>

        <ul v-if="slider.features" class="mt-6 flex flex-col gap-3 text-lg list-none p-0">
          <li v-for="(feature, i) in slider.features" :key="i" class="flex items-center">
            <Icon name="mdi-check-circle" class="mr-2 text-hydro-power" />
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Нижний блок -->
      <div class="flex flex-col gap-6 mt-4">
        <button
          @click="open()"
          class="w-fit uppercase py-3 px-5 shadow-xl text-white bg-hydro-power rounded-xl font-semibold text-base md:text-lg whitespace-nowrap flex items-center"
        >
          {{ slider.buttonText || 'Заказать' }}
          <Icon name="mdi-arrow-right" class="ml-2" />
        </button>

        <div v-if="slider.additionalInfo" class="flex items-center text-sm opacity-90">
          <Icon name="mdi-information-outline" size="small" class="mr-1" />
          {{ slider.additionalInfo }}
        </div>
      </div>
    </div>
  </div>
</template>
