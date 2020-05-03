import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Animate from 'animate.css';
/* eslint-disable import/no-extraneous-dependencies */
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faCog, faCaretRight, faLinkedinIn, faGithub, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(BootstrapVue);
Vue.use(Animate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
