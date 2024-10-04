<script setup>
import { ref } from 'vue';
const friends = ref(['Rahul','Rohit','Rohan','Ravi','Komal','Kajal']);
defineExpose({friends})
</script>
<template>
    <h1>working randomFriends component</h1>
</template>