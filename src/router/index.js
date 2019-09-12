import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

/* Layout */
import Layout from '@/layout'


export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout, // 間にlayout/indexを挟むことにより基本的な枠組みを作る
      redirect: '/dashboard',
      children: [{ //子componentとして
        path: 'dashboard',
        nmae: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        mata: { title: 'Dashboard', icon: 'dashboard'}
      }]
    },
    // {
    //   path: '/',
    //   component: () => import('@/views/dashboard/index'),
    //   hidden: true
    // },
  ]
});
