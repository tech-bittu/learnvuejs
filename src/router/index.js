import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import Job from "@/views/job.vue";
import AddjobView from "@/views/AddjobView.vue";
import EditjobView from "@/views/EditjobView.vue";
import NotFoundView from "@/components/NotFoundView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView,
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobView,
        },
        {
            path:'/jobs/:id',
            name:'job details',
            component:Job,
        },
        {
            path:'/jobs/add',
            name:'add-job',
            component:AddjobView
        },
        {
            path:'/jobs/edit/:id',
            name:'edit-job',
            component:EditjobView
        },
        {
            path:'/:catchAll(.*)',
            name:'not found',
            component:NotFoundView
        }
        
    ]
});
export default router;