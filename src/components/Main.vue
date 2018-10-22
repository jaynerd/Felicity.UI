<template>
  <v-app dark>
    <div id='main' class='view-max flex-column self-center'>
      <app-keepopen v-if="isAuthenticated"/>
      <app-invitation v-else/>
    </div>
  </v-app>
</template>

<script>
import Invitation from "@/components/auth/Invitation";
import KeepOpen from "@/components/KeepOpen";

export default {
  name: "Main",
  components: {
    "app-keepopen": KeepOpen,
    "app-invitation": Invitation
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
