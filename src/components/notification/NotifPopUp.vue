<template>
    <v-app dark>
        <div id="notification" class='view-max flex-column content-center'>
            <div id="notification-box" class='flex-column self-center'>
                <h1>It's time to enter your happiness information</h1>
                <div id='button-box' class='flex-space self-center'>
                    <button id='redirect' type='success' @click='redirect()'>
                        Click Here
                    </button>
                </div>
                <div id="postpone-box" class="flex-row self-center">
                    <span>
                        I'm busy... postpone for 
                        <button id="post5" class="postpone-button">5</button>,
                        <button id="post10" class="postpone-button">10</button>,
                        <button id="post15" class="postpone-button">15</button>
                        minutes.
                    </span>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
  name: "NotifPopUp",
  methods: {
    redirect: function() {
      window.open("http://localhost:8080/#/submission");
      this.$bus.$emit("test");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#notification {
  text-align: center;

  #postpone-box {
    margin: 1em 0em;

    .postpone-button {
      margin: 0.1em;
      font-size: 1.2em;
      color: $app-highlight;
    }
  }
}

#button-box {
  button {
    width: 8em;
    height: 3em;
    padding: 10px 20px;
    margin: 1em 1.5em 0em 1.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }

  button:active {
    transform: translateY(1px);
  }

  #redirect {
    padding: 0;
    background-color: #0b9248;
  }

  #redirect:hover {
    background-color: #23c96d;
  }
}
</style>
