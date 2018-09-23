<template>
    <div id='team-view'>
        <h3>This is team view</h3>
        <input type="text" placeholder="Set interval"/>
        <button @click='openTeamBoxView()'>
            return
        </button>
        <button @click='showModal()'>
            modal
        </button>
    </div>
</template>

<script>
export default {
  name: "TeamView",
  methods: {
    openTeamBoxView() {
      this.$bus.$emit("toggle-team-view");
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

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";
</style>
