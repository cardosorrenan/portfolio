import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Articles from '../views/Articles.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ideas',
    name: 'Articles',
    component: Articles,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
