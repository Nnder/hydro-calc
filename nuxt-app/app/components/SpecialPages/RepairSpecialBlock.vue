<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [
      {
        name: 'Объем',
        variants: [
          { name: '2л', value: 2, type: 'btn' },
          { name: '5л', value: 2, type: 'btn' },
          { name: '20л', value: 2, type: 'btn' },
          { name: 'Кол-во', value: 1, type: 'input' },
        ],
      },
    ],
  },
})
</script>
<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="flex gap-4 justify-center items-center w-full flex-1" v-for="option in options">
      <template v-for="value in option.variants">
        <button
          v-if="value.type === 'btn'"
          @click="value.onPress(btn)"
          class="w-full mb-2 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
          :class="value.class"
        >
          {{ value.value }}
        </button>

        <div v-else-if="value.type === 'input'">
          <label>{{ value.name }}</label>
          <input
            :placeholder="`введите ${value.name}`"
            value="1"
            :class="[
              'w-full mb-2 px-4 md:px-5 py-3 border-2 rounded-lg md:rounded-xl transition-all duration-300',
              'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
              'placeholder-gray-400 text-slate-900',
              'shadow-sm hover:shadow-md',
            ]"
          />
        </div>

        <div v-else>
          <label>{{ value.name }}</label>

          <select class="w-full h-full min-w-64 mb-2 px-4 md:px-5 py-3 border-2 rounded-lg md:rounded-xl">
            <option v-for="selectValue in value.options">{{ selectValue.name }}</option>
          </select>
        </div>
      </template>
    </div>
  </div>
</template>
