<template>
    <div>
        <v-stage :config = "configStage">
            <v-layer :config = "configLayer">
                <v-circle :config = "configSkin"></v-circle>
                <v-circle :config = "configLEye"></v-circle>
                <v-circle :config = "configREye"></v-circle>
                <v-line :config = "configLips"></v-line>
            </v-layer>
        </v-stage>
    </div>
</template>

<script>
export default {
  name: "SmileyFace",
  props: {
    smileyRadius: Number
  },
  data() {
    return {
      configStage: {
        name: "smileyStage",
        width: this.smileyRadius * 2,
        height: this.smileyRadius * 2
      },
      configLayer: {
        name: "configLayer"
      },
      configSkin: {
        name: "smileySkin",
        x: this.smileyRadius,
        y: this.smileyRadius,
        radius: this.smileyRadius,
        fill: "yellow"
      },
      configLEye: {
        name: "leftEye",
        x: this.smileyRadius * 2 / 3,
        y: this.smileyRadius * 2 / 3,
        radius: this.smileyRadius / 6,
        fill: "black"
      },
      configREye: {
        name: "rightEye",
        x: this.smileyRadius * 4 / 3,
        y: this.smileyRadius * 2 / 3,
        radius: this.smileyRadius / 6,
        fill: "black"
      },
      configLips: {
        name: "smileyLips",
        offsetX: -this.smileyRadius,
        offsetY: -this.smileyRadius * 3 / 2,
        points: [
          -this.smileyRadius * 2 / 3,
          0,
          0,
          0,
          this.smileyRadius * 2 / 3,
          0
        ],
        stroke: "black",
        tension: 0.75
      }
    };
  }
};
</script>