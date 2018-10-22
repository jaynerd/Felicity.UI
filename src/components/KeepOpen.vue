<template>
    <div id="keep-open" class="view-max flex-column content-center">
        <div id="keepon-box" class="flex-column self-center">
            <img src="@/components/FelicityLogo.png"/>
            <span>Keep open to recieve notification</span>
        </div>
    </div>
</template>

<script>
import Notifier from "@/assets/scripts/js/Notifier.js";

export default {
  name: "KeepOpen",
  methods: {
    recieveMessage: function(event) {
      if (event.source.name == "NotificationPopUp") {
        if (event.data.type == "Postpone") {
          this.notifier.postpone(event.data.time);
        } else if (event.data.type == "Submit") {
          window.open(window.origin + "/submission");
        }
      }
    }
  },
  data() {
    return {
      notifier: new Notifier()
    };
  },
  mounted() {
    setTimeout(() => {
      this.notifier.startSubmissionSequence();
    }, 6000);
    window.addEventListener("message", this.recieveMessage, false);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scripts/css/styles.scss";

#keepon-box {
  text-align: center;

  img {
    width: 30em;
    margin: 1em 0em;
  }

  span {
    font-size: 1em;
    color: darkgray;
  }
}
</style>
