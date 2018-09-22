<template>
    <div id='footer' class='flex-box'>
        <div class='self-center'>
            Copyright &copy; {{new Date().getFullYear()}} Team SDM, All rights reserved.
        </div>
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
  font-weight: 400;
  font-family: "Segoe UI", sans-serif;
  background-color: $app-light;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
