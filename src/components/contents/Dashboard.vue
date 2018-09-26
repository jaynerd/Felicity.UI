<template>
    <div id='dashboard' class='flex-column'>
        <div v-if='!isTeamViewOn'>
            <div class='flex-space'>
                <h1 class='flex-1'>Dashboard Contents</h1>
                <button @click='createTeam()'><i class='material-icons'>add</i></button>
            </div>
            <div class='flex-row'>
                <input id='team-code' type='text' v-model='code' placeholder='Invitation code'/>
                <button @click='joinTeam()'>Join</button>
            </div>
            <div id='team-list' class='flex-row' v-if='!isTeamViewOn'>
                <div v-for='team in teams' :key='team.teamId'>
                    <app-team-box :name='team.teamName' :code='team.teamCode'/>
                </div>
            </div>
        </div>
        <div v-else>
            <app-team-view :name='teamName'/>
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
        this.teams = response;
        alert("Team list retrieved");
      });
    },
    joinTeam() {
      JoinTeam(this.axios, this.code, response => {
        this.team = response;
        this.teamName = this.team.teamName;
        this.isTeamViewOn = true;
        alert("Joined");
      });
    },
    createTeam() {
      CreateTeam(this.axios, response => {
        this.getTeams();
        alert("Team successfully created");
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
  var userId = localStorage.getItem("userId");
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
    userid: localStorage.getItem("userId"),
    // team code generation should be executed from the server side
    teamcode: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
    teamname: Math.floor(Math.random() * (1000 - 1 + 1)) + 1
  };
  axios.post("api/team/createteam", teamInfo).then(axiosResponse => {
    let resp = axiosResponse.data;
    resp === true ? callback(resp) : alert(resp);
  });
}
</script>

<style lang='scss' scoped>
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
