<script setup>
import { ref, reactive } from 'vue'

const siteConfig = reactive({
  phone: '+78001234567',
  phoneFormatted: '8 (800) 123-45-67',
})

const isMobileMenuOpen = ref(false)
const activeMenu = ref(null)
const activeSubMenu = ref(null)
const mobileSubMenuState = reactive({
  services: false,
  repair: false,
  hydraulics: false,
})

const mainMenu = [
  {
    id: 'services',
    name: 'Услуги',
    hasSubmenu: true,
  },
  {
    id: 'about',
    name: 'О компании',
    link: '/about',
  },
  {
    id: 'delivery',
    name: 'Доставка',
    link: '/',
  },
  {
    id: 'contacts',
    name: 'Контакты',
    link: '/contacts',
  },
]

const servicesSubMenu = [
  {
    id: 'repair',
    name: 'Ремонт',
    items: [
      //
      {
        id: 'hydraulics',
        name: 'Гидроцилиндров',
        link: '/page2',
        // subItems: [
        //   { name: 'Дифектовка (разборка)', link: '/test' },
        //   { name: 'Подбор и замена уплотнений', link: '/' },
        //   { name: 'Ремонт или замена рабочей группы', link: '/' },
        //   { name: 'Испытание гидравлики', link: '/' },
        // ],
      },
      {
        id: 'cylindry',
        name: 'Гидромоторов',
        link: '/page1',
        // subItems: [
        //   { name: 'Диагностика и дифектовка', link: '/test' },
        //   { name: 'Подбор и замена уплотнений', link: '/' },
        //   { name: 'Изготовление и замена штока', link: '/' },
        //   { name: 'Изготовление и замена поршня', link: '/' },
        //   { name: 'Изготовление и ремонт гильз', link: '/' },
        //   { name: 'Изготовление и ремонт крышек', link: '/' },
        // ],
      },
      {
        id: 'nasosy',
        name: 'Насосов',
        // name: 'Насосы аксиально поршневые и аксиально рядовые поршневые',
        link: '/test',
        // subItems: [
        //   { name: 'Дифектовка', link: '/test' },
        //   { name: 'Подбор и замена уплотнений', link: '/' },
        //   { name: 'Ремонт или замена рабочей группы', link: '/' },
        //   { name: 'Испытание гидравлики', link: '/' },
        //   { name: 'Изготовление и ремонт гильз', link: '/' },
        //   { name: 'Изготовление и ремонт крышек', link: '/' },
        // ],
      },
    ],
  },
  {
    id: 'production',
    name: 'Изготовление',
    items: [
      {
        id: 'rvd',
        name: 'РВД',
        link: '/page1',
        // subItems: [{ name: 'Калькулятор', link: '/test' }],
      },
      {
        id: 'cylindry',
        name: 'Гидроцилиндров',
        link: '/page1',
        // subItems: [
        //   { name: 'Проектировка', link: '/test' },
        //   { name: 'Изготовление', link: '/' },
        //   { name: 'Испытания', link: '/' },
        // ],
      },
      // { name: 'Станция гидравлическая (объем от 50л до 2000л)', link: '/' },
      { name: 'Станция гидравлическая', link: '/' },
    ],
  },
  {
    id: 'sale',
    name: 'Продажа',
    items: [
      { name: 'Уплотнений', link: '/' },
      { name: 'Насосов', link: '/' },
      { name: 'Гидроцилиндров', link: '/' },
      { name: 'Гидрораспределителей', link: '/' },
      { name: 'Клапанов давления', link: '/' },
      { name: 'Фильтров', link: '/' },
      { name: 'Маслов', link: '/' },
    ],
  },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    resetMobileSubMenus()
  }
}

const toggleMobileSubMenu = menuId => {
  mobileSubMenuState[menuId] = !mobileSubMenuState[menuId]
}

const resetMobileSubMenus = () => {
  Object.keys(mobileSubMenuState).forEach(key => {
    mobileSubMenuState[key] = false
  })
}

const openSubMenu = (menuId, itemId = null) => {
  activeMenu.value = menuId
  activeSubMenu.value = itemId
}

const closeSubMenu = () => {
  activeMenu.value = null
  activeSubMenu.value = null
}

