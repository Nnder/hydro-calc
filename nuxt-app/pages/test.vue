<template>
    <section class="bg-tech-dark text-white py-20">
  <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0">
      <span class="bg-hydro-oil text-white px-3 py-1 rounded-md text-sm">НОВИНКА 2024</span>
      <h1 class="text-4xl md:text-5xl font-bold mt-4 mb-6 font-industrial">
        ГИДРОСТАНЦИЯ <span class="text-hydro-power">HP-3000</span>
      </h1>
      <p class="text-xl mb-8">Производительность 120 л/мин | Давление 250 бар</p>
      <div class="flex flex-wrap gap-4">
        <button class="bg-hydro-power hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
          Купить за 289 000 ₽
        </button>
        <button class="border border-white hover:bg-white/10 px-8 py-4 rounded-lg">
          Технические характеристики
        </button>
      </div>
    </div>
    <div class="md:w-1/2">
      <img src="" alt="Насосная станция HP-3000" class="rounded-lg shadow-2xl">
    </div>
  </div>
</section>

<section class="bg-tech-light py-16">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 text-center font-industrial">
      ПОЧЕМУ ВЫБИРАЮТ <span class="text-hydro-power">НАШИ СТАНЦИИ</span>
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      {[
        ["⚙️", "Немецкие комплектующие", "Подшипники SKF, клапаны Bosch"],
        ["🔧", "Ремонтопригодность", "Модульная конструкция"],
        ["🛡️", "Защита от перегрузок", "Автоматическое отключение"]
      ].map((item, index) => (
        <div key={index} class="bg-white p-6 rounded-xl shadow-md">
          <div class="text-4xl mb-4">{item[0]}</div>
          <h3 class="text-xl font-bold mb-2 text-hydro-steel">{item[1]}</h3>
          <p class="text-gray-600">{item[2]}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section class="py-16">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold mb-12 font-industrial">
      КАТАЛОГ <span class="text-hydro-power">СТАНЦИЙ</span>
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <div key={product.id} class="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
          <div class="bg-gray-100 h-48 flex items-center justify-center p-4">
            
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold">{product.name}</h3>
              <span class="bg-hydro-oil text-white px-2 py-1 rounded text-sm">{product.stock ? "В наличии" : "Под заказ"}</span>
            </div>
            <p class="text-hydro-steel mt-2">{product.specs}</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-2xl font-bold">{product.price} ₽</span>
              <button class="bg-hydro-power hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                В корзину
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</template>