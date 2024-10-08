<script setup>
import axios from 'axios';
import { ref } from 'vue';

const jsonData = ref(null)

const fetchData = async ()=>{
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    jsonData.value = response.data
  }
  catch(error){
    console.error(error)
  }
}
const HideData = ()=> jsonData.value=null
</script>
<template>
    <h1>fetching data using axios</h1>
    <button class="bg-green-500 px-5 py-3" @click="fetchData">Show data</button>
    <button class="bg-red-500 px-5 py-3" @click="HideData">Hide data</button>
    <ul v-for="({title},index) in jsonData" :key="index">
        <hr/>
        <li class="text-white">Title : {{ title }}</li>
        <hr/>
    </ul>
</template>