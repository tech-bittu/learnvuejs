<script setup>
import {
    ref,
    onBeforeMount,
    onMounted,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate
} from 'vue'

const userName = ref('Bittu Basha');

onMounted( ()=>{
 console.log('on mounted called');
})
onBeforeMount( ()=>{
 console.log('on Before mounted called');
})
onUpdated( ()=>{
 console.log('on onUpdated called');
})
onBeforeUpdate( ()=>{
 console.log('on onBeforeUpdate called');
})
onBeforeUnmount( ()=>{
 console.log('on onBeforeUnmount called');
})
onUnmounted( ()=>{
 console.log('on onUnmounted called');
})
const changeName = ()=> userName.value='Rahul sharma'
</script>
<template>
    <h2>Hooks Components</h2>
    <p> click button to see how onUpdated and onBeforeUpdate work </p>
    <h3>{{ userName }}</h3>
    <button @click="changeName" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Change User name</button>
</template>