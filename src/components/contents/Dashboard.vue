<template>
    <div id='dashboard' class="flex-column">
        <div class="flex-space" v-if="!isTeamViewOn">
            <h1 class="flex-1">Dashboard Contents</h1>
            <button @click="createTeam()"><i class="material-icons">add</i></button>
        </div>
        <div class="flex-row">
            <input id="teamCode" type="text" v-model="code" placeholder="Invitation code"/>
            <button @click="joinTeam()">Join</button>
        </div>
        <div id='team-list' class="flex-row" v-if="!isTeamViewOn">
            <div v-for="team in teams" :key="team.teamId">
                <app-team-box :name="team.teamName"/>
            </div>
        </div>
        <div v-else>
            <app-team-view :name="teamName"/>
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
    getTeams() {
      GetTeams(this.axios, response => {
        // alert("Team list retrieved");
        this.teams = response;
        // alert(this.teams.length);
      });
    },
    joinTeam() {
      JoinTeam(this.axios, this.code, response => {
        // alert("Team list retrieved");
        this.team = response;
        this.teamName = this.team.teamName;
        this.isTeamViewOn = true;
        // alert(this.teams.length);
      });
    },
    createTeam() {
      CreateTeam(this.axios, response => {
        // alert("Team successfully created");
        this.getTeams();
        // this.$bus.$emit("logging-in");
      });
    }
  },
  data() {
    return {
      code: 0,
      team: null,
      teams: null,
      teamName: "",
      isTeamViewOn: false
    };
  },
  mounted() {
    this.getTeams();
    this.$bus.$on("toggle-team-view", () => {
      this.isTeamViewOn = !this.isTeamViewOn;
    });
    this.$bus.$on("set-team-view-name", event => {
      this.teamName = event;
    });
  }
};

function GetTeams(axios, callback) {
  var userId = localStorage.getItem("userID");
  axios.get("api/team/getteamsbyuserid/" + userId).then(axiosResponse => {
    let resp = axiosResponse.data;
    callback(resp);
  });
}

function JoinTeam(axios, code, callback) {
  var teamCode = code;
  axios.get("api/team/getteambycode/" + teamCode).then(axiosResponse => {
    let resp = axiosResponse.data;
    callback(resp);
  });
}

function CreateTeam(axios, callback) {
  var teamInfo = {
    userId: localStorage.getItem("userID"),
    teamcode: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
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
