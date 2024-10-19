<script setup>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';
import $ from 'jquery'
import { useToast } from 'vue-toastification';

const toast = useToast();
// Point Noted : Switch Tab
// 1. deactiveTab class 
// 2. activeTab class always comes with grow class. This is active tab
// 3. inside activeTab and deactiveTab don't forget to add child contentTab class element
const ShowTabContent = (arg) => {
    $('.activeTab.grow').toggleClass('deactiveTab activeTab grow')
    $('#' + arg).toggleClass('deactiveTab activeTab grow')
    $('#tab-buttons button.bg-grey-900').toggleClass('bg-grey-900 bg-green-500 text-white')
    $('#' + arg + 'Button').toggleClass('bg-grey-900 bg-green-500 text-white')
}

const showAddToDo = ref(false);
const todoList = ref({});
// # form reactive data
const currentDate = new Date()
const form = reactive({
    id:'',
    newTask: '',
    important: false,
    complete:false,
    currentDate: new Intl.DateTimeFormat('en-IN').format(currentDate)
})
// ## Point Noted :
// ## 1. To get todolist json data
onMounted(async () => {
    try {
        const response = await axios.get('/api/todolist');
        todoList.value = response.data.reverse();
        // add value in id
        form.id = String(++todoList.value[0].id).padStart(4, '0');
    } catch (error) {
        console.error('Error : ', error);
    } finally {
        console.log('all thing going good in todo list loading...')
    }
});

