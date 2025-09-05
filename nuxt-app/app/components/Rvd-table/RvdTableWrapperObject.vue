<script setup>
defineProps({
  tableDataObject: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="w-full py-4 sm:py-6 md:py-8 px-2 sm:px-4 lg:px-6 lg:max-w-7xl lg:mx-auto">
    <div class="hidden lg:block">
      <RvsTableDesktopObject :tableData="tableDataObject" />
    </div>
    <div class="lg:hidden space-y-4">
      <RvdTableMobile :tableData="tableDataObject" />
    </div>
  </section>
</template>