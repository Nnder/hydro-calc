<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="hidden md:block">
      <RvdTableDesktop :tableData="tableData" />
    </div>
    <div class="md:hidden space-y-4">
      <RvdTableMobile :tableData="tableData" />
    </div>
  </div>
</template>