<template>
    <div id='dashboard' class="flex">
        <h1>Dashboard Contents</h1>
        <app-team-box/>
                <app-team-box/>

    </div>
</template>

<script>
import TeamBox from "../widgets/TeamBox.vue";

export default {
  name: "Dashboard",
  components: {
    "app-team-box": TeamBox
  }
};
</script>
