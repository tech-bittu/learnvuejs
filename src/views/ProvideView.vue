<script setup>
import InjectData from '@/components/provide-inject/InjectData.vue';
import { provide } from 'vue';
provide('name','Bittu Kumar');
provide('graduateYear',2020)
provide('isSwimmer',true);
//Passing array
provide('friends',['Lovely','Sanjay','Prince','Pandav','Rahul']);
//passing object
provide('firstLove',
    {
        name:'Muskan',
        met:'her sister\'s wedding',
        stillLove:true
    }
)
//passing array object
provide('favouriteWebseries',[
    {
        title:'breaking bad',
        watchingYear:2024,
        completed:true,
        ongoing:false
    },
    {
        title:'You',
        watchingYear:2024,
        completed:true,
        ongoing:true
    },
    {
        title:'Game of thrones',
        watchingYear:2023,
        completed:true,
        ongoing:false
    },
    {
        title:'Mirzapur',
        watchingYear:2022,
        completed:true,
        ongoing:true
    },
    {
        title:'Another Life',
        watchingYear:2022,
        completed:true,
        ongoing:true
    },
])
</script>
<template>
<InjectData/>
</template>