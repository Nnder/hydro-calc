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
  index: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
    <div class="flex flex-col md:flex-row gap-12 items-center" 
         :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
      
      <div v-if="stepData.img" class="w-full md:w-1/2">
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 blur-lg opacity-50 group-hover:opacity-75 transition duration-500 rounded-xl"></div>
          <div class="relative overflow-hidden shadow-2xl shadow-blue-500/10 rounded-xl">
            <NuxtImg 
              :src="stepData.img" 
              class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="sm:100vw md:50vw lg:600px"
              format="webp"
              quality="80"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>
      </div>

      <div class="w-full" :class="stepData.img ? 'md:w-1/2' : 'md:w-full'">
        <div class="space-y-6">
          <h3 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            {{ stepData.header }}
          </h3>
          
          <p 
            v-if="stepData.text"
            class="bg-white/80 backdrop-blur-sm text-lg text-slate-600 p-6 shadow-xl shadow-blue-500/5 border border-white/20 rounded-xl"
          >
            {{ stepData.text }}
          </p>

          <div class="bg-white/80 backdrop-blur-sm text-lg text-slate-600 p-6 shadow-xl shadow-blue-500/5 border border-white/20 rounded-xl">
            <div 
              class="prose prose-lg prose-slate max-w-none prose-p:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-blue-500 prose-li:marker:font-medium"
              v-html="stepData.endText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>