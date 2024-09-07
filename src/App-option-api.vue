<script>
export default{
  data(){
    return{
      name:"Rahul dua",
      status:'pending',
      link:'www.google.com',
      tasks:['t1','t2','t3','t4','t5']
    };
  },
  methods:{
    toggleStatus()
    {
      if(this.status=='active')
    {
      this.status = 'pending';
    }else if(this.status=='pending')
    {
      this.status='inactive';
    }else{
      this.status='active';
    }
    }
    
  }
  
}
</script>

<template>
<h1>Hello {{name}}</h1></br>
<!-- <h2 v-if="status">Status is true</h2> -->
 <h2 v-if="status==='active'">User staus in active.</h2>
 <h2 v-else-if="status==='pending'">User staus in pending.</h2>
 <h2 v-else>User staus in inactive.</h2>
 <!-- <button v-on:click="toggleStatus">change Status</button> -->
 <button @click="toggleStatus">change Status</button><br/>
 <!-- <a v-bind:href="link">go to google</a> -->
 <a :href="link">go to google</a>
 </br>
 
 <ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
 </ul>
 <a >End task</a>
</template>


