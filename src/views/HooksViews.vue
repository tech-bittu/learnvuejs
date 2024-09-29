<script setup>
import {
    ref,
    onBeforeUnmount,
    onUnmounted
} from 'vue'
import Hooks from '@/components/lifecycle/Hooks.vue';
const isHooksLive = ref(true);

onBeforeUnmount(() => {
    console.log('onBeforeUnmount work')
})
onUnmounted(() => {
    console.log('unmounted work')
})
</script>
<template>
    <h2>Hooks </h2>

    <p> click button to see how onUnmounted and onBeforeunmount work </p>
    <button @click="isHooksLive = !isHooksLive"
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">remove
        or add Hooks component</button>
    <Hooks v-if="isHooksLive" />
</template>