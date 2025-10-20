<template>
  <div class="flex flex-col gap-4 mt-4">
    <div v-for="option in part.options" :key="option.name" class="flex gap-4 justify-center items-center w-full flex-1">
      <template v-for="value in option.variants" :key="value.name">
        <!-- Для btn -->
        <button
          v-if="value.type === 'btn'"
          @click="toggleStatus"
          :class="{ selected: selectedVariant.selected, ...value.class }"
          class="w-fit self-end mb-2 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        >
          {{ selectedVariant.selected ? '-' : '+' }}
        </button>

        <div v-else-if="value.type === 'input'" class="block">
          <label>{{ value.name }}</label>
          <input
            v-model.number="selectedCount"
            @input="updateCount"
            :min="1"
            class="w-full block max-w-24 px-4 py-3 border-2 rounded-lg focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none placeholder-gray-400 text-slate-900 shadow-sm hover:shadow-md"
            placeholder="введите количество"
          />
        </div>

        <div v-else class="h-full flex-1">
          <label>{{ value.name }}</label>
          <select
            v-model="selectedOption"
            @change="handleSelectChange"
            class="w-full h-full min-w-64 mb-2 px-4 md:px-5 py-3 border-2 rounded-lg md:rounded-xl"
          >
            <option v-for="selectValue in value.options" :key="selectValue.value" :value="JSON.stringify(selectValue)">
              {{ selectValue.name }}
            </option>
          </select>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  part: {
    type: Object,
    default: () => ({
      options: [],
    }),
  },
  onOptionSelect: {
    type: Function,
    default: () => {},
  },
})

// Локальные ref для реактивности
const selectedVariant = ref(
  props.part.selected || props.part.options[0]?.variants[0]?.selected || { count: 2, selected: false }
)
const selectedCount = ref(selectedVariant.value.count || 2)
const selectedOption = ref(JSON.stringify(selectedVariant.value))

// Синхронизация с props.part.selected (если изменится извне)
watch(
  () => props.part.selected,
  newSelected => {
    if (newSelected) {
      selectedVariant.value = { ...newSelected }
      selectedCount.value = newSelected.count || 2
      selectedOption.value = JSON.stringify(newSelected)
    }
  },
  { immediate: true }
)

// Функции
const handleSelectChange = () => {
  const selectedValue = JSON.parse(selectedOption.value)
  selectedVariant.value = { ...selectedValue, count: selectedCount.value, selected: selectedVariant.value.selected }
  props.onOptionSelect(selectedVariant.value)
}

const updateCount = () => {
  selectedVariant.value.count = selectedCount.value
  props.onOptionSelect(selectedVariant.value)
}

const toggleStatus = () => {
  selectedVariant.value.selected = !selectedVariant.value.selected
  props.onOptionSelect(selectedVariant.value)
}
</script>
