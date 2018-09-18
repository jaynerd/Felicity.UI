<template>
    <div id='main' class='vm vbox'>
        <app-header/>
        <section v-if="authenticated" class='vm hbox flex'>
            <app-nav/>
            <app-board class='flex flex-1'/>
        </section>
        <app-login v-else/>
        <app-footer/>
    </div>
</template>

<script>
import Login from "./auth/Login.vue";
import Header from "./layout/Header.vue";
import Nav from "./layout/Nav.vue";
import Board from "./layout/Board.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "Main",
  components: {
    "app-login": Login,
    "app-header": Header,
    "app-nav": Nav,
    "app-board": Board,
    "app-footer": Footer
  },
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    this.$bus.$on("toggle-nav", $event => {
      console.log("Event triggered", $event);
    });
  }
};
</script>
