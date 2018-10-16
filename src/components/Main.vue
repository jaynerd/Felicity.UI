<template>
    <div id='main' class='view-max flex-column self-center'>
        <app-invitation/>
    </div>
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
      authenticated: true
    };
  }
};
</script>
