<script setup>
import { ref } from 'vue';

const services = ref([
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
    {
        title: 'Ремонт Гидроцилиндров',
        image: 'https://avatars.mds.yandex.net/i?id=36fc6465a7586ec0d699d4dd7421f889_l-4935775-images-thumbs&n=13'
    },
])

</script>
<template>
    <div class="max-w-7xl mx-auto p-16 py-4">
        <div>
            <h6 class="text-4xl text-center mb-4">Услуги компании</h6>
            <div class="flex justify-between space-x-16">
                <button class="text-2xl hover:text-yellow-500">Ремонт</button>
                <button class="text-2xl hover:text-yellow-500">Изготовление</button>
                <button class="text-2xl hover:text-yellow-500">Продажа</button>
                <button class="text-2xl hover:text-yellow-500">Виды техники</button>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div 
                    v-for="(service, index) in services"
                    :key="index"
                    class="flex flex-col items-center gap-1 p-3 shadow-md hover:shadow-lg rounded-lg transition-shadow"
                >
                    <NuxtImg 
                        :src="service.image" 
                        :alt="service.title" 
                        class="w-8 h-8 mb-2"
                    />
                    <p class="text-center text-sm font-medium">{{ service.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>