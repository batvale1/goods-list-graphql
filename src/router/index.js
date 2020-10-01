import Vue from 'vue';
import VueRouter from 'vue-router';

import AppGoods from '@/views/AppGoods.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'goods',
        component: AppGoods,
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
