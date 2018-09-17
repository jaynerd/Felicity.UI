<template>
    <div id="nav" class="vbox">
        <div id="dashboard" class="sc">
            <i class="material-icons icon">dashboard</i>
        </div>
        <div id="profile" class="sc">
            <i class="material-icons icon">person</i>
        </div>
        <div id="workspace" class="sc">
            <i class="material-icons icon">work</i>
        </div>
        <div id="report" class="sc">
            <i class="material-icons icon">bar_chart</i>
        </div>
        <div id="settings" class="sc">
            <i class="material-icons icon">settings</i>
        </div>
    </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navOpen: false,
      activeItem: "dashboard"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#nav {
  width: 60px;
  min-width: 60px;
  padding-top: 10px;
  background-color: $layout-gray;

  .icon {
    margin: 0.1em;
    padding: 0.2em;
    font-size: 2em;
    color: $layout-white;
    border: 1px solid white;
  }
}
</style>
