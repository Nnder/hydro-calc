<script setup>
import { PRIVACY_VERSION, AGREEMENT_CLAUSES } from '../../shared/privacy'
import OperatorDetails from '~/components/Privacy/OperatorDetails.vue'
useSeoMeta({ robots: 'noindex, nofollow' })
useHead({
  title: `Согласие на обработку персональных данных - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Согласие на обработку персональных данных`,
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-4 px-3">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-6">
        <h1 class="text-xl font-bold text-gray-800 mb-2 leading-tight">
          Согласие на обработку персональных данных
        </h1>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

        <div class="p-4">
          <p class="text-xs text-gray-500 mb-3">Редакция {{ PRIVACY_VERSION }}</p>

          <div class="space-y-6">
            <section class="border-b border-gray-200 pb-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-0">
                  <span class="text-indigo-600 font-bold text-sm">1</span>
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-semibold text-gray-800 mb-3">Перечень обрабатываемых персональных данных</h2>

                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">1.1.</span> {{ AGREEMENT_CLAUSES['1.1'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">1.2.</span> {{ AGREEMENT_CLAUSES['1.2'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">1.3.</span> {{ AGREEMENT_CLAUSES['1.3'] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="border-b border-gray-200 pb-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-0">
                  <span class="text-indigo-600 font-bold text-sm">2</span>
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-semibold text-gray-800 mb-3">Цели обработки персональных данных</h2>

                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">2.1.</span> {{ AGREEMENT_CLAUSES['2.1'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">2.2.</span> {{ AGREEMENT_CLAUSES['2.2'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">2.3.</span> {{ AGREEMENT_CLAUSES['2.3'] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="border-b border-gray-200 pb-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-0">
                  <span class="text-indigo-600 font-bold text-sm">3</span>
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-semibold text-gray-800 mb-3">Передача персональных данных третьим лицам</h2>

                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">3.1.</span> {{ AGREEMENT_CLAUSES['3.1'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">3.2.</span> {{ AGREEMENT_CLAUSES['3.2'] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="border-b border-gray-200 pb-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-0">
                  <span class="text-indigo-600 font-bold text-sm">4</span>
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-semibold text-gray-800 mb-3">Перечень действий с персональными данными</h2>

                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">4.1.</span> {{ AGREEMENT_CLAUSES['4.1'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <div class="grid grid-cols-1 gap-1 text-gray-700 text-sm">
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>сбор</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>запись</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>систематизацию</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>накопление</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>хранение</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>уточнение</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>обновление</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>изменение</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>использование</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>передачу</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>предоставление</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>доступ</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>обезличивание</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>блокирование</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>удаление</span>
                        </div>
                        <div class="flex items-center">
                          <div class="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                            <span class="text-indigo-600 text-xs font-bold">✓</span>
                          </div>
                          <span>уничтожение</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="border-b border-gray-200 pb-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 mt-0">
                  <span class="text-indigo-600 font-bold text-sm">5</span>
                </div>
                <div class="flex-1">
                  <h2 class="text-lg font-semibold text-gray-800 mb-3">Срок действия согласия и порядок его отзыва</h2>

                  <div class="space-y-2">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">5.1.</span> {{ AGREEMENT_CLAUSES['5.1'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">5.2.</span> {{ AGREEMENT_CLAUSES['5.2'] }}
                      </p>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-lg">
                      <p class="text-gray-700 text-sm">
                        <span class="font-semibold">5.3.</span> {{ AGREEMENT_CLAUSES['5.3'] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <OperatorDetails />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
