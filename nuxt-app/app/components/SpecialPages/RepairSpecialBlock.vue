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
  <div class="flex gap-4">
    <div class="flex flex-col gap-4 justify-center items-center w-full flex-1" v-for="option in options">
      <div>{{ option.name }}</div>
      <div>
        <template v-for="value in option.variants">
          <button
            v-if="value.type === 'btn'"
            class="w-full mb-4 justify-center inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
          >
            {{ value.name }}
          </button>

          <input
            v-else
            type="number"
            placeholder="Кол-во"
            value="1"
            required
            :class="[
              'w-full mb-4 px-4 md:px-5 py-3 border-2 rounded-lg md:rounded-xl transition-all duration-300',
              'focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none',
              'placeholder-gray-400 text-slate-900',
              'shadow-sm hover:shadow-md',
            ]"
          />
        </template>
      </div>
    </div>
  </div>
</template>
