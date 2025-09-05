<script setup="ts">
import ContentWithImage from '~/components/Page/ContentWithImage.vue';
import Accordion from '~/components/Page/Accordion.vue';
import Block from '~/components/Page/Block.vue';
import Diagnostics from '~/components/Page/Diagnostics.vue';
import PartnerBlock from '~/components/Page/PartnerBlock.vue';
import Stages from '~/components/Page/Stages.vue';
</script>
<template>
    <div class="min-h-screen bg-tech-light">
        <!-- <ContentWithImage /> -->
        <Block />
        <Diagnostics />
        <PartnerBlock />
        <Accordion />
        <Stages />
    </div>
</template>