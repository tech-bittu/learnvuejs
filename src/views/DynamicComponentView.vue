<script setup>
import firstComponent from '@/components/dynamicComponent/firstComponent.vue';
import secondComponent from '@/components/dynamicComponent/secondComponent.vue';
import thirdComponent from '@/components/dynamicComponent/thirdComponent.vue';

import { ref } from 'vue';

const currentTab = ref(firstComponent);

const Tabs = {
    firstComponent,
    secondComponent,
    thirdComponent
}
</script>
<template>
<div class="bg-orange-500 px-5 py-5">
    <button class="bg-green-500 px-4 py-2 mx-4" @click="currentTab='firstComponent'">first component</button>
    <button class="bg-green-500 px-4 py-2 mx-4" @click="currentTab='secondComponent'">second component</button>
    <button class="bg-green-500 px-4 py-2 mx-4" @click="currentTab='thirdComponent'">third component</button>
</div>
<div class="bg-red-500 px-5 py-5">
<component :is="Tabs[currentTab]" />
</div>
</template>