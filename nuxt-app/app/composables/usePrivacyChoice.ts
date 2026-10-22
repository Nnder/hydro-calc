import { COOKIE_KEY, COOKIE_VERSION, parseCookieChoice, type CookieChoice } from '#shared/cookieConsent'

export const usePrivacyChoice = () => {
  const choice = useState<CookieChoice | null>('privacy-choice', () => null)
  const settingsOpen = useState('privacy-settings-open', () => false)
  const storageError = useState('privacy-storage-error', () => false)
  const save = (analytics: boolean) => {
    const value = { version: COOKIE_VERSION, analytics, at: Date.now() }
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(value))
      storageError.value = false
    } catch { storageError.value = true }
    choice.value = value
    settingsOpen.value = false
  }
  const restore = () => {
    try { choice.value = parseCookieChoice(localStorage.getItem(COOKIE_KEY)) }
    catch { choice.value = null }
  }
  return { choice, settingsOpen, storageError, save, restore }
}
