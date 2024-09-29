<script setup>
import Props from '@/components/styleCom/Props.vue';
import { ref } from 'vue'
const fullName = ref('Rahul thakur');
const age = ref(20);
const password = ref('sdf sdf')
</script>
<template>
    <Props :fullName="fullName" :age="age" :password="password"/>
</template>