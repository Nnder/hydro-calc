// @ts-nocheck
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  if (process.client) {
    ;(function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          ;(m[i].a = m[i].a || []).push(arguments)
        }
      m[i].l = 1 * new Date()
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return
        }
      }
      ;((k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a))
    })(window, document, 'script', `https://mc.webvisor.org/metrika/tag_ww.js?id=${config.YANDEX_METRIKA_ID}`, 'ym')
    ym(config.YANDEX_METRIKA_ID, 'init', {
      ssr: true,
      webvisor: true,
      trackHash: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      accurateTrackBounce: true,
      trackLinks: true,
    })
  }
})
