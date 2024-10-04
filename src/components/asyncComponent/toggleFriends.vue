<script setup>
import randomFriends from './randomFriends.vue';
import { ref,onMounted } from 'vue';
const friendsRef = ref(null);

</script>
<template>
    <randomFriends ref="friendsRef" />
    <ul v-for="(friend, index) in friendsRef" :key="index">
    <ul v-for="(fr, i) in friend" :key="i">
        <li > {{ fr }}</li>
    </ul>
    </ul>
</template>