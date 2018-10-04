<template>
    <v-stage :config="configStage">
        <v-layer>
            <v-circle :config="configFace"></v-circle>
            <v-ellipse :config="configLEye"></v-ellipse>
            <v-ellipse :config="configREye"></v-ellipse>
            <v-line :config="configLips"></v-line>
        </v-layer>
    </v-stage>
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
      data.configLEye = control.leftEyeConfig;
      data.configREye = control.rightEyeConfig;
      data.configLips = control.lipConfig;
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
</script>
