<script setup>
import Consultation from '~/components/Block/Consultation.vue'

definePageMeta({
  path: `/sell/category/:category?`,
})

const route = useRoute()
const activeCategory = ref((route.params?.category !== 'null' && fixName(route.params?.category)) || 'Электростанции')
// const activeCategory = ref(fixName(route.params.category || 'electrostancii'))

const data = ref([])

const config = useRuntimeConfig()
const apiUrl = process.server ? config.apiBase : config.public.apiBase

const { data: xml } = await useAsyncData(`xml-data-${activeCategory.value}`, () =>
  $fetch(`${apiUrl}/categories?link=${encodeURIComponent(activeCategory.value)}`)
)

data.value = xml.value.length && xml.value[0].children?.length ? xml.value[0]?.children : xml.value[0]?.offers || []

useHead({
  title: `Продажа товаров ТСС - АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `Каталог товаров ТСС, большое кол-во и вариантов Дизельных электростанции, Бензиновых электростанций Сварочных электростанции, Виброплиты, Вибротрамбовки, Мотопомпы и Затирочные машины`,
    },
  ],
})

console.log(data.value)
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
              :src="service.image || (service?.pictures && service?.pictures.length && service?.pictures[0])"
              :alt="service.name"
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
              {{ service.name }}
            </h3>

            <p v-if="service.description" class="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
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

      <h2
        class="mt-8 text-5xl text-center md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 bg-clip-text text-transparent mb-6"
      >
        Информация о гк тсс
      </h2>

      <div
        class="bg-white/95 backdrop-blur-xl text-xl my-8 leading-relaxed text-slate-700 p-8 shadow-2xl shadow-blue-500/10 border border-blue-100/50 rounded-2xl hover:shadow-blue-500/20 group"
      >
        <div
          class="absolute -inset-1 bg-gradient-to-r from-blue-50 to-white rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500 -z-10"
        ></div>

        <div class="space-y-4 relative z-10">
          <p class="text-slate-600 leading-8 text-xl">
            Группа компаний ТСС (ГК ТСС): Комплексные энергетические и инфраструктурные решения от российского лидера
          </p>

          <p class="text-slate-600 leading-8 text-xl">
            ГК ТСС занимает лидирующую позицию на российском рынке как производитель надежного оборудования для
            генерации электроэнергии, строительства и сварочных работ. С 1993 года компания развивает компетенции в
            сфере малой и резервной энергетики, трансформируя их в готовые технологические решения для ответственных
            объектов государственного, социального и промышленного назначения.
          </p>

          <p class="text-slate-600 leading-8 text-xl">Ключевые аргументы в пользу выбора ГК ТСС:</p>
          <p class="text-slate-600 leading-8 text-xl">
            Полный цикл производства и контроля качества. Собственный современный производственный комплекс в Ивантеевке
            площадью 30 000 м² позволяет осуществлять замкнутый цикл изготовления — от проектирования и металлообработки
            до финальной сборки и испытаний. Это гарантирует высочайший уровень контроля на всех этапах и соответствие
            продукции международным стандартам.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Диверсификация портфеля продукции. Компания предлагает не просто оборудование, а комплексные отраслевые
            решения, охватывающие все смежные задачи:
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Энергоснабжение: Широкий модельный ряд дизельных и бензиновых электростанций (от бытовых инверторных
            генераторов до высоковольтных и портативных ДГУ серий STANDART, PREMIUM, PROF), укомплектованных системами
            АВР, шумозащитными кожухами и интеллектуальными панелями управления.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Инфраструктура: Производство блок-контейнеров различного исполнения (БК, ПБК, УБК), включая арктическое, для
            размещения оборудования, бытовых помещений и модульных зданий.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Развитая сервисная и логистическая экосистема. Наличие более 150 авторизованных сервисных центров по всей
            России, а также региональных складов и филиалов в городах: Екатеринбург, Москва, Ростов-на-Дону, Самара,
            Санкт-Петербург, Пермь, Новосибирск, Хабаровск, Красноярск, Иркутск, Чита, Магадан, Сахалин, Благовещенск,
            Улан-Удэ обеспечивает клиентам оперативные поставки, доступность запасных частей и квалифицированное
            техническое обслуживание в любой точке страны.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            За 30 лет деятельности ГК ТСС в качестве производителя и поставщика были реализованы десятки проектов в
            самых различных отраслях промышленности, связанные с проектированием и реализацией систем резервного или
            основного электроснабжения различных конфигураций и мощностей, строящихся на основе дизельных генераторов.
            Инжиниринговый центр при производственном комплексе способен обеспечить разработку систем снабжения
            электроэнергией в любых климатических условиях и с любой степенью автоматизации.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            За минувшие годы были реализованы сложные проекты, такие как: поставка дизельной электростанции мощностью
            300 кВт для ОАО "Уралэлектромедь", контейнерная дизель-электростанция TSS Deutz 200 кВт для Вознесенского
            пищевого комбината, дизельная электростанция 500 кВт TSS Baudouin для мебельной фабрики в Подмосковье, две
            мегаваттных ДГУ TSS Premium для нужд АО Мосводоканал, резервная ДЭС 500 кВт TSS Premium для Новосибирского
            завода металлоконструкций, дизельная электростанция ТСС с двигателем Doosan для грузового сервиса Mercedes в
            Санкт-Петербурге, дизельная электростанция Baudouin 1000 кВт для асфальтобетонного завода в Казахстане и
            многие другие важнейшие объекты.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Ориентация на импортозамещение и сложные проекты. ГК ТСС обладает 30-летним опытом, который позволяет
            успешно реализовывать масштабные проекты, предлагая конкурентоспособные российские аналоги, адаптированные к
            местным условиям эксплуатации и требованиям заказчиков.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Мы поставляем портативные генераторы «воздушного» охлаждения номинальной мощностью от 1.2 кВт до 17 кВт,
            дизель-генераторные установки от 8 кВт до 1500 кВт, бензиновые и дизельные виброплиты массой от 60 до 450
            кг, бензиновые заглаживающие машины с диаметром обработки 965 и 600 мм, двухроторные затирочные машины с
            диаметром обработки 1600 и 1940 мм, бензиновые плавающие виброрейки на двигателях Loncin и Zongshen,
            вибротрамбовки бензиновые на двигателях Honda и Loncin, резчики швов с глубиной реза от 80 до 185 мм, станки
            для гибки арматуры диаметром от 6 до 45 мм, станки для резки арматуры диаметром от 6 до 45 мм, бензиновые
            отбойные молотки на 2-х и 4-х тактных двигателях с энергией удара до 55 Дж, коперы с бензиновым двигателем
            для забивки столбов диаметром до 100 мм, бензиновые и дизельные мотопомпы. Это позволяет оснастить
            строительную площадку «под ключ» от одного поставщика.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            ГК ТСС является основным поставщиком двухпостовых сварочных агрегатов, предназначенных для сварочных работ в
            полевых условиях. Сварочные агрегаты также могут использоваться как источники энергии для различного
            электрооборудования. Максимальный сварочный ток при однопостовом режиме работы - 500 А. В режиме
            одновременной работы двух сварщиков сварочный ток каждого поста до 300 А с ПВ 60%, 250 А с ПВ 100%. За
            последние 2 года сварочные агрегаты ГК ТСС получили ощутимые доработки: установлена система подогрева
            охлаждающей жидкости, увеличен топливный бак, что позволяет непрерывно осуществлять работы на протяжении 12
            часов. Помимо двухпостовых сварочных агрегатов в нашем ассортименте присутствуют портативные сварочные
            генераторы на бензиновых двигателях номинальной мощностью от 2 до 7 кВт и сварочным током до 250 Ампер, а
            так же дизельные до 10 кВт номинальной мощности и сварочным током 300 Ампер.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Стратегическое партнерство с ГК ТСС — это не просто приобретение оборудования, а инвестиция в надежное и
            долгосрочное сотрудничество с поставщиком, способным предоставить технологически законченное решение, взяв
            на себя ответственность за его проектирование, поставку, запуск и дальнейшее сервисное сопровождение.
          </p>
          <p class="text-slate-600 leading-8 text-xl">
            Для более детальной проработки вашего проекта или подбора оптимальной модели оборудования, пожалуйста,
            уточните технические требования, бюджет и задачи, которые необходимо решить. На основе этих данных я
            подготовлю для вас адресное коммерческое предложение.
          </p>
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
