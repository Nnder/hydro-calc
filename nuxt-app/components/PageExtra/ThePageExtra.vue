<script setup>
import { ref } from 'vue';

const items = ref([
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
    {image: 'https://avatars.mds.yandex.net/i?id=880a0490d1d6d679a51df2c9b1e6cdbb_l-5087168-images-thumbs&n=13', title: 'Втулка'},
])

const parameters = ref([
  { value: 'до 200', description: 'Диаметр поршня, мм' },
  { value: 'до 2400', description: 'Ход поршня, мм' },
  { value: 'до 40', description: 'Max давление, МПа' },
])

const tableData = ref([
  {
    innerDiameterMm: '51,0',
    innerDiameterInch: '2"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '76,0',
    minBendRadiusInch: '2,99"',
    vacuum: '100',
    weightKg: '1,540',
    weightLb: '1,04'
  },
  {
    innerDiameterMm: '76,0',
    innerDiameterInch: '3"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '114,0',
    minBendRadiusInch: '4,49"',
    vacuum: '100',
    weightKg: '2,680',
    weightLb: '1,81'
  },
  {
    innerDiameterMm: '102,0',
    innerDiameterInch: '4"',
    outerDiameterMm: '',
    outerDiameterInch: '',
    workingPressureBar: '10',
    workingPressurePsi: '150',
    burstPressureBar: '30',
    burstPressurePsi: '450',
    minBendRadiusMm: '153,0',
    minBendRadiusInch: '6,02"',
    vacuum: '100',
    weightKg: '3,910',
    weightLb: '2,63'
  }
])

</script>

