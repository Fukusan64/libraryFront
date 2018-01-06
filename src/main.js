// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from '@/router';
import store from '@/vuex/store';
import App from '@/App';
import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
