<template>
    <div id="team-box" @click="open()">
    </div>
</template>

<script>
export default {
  name: "TeamBox",
  methods: {
    open() {
      alert("Clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#team-box {
  width: 10em;
  height: 5em;
  margin: 1em;
  background-color: red;
  cursor: pointer;
}
</style>
