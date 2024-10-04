<script setup>
import basicRef from '@/components/templateRef/basic.vue';
import functionRef from '@/components/templateRef/functionRef.vue';
import refComponent from '@/components/templateRef/refComponent.vue';

import {ref,onMounted} from 'vue'

const myrefCom = ref(null)
onMounted(()=>{
    console.log(myrefCom.value)
    console.log(myrefCom.value.count)
    // we can also change the value
    myrefCom.value.count = 100
})
</script>
<template>
    <h1>Basic ref</h1>
    <basicRef />
    <h1>function ref</h1>
    <functionRef />
    <h1> reference component</h1>
    <refComponent ref="myrefCom"/>
</template>