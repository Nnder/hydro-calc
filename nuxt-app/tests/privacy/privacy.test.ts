// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { mkdtemp, readFile, stat, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PRIVACY_VERSION, APPLICATION_CONSENT } from '../../shared/privacy'
import { COOKIE_VERSION, COOKIE_MAX_AGE, parseCookieChoice } from '../../shared/cookieConsent'
import { validateApplication, escapeHtml, recordApplication, markApplication } from '../../server/utils/applicationPrivacy'
const valid = { fio: 'Тест', phone: '+7 (999) 123-45-67', text: '', agreement: 'true', consentVersion: PRIVACY_VERSION }
describe('consent validation', () => {
  it('rejects missing, false and outdated consent', () => {
    for (const fields of [{ ...valid, agreement: '' }, { ...valid, agreement: 'false' }, { ...valid, consentVersion: 'old' }]) expect(() => validateApplication(fields)).toThrow()
  })
  it('accepts a request without an optional message', () => expect(() => validateApplication(valid)).not.toThrow())
  it('escapes user HTML in email', () => expect(escapeHtml('<img src="x">&')).toBe('&lt;img src=&quot;x&quot;&gt;&amp;'))
})
describe('cookie choices', () => {
  it('does not reuse old boolean acceptance or malformed choices', () => {
    for (const raw of ['true', '{', '{}', JSON.stringify({ version: 'old', analytics: true, at: Date.now() })]) expect(parseCookieChoice(raw)).toBeNull()
  })
  it('persists refusal and expires acceptance', () => {
    const now = Date.now()
    expect(parseCookieChoice(JSON.stringify({ version: COOKIE_VERSION, analytics: false, at: now }), now)?.analytics).toBe(false)
    expect(parseCookieChoice(JSON.stringify({ version: COOKIE_VERSION, analytics: true, at: now - COOKIE_MAX_AGE }), now)).toBeNull()
    expect(parseCookieChoice(JSON.stringify({ version: COOKIE_VERSION, analytics: true, at: now + 1 }), now)).toBeNull()
  })
})
it('stores application, files and exact consent together with private permissions', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'athydro-privacy-test-'))
  try {
    const { record, path } = await recordApplication(dir, valid, [{ filename: 'drawing.txt', content: Buffer.from('test attachment') }])
    const saved = JSON.parse(await readFile(path, 'utf8'))
    expect(saved.consent.text).toBe(APPLICATION_CONSENT)
    expect(saved.consent.version).toBe(PRIVACY_VERSION)
    expect(saved.application.phone).toBe(valid.phone)
    expect(Buffer.from(saved.files[0].base64, 'base64').toString()).toBe('test attachment')
    expect((await stat(path)).mode & 0o777).toBe(0o600)
    expect(Number.isFinite(Date.parse(saved.receivedAt))).toBe(true)
    await markApplication(path, record, 'delivery-pending')
    expect(JSON.parse(await readFile(path, 'utf8')).status).toBe('delivery-pending')
  } finally { await rm(dir, { recursive: true, force: true }) }
})
