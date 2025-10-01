<template>
  <button
    @click="downloadPdf"
    class="bg-blue-600 rounded-lg font-semibold text-white p-3 shadow-lg hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center gap-2"
    :disabled="loading"
  >
    <Icon
      v-if="loading"
      name="heroicons:arrow-path"
      class="h-5 w-5 text-white animate-spin"
    />
    <Icon
      v-else
      name="heroicons:arrow-down-tray"
      class="h-5 w-5"
    />
    {{ loading ? 'Загрузка...' : 'Скачать в PDF' }}
  </button>
</template>

<script setup>
const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    default: 'document.pdf'
  }
})

const loading = ref(false)

const downloadPdf = async () => {
  if (!props.pdfUrl) return
  
  loading.value = true
  
  try {
    window.open(props.pdfUrl, '_blank')
  } catch (error) {
    console.error('Ошибка при открытии PDF:', error)
    const link = document.createElement('a')
    link.href = props.pdfUrl
    link.target = '_blank'
    link.download = props.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } finally {
    loading.value = false
  }
}
</script>
[file content end]