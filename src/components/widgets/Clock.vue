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

$clock-height: 30px;

#clock {
  align-self: center;
  height: 100px;
  margin-right: 70px;
  border-radius: 0.5rem;

  #hours,
  #minutes,
  #seconds {
    color: white;
    font-size: 1.7rem;
    font-weight: 500;
    font-family: "Nunito", sans-serif;
    margin-top: -14px;
    padding: 0.65rem 1.2rem;
    border: 0.2rem solid white;
    background: linear-gradient(
      to bottom,
      rgb(36, 52, 97) 50%,
      rgb(59, 89, 128) 50%
    );
    display: inline-block;
    position: relative;
  }
}

#hours {
  border-radius: 0.75rem 0 0 0.75rem;
}

#seconds {
  border-radius: 0 0.75rem 0.75rem 0;
}

#suffix {
  top: 2px;
  left: 4px;
  font-size: 0.6rem;
  position: absolute;
}
</style>
