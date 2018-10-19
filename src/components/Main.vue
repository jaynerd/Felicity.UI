<template>
  <v-app dark>
    <div id='main' class='view-max flex-column self-center'>
      <app-invitation/>
    </div>
  </v-app>
</template>

<script>
import Invitation from "@/components/auth/Invitation";

export default {
  name: "Main",
  components: {
    "app-invitation": Invitation
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  mounted() {
    this.$bus.$on("authenticated", () => {
      this.$router.push("/submission");
      window.open(
        "http://localhost:8080/#/notification",
        "popUpWindow",
        "height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes"
      );
    });

    this.$bus.$on("test", () => {
      window.alert("IT'S WORKING");
    });
  }
};
</script>
