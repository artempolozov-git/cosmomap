import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt);

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init({
  once: true,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
