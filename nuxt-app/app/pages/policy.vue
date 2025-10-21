<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Политика обработки персональных данных
        </h1>
        <p class="text-lg text-gray-600">
          Последнее обновление: {{ currentDate }}
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Общие положения</h2>
            <p class="text-gray-700 mb-4">
              Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки 
              и защиты персональных данных пользователей, которые могут быть получены нашей компанией.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Собираемые персональные данные</h2>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p class="text-blue-700 font-medium">Мы собираем следующие данные:</p>
            </div>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Фамилия, имя, отчество (ФИО)</li>
              <li>Номер телефона</li>
              <li>Файлы, загружаемые пользователем</li>
            </ul>
            <p class="text-gray-700">
              Пользователь имеет возможность добровольно предоставить дополнительные файлы через интерфейс нашего сайта.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Цели обработки персональных данных</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Обработка заявок и запросов пользователя</li>
              <li>Предоставление услуг и информации</li>
              <li>Связь с пользователем для уточнения деталей</li>
              <li>Обработка загруженных файлов в соответствии с запросом пользователя</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Порядок обработки и защиты данных</h2>
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p class="text-yellow-700 font-medium">Мы обеспечиваем:</p>
            </div>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Конфиденциальность персональных данных</li>
              <li>Защиту от несанкционированного доступа</li>
              <li>Соблюдение требований законодательства РФ</li>
              <li>Ограничение доступа к персональным данным</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Права пользователя</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>На доступ к своим персональным данным</li>
              <li>На уточнение, блокирование или уничтожение данных</li>
              <li>На отзыв согласия на обработку персональных данных</li>
              <li>На обжалование действий или бездействия оператора</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Обработка загружаемых файлов</h2>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <p class="text-green-700 font-medium mb-2">В отношении загружаемых файлов:</p>
              <ul class="list-disc list-inside text-green-700 space-y-1">
                <li>Файлы обрабатываются только в целях, указанных пользователем</li>
                <li>Хранятся в течение необходимого для обработки времени</li>
                <li>Уничтожаются по требованию пользователя или по достижении целей обработки</li>
                <li>Не передаются третьим лицам без согласия пользователя</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@media print {
  .bg-gray-50 {
    background-color: white !important;
  }
  
  .shadow-lg {
    box-shadow: none !important;
  }
  
  button {
    display: none !important;
  }
}
</style>