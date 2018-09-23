<template>
    <div id='dashboard'>
        <h1>Dashboard Contents</h1>
        <div id='team-list' class="flex-row" v-if="!isTeamViewOn">
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
      teamCount: 5, // read from database, length
      isTeamViewOn: false
    };
  },
  mounted() {
    this.$bus.$on("toggle-team-view", () => {
      this.isTeamViewOn = !this.isTeamViewOn;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#dashboard {
  #team-list {
    flex-wrap: wrap;
  }
}
</style>
