<template>
    <div id='team-box' class='flex content-center' @click='openTeamView()'>
        <div class='flex-column'>
            <h3 class='self-center'>
                {{name}}
            </h3>
            <h2 class='self-center'>
                Code: {{code}}
            </h2>
        </div>
    </div>
</template>

<script>
export default {
  name: "TeamBox",
  props: ["name", "code"],
  methods: {
    openTeamView() {
      this.$bus.$emit("toggle-team-view");
      this.$bus.$emit("set-team-view-name", this.name);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#team-box {
  width: 10em;
  height: 5em;
  margin: 1em;
  border-radius: 20px;
  border: 0.5em outset $app-highlight;
  background-color: $app-turquoise;
  cursor: pointer;

  h3 {
    margin: 0;
    padding-top: 0.2em;
    font-size: 2em;
    color: orangered;
  }

  h2 {
    margin: 0;
    color: red;
  }
}
</style>
