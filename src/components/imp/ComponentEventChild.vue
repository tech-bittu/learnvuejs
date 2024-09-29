<script setup>
import {ref} from 'vue';
</script>
<template>
<button @click="$emit('incrementCount')">Click me to +1 </button>
</template>