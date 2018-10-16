import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import VueKonva from "vue-konva";
import Main from "@/components/Main";

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(VueKonva);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    }
  ]
});
