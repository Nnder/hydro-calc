//  plugins/analytics.client.ts

// example: initialization based on enabled cookies
const cookieControl = useCookieControl()

if (cookieControl.cookiesEnabledIds.value.includes('google-analytics')) {
  initGoogleAnalytics()
}
