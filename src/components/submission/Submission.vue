<template>
  <div align="center">
    <div id="submissions" class="flex-column content-center">
      <div id="submission_header" class="flex-row">
        <h1>{{ msg }}</h1>
        <img src="./felicity cropped.png" alt="Felicity Logo">
      </div>
      <p>How happy do you feel right now?</p>
      <emoji-collector></emoji-collector>
      <p>How happy do you think your team feels right now?</p>
      <emoji-collector></emoji-collector>
      <div>
        <button :disabled="btnState" v-on:click="happySubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiCollector from "./widgets/emoji/EmojiCollector.vue";

export default {
  name: "Submission",

  data() {
    return {
      msg: "Please submit your Happiness!",
      btnState: false
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
  text-align: center;
  max-width: 25%;
  min-width: 400px;

  #submission_header {
    align-items: center;

    img {
      width: 15%;
      height: 15%;
    }

    h1 {
      font-size: 1.8em;
    }
  }
}

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  width: calc(100% - 1300px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: black;
  color: aquamarine;
} */
// button {
//   padding: 10px;
//   text-decoration: none;
//   background: black;
//   border-radius: 3px;
//   color: red;
//   font-weight: bold;
// }
</style>
