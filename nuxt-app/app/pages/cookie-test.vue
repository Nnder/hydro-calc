<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Тест куки</h1>
    
    <div class="bg-gray-100 p-4 rounded mb-4">
      <pre>{{ cookieData }}</pre>
    </div>
    
    <button 
      @click="refresh"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Обновить
    </button>
    
    <button 
      @click="clearCookie"
      class="bg-red-500 text-white px-4 py-2 rounded ml-2"
    >
      Очистить куки
    </button>
  </div>
</template>

<script setup>
const cookieConsent = useCookie('cookie-consent')
const cookieData = ref(null)

const refresh = () => {
  cookieData.value = cookieConsent.value
}

const clearCookie = () => {
  cookieConsent.value = null
  refresh()
}

onMounted(refresh)
</script>