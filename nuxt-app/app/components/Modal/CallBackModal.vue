<script setup>
const { showModal, close } = useModal()
</script>

<template>
  <Modal
    class="!p-4 md:p-6 !w-72 md:!w-96 h-fit rounded-lg md:max-w-md lg:max-w-lg"
    :isOpen="showModal"
    @close="close()"
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
