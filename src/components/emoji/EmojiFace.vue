<template>
  <div id='emoji' class="self-center">
    <v-stage :config="configStage">
        <v-layer>
            <v-circle :config="configFace"></v-circle>
            <v-ellipse :config="configLEye"></v-ellipse>
            <v-ellipse :config="configREye"></v-ellipse>
            <v-line :config="configLips"></v-line>
        </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  name: "EmojiFace",
  props: {
    emojiControl: Object
  },
  data() {
    return {
      configStage: {},
      configFace: {},
      configLEye: {},
      configREye: {},
      configLips: {}
    };
  },
  mounted() {
    let control = this.$props.emojiControl;

    control.$on("faceUpdate", this.drawFace);
    control.$on("happyChange", this.handleHappyChange);

    this.drawFace();
  },
  methods: {
    handleHappyChange: function() {
      let control = this.$props.emojiControl;
      let data = this.$data;

      let happyDelta = control.currentHappy - control.oldHappy;

      if (happyDelta > 0) {
        for (let i = control.oldHappy + 1; i <= control.currentHappy; i++) {
          setTimeout(() => renderEmoji(data, control, i), 50);
        }
      } else if (happyDelta < 0) {
        for (let i = control.oldHappy - 1; i >= control.currentHappy; i--) {
          setTimeout(() => renderEmoji(data, control, i), 50);
        }
      } else renderEmoji(data, control, control.currentHappy);
    },
    drawFace: function() {
      let control = this.$props.emojiControl;
      let data = this.$data;
      data.configStage = control.stageConfig;
      data.configFace = control.faceConfig;
      this.handleHappyChange();
    }
  }
};

let renderEmoji = function(data, control, happiness) {
  data.configLEye = control.leftEyeConfig(happiness);
  data.configREye = control.rightEyeConfig(happiness);
  data.configLips = control.lipConfig(happiness);
};
</script>