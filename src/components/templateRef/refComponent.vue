<script setup>
import { ref } from 'vue';
const count = ref(10)
const increment = ()=> count.value++;
const decrement = ()=> count.value--;
defineExpose({count,increment,decrement})
</script>
<template>
    <h6>Count : {{ count }}</h6>
    <button class="border-1 px-4 py-4 mx-2 bg-green-500" @click="increment">+</button>
    <button class="border-1 px-4 py-4 mx-2 bg-green-500" @click="decrement">-</button>
</template>