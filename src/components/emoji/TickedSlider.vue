<template>
  <div id="slider-box" class="flex-column self-center">
    <v-slider 
      id="slider"
      v-model="happiness"
      :tick-labels="phases"
      step="25"
      ticks="always"
      tick-size="2"
      always-dirty
      @input="handleChange"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: "TickedSlider",
  props: {
    emojiControl: Object
  },
  data() {
    return {
      happiness: this.emojiControl.currentHappy,
      phases: ["Very Unhappy", "Unhappy", "Neutral", "Happy", "Very Happy"]
    };
  },
  mounted() {},
  methods: {
    handleChange: function(event) {
      let control = this.$props.emojiControl;
      control.setHappiness(event);
      control.$emit("happyChange");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scripts/css/styles.scss";

.v-input {
  font-size: 0.8em;
}
</style>
