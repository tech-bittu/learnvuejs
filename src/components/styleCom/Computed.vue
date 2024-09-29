<script setup>
import { ref,computed} from 'vue';
let counter = ref(0)
const squareCount = computed(()=>{
   return counter.value **2;
})
const incrementCount = ()=>{
    counter.value++
}
const decrementCount = ()=>{
    counter.value--
}
</script>
<template>
    <h2>Count : {{ counter }}</h2>
    <h2>Square of Count : {{ squareCount }}</h2>
    <button @click="incrementCount">Plus +1 </button>&nbsp;
    <button @click="decrementCount">Minus -1 </button>
</template>