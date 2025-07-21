<template>
  <div class="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="space-y-4">
      <h2 class="font-bold text-2xl">Часто задаваемвые вопросы</h2>
      <div 
        v-for="(item, index) in items" 
        :key="item.id || index"
        class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <button
          @click="toggle(index)"
          class="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75"
          :aria-expanded="item.isOpen"
          :aria-controls="`accordion-content-${item.id || index}`"
        >
          <span class="text-lg font-semibold text-gray-900">{{ item.title }}</span>
          <Icon 
            name="heroicons:chevron-down" 
            class="w-5 h-5 flex-shrink-0 transform transition-transform duration-300 text-gray-400"
            :class="{ 'rotate-180': item.isOpen }"
          />
        </button>
        
        <Transition
          name="accordion"
          @enter="startTransition"
          @after-enter="endTransition"
          @before-leave="startTransition"
          @after-leave="endTransition"
        >
          <div
            v-show="item.isOpen"
            :id="`accordion-content-${item.id || index}`"
            class="transition-all bg-white duration-300 overflow-hidden"
          >
            <div class="px-5 pb-5 text-gray-600">
              <slot name="content" :item="item">
                {{ item.content }}
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Заголовок 1',
        content: 'Тест 1',
        isOpen: false
      },
      {
        id: 2,
        title: 'Заголовок 2',
        content: 'Тест 2',
        isOpen: false
      },
      {
        id: 3,
        title: 'Заголовок 3',
        content: 'Тест 3',
        isOpen: false
      }
    ],
    validator: (items) => items.every(item => 'title' in item && 'isOpen' in item)
  },
  singleOpen: {
    type: Boolean,
    default: false
  }
});

const items = ref([...props.items]);

const toggle = (index) => {
  if (props.singleOpen) {
    items.value.forEach((item, i) => {
      item.isOpen = i === index ? !item.isOpen : false;
    });
  } else {
    items.value[index].isOpen = !items.value[index].isOpen;
  }
};

const startTransition = (el) => {
  el.style.height = el.scrollHeight + 'px';
};

const endTransition = (el) => {
  el.style.height = '';
};
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
}
</style>