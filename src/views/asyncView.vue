<script setup>
import {ref,defineAsyncComponent} from 'vue'

const RenderFriends = defineAsyncComponent(()=>import('@/components/asyncComponent/toggleFriends.vue'))
let showFriends = ref(false)
</script>
<template>
    <h1>Async component</h1>
    <div v-if="showFriends"><RenderFriends /></div>
    <button class="text-white px-4 py-2 mx-5 bg-green-500" @click="showFriends = !showFriends">Toggle friend list</button>
</template>