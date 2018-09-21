<template>
    <div id="team-box" class="flex content-center" @click="openTeamView()">
        <h3 class="self-center">
            {{name}}
        </h3>
    </div>
</template>

<script>
export default {
  name: "TeamBox",
  props: { name },
  methods: {
    openTeamView() {
      this.$bus.$emit("team-view");
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
  color: greenyellow;
  background-color: gray;
  cursor: pointer;

  h3 {
    margin: 0;
    font-size: 2em;
  }
}
</style>
