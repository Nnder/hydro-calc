<script setup>
import { ref, reactive, onBeforeUnmount } from 'vue'

const siteConfig = reactive({
  logoText: 'Логотип',
  phone: '+78001234567',
  phoneFormatted: '8 (800) 123-45-67',
})

const isMobileMenuOpen = ref(false)
const mobileSubMenuOpen = ref(null)
const activeMenu = ref(null)
const activeSubMenu = ref(null)
const menuTimeout = ref(null)

const mainMenu = reactive([
  {
    id: 'services',
    name: 'Услуги',
    submenu: [
      { name: 'Ремонт гидравлики', link: '#' },
      { name: 'Изготовление гидроцилиндров', link: '#' },
      { name: 'Диагностика', link: '#' },
    ],
  },
  {
    id: 'about',
    name: 'О компании',
    link: '/about',
  },
  {
    id: 'delivery',
    name: 'Доставка',
    link: '#',
  },
  {
    id: 'contacts',
    name: 'Контакты',
    link: '/contacts',
  },
])

const megaMenuData = reactive({
  equipment: [
    { name: 'Насосные станции', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
    { name: 'Гидроцилиндры', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
    { name: 'Гидромоторы', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
  ],
  news: [
    {
      title: 'Новые модели насосных станций',
      description: 'Обзор новинок 2024 года с улучшенными характеристиками',
      date: '15.05.2024',
      link: '#',
    },
    {
      title: 'Как выбрать гидроцилиндр',
      description: 'Подробное руководство по подбору оборудования',
      date: '10.05.2024',
      link: '#',
    },
  ],
  specialOffer: {
    title: 'Спецпредложение',
    description: 'Гидравлические станции серии PRO со скидкой 20% до конца месяца',
    link: '#',
  },
  services: [
    {
      title: 'Ремонт',
      items: [
        { 
          name: 'Гидравлики', 
          link: '#', 
          icon: 'material-symbols:arrow-forward-ios-rounded',
          subItems: [
            { name: 'Насосы', link: '#' },
            { name: 'Клапаны', link: '#' },
            { name: 'Цилиндры', link: '#' },
            { name: 'Фильтры', link: '#' },
          ]
        },
        { name: 'Цилиндров', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
      ],
    },
    {
      title: 'Изготовление',
      items: [
        { name: 'Гидроцилиндров', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Уплотнений', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
      ],
    },
    {
      title: 'Продажа',
      items: [
        { name: 'Штоки и гильзы', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Уплотнения', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
      ],
    },
  ],
})

const openSubMenu = (menuId, itemId = null) => {
  clearTimeout(menuTimeout.value)
  activeMenu.value = menuId
  if (itemId) {
    activeSubMenu.value = itemId
  }
}

const closeSubMenu = () => {
  menuTimeout.value = setTimeout(() => {
    activeMenu.value = null
    activeSubMenu.value = null
  }, 200)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    mobileSubMenuOpen.value = null
  }
}

const toggleMobileSubMenu = menuId => {
  mobileSubMenuOpen.value = mobileSubMenuOpen.value === menuId ? null : menuId
}

const toggleCart = () => {
  console.log('Открытие корзины')
}

onBeforeUnmount(() => {
  clearTimeout(menuTimeout.value)
})
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="relative" @mouseleave="closeSubMenu">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <button class="lg:hidden text-tech-dark" @click="toggleMobileMenu">
              <Icon name="material-symbols:menu" class="w-6 h-6" />
            </button>
            <NuxtLink to="/" class="text-xl font-bold text-hydro-power truncate max-w-[160px] sm:max-w-none">
              {{ siteConfig.logoText }}
            </NuxtLink>
          </div>

          <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6 h-full">
            <template v-for="item in mainMenu" :key="item.id">
              <div v-if="item.submenu" class="relative h-full">
                <button
                  class="flex items-center h-full text-tech-dark hover:text-hydro-power font-medium text-sm xl:text-base"
                  @mouseenter="openSubMenu(item.id)"
                >
                  <span>{{ item.name }}</span>
                  <Icon name="material-symbols:keyboard-arrow-down" class="ml-1 h-4 w-4" />
                </button>
              </div>
              <NuxtLink
                v-else
                :to="item.link"
                class="text-tech-dark hover:text-hydro-power font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
          </nav>

          <div class="flex items-center space-x-4 sm:space-x-6">
            <NuxtLink
              :to="`tel:${siteConfig.phone}`"
              class="flex items-center text-tech-dark hover:text-hydro-power whitespace-nowrap"
            >
              <Icon name="material-symbols:call" class="h-5 w-5 mr-1" />
              <span class="font-medium hidden md:inline">{{ siteConfig.phoneFormatted }}</span>
            </NuxtLink>

            <button class="relative text-tech-dark hover:text-hydro-power" @click="toggleCart">
              <Icon name="material-symbols:shopping-cart-outline" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isMobileMenuOpen"
          class="lg:hidden bg-white shadow-lg border-t border-hydro-steel max-h-[80vh] overflow-y-auto"
        >
          <div class="container mx-auto px-4 py-3">
            <div class="space-y-3">
              <template v-for="item in mainMenu" :key="item.id">
                <div v-if="item.submenu">
                  <button
                    class="flex items-center justify-between w-full text-tech-dark hover:text-hydro-power font-medium py-2 text-base"
                    @click="toggleMobileSubMenu(item.id)"
                  >
                    <span>{{ item.name }}</span>
                    <Icon
                      name="material-symbols:keyboard-arrow-down"
                      class="ml-1 h-4 w-4 transition-transform duration-200"
                      :class="{ 'rotate-180': mobileSubMenuOpen === item.id }"
                    />
                  </button>
                  <div v-show="mobileSubMenuOpen === item.id" class="pl-4 space-y-2 mt-2">
                    <NuxtLink
                      v-for="subItem in item.submenu"
                      :key="subItem.name"
                      :to="subItem.link"
                      class="block text-hydro-steel hover:text-hydro-power py-1 text-sm"
                    >
                      {{ subItem.name }}
                    </NuxtLink>
                  </div>
                </div>
                <NuxtLink
                  v-else
                  :to="item.link"
                  class="block text-tech-dark hover:text-hydro-power font-medium py-2 text-base"
                >
                  {{ item.name }}
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
      </transition>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="activeMenu === 'services'"
        class="absolute left-0 right-0 top-full bg-white shadow-xl z-50 border-t border-hydro-steel py-6 overflow-hidden"
        @mouseenter="openSubMenu('services')"
        @mouseleave="closeSubMenu"
      >
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-8">
            <div class="flex-1 min-w-[250px]">
              <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">
                Ремонт
              </h3>
              <ul class="space-y-3">
                <li class="relative group" 
                    @mouseenter="openSubMenu('services', 'hydraulics')"
                    @mouseleave="closeSubMenu">
                  <div class="flex items-center">
                    <NuxtLink
                      to="#"
                      class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base flex-grow"
                    >
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                      Гидравлики
                    </NuxtLink>
                    <Icon 
                      name="material-symbols:chevron-right" 
                      class="w-4 h-4 ml-1 text-hydro-steel/50 transition-transform duration-200"
                      :class="{'rotate-90': activeSubMenu === 'hydraulics'}"
                    />
                  </div>
                  
                  <transition
                    enter-active-class="transition-opacity duration-200 ease-out"
                    leave-active-class="transition-opacity duration-150 ease-in"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <div 
                      v-if="activeSubMenu === 'hydraulics'"
                      class="absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded-md p-2 z-50 border border-hydro-steel"
                      style="margin-top: -36px;"
                    >
                      <ul class="space-y-2">
                        <li v-for="subItem in megaMenuData.services[0].items[0].subItems" :key="subItem.name">
                          <NuxtLink 
                            :to="subItem.link" 
                            class="text-hydro-steel hover:text-hydro-power flex items-center text-sm p-2 hover:bg-hydro-light/10 rounded transition-colors"
                            @click="closeSubMenu"
                          >
                            <Icon name="material-symbols:arrow-right" class="w-3 h-3 mr-2 text-hydro-power/50" />
                            {{ subItem.name }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base"
                  >
                    <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                    Цилиндров
                  </NuxtLink>
                </li>
              </ul>
            </div>

              <div class="flex-1 min-w-[250px]">
                <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">
                  Изготовление
                </h3>
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="#"
                      class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base"
                    >
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                      Гидроцилиндров
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="#"
                      class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base"
                    >
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                      Уплотнений
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="flex-1 min-w-[250px]">
                <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">
                  Продажа
                </h3>
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="#"
                      class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base"
                    >
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                      Штоки и гильзы
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="#"
                      class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base"
                    >
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 mr-2 text-hydro-power" />
                      Уплотнения
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>