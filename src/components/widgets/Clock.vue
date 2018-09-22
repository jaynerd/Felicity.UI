<template>
    <div id='clock'>
        <div id='hours'>
            <span id='suffix' v-text='suffix'/>
            <span v-text='hours'/>
        </div>
        <div id='minutes' v-text='minutes'/>
        <div id='seconds' v-text='seconds'/>
    </div>
</template>

<script>
export default {
  name: "Clock",
  methods: {
    updateDateTime() {
      let now = new Date();
      this.hours = now.getHours();
      this.minutes = this.GetZero(now.getMinutes());
      this.seconds = this.GetZero(now.getSeconds());
      this.suffix = this.GetTimeSuffix(this.hours);
      this.hours = this.hours % 12 || 12;
    }
  },
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
  }
};
</script>

<style lang='scss' scoped>
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
  font-size: 0.35em;
  position: absolute;
}
</style>
