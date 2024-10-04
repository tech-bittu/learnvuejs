<script setup>
const myReffun = (el)=>{
    console.log(el)
    el.textContent = "Text changed through function ref";
    el.style.color = 'white'
    el.style.backgroundColor = 'red'
}
</script>
<template>
    <h6 :ref="myReffun">This is initial value</h6>
</template>