<template>
    <div id='nav' :class="{'gradient-border': true, 'nav-open': isNavOpen}">
        <div class='flex-end' @click='toggleNav()'>
            <i v-if='isNavOpen' class='material-icons'>arrow_back_ios</i>
            <i v-else class='material-icons'>arrow_forward_ios</i>
        </div>
        <app-nav-item icon='dashboard' name='Dashboard' :active='activeItem'/>
        <app-nav-item icon='person' name='Profile' :active='activeItem'/>
        <app-nav-item icon='work' name='Workspace' :active='activeItem'/>
        <app-nav-item icon='bar_chart' name='Report' :active='activeItem'/>
        <app-nav-item icon='settings' name='Settings' :active='activeItem'/>
    </div>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "Nav",
  components: {
    "app-nav-item": NavItem
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      this.$bus.$emit("nav-toggled");
    }
  },
  data() {
    return {
      isNavOpen: false,
      activeItem: "Dashboard"
    };
  },
  mounted() {
    this.$bus.$on("item-selected", event => {
      this.activeItem = event;
    });
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#nav {
  width: 3.1em;
  padding-top: 0.4em;
  transition-duration: 0.6s;
  text-transform: uppercase;
  background-color: $app-dark;

  i {
    cursor: pointer;
    font-size: 1.5em;
    color: orangered;
    padding: 0.2em 0.5em 0.4em 0em;
  }

  &.nav-open {
    width: 12.5em;
  }

  @media screen and (max-width: $app-breakpoint) {
    i {
      color: gray;
      padding: 0.2em 0.45em 0.4em 0em;
    }

    &.nav-open {
      width: 3.1em;
    }
  }
}
</style>
