import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/scripts/css/styles.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
