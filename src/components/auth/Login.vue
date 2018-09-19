<template>
    <div id="login" class="view-max flex-column content-center">
        <div id="login-box" class="flex-column self-center">
            <h3 class="flex-1 self-center clip">Access Denied</h3>
            <h2 class="flex-1 self-center">Please Login Below</h2>
            <div id="input-box" class="flex-column flex-3 self-center">
                <i class="self-center material-icons">account_circle</i>
                <div id="input-text-box" class="flex-column">
                    <div id="input-text" class="flex-space self-center">
                        <h4 class="flex-1 self-center">ID:</h4>
                        <input class="flex-1 self-center" type="text"/>
                    </div>
                    <div id="input-text" class="flex-space self-center">
                        <h4 class="flex-1 self-center">PW:</h4>
                        <input class="flex-1 self-center" type="password"/>
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
  background-color: $layout-dark;

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

    #input-box {
      width: 70%;
      padding: 2em;
      padding-top: 1em;
      margin-bottom: 2em;
      border-radius: 10px;
      background-color: $layout-turquoise;

      i {
        font-size: 6em;
        color: $layout-light;
      }

      #input-text-box {
        margin-top: 1em;

        #input-text {
          width: 13em;
          margin-right: 2.2em;

          h4 {
            color: $layout-light;
            font-family: "Rajdhani", sans-serif;
          }

          input {
            height: 1.5em;
          }
        }
      }
    }
  }
}
</style>
