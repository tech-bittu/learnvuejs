<script setup>
import { ref, onMounted } from 'vue';
// // Note : if you add setup in script open tag then you must remove export default and setup()
// export default {
// setup() {
const name = ref('Rahul Kumar');
const status = ref('active');
const tasks = ref(['t1', 't2', 't3', 't4']);
const newTask = ref('');

const toggleStatus = () => {
  if (status.value == 'active') {
    status.value = 'pending';
  } else if (status.value == 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index)=>{
  tasks.value.splice(index,1);
}

onMounted(async ()=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task)=>task.title);
  }catch{
    console.log('Error occur')
  }
})
// }
// }
</script>

<template>
  <h1>Hello {{ name }}</h1></br>
  <!-- <h2 v-if="status">Status is true</h2> -->
  <h2 v-if="status === 'active'">User staus in active.</h2>
  <h2 v-else-if="status === 'pending'">User staus in pending.</h2>
  <h2 v-else>User staus in inactive.</h2>
  <!-- <button v-on:click="toggleStatus">change Status</button> -->
  <button @click="toggleStatus">change Status</button><br />
  <!-- <a v-bind:href="link">go to google</a> -->
  <!-- <a :href="link">go to google</a> -->
  </br>
  <form @submit.prevent="addTask">
    <label for="newTask"> Add new task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>{{ task }} </span> 
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <a>End task</a>
</template>
