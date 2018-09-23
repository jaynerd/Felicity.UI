<template>
    <div id='sub-board' class='flex-column flex-1'>
        <h3>{{title}}</h3>
        <div id='content' class='flex-1'>
            <app-report v-if="title === 'Report'"/>
            <app-profile v-else-if="title === 'Profile'"/>
            <app-settings v-else-if="title === 'Settings'"/>
            <app-dashboard v-else-if="title === 'Dashboard'"/>
            <app-workspace v-else-if="title === 'Workspace'"/>
        </div>
    </div>
</template>

<script>
import Report from "../contents/Report.vue";
import Profile from "../contents/Profile.vue";
import Settings from "../contents/Settings.vue";
import Dashboard from "../contents/Dashboard.vue";
import Workspace from "../contents/Workspace.vue";

export default {
  name: "SubBoard",
  props: ["name"],
  components: {
    "app-report": Report,
    "app-profile": Profile,
    "app-settings": Settings,
    "app-dashboard": Dashboard,
    "app-workspace": Workspace
  },
  data() {
    return {
      title: this.name
    };
  },
  mounted() {
    this.$bus.$on("item-selected", event => {
      this.title = event;
    });
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#sub-board {
  background: $app-content;

  h3 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 100;
    font-family: "Aldrich", sans-serif;
    padding: 0.3em 0em 0.1em 1em;
    text-transform: uppercase;
    color: $app-main;
  }

  #content {
    margin: 0px 10px 10px 10px;
    border: 0.2em outset lightgray;
    box-shadow: $app-shadow;
    background-color: $app-main;
  }
}
</style>
