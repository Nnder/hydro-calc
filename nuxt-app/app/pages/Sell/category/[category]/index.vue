<script setup>
import Consultation from '~/components/Block/Consultation.vue'
import { findCategoryByName } from '~/helpers/treeSearch'

definePageMeta({
  path: `/sell/category/:category?`,
})

const route = useRoute()
const activeCategory = ref(fixName(route.params.category || 'electrostancii'))

const data = ref([])

const { data: xml } = await useAsyncData('xml-data', () => $fetch(`/api/xml?section=${activeCategory.value}&depth=1`))

const result = findCategoryByName(xml.value.sections, activeCategory.value)

data.value = result?.children?.length || result?.categories?.length ? result.children : result?.offers || []

console.log(data.value)

useHead({
  title: `Продажа товаров ТСС - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров ТСС, большое кол-во и вариантов Дизельных электростанции, Бензиновых электростанций Сварочных электростанции, Виброплиты, Вибротрамбовки, Мотопомпы и Затирочные машины`,
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden py-8">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span class="text-blue-600">Продажа</span> Товаров
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Широкий вид ассортимента товаров</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink
          :to="service.link"
          v-for="(service, index) in data"
          :key="index"
          class="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <div class="relative h-48 overflow-hidden flex-shrink-0">
            <NuxtImg
              :src="findFirstOfferWithPicture(service)"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              sizes="sm:100vw md:50vw lg:400px"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
              {{ service.description }}
            </p>

            <div
              class="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 hover:gap-3"
            >
              <span>Подробнее</span>
              <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <Consultation />

      <div
        class="bg-white/95 backdrop-blur-xl text-xl my-8 leading-relaxed text-slate-700 p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50 rounded-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] group"
      >
        <div
          class="absolute -inset-1 bg-gradient-to-r from-blue-50 to-white rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 -z-10"
        ></div>
        <h2 class="text-4xl text-center mb-4">Информация о гк тсс</h2>
        <div class="space-y-4 relative z-10">
          <p class="text-slate-600 leading-8 text-xl">
            Группа компаний ТСС (ГК ТСС) — крупнейший российский производитель дизель-генераторных установок и
            электростанций, а также строительного и сварочного оборудования. Компания работает на рынке малой энергетики
            с 1993 года и предлагает решения для основного и резервного электроснабжения государственных, социальных и
            промышленных объектов.
          </p>

          <p class="text-slate-600 leading-8 text-xl">
            Группа компаний «ТСС» предлагает широкий ассортимент оборудования, включая генераторы, сварочное
            оборудование, строительную технику и сопутствующие товары. Основные категории продукции: Генераторы и
            электростанции: Дизельные генераторы (серии STANDART, СЛАВЯНКА, PREMIUM, PROF). Бензиновые генераторы,
            включая инверторные модели. Сварочные генераторы (дизельные и бензиновые). Высоковольтные и портативные
            дизельные электростанции.
          </p>

          <p class="text-slate-600 leading-8 text-xl">
            Сварочное оборудование: Сварочные инверторы MMA, полуавтоматы MIG/MAG, аппараты для аргонодуговой сварки TIG
            и плазменной резки CUT. Универсальные сварочные аппараты MMA/TIG/CUT. Сварочные материалы: электроды,
            проволока, флюс, маски.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Строительное оборудование: Виброплиты и трамбовки (бензиновые, дизельные). Затирочные машины (вертолёты).
            Резчики швов (шовнарезчики). Отбойные молотки и забивщики столбов. Станки для рубки и гибки арматуры.
            Мотопомпы (бензиновые и дизельные).
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Блок-контейнеры: Мини-блок-контейнеры серии БК. Панельные блок-контейнеры ПБК. Универсальные блок-контейнеры
            серии УБК, включая арктическое исполнение.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Дополнительное оборудование: Автоматика ввода резерва (АВР) Кожухи и шумозащитные конструкции для
            генераторов. Системы синхронизации, панели управления, контроллеры. Топливные баки, системы подкачки масла и
            топлива, подогреватели.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Также компания предоставляет запасные части и расходные материалы, включая масла, фильтры, сепараторы.
            Производственный комплекс площадью 30 000 м² в Ивантеевке. Склады и производственные площадки общей площадью
            более 10 000 м². Более 150 авторизованных сервисных центров по России. Дистрибьюторскую сеть, включая
            филиалы в Екатеринбурге и других регионах.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            ГК ТСС — ведущий российский производитель генераторного и строительного оборудования с 30-летним опытом.
            Компания предлагает полный цикл услуг — от проектирования до сервисного обслуживания, реализуя масштабные
            проекты в различных отраслях. Её продукция отличается надёжностью и соответствует международным стандартам
            качества.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Если вас интересует конкретная модель оборудования или проект, уточните запрос — помогу подобрать под Ваш
            запрос.
          </p>
          <p class="text-slate-600 leading-8 text-xl"></p>
          <p class="text-slate-600 leading-8 text-xl"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
