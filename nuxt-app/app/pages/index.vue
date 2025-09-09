<script setup lang="ts">
import Slider from '~/components/Slider/Slider.vue'
import ServiceBlock from '~/components/ServiceBlock/ServiceBlock.vue'
import Gis from '~/components/Map/2Gis.vue'
import Block from '~/components/Page/Block.vue'
import Diagnostics from '~/components/Page/Diagnostics.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'

const selected = ref<null | number>(null)

const mockData = [
  { src: 'hydrocilinder.png', title: 'Гидроцилиндер' },
  { src: 'hydromotor.png', title: 'Гидромотор' },
  { src: 'hydronasos.png', title: 'Гидронасос' },
  { src: 'reductor.png', title: 'Редуктор' },
]

useHead({
  title: `Абсолют техно`,
  meta: [
    {
      name: 'description',
      content: `Инструменты и оборудование для строительства и ремонта`,
    },
  ],
})

const blockDataText = {
  title: 'Что мы делаем?',
  description: `<p>Различные операции по восстановлению ковшей с применением износостойких, высокопрочных сталей и вспомогательных материалов. Во время эксплуатации при контакте конструкции с внешней средой быстро изнашиваются элементы корпуса, ломаются зубья. В большинстве случаев экономически целесообразно выполнить ремонт поврежденных частей ковша вместо приобретения нового.</p>
<p>Оперативно и качественно осуществим замену адаптера, зубьев, днища, стенок, режущей кромки и футеровки. Обеспечиваем надежную защиту конструкции от преждевременного износа в условиях больших ударных нагрузок.</p>`,
  benefits: [
    'Благодаря точной диагностике многие неисправности мы решим на месте, не отрывая технику от производства.',
    'Бесплатно доставим гидроагрегат, снимая с вас ответственность за организацию транспортировки.',
    'Соблюдаем все стандарты и требования безопасности в процессе ремонта.',
    'Используем первоклассное оборудование и технологии для точной диагностики.',
    'Эффективно организуем обслуживание больших парков техники с индивидуальным графиком.',
  ],
}
</script>

<template>
  <Slider />
  <ServiceBlock />
  <Block />
  <PartnerBlock :blockDataText="blockDataText" />
  <Gis />
</template>

<style scoped>
.category-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}
</style>
