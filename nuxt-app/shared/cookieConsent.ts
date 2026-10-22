export const COOKIE_KEY = 'athydro-privacy-choice'
export const COOKIE_VERSION = '2026-10-21.1'
export const COOKIE_MAX_AGE = 180 * 24 * 60 * 60 * 1000
export type CookieChoice = { version: string; analytics: boolean; at: number }
export function parseCookieChoice(raw: string | null, now = Date.now()): CookieChoice | null {
  try {
    const value = JSON.parse(raw || 'null')
    return value?.version === COOKIE_VERSION && typeof value.analytics === 'boolean' &&
      Number.isFinite(value.at) && value.at <= now && now - value.at < COOKIE_MAX_AGE ? value : null
  } catch { return null }
}
