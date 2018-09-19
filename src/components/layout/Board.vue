<template>
    <div id='board' class='flex flex-1'>
        <app-sub-board name='Dashboard'/>
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
