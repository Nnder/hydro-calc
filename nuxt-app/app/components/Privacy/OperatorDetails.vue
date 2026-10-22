<script setup>
import { OPERATOR, OPERATOR_READY, PRIVACY_CONTACT } from '../../../shared/privacy'
</script>
<template>
  <section aria-label="Реквизиты оператора" class="pt-2 text-xs leading-relaxed text-gray-500 space-y-1 break-words">
    <p v-if="!OPERATOR_READY" class="text-amber-800">Реквизиты оператора ещё не заполнены.</p>
    <p class="font-medium text-gray-600">{{ OPERATOR.name || '[наименование оператора]' }}</p>
    <p>ИНН {{ OPERATOR.inn }} · КПП {{ OPERATOR.kpp }}</p>
    <p>{{ OPERATOR.address }}</p>
    <p class="flex flex-wrap gap-x-3 gap-y-1">
      <a class="underline underline-offset-2 hover:text-indigo-600" :href="`mailto:${PRIVACY_CONTACT.email}`">{{ PRIVACY_CONTACT.email }}</a>
      <a class="hover:text-indigo-600" href="tel:88002222031">{{ PRIVACY_CONTACT.phone }}</a>
    </p>
  </section>
</template>
