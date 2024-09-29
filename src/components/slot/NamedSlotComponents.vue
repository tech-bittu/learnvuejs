<script setup>
import {ref} from 'vue';
const message = ref('Hello')
</script>
<template>
    <br/><hr/>
    <h2>Named Slot {{ message }}</h2>
    <hr/>
    <h6>There is two way to declare Named slot</h6>
    <h6>first one is v-slot:slotName</h6>
    <h6>another is #slotName</h6>
    <hr/><hr/>
    <slot name="first">default hello first</slot><br/>
    <slot name="second">default Hello second</slot>
    <hr/><hr/>
    <slot></slot>
</template>