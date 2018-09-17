<template>
    <div id='nav' class='vbox'>
        <div class='flex-end' @click='toggleNav()'>
            <i class='material-icons'>arrow_back_ios</i>
            <!-- <i class='material-icons'>arrow_forward_ios</i> -->
        </div>
        <app-nav-item class='sc' icon='dashboard'/>
        <app-nav-item class='sc' icon='person'/>
        <app-nav-item class='sc' icon='work'/>
        <app-nav-item class='sc' icon='bar_chart'/>
        <app-nav-item class='sc' icon='settings'/>
    </div>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "Nav",
  data() {
    return {
      navOpen: false,
      activeItem: "dashboard"
    };
  },
  components: {
    "app-nav-item": NavItem
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
      this.$bus.$emit("toggle-nav");
      console.log("button is clicked!");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#nav {
  width: 3.5em;
  min-width: 3.5em;
  padding-top: 5px;
  background-color: $layout-gray;

  i {
    cursor: pointer;
    padding: 0.1em;
    padding-right: 0.5em;
    font-size: 1.5em;
    color: $layout-white;
  }
}
</style>
