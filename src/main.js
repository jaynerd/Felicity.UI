import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import appjs from './assets/scripts/js/app.js';

require('./assets/scripts/css/styles.scss');

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.mixin(appjs);

Vue.prototype.axios = axios.create({
  baseURL: "https://ey2hslj27c.execute-api.ap-southeast-2.amazonaws.com/Prod/"
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
