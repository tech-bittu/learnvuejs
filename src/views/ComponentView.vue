<script setup>
import ComponentEventChild from '@/components/imp/ComponentEventChild.vue';
import { ref } from 'vue';
const count = ref(0);
</script>
<template>
<h1>Count : {{ count }}</h1>
<ComponentEventChild @incrementCount="count++"/>
</template>