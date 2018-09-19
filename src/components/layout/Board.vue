<template>
    <div id='board' class="flex flex-1">
        <app-sub-board/>
    </div>
</template>

<script>
import SubBoard from "./SubBoard.vue";

export default {
  name: "Board",
  components: {
    "app-sub-board": SubBoard
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#board {
  background-color: $layout-dark-turquoise;
}
</style>
