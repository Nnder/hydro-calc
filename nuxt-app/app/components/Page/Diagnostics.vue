<template>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl h-[400px] relative overflow-hidden border border-hydro-steel/20">
            <div class="flex h-full">
                <div class="flex flex-col justify-between p-8 w-1/2">
                    <h4 class="text-xl font-bold text-dark">Закажите бесплатную первичную диагностику</h4>
                    
                    <p class="text-dark">
                        Проведем первичную бесплатную диагностику в режиме реального времени по телефону 
                        и дадим рекомендации по устранению неисправностей
                    </p>
                    
                    <div class="flex items-center gap-2 text-dark">
                        <Icon name="ph:phone" class="w-5 h-5"/>
                        <h4 class="font-medium">+7 (800) 123-45-67 </h4>
                    </div>
                    
                    <div class="flex gap-4">
                        <button class="bg-hydro-danger rounded-2xl text-white px-6 py-3 hover:bg-hydro-danger/90 transition">
                            Провести диагностику
                        </button>
                        <button class="bg-hydro-power rounded-2xl text-white px-6 py-3 hover:bg-hydro-power/90 transition">
                            Написать нам
                        </button>
                    </div>
                </div>
                
                <div class="w-1/2 h-full rounded-xl">
                    <NuxtImg src="https://avatars.mds.yandex.net/i?id=1071dfc9c06b6707bcbf97611af1f593_l-10787799-images-thumbs&n=13" alt="DiagnosticsPhoto" class="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </div>
</template>