const showModal = ref(false)
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="relative" @mouseleave="closeSubMenu">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
          <div class="flex items-center space-x-4">
            <button class="lg:hidden text-tech-dark" @click="toggleMobileMenu">
              <Icon name="material-symbols:menu" class="w-6 h-6" />
            </button>
            <NuxtLink to="/" class="flex items-center h-16">
              <NuxtImg
                src="/logo.svg"
                alt="Logo"
                class="h-10 w-auto sm:h-12"
                :imgAttrs="{ style: 'max-height: 100%' }"
              />
            </NuxtLink>
          </div>

          <nav class="hidden lg:flex items-center space-x-6 h-full">
            <template v-for="item in mainMenu" :key="item.id">
              <div v-if="item.hasSubmenu" class="relative h-full">
                <button
                  class="flex items-center h-full px-2 text-tech-dark hover:text-hydro-power font-medium text-base"
                  @mouseenter="openSubMenu(item.id)"
                >
                  <span>{{ item.name }}</span>
                  <Icon name="material-symbols:keyboard-arrow-down" class="ml-1 h-4 w-4" />
                </button>
              </div>
              <NuxtLink
                v-else
                :to="item.link"
                class="px-2 text-tech-dark hover:text-hydro-power font-medium text-base whitespace-nowrap"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
          </nav>

          <div class="flex items-center space-x-4 sm:space-x-6">
            <button
              @click="showModal = true"
              class="py-3 px-4 shadow-xl text-white bg-hydro-power rounded-xl hover:text-hydro-power font-semibold text-base whitespace-nowrap"
            >
              Выезд специалиста
            </button>
            <NuxtLink
              :to="`tel:${siteConfig.phone}`"
              class="flex items-center text-tech-dark hover:text-hydro-power text-sm sm:text-base"
            >
              <Icon name="material-symbols:call" class="h-5 w-5 mr-1" />
              <span class="font-medium hidden md:inline">{{ siteConfig.phoneFormatted }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
      >
        <div v-show="isMobileMenuOpen" class="lg:hidden bg-white shadow-lg border-t border-hydro-steel">
          <div class="container mx-auto px-3 py-2">
            <!-- Уменьшил padding-x с px-4 на px-3 -->
            <div class="space-y-1">
              <!-- Уменьшил отступ между пунктами -->
              <template v-for="item in mainMenu" :key="item.id">
                <div v-if="item.hasSubmenu">
                  <button
                    class="flex items-center justify-between w-full text-tech-dark hover:text-hydro-power font-medium py-3 text-base"
                    @click="toggleMobileSubMenu('services')"
                  >
                    <span>{{ item.name }}</span>
                    <Icon
                      name="material-symbols:keyboard-arrow-down"
                      class="h-5 w-5 transition-transform duration-200"
                      :class="{ 'rotate-180': mobileSubMenuState.services }"
                    />
                  </button>

                  <div v-show="mobileSubMenuState.services" class="pl-3 space-y-1">
                    <!-- Уменьшил padding-left с pl-4 на pl-3 -->
                    <template v-for="category in servicesSubMenu" :key="category.id">
                      <div>
                        <button
                          class="flex items-center justify-between w-full text-hydro-steel hover:text-hydro-power py-2.5 text-base"
                          @click="toggleMobileSubMenu(category.id)"
                        >
                          <div class="flex items-center">
                            <Icon
                              name="material-symbols:arrow-forward-ios-rounded"
                              class="w-4 h-4 mr-2 text-hydro-power"
                            />
                            <span>{{ category.name }}</span>
                          </div>
                          <Icon
                            name="material-symbols:chevron-right"
                            class="h-4 w-4 transition-transform duration-200"
                            :class="{ 'rotate-90': mobileSubMenuState[category.id] }"
                          />
                        </button>

                        <div v-show="mobileSubMenuState[category.id]" class="pl-4 space-y-1">
                          <!-- Уменьшил padding-left с pl-6 на pl-4 -->
                          <template v-for="subItem in category.items" :key="subItem.name">
                            <div v-if="subItem.subItems">
                              <button
                                class="flex items-center justify-between w-full text-hydro-steel hover:text-hydro-power py-2.5 text-base"
                                @click="toggleMobileSubMenu('hydraulics')"
                              >
                                <div class="flex items-center">
                                  <Icon name="material-symbols:arrow-right" class="w-3 h-3 mr-2 text-hydro-power/50" />
                                  <span>{{ subItem.name }}</span>
                                </div>
                                <Icon
                                  name="material-symbols:chevron-right"
                                  class="h-4 w-4 transition-transform duration-200"
                                  :class="{ 'rotate-90': mobileSubMenuState.hydraulics }"
                                />
                              </button>

                              <div v-show="mobileSubMenuState.hydraulics" class="pl-5 space-y-1">
                                <NuxtLink
                                  v-for="item in subItem.subItems"
                                  :key="item.name"
                                  :to="item.link"
                                  class="block text-hydro-steel hover:text-hydro-power py-2 text-base"
                                  @click="toggleMobileMenu"
                                >
                                  {{ item.name }}
                                </NuxtLink>
                              </div>
                            </div>
                            <NuxtLink
                              v-else
                              :to="subItem.link"
                              class="flex items-center text-hydro-steel hover:text-hydro-power py-2.5 text-base"
                              @click="toggleMobileMenu"
                            >
                              <Icon name="material-symbols:arrow-right" class="w-3 h-3 mr-2 text-hydro-power/50" />
                              {{ subItem.name }}
                            </NuxtLink>
                          </template>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                <NuxtLink
                  v-else
                  :to="item.link"
                  class="block text-tech-dark hover:text-hydro-power font-medium py-3 text-base"
                  @click="toggleMobileMenu"
                >
                  {{ item.name }}
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
      </transition>

      <!-- Десктопное мега-меню -->
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
      >
        <div
          v-show="activeMenu === 'services'"
          class="absolute left-0 right-0 top-full bg-white shadow-xl z-50 border-t border-hydro-steel py-6"
          @mouseenter="openSubMenu('services')"
          @mouseleave="closeSubMenu"
        >
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap gap-8">
              <template v-for="category in servicesSubMenu" :key="category.id">
                <div class="flex-1 min-w-[250px]">
                  <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">
                    {{ category.name }}
                  </h3>
                  <ul class="space-y-3">
                    <template v-for="item in category.items" :key="item.name">
                      <li class="relative group" @mouseenter="openSubMenu('services', item.id)">
                        <div class="flex items-center">
                          <NuxtLink
                            :to="item.link"
                            class="text-hydro-steel hover:text-hydro-power flex items-center flex-grow text-base"
                          >
                            <Icon
                              name="material-symbols:arrow-forward-ios-rounded"
                              class="w-4 h-4 mr-2 text-hydro-power"
                            />
                            {{ item.name }}
                          </NuxtLink>
                          <Icon
                            v-if="item.subItems"
                            name="material-symbols:chevron-right"
                            class="ml-1 text-hydro-steel/50 transition-transform duration-200"
                            :class="{ 'rotate-90': activeSubMenu === item.id }"
                          />
                        </div>

                        <transition
                          enter-active-class="transition-all duration-200 ease-out"
                          leave-active-class="transition-all duration-150 ease-in"
                        >
                          <ul v-if="item.subItems && activeSubMenu === item.id" class="pl-6 mt-2 space-y-2">
                            <li v-for="subItem in item.subItems" :key="subItem.name">
                              <NuxtLink
                                :to="subItem.link"
                                class="text-hydro-steel hover:text-hydro-power flex items-center text-sm p-2 hover:bg-hydro-light/10 rounded"
                              >
                                <Icon name="material-symbols:arrow-right" class="w-3 h-3 mr-2 text-hydro-power/50" />
                                {{ subItem.name }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </transition>
                      </li>
                    </template>
                  </ul>
                </div>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>

  <Modal
    class="!p-4 md:p-6 !w-72 md:!w-96 !h-96 rounded-lg"
    :isOpen="showModal"
    @close="
      () => {
        showModal = false
      }
    "
  >
    <div class="flex flex-col gap-4 items-center justify-center w-full overflow-hidden">
      <p class="text-lg md:text-xl font-bold text-nowrap">Заказ создан</p>
      <div class="flex flex-col gap-4">
        <input class="!border-2 !border-[#2563EB]" />
        <textarea class="!border-2 !border-[#2563EB]"></textarea>
      </div>
      <p class="text-lg md:text-xl font-bold text-nowrap">Мы свяжимся с вами</p>
    </div>
  </Modal>
</template>
