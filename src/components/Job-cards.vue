<script setup>
import jobCard from '@/components/Job-card.vue';
import {ref,onMounted, reactive} from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

// #first way
// const jobs = ref([]);
// # second way
// # change jobs.value to state.jobs
const state = reactive({
  jobs:[],
  isLoading:true
})

defineProps({
    limit:{
        type:Number,
        default:3
    },
    ShowButton:{
        type:Boolean,
        default:false
    }
})
onMounted(async ()=>{
  try{
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  }catch(error){
    console.error('Error fetching jobs',error)
  }finally{
    state.isLoading = false;
  }
})
</script>
<template>
     <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <!-- show loading spinner while laoding is true  -->
         <div v-if="state.isLoading" class="text-center text-grey-500 py-6">
          <PulseLoader />
         </div>
        <!-- show loading spinner while laoding is true  -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Job Listing start -->
          <jobCard v-for="job in state.jobs.slice(0,limit||state.jobs.length)" :key="job.id" :job="job" class="bg-white rounded-xl shadow-md relative">
            
          </jobCard>
          <!-- Job Listing end-->
        </div>
      </div>
    </section>
    <section v-if="ShowButton" class="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
</template>
