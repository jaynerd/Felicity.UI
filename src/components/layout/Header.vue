<template>
    <div id="header" class="hbox">
        <div class="cc flex flex-1">
            <app-clock class="sc"/>
        </div>
        <div class="cc flex flex-1">
            <h1 class="sc clip">Felicity</h1>
        </div>
        <div class="cc flex flex-1">
            <h3 class="sc">Login Team #3</h3>
        </div>
    </div>
</template>

<script>
import Clock from "../widgets/Clock.vue";

export default {
  name: "Header",
  components: {
    "app-clock": Clock
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#header {
  height: 5em;
  z-index: 99;
  background-color: $layout-primary;
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.75);

  h1 {
    margin: 0;
    font-size: 3em;
  }
}
</style>
