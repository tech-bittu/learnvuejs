<script setup>
import ChildInjectData from './child/ChildInjectData.vue';
import { inject } from 'vue';
const name = inject('name');
const isSwimmer = inject('isSwimmer')
</script>
<template>
    <h1>Inject Data</h1>
    <h4>Name : {{ name }}</h4>
    <h4 v-show="isSwimmer">He know swimming with different kinds of swimming style like backward, frog, under water etc.</h4>
    <ChildInjectData/>
</template>