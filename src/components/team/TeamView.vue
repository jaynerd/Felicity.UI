<template>
    <div id="team-view">
        <h3>This is team view</h3>
        <button @click="openTeamBoxView()">
            return
        </button>
    </div>
</template>

<script>
export default {
  name: "TeamView",
  methods: {
    openTeamBoxView() {
      this.$bus.$emit("team-box-view");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
