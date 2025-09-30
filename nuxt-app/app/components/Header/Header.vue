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
  sell: false,
})

const mainMenu = [
  {
    id: 'services',
    name: 'Услуги',
    hasSubmenu: true,
  },
  {
    id: 'sell',
    name: 'Продажа',
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
    link: '/delivery',
  },
  {
    id: 'contacts',
    name: 'Контакты',
    link: '/contacts',
  },
  {
    id: 'postavshkam',
    name: 'Поставщикам',
    link: '/postavshkam',
  },
]

const servicesSubMenu = [
  {
    id: 'repair',
    name: 'Ремонт',
    items: [
      {
        id: 'hydraulics',
        name: 'Гидроцилиндров',
        link: '/remont-hydraulic-cylinders',
      },
      {
        id: 'nasosy',
        name: 'Гидронасосов',
        link: '/remont-nasosov-pumps',
      },
      {
        id: 'cylindry',
        name: 'Гидромоторов',
        link: '/remont-hydraulic-motors',
      },
      {
        id: 'kovshey',
        name: 'Ковшей',
        link: '/remont-kovshey',
      },
      {
        id: 'svarochny',
        name: 'Сварочные и токарные работы',
        link: '/remont-svarkoy',
      },
    ],
  },
  {
    id: 'production',
    name: 'Изготовление',
    items: [
      {
        id: 'rvd',
        name: 'Изготовление рукава высокого давления (РВД)',
        link: '/rukava-visokogo-davlenia-rvd',
      },
      {
        id: 'cylindry',
        name: 'Гидроцилиндров',
        link: '/izgotovlenie-hydrocylindrov',
      },
      {
        name: 'Проектировка и изготовление гидравлических станций',
        link: '/proektirovanie-izgotovlenie-hydraulic-stantici',
      },
    ],
  },
  
]

const sellSubMenu = [
  {
    id: 'hydraulics',
    name: 'Гидравлика',
    items: [
      { name: 'Гидронасосы', link: '/sell-gidronasosov' },
      { name: 'Гидроцилиндры', link: '/sell-gidrocilindrov' },
    ],
  },
  {
    id: 'components',
    name: 'Комплектующие',
    items: [
      { name: 'Уплотнения', link: '/sell-uplotnenie' },
      { name: 'Фильтры и фильтроэлементы', link: '/sell-filtrov' },
    ],
  },
  {
    id: 'fluids',
    name: 'Комплектующие',
    items: [
      { name: 'Технические жидкости', link: '/sell-shidkostey' },
      { name: 'Комплектующие РВД', link: '/sell-komplektushie-rvd' },
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

const { open } = useModal()
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="relative" @mouseleave="closeSubMenu">
      <div class="xl:container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
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

          <nav class="hidden xl:flex items-center space-x-6 h-full">
            <template v-for="item in mainMenu" :key="item.id">
              <div v-if="item.hasSubmenu" class="relative h-full">
                <button
                  class="flex items-center h-full px-2 text-tech-dark hover:text-hydro-power font-medium text-base"
                  @mouseenter="openSubMenu(item.id)"
                >
                  <span>{{ item.name }}</span>
                  <Icon 
                    name="material-symbols:keyboard-arrow-down" 
                    class="ml-1 h-5 w-5 transition-transform duration-300 ease-in-out"
                    :class="{ 'rotate-180': activeMenu === item.id }"
                  />
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
              @click="open()"
              class="bg-hydro-power hover:bg-hydro-power/90 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <span class="hidden md:block">Выездная служба</span>
              <Icon name="mdi:van-utility" class="text-white text-lg sm:text-xl" />
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

      <transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
      >
        <div v-show="isMobileMenuOpen" class="xl:hidden bg-white shadow-lg border-t border-hydro-steel">
          <div class="container mx-auto px-3 py-2">
            <div class="space-y-1">
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
                    <template v-for="category in servicesSubMenu" :key="category.id">
                      <div>
                        <button
                          class="flex items-center justify-between w-full text-hydro-steel hover:text-hydro-power py-2.5 text-base"
                          @click="toggleMobileSubMenu(category.id)"
                        >
                          <div class="flex items-center">
                            <Icon
                              name="material-symbols:arrow-forward-ios-rounded"
                              class="min-w-4 min-h-4 mr-2 text-hydro-power"
                            />
                            <span>{{ category.name }}</span>
                          </div>
                          <Icon
                            name="material-symbols:chevron-right"
                            class="min-h-4 min-w-4 transition-transform duration-200"
                            :class="{ 'rotate-90': mobileSubMenuState[category.id] }"
                          />
                        </button>

                        <div v-show="mobileSubMenuState[category.id]" class="pl-4 space-y-1">
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

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 z-40"
        enter-to-class="opacity-100 translate-y-0 z-50"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 z-50"
        leave-to-class="opacity-0 -translate-y-2 z-40"
      >
        <div
          v-show="activeMenu === 'services'"
          class="absolute left-0 right-0 top-full bg-white shadow-xl py-6"
          :class="activeMenu === 'services' ? 'z-50' : 'z-40'"
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
                            class="text-hydro-steel hover:text-hydro-power flex items-center flex-grow text-base transition-colors duration-200"
                          >
                            <Icon
                              name="material-symbols:arrow-forward-ios-rounded"
                              class="min-w-4 min-h-4 mr-2 text-hydro-power transition-transform duration-200 group-hover:translate-x-0.5"
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
                          enter-active-class="transition-all duration-250 ease-out"
                          enter-from-class="opacity-0 -translate-x-2"
                          enter-to-class="opacity-100 translate-x-0"
                          leave-active-class="transition-all duration-150 ease-in"
                          leave-from-class="opacity-100 translate-x-0"
                          leave-to-class="opacity-0 -translate-x-2"
                        >
                          <ul v-if="item.subItems && activeSubMenu === item.id" class="pl-6 mt-2 space-y-2">
                            <li v-for="subItem in item.subItems" :key="subItem.name">
                              <NuxtLink
                                :to="subItem.link"
                                class="text-hydro-steel hover:text-hydro-power flex items-center text-sm p-2 hover:bg-hydro-light/10 rounded transition-all duration-200 hover:pl-3"
                              >
                                <Icon
                                  name="material-symbols:arrow-right"
                                  class="w-3 h-3 mr-2 text-hydro-power/50 transition-transform duration-200 group-hover:translate-x-0.5"
                                />
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

      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2 z-40"
        enter-to-class="opacity-100 translate-y-0 z-50"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 z-50"
        leave-to-class="opacity-0 -translate-y-2 z-40"
      >
        <div
          v-show="activeMenu === 'sell'"
          class="absolute left-0 right-0 top-full bg-white shadow-xl py-6"
          :class="activeMenu === 'sell' ? 'z-50' : 'z-40'"
          @mouseenter="openSubMenu('sell')"
          @mouseleave="closeSubMenu"
        >
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap gap-8">
              <template v-for="category in sellSubMenu" :key="category.id">
                <div class="flex-1 min-w-[250px]">
                  <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">
                    {{ category.name }}
                  </h3>
                  <ul class="space-y-3">
                    <li v-for="item in category.items" :key="item.name">
                      <NuxtLink
                        :to="item.link"
                        class="text-hydro-steel hover:text-hydro-power flex items-center text-base transition-colors duration-200"
                      >
                        <Icon
                          name="material-symbols:arrow-forward-ios-rounded"
                          class="min-w-4 min-h-4 mr-2 text-hydro-power transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                        {{ item.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-transition {
  transition: transform 0.2s ease-in-out;
}

.nested-transition {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
