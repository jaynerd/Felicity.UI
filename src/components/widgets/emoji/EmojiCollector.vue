<template>
    <div id="happy_collector" align="center">
        <emoji-face id="emoji_face" :emojiControl="this.emojiControl"></emoji-face>
        <ticked-slider id="ticked_slider" :emojiControl="this.emojiControl"></ticked-slider>
    </div>
</template>

<script>
import EmojiFace from "./EmojiFace.vue";
import TickedSlider from "./TickedSlider.vue";

import EmojiControl from "@/assets/scripts/js/EmojiControl.js";

export default {
  name: "EmojiCollector",
  data() {
    return {
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
#happy_collector {
  width: 25%;
  min-width: 300px;
}

#ticked_slider {
  margin: 10px 0px 0px;
}
</style>
