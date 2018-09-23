import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import appjs from './assets/scripts/js/app.js';

require('./assets/scripts/css/styles.scss');

Vue.mixin(appjs);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.axios = axios.create({
  // baseURL: 'http://localhost:50616/'
  baseURL: 'https://ey2hslj27c.execute-api.ap-southeast-2.amazonaws.com/Prod/'
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
