<template>
    <div id="sub-board" class="vbox flex-1">
        <h3>{{title}}</h3>
        <div id="content" class="flex-1">
            <app-dashboard v-if="title === 'Dashboard'"/>
            <app-profile v-else-if="title === 'Profile'"/>
            <app-workspace v-else-if="title === 'Workspace'"/>
            <app-report v-else-if="title === 'Report'"/>
            <app-settings v-else-if="title === 'Settings'"/>
        </div>
    </div>
</template>

<script>
import Dashboard from "../contents/Dashboard.vue";
import Profile from "../contents/Profile.vue";
import Workspace from "../contents/Workspace.vue";
import Report from "../contents/Report.vue";
import Settings from "../contents/Settings.vue";

export default {
  name: "SubBoard",
  props: ["title"],
  components: {
    "app-dashboard": Dashboard,
    "app-profile": Profile,
    "app-workspace": Workspace,
    "app-report": Report,
    "app-settings": Settings
  },
  mounted() {
    this.$bus.$on("select-item", event => {
      this.title = event;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#sub-board {
  background: rgb(60, 60, 60);

  h3 {
    margin: 0;
    color: #fff;
    padding: 0.2em;
    padding-top: 0.3em;
    padding-left: 1em;
    font-size: 1.5em;
    font-weight: 100;
    font-family: "Aldrich", sans-serif;
    text-transform: uppercase;
  }

  #content {
    margin: 0px 10px 10px 10px;
    border: 3px solid #eee;
    background-color: #fff;
  }
}
</style>
