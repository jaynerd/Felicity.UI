<template>
    <div id="login" class="vm cc vbox">
        <div id="login-box" class="sc vbox">
            <h3 class="sc flex-1">Please Login</h3>
            <div id="input-area" class="sc flex-3">
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
  background-color: red;

  #login-box {
    width: 60%;
    height: 80%;
    background-color: blue;

    h3 {
      margin: 0;
      padding-top: 0.5em;
      font-size: 3em;
    }

    #input-area {
      width: 70%;
      padding: 2em;
      margin-bottom: 2em;
      background-color: green;
    }
  }
}
</style>
