<template>
  <div 
    v-if="showBanner"
    class="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300"
  >
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Файлы cookie
          </h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Сайт использует cookie-файлы, чтобы сделать ваше пребывание на нем максимально удобным. 
            Оставаясь на сайте, вы даёте своё согласие на обработку персональных данных в порядке, 
            указанном в 
            <NuxtLink 
              to="/agreement" 
              class="text-blue-600 hover:text-blue-800 underline font-medium"
              @click="closeBanner"
            >
              Политике обработки персональных данных
            </NuxtLink>.
          </p>
        </div>

        <div class="flex shrink-0">
          <button
            @click="acceptCookies"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Принять все
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const COOKIE_CONSENT_KEY = 'cookies-accepted'
const showBanner = ref(false)

onMounted(() => {
  setTimeout(() => {
    const isAccepted = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!isAccepted || isAccepted === 'false') {
      showBanner.value = true
    }
  }, 1000)
})

const acceptCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
  showBanner.value = false
}

const closeBanner = () => {
  showBanner.value = false
}
//проверка команды 
//localStorage.removeItem('cookies-accepted')
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>