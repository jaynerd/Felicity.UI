<template>
    <div id='main' class='view-max flex-column'>
        <app-header/>
        <section v-if='authenticated' class='view-max flex-row'>
            <app-nav/>
            <app-board/>
        </section>
        <app-login v-else/>
        <app-footer/>
    </div>
</template>

<script>
import Nav from "./layout/Nav.vue";
import Login from "./auth/Login.vue";
import Board from "./layout/Board.vue";
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "Main",
  components: {
    "app-nav": Nav,
    "app-login": Login,
    "app-board": Board,
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      authenticated: true
    };
  },
  mounted() {
    this.$bus.$on("log-in", () => {
      this.authenticated = true;
    });
  }
};
</script>
