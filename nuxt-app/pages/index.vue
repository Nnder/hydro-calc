<script setup lang="ts">
// const {
//   public: { backendUrl },
// } = useRuntimeConfig()

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремота`,
    },
  ],
})

// const { data: category } = await useAsyncData(`category-list`, () =>
//   $fetch(`${backendUrl}/api/categories`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
//     },
//   })
// )
</script>

<template>
  <div class="bg-white w-full ~text-sm/xs ~pb-4/8">hello</div>
</template>
