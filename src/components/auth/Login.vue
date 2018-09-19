<template>
    <div id="login" class="vm cc vbox">
        <div id="login-box" class="sc vbox">
            <h3 class="sc flex-1 clip">Access Denied</h3>
            <h2 class="sc flex-1">Please Login Below</h2>
            <div id="input-area" class="sc vbox flex-3">
                <i class="sc material-icons">account_circle</i>
                <div id="input-text-area" class="vbox">
                    <div id="input-text" class="flex-space sc">
                        <h4 class="sc flex-1">ID:</h4>
                        <input class="sc flex-1" type="text"/>
                    </div>
                    <div id="input-text" class="flex-space sc">
                        <h4 class="sc flex-1">PW:</h4>
                        <input class="sc flex-1" type="password"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#login {
  background-color: $layout-gray;

  #login-box {
    width: 50%;
    height: 80%;
    border-radius: 20px;
    background-color: #ddd;

    h2,
    h3 {
      margin: 0;
      font-family: "Rajdhani", sans-serif;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      padding-top: 0.5em;
      font-size: 3em;
    }

    h4 {
      color: #ddd;
      font-family: "Rajdhani", sans-serif;
    }

    #input-area {
      width: 70%;
      padding: 2em;
      padding-top: 1em;
      margin-bottom: 2em;
      border-radius: 10px;
      background-color: $layout-dark-turquoise;

      i {
        color: white;
        font-size: 6em;
      }

      input {
        height: 1.5em;
      }

      #input-text {
        width: 13em;
        margin-right: 2.2em;
      }

      #input-text-area {
        margin-top: 1em;
      }
    }
  }
}
</style>
