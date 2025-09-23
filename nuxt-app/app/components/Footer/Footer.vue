<script setup lang="ts">
const links = [
  { link: '/contacts', name: 'Контакты' },
  { link: '/about', name: 'О компании' },
  { link: '/postavshkam', name: 'Поставщики' },
  { link: '/delivery', name: 'Доставка ' },
]

const products = [
  { link: '/remont-hydraulic-cylinders', name: 'Гидроцилиндры' },
  { link: '/remont-nasosov-pumps', name: 'Гидронасосы' },
  { link: '/remont-hydraulic-motors', name: 'Гидромоторы' },
  { link: '/remont-kovshey', name: 'Ковши' },
  { link: '/remont-svarkoy', name: 'Сварочный и токартные работы' },
]

const contacts = [
  { icon: 'mdi:map-marker-outline', text: 'г. Нижний Тагил, ул Пушкина 42' },
  { icon: 'mdi:phone-outline', text: '+7 (000) 123-00-00' },
  { icon: 'mdi:email-outline', text: 'mail@gmail.com' },
  { icon: 'mdi:clock-outline', text: 'Пн-Пт: 9:00-18:00' },
]

const isProductsOpen = ref(false)
const isInfoOpen = ref(false)
const isContactsOpen = ref(false)
</script>

<template>
  <footer class="bg-tech-dark text-white border-t border-hydro-steel mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-2 md:hidden">
        <div class="border-b border-hydro-steel/30">
          <button 
            @click="isProductsOpen = !isProductsOpen"
            class="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 class="text-lg font-semibold">Продукция</h3>
            <Icon 
              :name="isProductsOpen ? 'ph:caret-down' : 'ph:caret-right'" 
              class="text-hydro-power transition-transform duration-200"
              :class="{'rotate-90': isProductsOpen}"
            />
          </button>
          <div v-show="isProductsOpen" class="pb-4">
            <ul class="space-y-3">
              <li v-for="(product, index) in products" :key="'product-' + index">
                <NuxtLink
                  :to="product.link"
                  class="text-neutral-light hover:text-hydro-power transition flex items-center text-sm py-2"
                  @click="isProductsOpen = false"
                >
                  <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs" />
                  {{ product.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-b border-hydro-steel/30">
          <button 
            @click="isInfoOpen = !isInfoOpen"
            class="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 class="text-lg font-semibold">Информация</h3>
            <Icon 
              :name="isInfoOpen ? 'ph:caret-down' : 'ph:caret-right'" 
              class="text-hydro-power transition-transform duration-200"
              :class="{'rotate-90': isInfoOpen}"
            />
          </button>
          <div v-show="isInfoOpen" class="pb-4">
            <ul class="space-y-3">
              <li v-for="(link, index) in links" :key="'link-' + index">
                <NuxtLink
                  :to="link.link"
                  class="text-neutral-light hover:text-hydro-power transition flex items-center text-sm py-2"
                  @click="isInfoOpen = false"
                >
                  <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs" />
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-b border-hydro-steel/30">
          <button 
            @click="isContactsOpen = !isContactsOpen"
            class="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 class="text-lg font-semibold">Контакты</h3>
            <Icon 
              :name="isContactsOpen ? 'ph:caret-down' : 'ph:caret-right'" 
              class="text-hydro-power transition-transform duration-200"
              :class="{'rotate-90': isContactsOpen}"
            />
          </button>
          <div v-show="isContactsOpen" class="pb-4">
            <ul class="space-y-4 text-neutral-light">
              <li v-for="(contact, index) in contacts" :key="'contact-' + index" class="flex items-start">
                <Icon :name="contact.icon" class="mt-0.5 mr-3 text-hydro-power flex-shrink-0" />
                <span class="text-sm">{{ contact.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="hidden md:grid md:grid-cols-4 gap-10">
        <div class="space-y-6">
          <NuxtLink to="/" class="inline-flex items-center">
            <NuxtImg 
              src="/full_logo.svg" 
              alt="Логотип компании"
              class="w-48 h-auto"
              width="192"
              height="48"
              loading="lazy"
            />
          </NuxtLink>
          <p class="text-neutral-light text-sm leading-relaxed">
            Профессиональные гидравлические решения для промышленности и строительства. Официальный дистрибьютор ведущих
            мировых производителей.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power">
            Продукция
          </h3>
          <ul class="space-y-3">
            <li v-for="(product, index) in products" :key="'product-' + index">
              <NuxtLink
                :to="product.link"
                class="text-neutral-light hover:text-hydro-power transition flex items-center text-sm"
              >
                <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs" />
                {{ product.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power">
            Информация
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in links" :key="'link-' + index">
              <NuxtLink
                :to="link.link"
                class="text-neutral-light hover:text-hydro-power transition flex items-center text-sm"
              >
                <Icon name="ph:caret-right-fill" class="mr-2 text-hydro-power text-xs" />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power">
            Контакты
          </h3>
          <ul class="space-y-4 text-neutral-light">
            <li v-for="(contact, index) in contacts" :key="'contact-' + index" class="flex items-start">
              <Icon :name="contact.icon" class="mt-0.5 mr-3 text-hydro-power flex-shrink-0" />
              <span class="text-sm">{{ contact.text }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>