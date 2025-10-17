<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  onOptionSelect: {
    // Новый prop: callback для обновления description/features
    type: Function,
    default: () => {},
  },
})

const emit = defineEmits(['option-selected']) // Если нужно эмитить глобально, но мы используем prop-callback

const handleSelectChange = (event, variant) => {
  const selectedValue = JSON.parse(event.target.value)
  // Вызываем callback из родителя с данными для обновления
  props.onOptionSelect(selectedValue)
  // Опционально: emit для других нужд
  emit('option-selected', selectedValue)
}

const handleSelect = part => {
  // Вызываем переданную функцию с данными (обновит родителя)
  // props.onSelect({
  //   id: part.id,
  //   name: part.name,
  //   description: part.description,
  //   // ... другие нужные данные (price, features и т.д.)
  // })

  // Опционально: локальное действие (но лучше полагаться на родителя для реактивности)
  console.log('Клик по:', part)
}
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div v-for="option in options" :key="option.name" class="flex gap-4 justify-center items-center w-full flex-1">
      <template v-for="value in option.variants" :key="value.name">
        <!-- Для btn -->
        <button
          v-if="value.type === 'btn'"
          @click="handleSelect(option)"
          :class="{ selected: value.selected, ...value.class }"
          class="w-fit self-end mb-2 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
        >
          {{ value.selected ? '-' : '+' }}
        </button>

        <div v-else-if="value.type === 'input'" class="block">
          <label>{{ value.name }}</label>
          <input
            :placeholder="`введите ${value.name}`"
            :value="value.value || '1'"
            @input="value.onInput ? value.onInput($event) : null"
            :class="[
              'w-full block max-w-24 mb-2 px-4 md:px-5 py-3 border-2 rounded-lg md:rounded-xl transition-all duration-300',
              'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
              'placeholder-gray-400 text-slate-900',
              'shadow-sm hover:shadow-md',
            ]"
          />
        </div>

        <div v-else class="h-full flex-1">
          <label>{{ value.name }}</label>
          <select
            @change="event => handleSelectChange(event, value)"
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
