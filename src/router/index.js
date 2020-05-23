import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Renan Cardoso - Home', transition: 'fade-in-left' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'Renan Cardoso - About', transition: 'fade-in-right' },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
