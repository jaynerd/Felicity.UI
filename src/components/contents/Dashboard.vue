<template>
    <div id='dashboard' class="flex-column">
        <h1>Dashboard Contents</h1>
        <div v-if="!isTeamViewOn" class="flex">
            <div v-for="index in teamCount" :key="index">
                <app-team-box :name="index"/>
            </div>
        </div>
        <div v-if="isTeamViewOn">
            <app-team-view/>
        </div>
    </div>
</template>

<script>
import TeamBox from "../team/TeamBox.vue";
import TeamView from "../team/TeamView.vue";

export default {
  name: "Dashboard",
  components: {
    "app-team-box": TeamBox,
    "app-team-view": TeamView
  },
  data() {
    return {
      teamCount: 5,
      isTeamViewOn: false
    };
  },
  mounted() {
    this.$bus.$on("team-view", () => {
      this.isTeamViewOn = true;
    });
    this.$bus.$on("team-box-view", () => {
      this.isTeamViewOn = false;
    });
  }
};
</script>
