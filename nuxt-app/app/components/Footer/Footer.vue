<script setup lang="ts">
const links = [
  { link: '/contacts', name: 'Контакты' },
  { link: '/about', name: 'О компании' },
  { link: '/postavshkam', name: 'Поставщики' },
  // { link: '/delivery', name: 'Доставка ' },
  { link: '/personal', name: 'Политика отношение на обработку' },
  { link: '/agreement', name: 'Согласие на обработку' },
]

const products = [
  { link: '/remont-hydraulic-cylinders', name: 'Гидроцилиндры' },
  { link: '/remont-nasosov-pumps', name: 'Гидронасосы' },
  { link: '/remont-hydraulic-motors', name: 'Гидромоторы' },
  { link: '/remont-kovshey', name: 'Ковши' },
  { link: '/remont-svarkoy', name: 'Сварочный и токартные работы' },
]

const contacts = [
  { icon: 'mdi:map-marker-outline', text: 'г. Нижний Тагил, ул. Аганичева, 101А' },
  { icon: 'mdi:phone-outline', text: '8 (800) 222-20-31' },
  { icon: 'mdi:email-outline', text: 'absoluttehnodir@gmail.com' },
  { icon: 'mdi:clock-outline', text: 'Пн-Пт: 8:00-18:00' },
]
</script>

<template>
  <footer class="bg-tech-dark text-white border-t border-hydro-steel mt-auto">
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
        <div class="space-y-4 sm:space-y-6">
          <NuxtLink to="/" class="inline-flex items-center">
            <NuxtImg 
              src="/logo.svg" 
              alt="Логотип компании"
              class="w-10 h-10 sm:w-12 sm:h-12 md:hidden dark:invert dark:brightness-0"
              width="48"
              height="48"
              loading="lazy"
            />
            <NuxtImg 
              src="/athydro.svg" 
              alt="Логотип компании"
              class="hidden md:block w-40 lg:w-48 h-auto"
              width="192"
              height="48"
              loading="lazy"
            />
          </NuxtLink>
          <p class="text-neutral-light text-sm sm:text-base leading-relaxed max-w-md">
            Профессиональные гидравлические решения для промышленности и строительства. 
            Официальный дистрибьютор ведущих производителей.
          </p>
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 sm:after:w-12 after:h-0.5 after:bg-hydro-power">
            Продукция
          </h3>
          <ul class="space-y-2 sm:space-y-3">
            <li v-for="(product, index) in products" :key="'product-' + index">
              <NuxtLink
                :to="product.link"
                class="text-neutral-light hover:text-hydro-power transition-colors duration-200 flex items-center text-sm sm:text-base group"
              >
                <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs transform group-hover:translate-x-0.5 transition-transform" />
                {{ product.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 sm:after:w-12 after:h-0.5 after:bg-hydro-power">
            Информация
          </h3>
          <ul class="space-y-2 sm:space-y-3">
            <li v-for="(link, index) in links" :key="'link-' + index">
              <NuxtLink
                :to="link.link"
                class="text-neutral-light hover:text-hydro-power transition-colors duration-200 flex items-center text-sm sm:text-base group"
              >
                <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs transform group-hover:translate-x-0.5 transition-transform" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 sm:after:w-12 after:h-0.5 after:bg-hydro-power">
            Контакты
          </h3>
          <ul class="space-y-3 sm:space-y-4 text-neutral-light">
            <li v-for="(contact, index) in contacts" :key="'contact-' + index" class="flex items-start">
              <Icon :name="contact.icon" class="mt-0.5 mr-3 text-hydro-power flex-shrink-0 text-sm sm:text-base" />
              <span class="text-sm sm:text-base leading-tight">{{ contact.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>