// ## Point Noted : Add New todo data
// ## 1. To insert data in todolist
const handleSubmit = async () => {
   
    const newTodo = {
        id : form.id,
        title: form.newTask,
        important: form.important,
        complete: form.complete,
        date: form.currentDate
    }
    try {
        const response = await axios.post('/api/todolist/', newTodo);
        console.log(response)
        toast.success('Added Successfully.');
        form.newTask = '';
        form.id = String(++form.id).padStart(4, '0');
    } catch (error) {
        toast.error('New job added failed, show error on console')
        console.error('Add job error :', error);

    }
    console.log('working form handler submit')
}
//## onClick completed task
const completedTask = async()=>{
    try {
        const response = await axios.post('/api/todolist/', newTodo);
        console.log(response)
        toast.success('Added Successfully.');
        form.newTask = ''
    } catch (error) {
        toast.error('New job added failed, show error on console')
        console.error('Add job error :', error);

    }
}
</script>
<template>
    <p class="text-5xl text-white bg-green-900 text-center py-3">To do List</p>
    <div id="tab" class="relative">
        <div id="tab-buttons" class="flex flex-wrap flex-row justify-center bg-green-900">
            <button id="AllTabContentButton" @click="ShowTabContent('AllTabContent')"
                class="flex-none shadow-inner px-5 py-3 bg-grey-900 text-white rounded-sm border border-gray-50 hover:from-pink-500 hover:to-orange-500 "><i
                    class="pi pi-box mx-4"></i>All</button>
            <button id="ImportantTabContentButton" @click="ShowTabContent('ImportantTabContent')"
                class="flex-none shadow-inner px-5 py-3 bg-green-500 rounded-sm border border-gray-50"><i
                    class="pi pi-star mx-4"></i>Important</button>
            <button id="CompleteTabContentButton" @click="ShowTabContent('CompleteTabContent')"
                class="flex-none shadow-inner px-5 py-3 bg-green-500 rounded-sm border border-gray-50"><i
                    class="pi pi-file-check mx-4"></i>Completed</button>
            <button id="AddNewToDoButton" @click="showAddToDo = !showAddToDo"
                class="flex-none shadow-inner px-5 py-3 bg-green-700 text-white rounded-sm border border-gray-50"><i
                    class="pi pi-plus mx-4"></i>Add New</button>
        </div>
        <div id="tab-contents"
            class="bg-green-900 flex flex-nowrap flex-row justify-center min-h-96 px-10 py-10 lg:h-[500px] z-50 relative">
            <!-- //****************** All */ -->

            <div class="grow activeTab bg-white border border-gray-200 rounded-lg " id="AllTabContent">
                <!-- contentTab class  -->
                <div class="contentTab flex flex-col items-center h-full px-10 py-10 overflow-y-auto  scrollbar-thin">

                    <ul class="px-3 py-1 w-full" >
                        <li @click="console.log(index)" v-for="({ complete,important, title, date }, index) in todoList" :key="index"
                            :class="[complete?'bg-neutral-100':'','border-b-4 px-2 py-1 justify-center cursor-pointer hover:bg-neutral-200 hover:text-neutral-900']">
                            <div class="flex justify-between">
                                <p>
                                    <i :class="[important ? complete?'pi-star-fill':'pi-star' : complete?'pi-circle-fill':'pi-circle', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs">{{ date }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- //****************** Important */ -->
            <div class="deactiveTab  bg-white border border-gray-200 rounded-lg shadow mx-2" id="ImportantTabContent">
                <!-- contentTab class  -->
                <div class="contentTab flex flex-col items-center h-full px-10 py-10 overflow-y-auto  scrollbar-thin">

                    <ul class="px-3 py-1 w-full" >
                        <li v-for="({ important, title, date,complete }, index) in todoList" :key="index" @click="console.log(index)"
                            :class="[important?'':'hidden',complete?'bg-neutral-100':'','border-b-4 px-2 py-1 justify-center cursor-pointer hover:bg-neutral-200 hover:text-neutral-900']">
                            <div class="flex justify-between">
                                <p>
                                    <i :class="[complete ? 'pi-star-fill' : 'pi-star', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs">{{ date }}</span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <!-- //****************** Completed */ -->
            <div class="deactiveTab bg-white border border-gray-200 rounded-lg  " id="CompleteTabContent">
                <div class="contentTab flex flex-col items-center h-full px-10 py-10 overflow-y-auto  scrollbar-thin">

                    <ul class="px-3 py-1 w-full">
                        <li @click="console.log(index)"  v-for="({ complete,important, title, date }, index) in todoList" :key="index"
                            :class="[complete?'bg-neutral-100':'hidden','border-b-4 px-2 py-1 justify-center cursor-pointer hover:bg-neutral-200 hover:text-neutral-900']">
                            <div class="flex justify-between">
                                <p>
                                    <i :class="[important ? 'pi-star-fill' : 'pi-circle-fill', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs">{{ date }}</span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <!-- add todo popup form  -->
        <div v-if="showAddToDo" id="popup-form"
            class="flex flex-col items-start  absolute bg-gradient-to-b from-green-700 to-transparent top-0 right-0 w-full px-5 py-5 h-full z-[60]">
            <div class="mx-auto  flex felx-row justify-between max-w-[1080px] w-full px-4 py-4">
                <p class="text-white [text-shadow:_1px_3px_0_rgb(206_4_4_/_90%)] text-3xl">Add New Task</p>
                <i @click="showAddToDo = !showAddToDo"
                    class="text-white pi pi-times-circle cursor-pointer hover:text-red-900"></i>
            </div>
            <form @submit.prevent="handleSubmit" class="mx-auto form-input flex flex-row w-full max-w-[1080px] h-fit">
                <input type="text" placeholder="Add task" id="addTask" name="addTask"
                    class="grow rounded-lg border border-2 mr-4 px-4 outline-none border-none" v-model="form.newTask">

                <input type="checkbox" id="star-1" name="important" class="peer hidden" value="true"
                    v-model="form.important" />
                <label for="star-1"
                    class="cursor-pointer text-2xl text-white peer-checked:text-red-500 hover:text-yellow-500 mr-4 flex items-center"><i
                        class="pi pi-star-fill " aria-hidden="true"></i></label>

                <button type="submit"
                    class="flex-none items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 cursor-pointer ">Add
                    Task</button>
            </form>
        </div>
    </div>

</template>
<style scoped>
.deactiveTab .contentTab {
    width: 120px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; */
    background-image: linear-gradient(to left, grey, white);
    border-radius: 8px;
}

.deactiveTab {
    margin: 0 auto;
    z-index: -1;
    translate: -20px;
}

.activeTab {
    z-index: 1;
}

.deactiveTab .contentTab * {
    display: none;
}

.deactiveTab:has(~ .activeTab) {
    translate: 20px;
}

.deactiveTab:has(+ * + .activeTab) {
    translate: 40px;
}

.deactiveTab:has(+ * + * + .activeTab) {
    translate: 60px;
}

.deactiveTab:last-child {
    translate: -40px;
    z-index: -2;
}

.deactiveTab:has(~ .activeTab) .contentTab {
    /* box-shadow: rgba(0, 0, 0, 0.15) -3px 6px 0px 0px; */
    background-image: linear-gradient(to right, grey, white);
    display: block;
    position: relative;
}
</style>