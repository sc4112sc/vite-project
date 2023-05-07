import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CounterView from '@/views/CounterView.vue';
import BootstrapView from '@/views/BootstrapView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/counter',
        component: CounterView
    },
    {
        path: '/bootstrap',
        component: BootstrapView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
