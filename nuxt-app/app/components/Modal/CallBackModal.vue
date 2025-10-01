<script setup>
import MainForm from '../Forms/MainForm.vue'

const { showModal, close } = useModal()
</script>
 
<template>
  <Modal class="!p-4 md:p-6 !w-full h-full md:rounded-lg md:max-w-2xl lg:max-w-2xl" :isOpen="showModal" @close="close()">
    <div class="flex flex-col gap-8 items-center justify-center w-full overflow-hidden">
      <!-- <p class="text-lg md:text-xl font-bold text-nowrap">Выезд специалиста</p> -->
      <div class="flex flex-col gap-4 p-4">
        <MainForm />
      </div>
    </div>
  </Modal>
</template>
