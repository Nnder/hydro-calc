<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-center">
        <button
            class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
            :class="{'ring-2 ring-offset-2 ring-hydro-power scale-105': activeButton === 1}"
            @click="setActiveButton(1)"
        >
            Ковши
        </button>
         <button
            class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
            :class="{'ring-2 ring-offset-2 ring-hydro-power scale-105': activeButton === 2}"
            @click="setActiveButton(2)"
        >
            Гидроцилиндры
        </button>
         <button
            class="mt-8 ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hydro-power hover:bg-hydro-power-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydro-power transition-all duration-200"
            :class="{'ring-2 ring-offset-2 ring-hydro-power scale-105': activeButton === 3}"
            @click="setActiveButton(3)"
        >
            Гидромоторы
        </button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['button-changed'])

const activeButton = ref(1)

const setActiveButton = (buttonNumber) => {
  activeButton.value = buttonNumber
  emit('button-changed', buttonNumber)
}
</script>