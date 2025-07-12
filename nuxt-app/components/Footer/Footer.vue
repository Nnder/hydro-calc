<script setup lang="ts">
const links = [
  { link: '/contacts', name: 'Контакты' },
  { link: '/about', name: 'О компании' },
  { link: '/', name: 'Технические статьи' },
  { link: '/', name: 'Доставка и оплата' },
  { link: '/', name: 'Гарантия' },
]

const products = [
  { link: '/', name: 'Насосные станции' },
  { link: '/', name: 'Гидроцилиндры' },
  { link: '/', name: 'Гидромоторы' },
  { link: '/', name: 'Запчасти' },
  { link: '/', name: 'Гидравлические масла' },
]

const contacts = [
  { icon: 'mdi:map-marker-outline', text: 'г. Нижний Тагил, ул Пушкина 42' },
  { icon: 'mdi:phone-outline', text: '+7 (000) 123-00-00' },
  { icon: 'mdi:email-outline', text: 'mail@gmail.com' },
  { icon: 'mdi:clock-outline', text: 'Пн-Пт: 9:00-18:00' },
]
</script>

<template>
  <footer class="bg-tech-dark text-white border-t border-hydro-steel mt-auto">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="space-y-6">
          <NuxtLink to="/" class="inline-flex items-center"> </NuxtLink>
          <p class="text-neutral-light text-sm leading-relaxed">
            Профессиональные гидравлические решения для промышленности и строительства. Официальный дистрибьютор ведущих
            мировых производителей.
          </p>
        </div>

        <div>
          <h3
            class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power"
          >
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
          <h3
            class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power"
          >
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
          <h3
            class="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-hydro-power"
          >
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
