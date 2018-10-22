<template>
    <div id="happy_collector" class="flex-column self-center">
      <emoji-face id="emoji_face" :emojiControl="this.emojiControl"></emoji-face>
      <span>{{ question }}</span>
      <ticked-slider id="ticked_slider" :emojiControl="this.emojiControl"></ticked-slider>
    </div>
</template>

<script>
import EmojiFace from "./EmojiFace.vue";
import TickedSlider from "./TickedSlider.vue";

import EmojiControl from "@/assets/scripts/js/EmojiControl.js";

export default {
  name: "EmojiCollector",
  props: {
    initQuestion: ""
  },
  data() {
    return {
      question: this.initQuestion,
      emojiControl: new EmojiControl()
    };
  },
  components: {
    "emoji-face": EmojiFace,
    "ticked-slider": TickedSlider
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scripts/css/styles.scss";

#ticked_slider {
  width: 40em;
}

span {
  text-align: center;
}
</style>
