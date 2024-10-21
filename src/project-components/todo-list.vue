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
    $('.activeTab.grow').toggleClass('deactiveTab activeTab grow hidden')
    $('#' + arg).toggleClass('deactiveTab activeTab grow hidden')
    $('#tab-buttons button.bg-green-500').toggleClass('bg-grey-900 bg-green-500 text-white')
    $('#' + arg + 'Button').toggleClass('bg-grey-900 bg-green-500 text-white')
}

const showAddToDo = ref(false);
const todoList = ref({});
// # form reactive data
const currentDate = new Date()
const form = reactive({
    id: '',
    newTask: '',
    important: false,
    complete: false,
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
        id: form.id,
        title: form.newTask,
        important: form.important,
        complete: form.complete,
        date: form.currentDate
    }
    if (newTodo.title != '') {
        try {
            const response = await axios.post('/api/todolist/', newTodo);
            // refresh data
            const refreshData = await axios.get('/api/todolist');
            todoList.value = refreshData.data.reverse();
            // show toast msg
            toast.success('Added Successfully.');
            // empty input field
            form.newTask = '';
            // add current id
            form.id = String(++form.id).padStart(4, '0');
        } catch (error) {
            toast.error('New job added failed, show error on console')
            console.error('Add job error :', error);

        }
    }

}
//## onClick completed task
const completedTask = async (requestedId) => {
    const updateData = {
        complete: true
    }
    console.log(requestedId)
    try {
        const response = await axios.patch(`/api/todolist/${requestedId}`, updateData)
        const refreshData = await axios.get('/api/todolist');
        todoList.value = refreshData.data.reverse();
        toast.success('Well done, you completed one task of the day!')
    } catch (error) {
        console.error("Error occur:", error)
        toast.error(error)
    }
}
// to only show today all task (complete and uncomplete) and all day uncompleted task in all tab
const CompareDate = (requestedDate) => {

    const specificDate = new Date(requestedDate);
    const todayDate = new Date();

    if (specificDate < todayDate) {
        return false
    } else if (specificDate > todayDate) {
        return false
    } else {
        return true
    }
}
// ## delete task
const DeleteTask = async (requestedId) => {
    try {
        const response = await axios.delete(`/api/todolist/${requestedId}`)
        const refreshData = await axios.get('/api/todolist');
        todoList.value = refreshData.data.reverse();
        if (response) {
            toast.success('Task deleted successfully')
        } else {
            toast.error('Not deleted,Something went wrong!')
        }
    } catch (error) {
        toast.error('Error :' + error)
        console.error('Error occur:', error)
    }
}
</script>
<template>
    <p class="text-5xl text-white bg-green-900 text-center py-3">To do List</p>
    <div id="tab" class="relative flex flex-col min-h-screen items-stretch  bg-green-900">
        <div id="tab-buttons" class="flex self-start flex-wrap  justify-center md:w-52 md:w-full">
            <button id="AllTabContentButton" @click="ShowTabContent('AllTabContent')"
                class="min-w-[164px] flex-none shadow-inner px-5 py-3 bg-green-500 text-white rounded-sm border border-gray-50 hover:from-pink-500 hover:to-orange-500 "><i
                    class="pi pi-box mx-4"></i>All</button>
            <button id="ImportantTabContentButton" @click="ShowTabContent('ImportantTabContent')"
                class="min-w-[164px] flex-none shadow-inner px-5 py-3 bg-grey-900 rounded-sm border border-gray-50"><i
                    class="pi pi-star mx-4"></i>Important</button>
            <button id="CompleteTabContentButton" @click="ShowTabContent('CompleteTabContent')"
                class="min-w-[164px] flex-none shadow-inner px-5 py-3  bg-grey-900 rounded-sm border border-gray-50"><i
                    class="pi pi-file-check mx-4"></i>Completed</button>
            <button id="AddNewToDoButton" @click="showAddToDo = !showAddToDo"
                class="min-w-[164px] flex-none shadow-inner px-5 py-3 bg-green-700  text-white rounded-sm border border-gray-50"><i
                    class="pi pi-plus mx-4"></i>Add New</button>
        </div>
        <div id="tab-contents grow min-h-[60%]"
            class=" flex flex-nowrap flex-col justify-center  md:flex-row  px-5 py-10 md:pd-10 ">
            <!-- //****************** All */ -->

            <div class="w-full lg:max-w-[60%] min-h-[400px] grow activeTab  bg-white border border-gray-200 rounded-lg "
                id="AllTabContent">
                <!-- contentTab class  -->
                <div class="contentTab flex flex-col items-center h-full px-5 py-5 overflow-y-auto  scrollbar-thin">

                    <ul class="w-full">
                        <li v-for="({ complete, important, title, date, id }) in todoList" :key="id"
                            v-show="CompareDate(`${date}`) || !complete"
                            :class="[complete ? 'bg-neutral-100' : '', 'border-b-4 px-2 py-1 justify-center hover:bg-neutral-200 hover:text-neutral-900 group']">
                            <div class="flex flex-col  justify-between">
                                <p>
                                    <i
                                        :class="[important ? complete ? 'pi-star-fill' : 'pi-star' : complete ? 'pi-circle-fill' : 'pi-circle', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs hidden  group-hover:flex flex-row justify-between items-end">
                                    <p>{{ date }}</p>
                                    <div>
                                        <i @click="!complete ? completedTask(id) : ''"
                                            :class="[complete ? 'pi-verified text-teal-600 cursor-auto' : 'pi-check-circle hover:text-green-400', 'pi  text-2xl']"></i>
                                        <i @click="DeleteTask(id)"
                                            class="pi pi-trash hover:text-red-500 ml-2 text-2xl cursor-pointer"></i>
                                        </div>
                                </span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <!-- //****************** Important */ -->
            <div class="w-full lg:max-w-[60%] min-h-[400px]  deactiveTab hidden  bg-white border border-gray-200 rounded-lg shadow mx-2"
                id="ImportantTabContent">
                <!-- contentTab class  -->
                <div class="contentTab flex flex-col items-center h-full px-10 py-10 overflow-y-auto  scrollbar-thin">

                    <ul class="px-3 py-1 w-full">
                        <li v-for="({ important, title, date, complete, id }, index) in todoList" :key="index"
                            @click="completedTask(id)"
                            :class="[important ? '' : 'hidden', complete ? 'bg-neutral-100' : '', 'group border-b-4 px-2 py-1 justify-center  hover:bg-neutral-200 hover:text-neutral-900']">
                            <div class="flex flex-col justify-between">
                                <p>
                                    <i :class="[complete ? 'pi-star-fill' : 'pi-star', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs hidden  group-hover:flex flex-row justify-between items-end">
                                    <p>{{ date }}</p>
                                    <div>
                                        <i @click="!complete ? completedTask(id) : ''"
                                            :class="[complete ? 'pi-verified text-teal-600 cursor-auto' : 'pi-check-circle hover:text-green-400', 'pi  text-2xl']"></i>
                                        <i @click="DeleteTask(id)"
                                            class="pi pi-trash hover:text-red-500 ml-2 text-2xl cursor-pointer"></i>
                                        </div>
                                </span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <!-- //****************** Completed */ -->
            <div class="w-full lg:max-w-[60%] min-h-[400px]  deactiveTab hidden bg-white border border-gray-200 rounded-lg  "
                id="CompleteTabContent">
                <div class="contentTab flex flex-col items-center h-full px-10 py-10 overflow-y-auto  scrollbar-thin">

                    <ul class="px-3 py-1 w-full">
                        <li @click="console.log(index)"
                            v-for="({ complete, important, title, date, id }, index) in todoList" :key="index"
                            :class="[complete ? 'bg-neutral-100' : 'hidden', 'group border-b-4 px-2 py-1 justify-center hover:bg-neutral-200 hover:text-neutral-900']">
                            <div class="flex justify-between flex-col">
                                <p>
                                    <i
                                        :class="[important ? 'pi-star-fill' : 'pi-circle-fill', 'pi  mr-2  my-auto']"></i>
                                    {{ title }}
                                </p>
                                <span class="text-xs hidden  group-hover:flex flex-row justify-between items-end">
                                    <p>{{ date }}</p>
                                    <div>
                                        <i @click="!complete ? completedTask(id) : ''"
                                            :class="[complete ? 'pi-verified text-teal-600 cursor-auto' : 'pi-check-circle hover:text-green-400', 'pi  text-2xl']"></i>
                                        <i @click="DeleteTask(id)"
                                            class="pi pi-trash hover:text-red-500 ml-2 text-2xl cursor-pointer"></i>
                                        </div>
                                </span>

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
                class="text-white pi pi-times-circle text-2xl cursor-pointer hover:text-red-900"></i>
        </div>
        <form @submit.prevent="handleSubmit"
            class="mx-auto form-input flex flex-col md:flex-row w-full max-w-[1080px] h-fit">
            <div class="flex grow">
                <input type="text" placeholder="Add task" id="addTask" name="addTask"
                    class="grow w-full rounded-lg border border-2 mr-4 px-4 outline-none border-none"
                    v-model="form.newTask">

                <input type="checkbox" id="star-1" name="important" class="peer hidden" value="true"
                    v-model="form.important" />
                <label for="star-1"
                    class="cursor-pointer text-2xl text-white peer-checked:text-red-500 hover:text-yellow-500 mr-4 flex items-center"><i
                        class="pi pi-star-fill " aria-hidden="true"></i></label>
            </div>
            <button type="submit"
                class="flex-none max-w-52 m-auto mt-3 items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-green-900 cursor-pointer ">Add
                Task</button>
        </form>
    </div>
    </div>

</template>
<style scoped>
/* 
.deactiveTab .contentTab {
    width: 120px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-image: linear-gradient(to left, grey, white);
    border-radius: 8px;
} */

/* .deactiveTab {
    margin: 0 auto;
    z-index: -1;
    translate: -20px;
}

.activeTab {
    z-index: 1;
}

.deactiveTab .contentTab * {
    display: none;
} */

/*
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
} */

.deactiveTab:has(~ .activeTab) .contentTab {
    /* box-shadow: rgba(0, 0, 0, 0.15) -3px 6px 0px 0px; */
    /* background-image: linear-gradient(to right, grey, white);
    display: block;
    position: relative; */
}
</style>