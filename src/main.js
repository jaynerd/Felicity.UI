import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

import './assets/scripts/js/app.js';
import './assets/scripts/css/styles.scss';

Vue.config.productionTip = false

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.prototype.axios = axios.create({
  baseURL: "https://ey2hslj27c.execute-api.ap-southeast-2.amazonaws.com/Prod/"
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
