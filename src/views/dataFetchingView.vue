<script setup>
import FetchJsonDataComponent from '@/components/dataFetching/fetchJsonData.vue';
import axiosData from '@/components/dataFetching/axios.vue';


</script>
<template>
    <div class="bg-teal-500 px-5 py-5">
        <FetchJsonDataComponent />
    </div>
    <div class="bg-teal-900 px-5 py-5">
        <axiosData />
    </div>
</template>