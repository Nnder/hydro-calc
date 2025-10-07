
<script setup>

defineProps({
  stepData: {
    type: Object,
    required: true,
    default:{
        text: `Процесс производства гидролиний, предназначенных для дополнительного навесного оборудования, может показаться на первый взгляд несложным процессом, ведь это просто трубопроводы и рукава высокого давления.

Однако давайте взглянем подробнее на хронологию этого процесса, используя в качестве примера новый проект.`,
        header: 'Этап 1. Сбор данных',
        img: 'https://www.tradicia-k.ru/images/articles/original/000/949/4862.jpg',
        endText: 'После подтверждения заказа высококвалифицированные конструкторы начинают сбор и анализ технической документации, включая гидравлические и электрические схемы, а также каталоги запасных частей.'
    }
  },
})
</script>
<template>
    <div class="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col gap-4 my-4">
     <p class="text-lg font-medium">{{ stepData.text }}</p>
    <h2 class="text-4xl font-bold">
      {{ stepData.header }}
    </h2>
   
    <NuxtImg :src="stepData.img"/>
    <p class="text-lg font-medium" v-html="stepData.endText"></p>
  </div>
</template>