/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueTheMask);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
