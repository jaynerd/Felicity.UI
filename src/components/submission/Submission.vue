<template>
  <div id='submissions' class='view-max flex-column content-center'>
    <div id='title' class="flex-row self-center">
      <h1 class='flex-1 self-center'>{{ title }}</h1>
      <img src="@/components/FelicityLogo.png"/>
    </div>
    <div id="submission" class="flex-column content-center">
      <emoji-collector :initQuestion="question1"/>
      <emoji-collector :initQuestion="question2"/>
    </div>
    <div id='button-box' class='flex-space self-center'>
      <button id='submit' type='success'>
          Submit
      </button>
    </div>
  </div>
</template>

<script>
import EmojiCollector from "@/components/emoji/EmojiCollector";

export default {
  name: "Submission",

  data() {
    return {
      title: "Happiness Submission",
      question1: "Please indicate how you feel about your work.",
      question2: "Please indicate how you think the team feel about the work."
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

  #button-box {
    button {
      width: 5em;
      height: 2em;
      padding: 10px 20px;
      margin: 1em 1.5em 0em 1.5em;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      color: white;
      cursor: pointer;
    }

    button:active {
      transform: translateY(1px);
    }

    #submit {
      padding: 0;
      background-color: #0b9248;
    }

    #submit:hover {
      background-color: #23c96d;
    }
  }
}
</style>
