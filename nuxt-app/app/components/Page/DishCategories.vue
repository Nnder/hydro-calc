<template>
  <section class="flex items-center py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Как мы работаем
        </h2>
        <p class="text-xl lg:text-2xl text-gray-600 font-light">
          Быстрая доставка от двери до двери
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Первые три блока с иконкой сверху и текстом снизу -->
        <div class="flex flex-col items-center text-center">
          <Icon name="mdi-truck-fast" class="w-12 h-12 text-yellow-400 mb-4" />
          <p class="font-medium">Текст1</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Icon name="mdi-truck-fast" class="w-12 h-12 text-yellow-400 mb-4" />
          <p class="font-medium">Текст2</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <Icon name="mdi-truck-fast" class="w-12 h-12 text-yellow-400 mb-4" />
          <p class="font-medium">Текст3</p>
        </div>
        
        <!-- Четвертый блок с картинкой справа -->
<div class="md:col-span-1 flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
  <p class="text-gray-700 mb-4 text-center">
    конечно что доставка приедет к вам и нужно вся возможность к этому и так нужно что то там
  </p>
  <NuxtImg 
    src="../public/018092.jpg" 
    alt="Delivery" 
    class="w-16 h-16 object-cover rounded-lg" 
    loading="lazy" 
  />
</div>
      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Альтернатива invert для лучшей совместимости */
.group:hover .group-hover\:invert {
  filter: invert(1) brightness(2);
}
</style>