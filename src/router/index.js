import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import VueKonva from "vue-konva";
import Main from "@/components/Main";
import Invitation from "@/components/Invitation";
import Submission from "@/components/Submission";

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(VueKonva);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Invitation",
      component: Invitation
    },
    {
      path: "/submission",
      name: "Submission",
      component: Submission
    }
  ]
});
