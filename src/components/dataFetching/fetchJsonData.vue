<script setup>
import { ref } from 'vue';

const JsonData = ref(null);

const ShowJsonData = async ()=>{
   await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(responseData => JsonData.value = responseData)
    .catch((error)=>{
        console.error(error)
    })
}
const EmptyList = ()=> JsonData.value = null
</script>
<template>
    <h1>fetching data using fetch</h1>
    <button class="bg-green-500 px-5 py-3" @click="ShowJsonData" >Show data </button>
    <button class="bg-red-500 px-5 py-3" @click="EmptyList" >Hide data </button>
     <!-- // when url is https://jsonplaceholder.typicode.com/posts -->
    <!-- <ul v-for="({id,title,body},index) in JsonData" :key="index">
        <hr/>
        <hr/>
        <hr/>
        <li>Id:{{ id }}</li>
        <li>Title:{{ title }}</li>
        <li>Message:{{ body }}</li>
        <hr/>
        <hr/>
        <hr/>
    </ul> -->
    <ul v-for="({id,title,url},index) in JsonData" :key="index" id="data-list">
        <hr/>
        <hr/>
        <hr/>
        <li>Id:{{ id }}</li>
        <li>Title:{{ title }}</li>
        <li><img :src="url" alt=""></li>
        <hr/>
        <hr/>
        <hr/>
    </ul>
</template>