<template>
    <div id='header' class='flex'>
        <div class='flex-box flex-1'>
            <app-clock id="clock" class='self-center'/>
        </div>
        <div class='flex-box flex-4'>
            <h1 class='self-center clip'>Felicity</h1>
        </div>
        <div class='flex-box flex-1'>
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
  z-index: 99;
  max-height: 4em;
  white-space: nowrap;
  box-shadow: $app-shadow;
  background-color: $app-light;

  #clock {
    margin: 1em;
  }

  h1 {
    margin: 0.5em;
    font-size: 2.5em;
    font-weight: 500;
    font-family: "Julius Sans One", sans-serif;
  }

  h3 {
    margin: 0.5em;
    font-size: 3em;
    font-weight: 300;
    font-family: "Libre Barcode 128 Text", cursive;
  }

  @media screen and (max-width: $app-breakpoint) {
    max-height: 100%;
    flex-direction: column;
  }
}
</style>
