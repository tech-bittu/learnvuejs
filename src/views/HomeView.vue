<script setup>
import HeroSection from '@/components/Hero-section.vue';
import HomeCard from '@/components/Home-card.vue';
import JobCards from '@/components/Job-cards.vue';
</script>
<template>
    <HeroSection title="Wanna be asshole vue dev, Really!" />
    <HomeCard />
    <JobCards :limit="3" :ShowButton="true" />
</template>