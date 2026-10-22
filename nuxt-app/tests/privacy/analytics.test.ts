import { expect, it, vi } from 'vitest'
import { ref, watch, effectScope } from 'vue'
it('requires consent, cancels pending initialization and stops after withdrawal', async () => {
  const append = document.head.appendChild.bind(document.head)
  const appendSpy = vi.spyOn(document.head, 'appendChild').mockImplementation((node: any) => {
    if (node.tagName === 'SCRIPT') node.type = 'application/json'
    return append(node)
  })
  const choice = ref<{ analytics: boolean } | null>(null)
  const hooks: Record<string, () => void> = {}
  vi.stubGlobal('watch', watch)
  vi.stubGlobal('usePrivacyChoice', () => ({ choice, restore: () => {} }))
  vi.stubGlobal('defineNuxtPlugin', (cb: unknown) => cb)
  const { default: plugin } = await import('../../app/plugins/privacy.client')
  const scope = effectScope()
  scope.run(() => (plugin as any)({ hook: (name: string, cb: () => void) => { hooks[name] = cb } }))
  const selector = 'script[src="https://mc.yandex.ru/metrika/tag.js"]'
  expect(document.querySelector(selector)).toBeNull()
  choice.value = { analytics: false }
  expect(document.querySelector(selector)).toBeNull()
  choice.value = { analytics: true }
  const pending = document.querySelector(selector) as HTMLScriptElement
  expect(pending).not.toBeNull()
  choice.value = { analytics: false }
  expect(document.querySelector(selector)).toBeNull()
  expect(pending.onload).toBeNull()
  const ym = vi.fn()
  ;(window as any).ym = ym
  choice.value = { analytics: true }
  document.querySelector(selector)!.dispatchEvent(new Event('load'))
  expect(ym).toHaveBeenCalledWith(105118320, 'init', expect.objectContaining({ webvisor: false, trackLinks: false }))
  choice.value = { analytics: false }
  expect(ym).toHaveBeenCalledWith(105118320, 'destruct')
  ym.mockClear()
  hooks['page:finish']()
  expect(ym).not.toHaveBeenCalled()
  scope.stop()
  appendSpy.mockRestore()
  vi.unstubAllGlobals()
})
