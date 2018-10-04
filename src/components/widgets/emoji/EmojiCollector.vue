<template>
    <div id="happy-collector">
        <emoji-face :emojiControl="this.emojiControl"></emoji-face>
        <ticked-slider :emojiControl="this.emojiControl"></ticked-slider>
    </div>
</template>

<script>
import EmojiFace from "./EmojiFace.vue";
import TickedSlider from "./TickedSlider.vue";

import EmojiControl from "./EmojiControl.vue";

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
