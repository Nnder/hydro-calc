<script setup>
defineProps({
  blockData: {
    type: Object,
    required: true,
  },
})

const showModal = ref(false)
</script>

<template>
  <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-hydro-power">
      <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div class="text-white max-w-2xl">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              {{ blockData.title }}
            </h2>
            <p class="text-lg mb-6 opacity-90">
              {{ blockData.description }}
            </p>
            <button
              @click="showModal = true"
              class="border-2 border-white text-black px-6 py-2 rounded-lg bg-white hover:bg-hydro-power hover:text-white transition-colors duration-300"
            >
              {{ blockData.buttonText }}
            </button>
          </div>

          <div class="hidden md:block">
            <NuxtImg
              :src="blockData.imageUrl"
              :alt="blockData.imageAlt"
              class="w-[512] h-fit object-contain"
              width="640"
              height="6400"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Modal
    class="!p-4 md:p-6 !w-72 md:!w-96 h-fit rounded-lg md:max-w-md lg:max-w-lg"
    :isOpen="showModal"
    @close="
      () => {
        showModal = false
      }
    "
  >
    <div class="flex flex-col gap-4 items-center justify-center w-full overflow-hidden">
      <p class="text-lg md:text-xl font-bold text-nowrap">Выезд специалиста</p>
      <div class="flex flex-col gap-4">
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            required
            class="w-full px-4 py-3 rounded-lg border-hydro-power border-2"
          />

          <input
            type="tel"
            placeholder="Телефон"
            required
            class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg"
          />

          <textarea
            class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg"
            placeholder="Описание проблемы"
          ></textarea>

          <input type="file" class="w-full px-4 py-3 border-hydro-power border-2 rounded-lg" />

          <button
            type="submit"
            class="w-full bg-hydro-power hover:bg-hydro-power/90 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            <Icon name="mdi:phone-outline" class="text-xl" />
            Заказать выезд
          </button>

          <div class="text-xs text-gray-500">
            Нажимая кнопку, вы соглашаетесь с
            <a href="#" class="text-hydro-power hover:underline">политикой конфиденциальности</a>
          </div>
        </form>
      </div>
      <p class="text-lg md:text-xl font-bold text-nowrap">Мы свяжимся с вами</p>
    </div>
  </Modal>
</template>
