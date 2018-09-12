<template>
    <div id="header">
      <h1>Felicity</h1>
      <app-clock/>
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
  background-color: $layout-primary;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 99;
}
</style>
