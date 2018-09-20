<template>
    <div id='header' class='flex-row'>
        <div class='flex flex-1 content-center'>
            <app-clock class='self-center'/>
        </div>
        <div class='flex flex-4 content-center'>
            <h1 class='self-center clip'>Felicity</h1>
        </div>
        <div class='flex flex-1 content-center'>
            <h3 class='self-center'>Logout Team #N</h3>
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

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#header {
  height: 4em;
  z-index: 999;
  min-width: 690px;
  white-space: nowrap;
  box-shadow: $layout-shadow;
  background-color: $layout-light;

  h1 {
    margin: 0;
    font-size: 2.5em;
    font-weight: 500;
    font-family: "Julius Sans One", sans-serif;
  }

  h3 {
    margin: 0;
    font-size: 3em;
    font-weight: 300;
    font-family: "Libre Barcode 128 Text", cursive;
    margin-right: 0.4em;
  }
}
</style>
