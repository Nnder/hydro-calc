<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CallBackModal />
  <!-- <PerformanceChecker /> -->
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>

<script setup lang="ts">
import { defineOrganization, defineWebPage, defineWebSite, useSchemaOrg } from '@unhead/schema-org/vue'
import PerformanceChecker from './components/PerformanceChecker/PerformanceChecker.vue'
import CallBackModal from './components/Modal/CallBackModal.vue'
// import { useCartStore } from '~/stores/cart'

// const cartStore = useCartStore()

// onMounted(() => {
//   cartStore.setCart()
// })

const { clearData } = useCalculatorSelector()
const router = useRouter()

router.beforeEach((to, from, next) => {
  clearData()
  next()
})

const route = useRoute()

useHead({
  templateParams: {
    schemaOrg: {
      host: 'https://nuxtseo.com',
      path: route.path,
      inLanguage: 'en',
    },
  },

  // script: [
  //   // Google Tag Manager
  //   {
  //     children: `
  //       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //       })(window,document,'script','dataLayer','GTM-K3GWBBF2');
  //     `,
  //     type: 'text/javascript',
  //   },
  //   // Яндекс.Метрика
  //   {
  //     children: `
  //       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  //       m[i].l=1*new Date();
  //       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  //       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  //       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  //       ym(102976781, "init", {
  //         clickmap:true,
  //         trackLinks:true,
  //         accurateTrackBounce:true,
  //         webvisor:true
  //       });
  //     `,
  //     type: 'text/javascript',
  //   },
  // ],
  // noscript: [
  //   // Google Tag Manager (noscript)
  //   {
  //     children: `
  //       <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3GWBBF2"
  //       height="0" width="0" style="display:none;visibility:hidden"></iframe>
  //     `,
  //     body: true,
  //   },
  //   // Яндекс.Метрика (noscript)
  //   {
  //     children: `
  //       <div>
  //         <img src="https://mc.yandex.ru/watch/102976781" style="position:absolute; left:-9999px;" alt="" />
  //       </div>
  //     `,
  //     body: true,
  //   },
  // ],
})

useSchemaOrg([
  defineWebPage(),
  defineWebSite({
    name: 'Nuxt SEO',
    description: 'Nuxt SEO is a collection of hand-crafted Nuxt Modules to help you rank higher in search engines.',
  }),
  defineOrganization({
    name: 'Nuxt SEO',
  }),
])
</script>
