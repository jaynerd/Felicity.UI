<template>
    <div id="login" class="view-max flex-column content-center">
        <div id="login-box" class="flex-column self-center">
            <h3 class="flex-1 self-center clip">Access Denied</h3>
            <h2 class="flex-1 self-center">Please <span style="color:red;">Login</span> Below</h2>
            <div id="input-box" class="flex-column flex-3 self-center content-center">
                <i class="self-center material-icons">account_circle</i>
                <div id="input-text-box" class="flex-column">
                    <div id="input-text" class="flex-space self-center">
                        <h4 class="flex-1 self-center">ID:</h4>
                        <input class="flex-1 self-center" type="text" v-model="credential.username" @input="setUsername($event.target.value)"/>
                    </div>
                    <div id="input-text" class="flex-space self-center">
                        <h4 class="flex-1 self-center">PW:</h4>
                        <input class="flex-1 self-center" type="password" v-model="credential.password" @input="setPassword($event.target.value)"/>
                    </div>
                </div>
                <div id="button-box" class="flex-space self-center">
                    <button class="login" type="success" @click="access()">
                        Log in
                    </button>
                    <button class="signup" type="button">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    setUsername(value) {
      this.credential.username = value;
    },
    setPassword(value) {
      this.credential.password = value;
    },
    access() {
      debugger;
      Login(this.axios, this.credential, response => {
        if (response) {
          alert(response);
        }
      });
      // this.credential.username = "";
      // this.credential.password = "";
    }
  },
  data() {
    return {
      credential: {
        username: "",
        password: ""
      }
    };
  }
};

function Login(axios, credential, callback) {
  axios.post("api/auth/login", credential).then(axiosResponse => {
    let resp = axiosResponse.data;
    callback(resp);
  });
}
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#login {
  background-color: $layout-dark;

  #login-box {
    width: 30em;
    height: 30em;
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
      font-size: 3em;
      padding-top: 0.5em;
      background-color: black;
    }

    #input-box {
      width: 15em;
      padding: 2em;
      padding-top: 1em;
      margin-bottom: 2em;
      border-radius: 10px;
      background-color: $layout-turquoise;

      i {
        font-size: 5.5em;
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
            background-color: #eee;
          }
        }
      }

      #button-box {
        button {
          width: 5em;
          height: 2em;
          color: #333;
          padding: 10px 20px;
          margin: 1em 1.5em 0em 1.5em;
          border: 1px solid #ddd;
          background-color: $layout-light;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        }

        button:active {
          transform: translateY(1px);
        }

        .login {
          padding: 0;
          color: #fff;
          background-color: #13ce66;
        }

        .login:hover {
          background-color: #49fa98;
        }

        .signup {
          padding: 0;
          color: #fff;
          background-color: #50bfff;
        }

        .signup:hover {
          background-color: #8ed5ff;
        }
      }
    }
  }
}
</style>
