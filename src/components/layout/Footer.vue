<template>
    <div id='footer' class='cc flex'>
        <div class='sc'>Copyright &copy; {{new Date().getFullYear()}} Team SDM, All rights reserved.</div>
    </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#footer {
  height: 3em;
  background-color: $layout-white;
  font-weight: 300;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
