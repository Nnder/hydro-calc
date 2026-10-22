import { createError } from 'h3'
import { createHash, randomUUID } from 'node:crypto'
import { mkdir, writeFile, rename } from 'node:fs/promises'
import { isAbsolute, join } from 'node:path'
import { APPLICATION_CONSENT, PRIVACY_VERSION, OPERATOR } from '../../shared/privacy'

export function validateApplication(fields: Record<string, string>) {
  if (fields.agreement !== 'true' || fields.consentVersion !== PRIVACY_VERSION) {
    throw createError({ statusCode: 400, statusMessage: 'Подтвердите актуальное согласие на обработку персональных данных.' })
  }
  if (!fields.fio?.trim() || fields.fio.length > 200 || !/^\+?[\d\s()\-]{10,25}$/.test(fields.phone || '') || (fields.text || '').length > 10000) {
    throw createError({ statusCode: 400, statusMessage: 'Проверьте имя, телефон и длину сообщения.' })
  }
}
export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
export async function recordApplication(directory: string, fields: Record<string, string>, files: { filename: string; content: Buffer }[]) {
  if (!directory || !isAbsolute(directory)) throw new Error('CONSENT_STORAGE_NOT_CONFIGURED')
  await mkdir(directory, { recursive: true, mode: 0o700 })
  const id = randomUUID()
  const record = {
    id, receivedAt: new Date().toISOString(), status: 'received',
    consent: { accepted: true, operator: OPERATOR, version: PRIVACY_VERSION, text: APPLICATION_CONSENT, textSha256: createHash('sha256').update(APPLICATION_CONSENT).digest('hex'), method: 'unchecked-checkbox-and-submit', document: 'https://athydro.ru/agreement' },
    application: { fio: fields.fio, phone: fields.phone, text: fields.text || '', type: fields.type || '' },
    files: files.map(file => ({ filename: file.filename, sha256: createHash('sha256').update(file.content).digest('hex'), base64: file.content.toString('base64') })),
  }
  const path = join(directory, `${id}.json`)
  await writeFile(path, JSON.stringify(record), { mode: 0o600, flag: 'wx' })
  return { record, path }
}
export async function markApplication(path: string, record: object, status: string) {
  const temp = `${path}.tmp`
  await writeFile(temp, JSON.stringify({ ...record, status }), { mode: 0o600 })
  await rename(temp, path)
}
