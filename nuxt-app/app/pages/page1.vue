<script setup="ts">
import ContentWithImage from '~/components/Page/ContentWithImage.vue'
import Accordion from '~/components/Page/Accordion.vue'
import Block from '~/components/Page/Block.vue'
import Diagnostics from '~/components/Page/Diagnostics.vue'
import PartnerBlock from '~/components/Page/PartnerBlock.vue'
import Stages from '~/components/Page/Stages.vue'

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
  <div class="min-h-screen bg-tech-light">
    <!-- <ContentWithImage /> -->
    <Block />
    <Diagnostics />
    <PartnerBlock :blockDataText="blockDataText" />
    <Accordion />
    <Stages />
  </div>
</template>
