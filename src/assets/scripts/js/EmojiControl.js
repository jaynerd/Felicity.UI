import Vue from "vue";

export default class EmojiController extends Vue {
  constructor() {
    super();

    this.emojiRadius = window.innerHeight / 7;
    this.stageOffset = this.emojiRadius / 80;

    this.happiness = 50;
  }

  setHappiness(newHappiness) {
    this.happiness = newHappiness;
  }

  get faceRadius() {
    return this.emojiRadius;
  }

  get stageConfig() {
    let stageSize = this.emojiRadius * 2 + this.stageOffset * 2;
    return {
      width: stageSize,
      height: stageSize
    };
  }

  get faceConfig() {
    let centreStage = this.stageOffset + this.emojiRadius;
    return {
      x: centreStage,
      y: centreStage,
      radius: this.emojiRadius,
      fillLinearGradientStartPoint: {
        x: this.emojiRadius + this.stageOffset,
        y: -this.emojiRadius
      },
      fillLinearGradientEndPoint: {
        x: this.emojiRadius + this.stageOffset,
        y: this.emojiRadius * 2 + this.stageOffset * 2
      },
      fillLinearGradientColorStops: [0, "white", 0.5, "yellow"],
      stroke: "black",
      strokeWidth: this.stageOffset
    };
  }

  get leftEyeConfig() {
    return eyeConfig(
      (this.emojiRadius * 2) / 3,
      this.emojiRadius,
      this.happiness
    );
  }

  get rightEyeConfig() {
    return eyeConfig(
      (this.emojiRadius * 4) / 3,
      this.emojiRadius,
      this.happiness
    );
  }

  get lipConfig() {
    let lipHalfHeight = this.emojiRadius / 6;
    let lipHalfWidth = (this.emojiRadius * 2) / 4;
    let lipMid = map(this.happiness, 0, 100, -lipHalfHeight, lipHalfHeight);
    let lipSides = -lipMid;

    return {
      offsetX: -this.emojiRadius,
      offsetY: -(this.emojiRadius * 3) / 2,
      tension: 0.8,
      stroke: "black",
      strokeWidth: this.stageOffset,
      points: [-lipHalfWidth, lipSides, 0, lipMid, lipHalfWidth, lipSides]
    };
  }
}

let eyeConfig = (position, emojiRadius, happiness) => {
  let eyeRadius = emojiRadius / 6;
  let eyeDelta = eyeRadius / 6;
  let eyeOffset = map(happiness, 0, 100, -eyeDelta, eyeDelta);

  return {
    x: position,
    y: (emojiRadius * 2) / 3,
    fill: "black",
    radius: {
      x: eyeRadius - eyeOffset,
      y: eyeRadius + eyeOffset
    }
  };
};

let map = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
