<template>
    <div id="nav" class="vbox">
        <div id="dashboard">
            <i class="material-icons icon">dashboard</i>
        </div>
        <div id="profile">
            <i class="material-icons icon">person</i>
        </div>
        <div id="workspace">
            <i class="material-icons icon">work</i>
        </div>
        <div id="report">
            <i class="material-icons icon">bar_chart</i>
        </div>
        <div id="settings">
            <i class="material-icons icon">settings</i>
        </div>
    </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#nav {
  background-color: $layout-gray;

  .icon {
    color: $layout-white;
  }
}
</style>
