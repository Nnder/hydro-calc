<template>
  <div class="min-h-screen bg-gray-50">
    <HeroSection />
    <CalculatorSection />
    <TrustSection />
    <PortfolioSection />
    <FaqSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/Main/HeroSection.vue';
import CalculatorSection from '~/components/Main/CalculatorSection.vue';
import TrustSection from '~/components/Main/TrustSection.vue';
import PortfolioSection from '~/components/Main/PortfolioSection.vue';
import FaqSection from '~/components/Main/FaqSection.vue';
</script>