<template>
  <section class="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-4xl font-bold text-hydro-power">Дополнительные комплектующие</h2>
      <p class="mt-2 text-sm md:text-base">Всегда в наличии расходные материалы для РВД</p>
    </div>
    
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      <div 
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center"
      >
        <NuxtImg 
          :src="item.image" 
          :alt="item.title" 
          class="w-12 h-12 md:w-16 md:h-16 object-contain"
          loading="lazy"
          format="webp"
        />
        <p class="mt-2 text-hydro-power text-sm md:text-base font-medium text-gray-800 text-center">{{ item.title }}</p>
      </div>
    </div>
  </section >

  <section class="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-start text-gray-900 mb-4 sm:mb-6 md:mb-8">
        ПАРАМЕТРЫ НАШИХ ГИДРОЦИЛИНДРОВ
    </h2>
    
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div 
        v-for="(param, index) in parameters"
        :key="index"
        class="bg-white p-3 sm:p-4"
        >
        <p class="text-lg sm:text-xl md:text-2xl font-bold text-hydro-power mb-1 sm:mb-2">{{ param.value }}</p>
        <div class="bg-hydro-power h-0.5 w-full mb-2 sm:mb-3"></div>
        <p class="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">{{ param.description }}</p>
        </div>
    </div>
   </section>

   <section class="w-full h-[50vh] min-h-[400px]">
    <div class="w-full h-full bg-purple-800">
        <div class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div class="text-white max-w-2xl">
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Изготовим нестандартное<br>
                оборудование по вашему проекту
            </h2>
            <p class="text-lg mb-6 opacity-90">
                Произведём гидроцилиндр по вашему чертежу,<br>
                техническому заданию или готовому образцу<br>
                с гарантией 12 месяцев
            </p>
            <button class="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-purple-800 transition-colors duration-300">
                Рассчитать стоимость
            </button>
            </div>
            
            <div class="hidden md:block">
            <NuxtImg 
                src="https://oboruduy.com/files/images/items/288/288279z5a7304d0.jpg" 
                alt="Гидроцилиндр" 
                class="w-64 h-64 object-contain"
                width="320"
                height="320"
                format="webp"
            />
            </div>
        </div>
        </div>
    </div>
   </section>

   <section class="max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
    <div class="text-start space-y-2 mb-6">
      <p class="text-sm sm:text-base"><span class="font-bold">Внутренний слой:</span> черный проводящий NBR.</p>
      <p class="text-sm sm:text-base"><span class="font-bold">Армирование:</span> высокопрочные текстильные корды со встроенной стальной спиралью.</p>
      <p class="text-sm sm:text-base"><span class="font-bold">Внешний слой:</span> синий CR - устойчивый к истиранию, озону и углеводородам.</p>
      <p class="text-sm sm:text-base"><span class="font-bold">Применение:</span> всасывание и подача топлива, масла и гидравлических жидкостей.</p>
      <p class="text-sm sm:text-base"><span class="font-bold">Специально разработан</span> для применения в автоцистернах, где требуется исключительная гибкость при низких температурах.</p>
      <p class="text-sm sm:text-base"><span class="font-bold">Постоянная работа:</span> -54 +82 (-65 + 180)</p>
    </div>
    <div class="hidden md:block overflow-x-auto">
      <table class="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr class="bg-gray-100">
            <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Внутренний диаметр</th>
            <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Наружный диаметр</th>
            <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Рабочее давление</th>
            <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Разрывное давление</th>
            <th colspan="2" class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Минимальный радиус изгиба</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Вакуум</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">Вес</th>
          </tr>
          <tr class="bg-gray-50">
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">psi</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">бар</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">psi</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">мм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">дюйм</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">%</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">кг/м</th>
            <th class="border border-gray-300 p-1 sm:p-2 text-center whitespace-nowrap">фунт/фут</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index" :class="{'bg-gray-50': index % 2 === 1}">
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.innerDiameterMm }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.innerDiameterInch }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.outerDiameterMm }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.outerDiameterInch }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressureBar }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.workingPressurePsi }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.burstPressureBar }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.burstPressurePsi }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.minBendRadiusMm }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.minBendRadiusInch }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.vacuum }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.weightKg }}</td>
            <td class="border border-gray-300 p-1 sm:p-2 text-center">{{ item.weightLb }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="md:hidden space-y-4">
      <div v-for="(item, index) in tableData" :key="index" class="shadow-lg rounded-lg p-4">
        <h3 class="font-bold text-lg mb-3">Диаметр: {{ item.innerDiameterMm }} мм ({{ item.innerDiameterInch }})</h3>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div><span class="font-medium">Рабочее давление:</span> {{ item.workingPressureBar }} бар ({{ item.workingPressurePsi }} psi)</div>
          <div><span class="font-medium">Разрывное давление:</span> {{ item.burstPressureBar }} бар ({{ item.burstPressurePsi }} psi)</div>
          <div><span class="font-medium">Радиус изгиба:</span> {{ item.minBendRadiusMm }} мм ({{ item.minBendRadiusInch }})</div>
          <div><span class="font-medium">Вакуум:</span> {{ item.vacuum }}%</div>
          <div><span class="font-medium">Вес:</span> {{ item.weightKg }} кг/м ({{ item.weightLb }} фунт/фут)</div>
        </div>
      </div>
    </div>
   </section>

   <section class="max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Техническое оснащение для производства РВД</h1>
      
      <p class="text-gray-700 mb-6">
        В состав оборудования для изготовления шлангов РВД входит несколько станков. На них выполняются основные операции отрезки, опрессовки обжимом и испытания изделия.
      </p>

      <h2 class="text-xl font-semibold text-gray-800 mb-4">Оборудование:</h2>
      
      <ul class="space-y-3 mb-6">
        <li class="flex items-start">
          <Icon name="mdi:square-outline" class="w-5 h-5 text-gray-600 mr-2 mt-0.5" />
          <span class="text-gray-700">отрезной станок необходим для того, чтобы отрезать рукав по длине строго перпендикулярно плоскости просвета;</span>
        </li>
        <li class="flex items-start">
          <Icon name="mdi:square-outline" class="w-5 h-5 text-gray-600 mr-2 mt-0.5" />
          <span class="text-gray-700">окорочной станок позволяет подготовить концы рукава к установке фитингов;</span>
        </li>
        <li class="flex items-start">
          <Icon name="mdi:square-outline" class="w-5 h-5 text-gray-600 mr-2 mt-0.5" />
          <span class="text-gray-700">обжимной станок фиксирует муфты и фитинги с помощью набора кулачков;</span>
        </li>
        <li class="flex items-start">
          <Icon name="mdi:square-outline" class="w-5 h-5 text-gray-600 mr-2 mt-0.5" />
          <span class="text-gray-700">гидростанция с насосом и контрольными приборами позволяет проверить изделие.</span>
        </li>
      </ul>

      <p class="text-gray-700">
        Важное вспомогательное оборудование для производства РВД — размотчик, позволяющий быстро отбирать шланг из бухты и подавать на отрезку.
      </p>
    </div>
   </section>

   <section class="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      <div class="w-full lg:w-1/2 space-y-4">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
          Изготовление и ремонт РВД в Екатеринбурге
        </h2>
        <p class="text-lg">
          Компания ООО "Энергия" располагает современным производственным комплексом. 
          Специализируемся на высококачественном ремонте и изготовлении рукавов высокого давления 
          с использованием итальянского оборудования OR.
        </p>
        <p class="text-lg">
          Строго соблюдаем все технологические нормы и гарантируем многоэтапный контроль качества 
          на каждом этапе производства.
        </p>
      </div>
      
      <div class="w-full lg:w-1/2 flex justify-center">
        <div class="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
          <NuxtImg 
            src="https://www.slavyane8.ru/wp-content/uploads/2019/11/XXL-1.jpg" 
            alt="Производство РВД на оборудовании OR"
            class="w-full h-full object-cover"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:800px"
            format="webp"
            quality="80"
          />
        </div>
      </div>
    </div>
</section>
</template>