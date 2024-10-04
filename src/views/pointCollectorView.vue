<script setup>
import pointCollecter from '@/components/composable/pointCollecter.vue';
import { useCounter } from '@/shared/useCounter'
const counterAccess = useCounter()
</script>
<template>
    <pointCollecter />
    <h1>This is inside pointCollecter view</h1>
    <h1>Count : {{ counterAccess.count }}</h1>
    <button class="bg-green-500 px-4 py-2 mx-3" @click="counterAccess.increment">+</button>
    <button class="bg-green-500 px-4 py-2 mx-3" @click="counterAccess.decrement">-</button>
</template>