<script setup lang="ts">
import ProductTableCart from '~/components/ProductTableCart/ProductTableCart.vue'

useHead({
  title: `АбсолютТехно`,
  meta: [
    {
      name: 'description',
      content: `товара в интернет магазине АбсолютТехно`,
    },
  ],
})

definePageMeta({
  path: '/product-cart',
})

const refreshUserData = async () => {
  try {
    await $fetch('https://www.tss.ru/bitrix/catalog_export/yandex_800463.xml', {
      method: 'GET',
      credentials: 'include',
    })
  } catch (error) {
    console.error('Error refreshing user data:', error)
  }
}

const bannerProps = {
  products: [
    {
      title: 'Электростанции',
      images: ['/filtra/filter1-1.jpg', '/filtra/filter1-2.jpg'],
      description: [
        'Гидравлический фильтр высокого давления предназначен для очистки гидравлической жидкости в системах с высоким давлением. Он эффективно удаляет загрязнения, обеспечивая надежную работу гидравлических систем и продлевая срок службы оборудования.',
        'Особенности фильтра включают высокую степень очистки, прочный корпус, устойчивость к высоким давлениям и температурам, а также легкость замены фильтрующего элемента.',
      ],
      parameters: [
        { label: 'Максимальное давление', value: '350 бар' },
        { label: 'Производительность', value: '100 л/мин' },
        { label: 'Тип фильтрующего элемента', value: 'Многоразовый' },
      ],
      gridItem: {
        title: 'Фильтр высокого давления',
        image: '/filtra/filter1-thumb.jpg',
      },
    },
    ]
}

const offers = {
        id: '1',
        url: 'https://tss.ru/catalog/sinkhronnye_generatory/regulyatory_napryazheniya_dlya_sinkhronnykh_generatorov_avr_1/regulyatory_napryazheniya_stamford_avr/regulyator_napryazheniya_sa_30_avr_sx460_020172',
        price: 3135.6,
        currency: 'RUB',
        categoryId: '194678',
        images: [
            'https://tss.ru/upload/iblock/848/0gcezfqmvmxjr692esg9azumk3qnhasy.jpg',
            'https://tss.ru/upload/iblock/c2b/12lxgfo67jrt40dtveaic97a77vnd9zb.jpg'
        ],
        name: 'Регулятор напряжения SA-30/AVR SX460',
        description: 'Регулятор напряжения SA-30,60,100,120 /AVR SX460 (E000-24600)',
        article: '020172',
        manufacturersArticle: 'SX460, E000-24600, WZ460',
        weight: '0.31',
        massKg: '0.3',
        detailedDescription: 'Регулятор напряжения для генератора (SX460) Вес=0,31 кг, размеры в упаковке 15×11,5×5,0 см. Маркировка E000-24600. Размеры платы: 136×102 мм.',
        compatibility: {
        stamford: 'BCA162, BCI162, BCA164, BCI164, BCL164, BCL184A, BCA182, BCI182, BCI184, UCD22-27, UC122-1, UCI224, UCI274 и другие модели',
        fuan: 'ZC164A, ZC164B, ZC164C, ZC164D, ZC184E, ZC184F, ZC184G, ZC184H, ZC184J, ZC224C, ZC224D, ZC224E, ZC224F, ZC224G, ZC274C, ZC274D, ZC274E, ZC274F, ZC274G, ZC274H, ZC274J, ZC274K',
        fujian: 'BW-164A, BW-164B, BW-164C, BW-164D, BW-184E, BW-184F, BW-184G, BW-184H, BW-224C, BW-224D, BW-224E, BW-224F, BW-224G, BW-274C, BW-274DS, BW-274D, BW-274E, BW-274FS, BW-274F, BW-274G, BW-274H, BW-274J, BW-274K'
    }
}
</script>
<template>
    <refreshUserData />
    <ProductTableCart :bannerProps="bannerProps" />
</template>