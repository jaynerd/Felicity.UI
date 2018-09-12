<template>
    <div id="main" class="vm vbox">
        <app-header/>
        <section class="vm hbox flex">
            <app-nav/>
            <app-board/>
        </section>
        <app-footer/>
    </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Nav from "./layout/Nav.vue";
import Board from "./layout/Board.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "Main",
  components: {
    "app-header": Header,
    "app-nav": Nav,
    "app-board": Board,
    "app-footer": Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scripts/css/styles.scss";

#main {
  background-color: $layout-secondary;
}
</style>
