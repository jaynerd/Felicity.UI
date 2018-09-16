<template>
    <div id="clock">
        <div id="hours">
            <span id="suffix" v-text="suffix"></span>
            <span v-text="hours"></span>
        </div>
        <div id="minutes" v-text="minutes"></div>
        <div id="seconds" v-text="seconds"></div>
    </div>
</template>

<script>
import { getZero, getTimeSuffix } from "../../assets/scripts/js/app.js";

export default {
  name: "Clock",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      suffix: ""
    };
  },
  mounted() {
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  },
  methods: {
    updateDateTime() {
      let now = new Date();
      this.hours = now.getHours();
      this.minutes = getZero(now.getMinutes());
      this.seconds = getZero(now.getSeconds());
      this.suffix = getTimeSuffix(this.hours);
      this.hours = this.hours % 12 || 12;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#clock {
  #hours,
  #minutes,
  #seconds {
    color: black;
    font-size: 2rem;
    font-weight: 500;
    font-family: "Abel", sans-serif;
    margin-top: 0.2em;
    padding: 0rem 0.5rem;
    display: inline-block;
    position: relative;
  }
}

#suffix {
  top: -4px;
  left: -5px;
  font-size: 0.7rem;
  position: absolute;
}
</style>
