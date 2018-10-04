<template>
    <div>
        <datalist id="tickmarks">
            <option label="Very Sad">0</option>
            <option label="Neutral">50</option>
            <option label="Very Happy">100</option>
        </datalist>
        <input type="range" min="0" max="100" step="1" value="50" class="slider" list="tickmarks" v-on:input="this.handleChange">
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
      emojiControl: this.emojiControl
    };
  },
  methods: {
    handleChange: function(event) {
      let control = this.$data.emojiControl;
      control.setHappiness(event.srcElement.value);
      control.$emit("happyChange");
    }
  }
};
</script>

<style lang="scss" scoped>
datalist {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

input {
  margin-top: 1em;
  width: 100%;
}
</style>
