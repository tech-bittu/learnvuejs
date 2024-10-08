<script setup>
const vFormateDiv = {
    // first way
    /*
    mounted:(el,binding)=>{
        el.style.fontSize = '200px'
        el.style.fontStyle = 'italic'
        el.style.color = 'teal'
        console.log(binding.arg)
    } */
    // second way with argument
    mounted: (el, binding) => {

        el.style.color = `${binding.arg}`
        el.style.fontSize = '200px'

    }
};
// short hand
const vItalicText = (el) =>{
    el.style.fontStyle = 'italic'
}

</script>
<template>
    <div v-formate-div:teal v-italic-text>Hello world</div>
</template>