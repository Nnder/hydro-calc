<script setup>
const { open } = useModal()
</script>

<template>
  <div class="mt-16 bg-blue-600 rounded-3xl p-8 text-center text-white">
    <h2 class="text-3xl font-bold mb-4">Нужна консультация?</h2>
    <p class="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
      Наши специалисты помогут подобрать оптимальное решение для ваших задач
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:+78005553355"
        class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-3"
      >
        <Icon name="mdi:phone" class="w-5 h-5" />
        +7 (800) 555-33-55
      </a>
      <button
        @click="open(true, 'Консультация')"
        class="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
      >
        <Icon name="mdi:email" class="w-5 h-5" />
        Заказать звонок
      </button>
    </div>
  </div>
</template>
