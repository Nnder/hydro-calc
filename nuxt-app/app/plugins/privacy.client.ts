import { COOKIE_KEY } from '#shared/cookieConsent'

export default defineNuxtPlugin(nuxtApp => {
  const { choice, restore } = usePrivacyChoice()
  const counter = 105118320
  const w = window as typeof window & { ym?: ((...args: any[]) => void) & { a?: any[]; l?: number } }
  let script: HTMLScriptElement | null = null
  let started = false
  let generation = 0
  const cleanCookies = () => {
    for (const part of document.cookie.split(';')) {
      const name = part.split('=')[0].trim()
      if (!name.startsWith('_ym_')) continue
      const domains = ['', location.hostname, '.' + location.hostname, '.athydro.ru']
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''}`
      }
    }
  }
  const stop = () => {
    generation++
    if (started) w.ym?.(counter, 'destruct')
    started = false
    if (script) { script.onload = null; script.remove(); script = null }
    if (w.ym?.a) w.ym.a = []
    cleanCookies()
  }
  watch(() => choice.value?.analytics, allowed => {
    if (!allowed) { stop(); return }
    const request = ++generation
    // Не передаём содержимое форм, query-параметры, заголовки страниц и referrer.
    w.ym = w.ym || Object.assign((...args: any[]) => { (w.ym!.a ||= []).push(args) }, { l: Date.now() })
    script = document.createElement('script')
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    script.onload = () => {
      if (request !== generation || !choice.value?.analytics) return
      w.ym?.(counter, 'init', { defer: true, webvisor: false, clickmap: false, trackLinks: false, accurateTrackBounce: false, sendTitle: false })
      started = true
      w.ym?.(counter, 'hit', location.origin + location.pathname, { referer: '' })
    }
    document.head.appendChild(script)
  }, { immediate: true, flush: 'sync' })
  restore()
  window.addEventListener('storage', e => { if (e.key === COOKIE_KEY || e.key === null) restore() })
  window.addEventListener('focus', restore)
  nuxtApp.hook('page:finish', () => {
    restore()
    if (started && choice.value?.analytics) w.ym?.(counter, 'hit', location.origin + location.pathname, { referer: '' })
  })
})
