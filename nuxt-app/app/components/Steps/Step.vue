
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
  <div class="py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="text-center mb-12 space-y-4">

        <p 
          v-if="stepData.text"
          class="bg-white/80 backdrop-blur-sm text-xl text-slate-600 text-left rounded-2xl p-8 lg:p-12 shadow-xl shadow-blue-500/5 border border-white/20">
          {{ stepData.text }}
        </p>
        
        <h1 class="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent leading-tight">
          {{ stepData.header }}
        </h1>
        
        
      </div>

      <div class="relative group mb-12">
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
        <div class="relative overflow-hidden rounded-xl shadow-2xl shadow-blue-500/10">
          <NuxtImg 
            :src="stepData.img" 
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="sm:100vw md:100vw lg:1200px"
            format="webp"
            quality="80"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-sm text-xl text-slate-600  rounded-2xl p-8 lg:p-12 shadow-xl shadow-blue-500/5 border border-white/20">
        <div 
          class="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-p:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-blue-500 prose-li:marker:font-medium"
          v-html="stepData.endText"
        ></div>
      </div>

    </div>
  </div>
</template>