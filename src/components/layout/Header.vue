<template>
    <div id='header' class='hbox'>
        <div class='cc flex flex-1'>
            <app-clock class='sc'/>
        </div>
        <div class='cc flex flex-4 pad-10'>
            <h1 class='sc clip'>Felicity</h1>
        </div>
        <div class='cc flex flex-1'>
            <h3 class='sc'>Login Team #3</h3>
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
  z-index: 99;
  background-color: $layout-white;
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.75);
  white-space: nowrap;

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
