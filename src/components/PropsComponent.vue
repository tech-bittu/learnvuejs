<script setup>
import Props from '@/components/styleCom/Props.vue';
import { ref } from 'vue'
const fullName = ref('Rahul thakur');
const age = ref(20);
</script>
<template>
    <Props :fullName="fullName" :age="age" />
</template>