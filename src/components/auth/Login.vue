<template>
    <div id='login' class='view-max flex-column content-center'>
        <div id='login-box' class='flex-column self-center'>
            <h3 class='flex-1 self-center clip'>Access Denied</h3>
            <h2 class='flex-1 self-center'>Please <span style='color:red;'>Login</span> Below</h2>
            <div id='input-box' class='flex-column flex-3 self-center'>
                <i class='self-center material-icons'>account_circle</i>
                <div id='input-text-box' class='flex-column'>
                    <div id='input-text' class='flex-space self-center'>
                        <h4 class='flex-1 self-center'>ID:</h4>
                        <input class='flex-1 self-center' type='text' v-model='credential.username' @input='setUsername($event.target.value)'/>
                    </div>
                    <div id='input-text' class='flex-space self-center'>
                        <h4 class='flex-1 self-center'>PW:</h4>
                        <input class='flex-1 self-center' type='password' v-model='credential.password' @input='setPassword($event.target.value)'/>
                    </div>
                </div>
                <div id='button-box' class='flex-space self-center'>
                    <button id='log-in' type='success' @click='logIn()'>
                        Log in
                    </button>
                    <button id='sign-up' type='button' @click='signUp()'>
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
    logIn() {
      LogIn(this.axios, this.credential, response => {
        alert("Login information verified");
        this.$bus.$emit("logging-in");
      });
    },
    signUp() {
      SignUp(this.axios, this.credential, response => {
        alert("Account successfully registered");
        // this.$bus.$emit('signing-up');
      });
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

function LogIn(axios, credential, callback) {
  axios.post("api/auth/login", credential).then(axiosResponse => {
    let resp = axiosResponse.data;
    resp.userName != null ? callback(resp) : alert(resp);
  });
}

function SignUp(axios, credential, callback) {
  axios.post("api/user/createuser", credential).then(axiosResponse => {
    let resp = axiosResponse.data;
    resp === true ? callback(resp) : alert(resp);
  });
}
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#login {
  background-color: $app-dark;

  #login-box {
    width: 30em;
    height: 30em;
    border-radius: 20px;
    background-color: $app-main;

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
      background-color: $app-turquoise;

      i {
        font-size: 5.5em;
        color: $app-main;
      }

      #input-text-box {
        margin-top: 1em;

        #input-text {
          width: 13em;
          margin-right: 2.2em;

          h4 {
            color: $app-main;
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

        #log-in {
          padding: 0;
          background-color: #0b9248;
        }

        #log-in:hover {
          background-color: #23c96d;
        }

        #sign-up {
          padding: 0;
          background-color: #2991ce;
        }

        #sign-up:hover {
          background-color: #57a4d1;
        }
      }
    }
  }
}
</style>
