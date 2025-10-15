<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
    <!-- Основной контент -->
    <div class="flex flex-col lg:flex-row gap-16 items-start" 
         :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
      
      <!-- Изображение -->
      <div v-if="stepData.img" class="w-full lg:w-1/2">
        <div class="relative group cursor-pointer">
          <!-- Градиентная подсветка синяя -->
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-700 animate-pulse-slow"></div>
          
          <!-- Основной контейнер изображения -->
          <div class="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/20 border border-white/30 backdrop-blur-sm">
            <NuxtImg 
              :src="stepData.img" 
              class="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
              sizes="sm:100vw md:50vw lg:600px"
              format="webp"
              quality="85"
              loading="lazy"
            />
            
            <!-- Наложение градиента синего -->
            
          </div>
          
          <!-- Декоративные элементы синие -->
          </div>
      </div>

      <!-- Текстовый контент -->
      <div class="w-full" :class="stepData.img ? 'lg:w-1/2' : 'lg:w-full'">
        <div class="space-y-8">
          <!-- Заголовок этапа -->
          <div class="relative">
            <div class="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h3 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent pl-4">
              {{ stepData.header }}
            </h3>
          </div>

          <!-- Основной текст -->
          <div 
            v-if="stepData.text"
            class="bg-white/95 backdrop-blur-xl text-xl leading-relaxed text-slate-700 p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50 rounded-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] group"
          >
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-50 to-white rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>
            <div class="space-y-4 relative z-10">
              <p class="text-slate-600 leading-8 text-xl">
                {{ stepData.text }}
              </p>
            </div>
          </div>

          <!-- Дополнительный текст с HTML -->
          <div 
            v-if="stepData.endText"
            class="bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-xl text-slate-700 p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50 rounded-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] group"
          >
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div 
              class="prose prose-lg prose-slate max-w-none 
                     prose-p:text-slate-700 prose-p:leading-8
                     prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                     prose-strong:text-slate-900 prose-strong:font-bold
                     prose-ul:marker:text-blue-500 prose-ol:marker:text-blue-500
                     prose-li:marker:font-medium prose-li:leading-8
                     prose-headings:text-slate-900 prose-headings:font-bold
                     prose-blockquote:border-l-blue-400 prose-blockquote:bg-blue-50/50
                     prose-code:text-blue-600 prose-code:bg-blue-50
                     prose-pre:bg-slate-900"
              v-html="stepData.endText"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stepData: {
    type: Object,
    required: true,
    default: {
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

<style scoped>
/* Кастомная анимация пульсации */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Плавные переходы для всех элементов */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Улучшение скролла для браузеров WebKit */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #1e40af);
}
</style>