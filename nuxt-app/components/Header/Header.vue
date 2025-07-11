<script setup>
import { ref, reactive, onBeforeUnmount } from 'vue';


const siteConfig = reactive({
  logoText: 'Логотип',
  phone: '+78001234567',
  phoneFormatted: '8 (800) 123-45-67'
});

const isMobileMenuOpen = ref(false);
const mobileSubMenuOpen = ref(null);
const activeMenu = ref(null);
const menuTimeout = ref(null);


const mainMenu = reactive([
  {
    id: 'categories',
    name: 'Категории',
    submenu: [
      { name: 'Насосные станции', link: '#' },
      { name: 'Гидроцилиндры', link: '#' },
      { name: 'Гидромоторы', link: '#' }
    ]
  },
  {
    id: 'services',
    name: 'Услуги',
    submenu: [
      { name: 'Ремонт гидравлики', link: '#' },
      { name: 'Изготовление гидроцилиндров', link: '#' },
      { name: 'Диагностика', link: '#' }
    ]
  },
  {
    id: 'about',
    name: 'О компании',
    link: '/about'
  },
  {
    id: 'delivery',
    name: 'Доставка',
    link: '#'
  },
  {
    id: 'contacts',
    name: 'Контакты',
    link: '/contacts'
  }
]);

const megaMenuData = reactive({
  equipment: [
    { name: 'Насосные станции', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
    { name: 'Гидроцилиндры', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
    { name: 'Гидромоторы', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' }
  ],
  news: [
    { 
      title: 'Новые модели насосных станций', 
      description: 'Обзор новинок 2024 года с улучшенными характеристиками',
      date: '15.05.2024',
      link: '#'
    },
    { 
      title: 'Как выбрать гидроцилиндр', 
      description: 'Подробное руководство по подбору оборудования',
      date: '10.05.2024',
      link: '#'
    }
  ],
  specialOffer: {
    title: 'Спецпредложение',
    description: 'Гидравлические станции серии PRO со скидкой 20% до конца месяца',
    link: '#'
  },
  services: [
    {
      title: 'Ремонт',
      items: [
        { name: 'Ремонт гидравлики', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Ремонт гидроцилиндров', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' }
      ]
    },
    {
      title: 'Изготовление',
      items: [
        { name: 'Изготовление гидроцилиндров', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Изготовление уплотнений', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' }
      ]
    },
    {
      title: 'Продажа',
      items: [
        { name: 'Штоки и гильзы', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Уплотнения', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' }
      ]
    },
    {
      title: 'Диагностика',
      items: [
        { name: 'Выездная диагностика', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' },
        { name: 'Испытания на стендах', link: '#', icon: 'material-symbols:arrow-forward-ios-rounded' }
      ]
    }
  ]
});

const openSubMenu = (menuId) => {
  clearTimeout(menuTimeout.value);
  activeMenu.value = menuId;
};

const closeSubMenu = () => {
  menuTimeout.value = setTimeout(() => {
    activeMenu.value = null;
  }, 200);
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    mobileSubMenuOpen.value = null;
  }
};

const toggleMobileSubMenu = (menuId) => {
  mobileSubMenuOpen.value = mobileSubMenuOpen.value === menuId ? null : menuId;
};

const toggleCart = () => {
  console.log('Открытие корзины');
};


onBeforeUnmount(() => {
  clearTimeout(menuTimeout.value);
});
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
            <NuxtLink :to="`tel:${siteConfig.phone}`" class="flex items-center text-tech-dark hover:text-hydro-power whitespace-nowrap">
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
        <div v-show="isMobileMenuOpen" class="lg:hidden bg-white shadow-lg border-t border-hydro-steel max-h-[80vh] overflow-y-auto">
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
          v-show="activeMenu === 'categories'"
          class="absolute left-0 right-0 top-full bg-white shadow-xl z-50 border-t border-hydro-steel py-6 overflow-hidden"
          @mouseenter="openSubMenu('categories')"
          @mouseleave="closeSubMenu"
        >
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">Оборудование</h3>
                <ul class="space-y-3">
                  <li v-for="item in megaMenuData.equipment" :key="item.name">
                    <NuxtLink :to="item.link" class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base">
                      <Icon :name="item.icon" class="w-4 h-4 mr-2 text-hydro-power" />
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="md:col-span-1 lg:col-span-2">
                <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">Новости и статьи</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div v-for="item in megaMenuData.news" :key="item.title" class="group">
                    <NuxtLink :to="item.link" class="block transition-transform duration-200 hover:translate-x-1">
                      <h4 class="text-hydro-power font-medium group-hover:underline text-sm md:text-base">{{ item.title }}</h4>
                      <p class="text-hydro-steel mt-1 text-xs md:text-sm">{{ item.description }}</p>
                      <span class="text-xs text-hydro-steel/50 mt-2 block">{{ item.date }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div>
                <NuxtLink :to="megaMenuData.specialOffer.link" class="block bg-tech-light rounded-lg overflow-hidden border border-hydro-steel hover:shadow-md transition-all duration-300 h-full">
                  <div class="p-4 h-full flex flex-col">
                    <h3 class="font-bold text-tech-dark mb-2 text-sm md:text-base">{{ megaMenuData.specialOffer.title }}</h3>
                    <p class="text-hydro-steel mb-4 flex-grow text-xs md:text-sm">{{ megaMenuData.specialOffer.description }}</p>
                    <div class="bg-hydro-power text-white text-center py-2 px-4 rounded font-medium transition-colors duration-200 hover:bg-hydro-power/90 text-sm">
                      Узнать подробнее
                    </div>
                  </div>
                </NuxtLink>
              </div>
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
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div v-for="category in megaMenuData.services" :key="category.title">
                <h3 class="text-lg font-bold mb-4 text-tech-dark border-b border-hydro-power pb-2">{{ category.title }}</h3>
                <ul class="space-y-3">
                  <li v-for="item in category.items" :key="item.name">
                    <NuxtLink :to="item.link" class="text-hydro-steel hover:text-hydro-power flex items-center transition-colors duration-200 text-sm md:text-base">
                      <Icon :name="item.icon" class="w-4 h-4 mr-2 text-hydro-power" />
                      {{ item.name }}
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