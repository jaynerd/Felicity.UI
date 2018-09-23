<template>
    <div id='dashboard' class="flex-column">
        <div class="flex-space">
            <h1 class="flex-1">Dashboard Contents</h1>
            <button @click="createTeam()"><i class="material-icons">add</i></button>
        </div>
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
  methods: {
    getTeams() {},
    createTeam() {
      CreateTeam(this.axios, response => {
        alert("Team successfully created");
        // this.$bus.$emit("logging-in");
      });
    }
  },
  data() {
    return {
      teamCount: 5, // read from database, lengt
      isTeamViewOn: false
    };
  },
  mounted() {
    this.$bus.$on("toggle-team-view", () => {
      this.isTeamViewOn = !this.isTeamViewOn;
    });
  }
};

function GetTeams(axios, callback) {}

function CreateTeam(axios, callback) {
  var teamInfo = {
    userId: localStorage.getItem("userID"),
    teamname: Math.floor(Math.random() * (1000 - 1 + 1)) + 1
  };
  axios.post("api/team/createteam", teamInfo).then(axiosResponse => {
    let resp = axiosResponse.data;
    resp === true ? callback(resp) : alert(resp);
  });
}
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#dashboard {
  button {
    border: none;
    padding: 1em 1em;
    color: $app-main;
    background-color: dodgerblue;
    cursor: pointer;

    i {
      font-size: 5em;
    }
  }

  button:hover {
    background-color: skyblue;
  }

  #team-list {
    flex-wrap: wrap;
  }
}
</style>
