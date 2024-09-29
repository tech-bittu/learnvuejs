<script setup>
import { ref, onMounted, defineProps } from 'vue';
// const PropsObj = defineProps(['fullName', 'age']);
// onMounted(
//     () => { console.log(PropsObj) }
// )
defineProps({
    fullName:{
        type:String,
        validator:(propsValue)=>{
            return ['Rahul','Bittu','Chandan','Lalan','Sanjay'].includes(propsValue);
        }
    },
    age:{
        type:Number,
        validator:(propsValue)=>propsValue>=18&& propsValue<=80 
    },
    password:{
        type:String,
        validator:(propsValue)=>propsValue.length>=8
    }
})
</script>
<template>
    <div>
        <h1>Name : {{ fullName }}</h1>
        <h1>age : {{ age }}</h1>
        <h1>password : {{ password }}</h1>
    </div>
</template>