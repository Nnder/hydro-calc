<template>
  <div 
    v-if="showBanner"
    class="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300"
    :class="{
      'translate-y-0': showBanner,
      'translate-y-full': !showBanner
    }"
  >
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Файлы cookie
          </h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Сайт использует cookie-файлы, чтобы сделать ваше пребывание на нем максимально удобным. 
            К сайту подключён сервис веб-аналитики Яндекс.Метрика, использующий cookie-файлы. 
            Оставаясь на сайте, вы даёте своё согласие на обработку персональных данных в порядке, 
            указанном в 
            <NuxtLink 
              to="/policy" 
              class="text-blue-600 hover:text-blue-800 underline font-medium"
              @click="closeBanner"
            >
              Политике обработки персональных данных
            </NuxtLink>.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            @click="acceptAll"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Принять все
          </button>
          <button
            @click="acceptNecessary"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Только необходимые
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cookieConsent = useCookie('cookie-consent', {
  default: () => null,
  maxAge: 365 * 24 * 60 * 60, 
  sameSite: 'lax',
  path: '/'
})

const showBanner = ref(false)

onMounted(() => {
  if (!cookieConsent.value) {
    setTimeout(() => {
      showBanner.value = true
    }, 1000)
  } else {
    loadYandexMetrika(cookieConsent.value.analytics)
  }
})

const acceptAll = () => {
  const consent = {
    necessary: true,
    analytics: true,
    marketing: true,
    timestamp: new Date().toISOString(),
    version: '1.0'
  }
  
  cookieConsent.value = consent
  showBanner.value = false
  loadYandexMetrika(true)
  
  console.log('Все куки приняты:', consent)
}

const acceptNecessary = () => {
  const consent = {
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
    version: '1.0'
  }
  
  cookieConsent.value = consent
  showBanner.value = false
  loadYandexMetrika(false)
  
  console.log('Только необходимые куки:', consent)
}

const closeBanner = () => {
  showBanner.value = false
}

const loadYandexMetrika = (enabled) => {
  if (enabled && process.client) {
    // свой YOUR_YANDEX_METRIKA_ID
    const counterId = 'YOUR_YANDEX_METRIKA_ID'
    
    console.log('Загружаем Яндекс.Метрику с ID:', counterId)
    
    const script = document.createElement('script')
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      ym(${counterId}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `
    document.head.appendChild(script)
    
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" /></div>`
    document.body.appendChild(noscript)
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>