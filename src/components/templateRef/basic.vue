<script setup>
import { onMounted,ref } from 'vue';
const myRef = ref('')
onMounted(()=>{
    console.log(myRef.value)
    myRef.value.focus()
    myRef.value.value = "Something Else"
})
</script>
<template>
    <input type="text" placeholder="YOur Name" ref="myRef">
</template>