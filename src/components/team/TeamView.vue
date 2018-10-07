<template>
    <div id='team-view'>
        <h3>Team {{name}}</h3>
        <input type='text' placeholder='Set interval'/>
        <button @click='openTeamBoxView()'>
            return
        </button>
        <button @click='showModal()'>
            modal
        </button>
        <button @click='showPopUp()'>
            popup
        </button>
        <app-smile v-if="isNotified"/>
    </div>
</template>

<script>
// import Smile from "../widgets/Smile.vue";

export default {
  name: "TeamView",
  props: { name },
  components: {
    "app-smile": {}
  },
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
    },
    showPopUp() {
      this.isNotified = true;
    }
  },
  data() {
    return { isNotified: false };
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";
</style>
