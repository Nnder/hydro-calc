<script setup>
const { choice, settingsOpen, storageError, save } = usePrivacyChoice()
const ready = ref(false)
onMounted(() => { ready.value = true })
</script>

<template>
  <section v-if="ready && (!choice || settingsOpen)" role="region" aria-label="Настройки cookie" class="fixed inset-x-0 bottom-0 z-[100] max-h-[80vh] overflow-auto bg-white border-t border-gray-200 shadow-lg text-gray-900">
    <div class="container mx-auto px-4 py-6 space-y-4">
      <h2 class="text-lg font-semibold">Файлы cookie и аналитика</h2>
      <p class="text-sm leading-relaxed">Мы сохраняем ваш выбор в браузере. С вашего разрешения Яндекс Метрика использует cookie и сведения о посещениях для анализа работы сайта. Можно отказаться от аналитики или позже изменить выбор в настройках cookie.</p>
      <NuxtLink to="/personal" class="text-blue-700 underline">Политика обработки персональных данных</NuxtLink>
      <div class="flex flex-wrap gap-3">
        <button class="px-5 py-3 border border-blue-700 rounded-lg text-blue-700" @click="save(false)">Только необходимые</button>
        <button class="px-5 py-3 border border-blue-700 rounded-lg bg-blue-700 text-white" @click="save(true)">Разрешить аналитику</button>
        <button v-if="choice" class="px-5 py-3 underline" @click="settingsOpen = false">Закрыть</button>
      </div>
    </div>
  </section>
  <p v-if="storageError" role="status" class="fixed bottom-0 bg-white text-gray-900 p-2 z-[101]">Браузер не сохраняет настройки. Выбор действует только на этой странице.</p>
</template>
