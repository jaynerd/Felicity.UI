<template>
    <div id="team-view">
        <h3>This is team view</h3>
        <button @click="openTeamBoxView()">
            return
        </button>
        <button @click="showModal()">
            modal
        </button>
    </div>
</template>

<script>
export default {
  name: "TeamView",
  methods: {
    openTeamBoxView() {
      this.$bus.$emit("team-box-view");
    },
    showModal() {
      this.CreateModal(
        "Header",
        "Desc",
        "Submit",
        () => {
          alert("Submitted");
        },
        "Cancel",
        () => {
          alert("Canceled");
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
