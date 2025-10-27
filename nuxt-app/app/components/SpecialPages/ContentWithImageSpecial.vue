<script setup>
defineProps({
  mainSlideData: {
    type: Object,
    required: true
  },  
})
</script>

<template>
    <div class="max-w-full mx-auto mb-16 sm:mb-24 lg:mb-32">
         <div class="parent-container h-[300px] sm:h-[400px] lg:h-[500px] relative">
            <NuxtImg 
                :src="mainSlideData.src" 
                alt="Описание изображения"
                class="w-screen h-full object-cover"
                loading="lazy"
            />
            <div class="bg-hydro-power p-4 sm:p-6 w-[90%] sm:w-4/5 lg:w-2/3 xl:w-1/2 h-auto absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 sm:translate-y-1/3 rounded-lg backdrop-blur-sm bg-opacity-90">
                <div class="p-4 md:p-6 lg:p-8 text-white">
                   <h1 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-center">
                        {{ mainSlideData.title }}
                    </h1>
                    <p class="text-base sm:text-lg lg:text-xl opacity-90 text-center leading-relaxed">
                        {{ mainSlideData.description }}                    
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>