<template>
    <div id='invite' class='view-max flex-column content-center'>
        <div id='invite-box' class='flex-column self-center'>
            <h2 class='flex-1 self-center'>Enter Team Invitation Code</h2>
            <div id='input-box' class='flex-column flex-3 self-center'>
                <i class='self-center material-icons'>account_circle</i>
                <div id='input-text-box' class='flex-column'>
                    <div id='input-text' class='flex-space self-center'>
                        <input class='flex-1 self-center' type='text' placeholder="Organisation" @input='setInviteCode($event.target.value)'/>
                    </div>
                    <div id='input-text' class='flex-space self-center'>
                        <input class='flex-1 self-center' type='text' placeholder="Personal Code" @input='setInviteCode($event.target.value)'/>
                    </div>
                </div>
                <div id='button-box' class='flex-space self-center'>
                    <button id='submit' type='success' @click='submitCode()'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Invitation",
  methods: {
    setInviteCode: function(value) {
      this.inviteCode = value;
    },
    submitCode: function() {
      this.$bus.$emit("authenticated");
    }
  },
  data() {
    return {
      inviteCode: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#invite {
  // background-color: $app-dark;

  #invite-box {
    width: 30em;
    height: 25em;
    border-radius: 20px;
    background-color: $app-main;

    h2 {
      margin: 1em;
      font-size: 2em;
      font-family: "Rajdhani", sans-serif;
      color: black;
    }

    #input-box {
      width: 15em;
      padding: 2em;
      padding-top: 1em;
      margin-bottom: 1.5em;
      border-radius: 15px;
      background-color: $app-turquoise;

      i {
        font-size: 5.5em;
        color: $app-main;
      }

      #input-text-box {
        margin-top: 1em;

        #input-text {
          margin: 0.5em 0em;
          width: 13em;

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

        #submit {
          padding: 0;
          background-color: #0b9248;
        }

        #submit:hover {
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

