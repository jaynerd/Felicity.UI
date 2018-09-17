<template>
    <div id='nav-item'>
        <i class='material-icons'>{{icon}}</i>
    </div>
</template>

<script>
export default {
  name: "NavItem",
  props: ["icon"]
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#nav-item {
  i {
    margin: 0.1em;
    padding: 0.2em;
    font-size: 2em;
    color: $layout-white;
    border: 1px solid white;
  }
}
</style>
