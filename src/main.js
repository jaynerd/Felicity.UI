import Vue from 'vue'
import App from './App'
import router from './router'

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

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
