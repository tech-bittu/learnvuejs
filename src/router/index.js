import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import Job from "@/views/job.vue";
import AddjobView from "@/views/AddjobView.vue";
import EditjobView from "@/views/EditjobView.vue";
import NotFoundView from "@/components/NotFoundView.vue";
import StyleView from "@/views/StyleView.vue";
import PropsView from "@/views/PropsView.vue"
import ComponentView from "@/views/ComponentView.vue";
import SlotVue from '@/views/SlotView.vue';
import ProvideView from '@/views/ProvideView.vue';
import HooksViews from "@/views/HooksViews.vue";
import WatchView from "@/views/WatchView.vue"
import TodoList from "@/components/Projects/TodoList.vue";
import TemplateRefView from "@/views/TemplateRefView.vue";
import AsyncView from "@/views/asyncView.vue";
import PointCollectorView from "@/views/pointCollectorView.vue";
import CustomVDirectiveView from "@/views/v-directiveView.vue";

import { createRouter, createWebHistory } from "vue-router";
import DynamicComponentView from "@/views/DynamicComponentView.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView,
        },
        {
            path:'/todo-list',
            name:'todo list',
            component:TodoList,
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
            path:'/styles',
            name:'style',
            component:StyleView
        },
        {
            path:'/props',
            name:'props',
            component:PropsView
        },
        {
            path:'/com-events',
            name:'components-events',
            component:ComponentView
        },
        {
            path:'/slots',
            name:'slots',
            component:SlotVue
        },
        {
            path:'/provides',
            name:'provides',
            component:ProvideView
        },
        {
            path:'/hooks',
            name:'hooks',
            component:HooksViews
        },
        {
            path:'/watch',
            name:'watch',
            component:WatchView
        },
        {
            path:'/template-ref',
            name:'template-ref',
            component:TemplateRefView
        },
        {
            path:'/async-compo',
            name:'async-compo',
            component:AsyncView
        },
        {
            path:'/point-collector',
            name:'point-collector',
            component:PointCollectorView
        },
        {
            path:'/custom-directive',
            name:'custom-directive',
            component:CustomVDirectiveView
        },
        {
            path:'/dynamic-component',
            name:'dynamic-component',
            component:DynamicComponentView
        },
        {
            path:'/:catchAll(.*)',
            name:'not found',
            component:NotFoundView
        }
        
    ]
});
export default router;