export const useCookieConsent = () => {
  const cookieConsent = useCookie('cookie-consent', {
    default: () => null,
    maxAge: 365 * 24 * 60 * 60
  })

  const hasAnalyticsConsent = computed(() => {
    return cookieConsent.value?.analytics === true
  })

  const hasMarketingConsent = computed(() => {
    return cookieConsent.value?.marketing === true
  })

  const getConsent = () => {
    return cookieConsent.value
  }

  const hasAnyConsent = computed(() => {
    return cookieConsent.value !== null
  })

  return { hasAnalyticsConsent, hasMarketingConsent, getConsent, hasAnyConsent, cookieConsent }
}