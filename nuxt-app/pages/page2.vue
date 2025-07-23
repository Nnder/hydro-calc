<template>
  <div class="max-w-6xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-tech-light rounded-2xl shadow-xl mt-8 mb-16">
    <section class="mb-4 text-center">
      <div class="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-6">
        <span class="text-hydro-steel font-medium">Гидравлические системы</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-hydro-power">Профессиональный ремонт <br />гидроцилиндров</h1>
      <p class="text-xl text-hydro-steel/80 max-w-3xl mx-auto leading-relaxed">
        Компания «СДМ Гидравлика» — лидер в ремонте гидроцилиндров для спецтехники и промышленного оборудования в Москве
        и области.
      </p>
    </section>

    <section class="mb-2 relative">
      <div
        class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300 relative"
      >
        <NuxtImg
          src="hydrocilinder.webp"
          class="w-full h-auto object-cover"
          alt="Профессиональный ремонт гидроцилиндров"
          loading="lazy"
          sizes="sm:100vw md:80vw lg:1024px"
          format="webp"
          quality="80"
        />
        
        <div 
          v-for="(part, index) in hydrantParts" 
          :key="'highlight-'+index"
          class="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          :class="{
            'opacity-0': !part.selected,
            'opacity-100': part.selected,
          }"
        >
          <div 
            class="absolute bg-red-500/50 border-2 border-red-600 rounded-md"
            :style="getHighlightStyle(index)"
          ></div>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-hydro-steel mb-2">Выберите детали для ремонта</h2>
          <p class="text-hydro-steel/70">Отметьте необходимые компоненты гидроцилиндра</p>
        </div>
        <div class="bg-hydro-power/10 text-hydro-power px-4 py-2 rounded-full font-medium">
          Выбрано: {{ selectedCount }} из {{ hydrantParts.length }}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div
          v-for="(part, index) in hydrantParts"
          :key="index"
          @click="toggleSelection(index)"
          class="p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between group"
          :class="{
            'border-hydro-power bg-hydro-power/5': part.selected,
            'border-gray-200 hover:border-hydro-power/30': !part.selected,
          }"
          role="button"
          tabindex="0"
          @keydown.enter.space="toggleSelection(index)"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center"
              :class="{
                'bg-hydro-power/10 text-hydro-power': part.selected,
                'bg-tech-light text-hydro-steel/50 group-hover:bg-hydro-power/5': !part.selected,
              }"
            >
              <Icon name="mdi:engine-outline" class="text-xl" />
            </div>
            <span class="text-lg font-medium text-hydro-steel">{{ part.name }}</span>
          </div>
          <Icon v-if="part.selected" name="mdi:check-circle" class="text-xl text-hydro-power shrink-0" />
          <Icon
            v-else
            name="mdi:plus-circle-outline"
            class="text-xl text-gray-300 shrink-0 group-hover:text-hydro-power/50"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const hydrantParts = ref([
  { name: 'Диагностика (дифектовка)', selected: false, highlight: { top: '10%', left: '50%', width: '40%', height: '15%' } },
  { name: 'Подбор и замена уплотнений', selected: false, highlight: { top: '30%', left: '20%', width: '60%', height: '10%' } },
  { name: 'Изготовление и замена штока', selected: false, highlight: { top: '25%', left: '30%', width: '20%', height: '50%' } },
  { name: 'Изготовление и замена поршня', selected: false, highlight: { top: '40%', left: '45%', width: '15%', height: '10%' } },
  { name: 'Изготовление и ремонт гильз', selected: false, highlight: { top: '30%', left: '50%', width: '30%', height: '40%' } },
  { name: 'Изготовление и замена крышек', selected: false, highlight: { top: '20%', left: '80%', width: '15%', height: '60%' } },
  { name: 'Ремонт цапф', selected: false, highlight: { top: '70%', left: '10%', width: '15%', height: '15%' } },
  { name: 'Замена проушин', selected: false, highlight: { top: '75%', left: '75%', width: '20%', height: '15%' } },
  { name: 'Гидравлические испытания', selected: false, highlight: { top: '85%', left: '40%', width: '20%', height: '10%' } },
])

const selectedCount = computed(() => {
  return hydrantParts.value.filter(part => part.selected).length
})

const toggleSelection = index => {
  hydrantParts.value[index].selected = !hydrantParts.value[index].selected
}


const getHighlightStyle = (index) => {
  const part = hydrantParts.value[index]
  return {
    top: part.highlight.top,
    left: part.highlight.left,
    width: part.highlight.width,
    height: part.highlight.height,
  }
}
</script>

<style>
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