<script setup>
import {ref,reactive, watch} from 'vue'
// Basic Watch 
const inputText = ref('');
const messageInput = ref('')
watch(inputText,(newValue,oldValue)=>{
    messageInput.value = newValue;
    console.error(newValue)
    console.error(oldValue)
})
// watch with reactive
// first one
const state = reactive({username:'rahul09'})
watch(state,(newValue,oldValue)=>{
    console.error( newValue);
    console.error( oldValue)
})
// second one
const stateSecond = reactive({username:'rahul09'})
watch(()=>stateSecond.username,(newValue,oldValue)=>{
    console.error( newValue);
    console.error( oldValue)
})
//mutliple with array
const bestFriend = ref('Prashant')
const fightCount = ref(0)
watch([bestFriend,fightCount],(newValue,oldValue)=>{
    console.log('oldValue :'+ oldValue)
    console.log('newValue :'+ newValue)
})
</script>
<template>
    <h1 class="px-4 py-4">Watch component</h1>
    <!-- //1. Basic Watch  -->
    <div class="px-9 py-4">
        <h1> You will get the text what You are typing see : {{ messageInput }}</h1>
        <input type="text" name="" v-model="inputText" id="" placeholder="Type here to see the result...">
    </div>
    <!-- 2. watch with reactive  -->
     <!-- this is the problem -->
     <!-- newValue : {username: 'Jordan'}
          oldValue : {username: 'Jordan'} -->
    <div class="px-9 py-4">
        <h1> You will get the text what You are typing see : {{ state.username }}</h1>
        <button @click="state.username='Jordan'">Change name</button>
    </div>
    <!-- 3. watch with reactive  -->
     <!-- // solution of 2 problem -->
    <div class="px-9 py-4">
        <h1> You will get the text what You are typing see : {{ stateSecond.username }}</h1>
        <button @click="stateSecond.username='Muskan'">Change name</button>
    </div>
    <!-- //with array  -->
     <h5>Best friend {{  bestFriend }}</h5>
     <h5>Fight count : {{  fightCount }}</h5>
     <button class="border-1 bg-green-500 px-3 py-3 mx-5 " @click="bestFriend='Pandav'">change Best friend</button>
     <button class="border-1 bg-green-500 px-3 py-3 mx-5 " @click="fightCount++">+1 in fight count</button>
</template>