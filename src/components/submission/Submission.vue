<template>
    <div id='submissions' class='view-max flex-column content-center'>
      <div id='title' class="flex-row self-center">
        <h1 class='flex-1 self-center'>{{ msg }}</h1>
        <img src="@/components/FelicityLogo.png"/>
      </div>
      <div id="submission" class="flex-column content-center">
        <emoji-collector/>
      </div>
    </div>
</template>

<script>
import EmojiCollector from "@/components/emoji/EmojiCollector";

export default {
  name: "Submission",

  data() {
    return {
      msg: "I don't know what to put here"
    };
  },
  components: {
    "emoji-collector": EmojiCollector
  },
  methods: {
    happySubmit: function() {
      this.btnState = true;
      window.alert("Submission Successful");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scripts/css/styles.scss";

#submissions {
  // background-color: $app-dark;

  #title {
    h1 {
      margin: 0.25em;
      font-size: 2em;
      font-family: "Rajdhani", sans-serif;
      color: $app-highlight;
    }

    img {
      margin: 0em 0.5em;
      height: 4em;
    }
  }
}
</style>
