<template>
  <v-app dark>
    <div id='main' class='view-max flex-column self-center'>
      <app-submission v-if='isAuthenticated'/>
      <app-invitation v-else/>
    </div>
  </v-app>
</template>

<script>
import Invitation from "@/components/auth/Invitation";
import Submission from "@/components/submission/Submission";

export default {
  name: "Main",
  components: {
    "app-invitation": Invitation,
    "app-submission": Submission
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  mounted() {
    this.$bus.$on("authenticated", () => {
      this.isAuthenticated = true;
    });
  }
};
</script>
