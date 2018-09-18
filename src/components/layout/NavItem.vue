<template>
    <div id='nav-item' :class="{'hbox flex-space': true, 'active-item': getActiveItem()}" @click='selectItem()'>
        <i class='material-icons'>{{icon}}</i>
        <span class="sc" v-if="isNavOpen">{{name}}</span>
    </div>
</template>

<script>
export default {
  name: "NavItem",
  props: ["icon", "name", "active"],
  methods: {
    selectItem() {
      this.$bus.$emit("select-item", this.name);
    },
    getActiveItem() {
      return this.name === this.active;
    }
  },
  data() {
    return {
      isNavOpen: false
    };
  },
  mounted() {
    this.$bus.$on("toggle-nav", () => {
      this.isNavOpen = !this.isNavOpen;
    });
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#nav-item {
  cursor: pointer;
  color: $layout-white;

  border-style: solid;
  border-width: 0.05em;
  border-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.5) 25%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0) 100%
    )
    50% 0 100% 0/0 0 1px 1 stretch;

  i {
    margin: 0.1em;
    padding: 0.12em;
    font-size: 2em;
  }

  span {
    padding-left: 0.5em;
    font-size: 1.4em;
    font-weight: 300;
    font-family: "Rajdhani", sans-serif;
  }
}

.active-item {
  background-color: #1dacff8a;
}
</style>
