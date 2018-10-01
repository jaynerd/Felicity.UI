<template>
    <div id='smile' class='view-max'>
        <div id='box' class='flex-column content-center'>
            <div id='header' class='flex-1 self-center'>
                <h2>How satisfied are you?</h2>
            </div>
            <div id='body' class='flex-4 self-center'>
                <svg class='expression' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'>
                    <def>
                        <path id='sad' d='M34.773,41.5c-5.56,0.048 -11.298,8.712 -11.387,12l23,0c-0.243,-3.586 -6.249,-12.046 -11.613,-12Z' style='fill:#a0199c;'/>
                        <path id='happy' d='M35,55.5c5.56,-0.048 11.298,-8.711 11.386,-12l-23,0c0.243,3.586 6.25,12.046 11.614,12Z' style='fill:#a0199c;'/>
                        <path id='straight' d='M47.557,47.698c0,-0.661 -0.537,-1.198 -1.198,-1.198l-22.718,0c-0.661,0 -1.198,0.537 -1.198,1.198l0,0.604c0,0.661 0.537,1.198 1.198,1.198l22.718,0c0.661,0 1.198,-0.537 1.198,-1.198l0,-0.604Z' style='fill:#a0199c;'/>
                    </def>
                    <g>
                        <circle cx='35' cy='35' r='33.5' style='fill:none;stroke:#ffd700;stroke-width:3px;'/>
                        <ellipse cx='46.386' cy='29' rx='3.886' ry='4.5' style='fill:#ffd700;'/>
                        <ellipse cx='23.386' cy='29' rx='3.886' ry='4.5' style='fill:#ffd700;'/>
                        <path id='neutral' d='M47.557,47.698c0,-0.661 -0.537,-1.198 -1.198,-1.198l-22.718,0c-0.661,0 -1.198,0.537 -1.198,1.198l0,0.604c0,0.661 0.537,1.198 1.198,1.198l22.718,0c0.661,0 1.198,-0.537 1.198,-1.198l0,-0.604Z' style='fill:#ffd700;'/>
                    </g>
                </svg>
                <svg class='checkmark' viewBox='0 0 95 95' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <path id='mark' d='M16.5,54.5l11,16l50,-40' style='fill:none;stroke:#adff2f;stroke-width:5px;'/>
                        <circle cx='47.5' cy='47.5' r='45' style='fill:none;stroke:#adff2f;stroke-width:5px;'/>
                    </g>
                </svg>
                <input type='range' @input='changeMode'>
            </div>
            <div id='footer' class='flex-1 self-center'>
                <h5>Thanks for your feedback</h5>
                <button @click='swoosh'>Submit</button>
                <button>Ignore</button>
            </div>
        </div>
    </div>
</template>

<script>
import { TimeLineMax } from "gsap";

export default {
  name: "Smile",
  data() {
    return {
      tl: new TimelineMax()
    };
  },
  methods: {
    swoosh(e) {
      this.tl
        .to("button", 0.5, {
          color: "transparent",
          width: "38px",
          padding: "12px 0"
        })
        .to("input, h2, .expression", 0.3, { y: "-100px", opacity: 0 }, "-=0.1")
        .to("button", 0.5, { y: "-80px", scale: 0.2, opacity: 0 }, "-=0.2")
        .to(".checkmark", 1, { opacity: 1, scale: 1, ease: Elastic.easeOut })
        .to("h5", 1, { opacity: 1 });
    },
    changeMode(e) {
      const value = +e.target.value;
      const expression = document.querySelector(".expression");
      const newPosition = value * (300 / 100);

      expression.style.setProperty("--position", `${newPosition}px`);
      if (value < 30) {
        this.$kute
          .fromTo(
            "#neutral",
            { path: "#straight", fill: "#933" },
            { path: "#sad", fill: "#ff3" },
            {
              morphPrecision: 4,
              morphIndex: 4,
              yoyo: false,
              repeat: 0,
              easing: "easingCircularInOut",
              reverseSecondPath: true
            }
          )
          .start();
      } else if (value > 70) {
        this.$kute
          .fromTo(
            "#neutral",
            { path: "#straight", fill: "#933" },
            { path: "#happy", fill: "#ff3" },
            {
              morphPrecision: 4,
              morphIndex: 4,
              yoyo: false,
              repeat: 0,
              easing: "easingCircularInOut",
              reverseSecondPath: true
            }
          )
          .start();
      } else {
        this.$kute
          .fromTo(
            "#neutral",
            { path: "#neutral", fill: "#ff3" },
            { path: "#straight", fill: "#933" },
            {
              morphPrecision: 4,
              morphIndex: 4,
              yoyo: false,
              repeat: 0,
              easing: "easingCircularInOut",
              reverseFirstPath: true
            }
          )
          .start();
      }
    }
  },
  mounted() {
    this.tl
      .set(".checkmark", { scale: 0.08, opacity: 0 })
      .set("h5", { opacity: 0 });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

#smile {
  top: 0;
  left: 0;
  margin: 0;
  position: fixed;
  background-color: red;
  box-shadow: 0 3px 4px rgba(black, 0.4);
  // width: 360px;
  // height: 220px;
  // padding: 20px;
  // border-radius: 4px;
  // background: white;

  // text-align: center;
  #box {
    left: 50%;
    width: 30em;
    height: 20em;
    position: fixed;
    border-radius: 20px;
    border: 5px outset #ddd;
    background-color: $app-main;
    transform: translate(-50%, 50%);
    -ms-transform: translate(-50%, 50%);
    -moz-transform: translate(-50%, 50%);
    -webkit-transform: translate(-50%, 50%);
    box-shadow: #000 0 2px 20px;

    h2,
    h5 {
      margin: 0;
      color: gray;
      font-family: "Rajdhani", sans-serif;
    }

    .expression {
      --position: 150px;
      position: absolute;
      top: 60px;
      left: 30px;
      width: 40px;
      height: 40px;
      transform: translateX(var(--position));
      transition: transform 0.1s ease;
    }

    input {
      appearance: none;
      display: block;
      width: 300px;
      margin: 70px auto 30px;
      outline: none;

      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        background: darken(white, 10%);
        border-radius: 1px;
        transition: box-shadow 1s ease-in-out;
      }

      &::-webkit-slider-thumb {
        appearance: none;
        width: 30px;
        height: 30px;
        margin-top: -13px;
        border-radius: 50%;
        border: solid thin #ccc;
        background: white;
        cursor: pointer;
      }

      &:focus {
        &::-webkit-slider-runnable-track {
          background: darken(white, 15%);
        }

        &::-webkit-slider-thumb {
          box-shadow: 0 0 5px 8px rgba(black, 0.08);
        }
      }
    }

    button {
      padding: 12px 50px;
      border-radius: 50px;
      border: 0;
      background: linear-gradient(to left, #ce4ed0, #6a1a92);
      color: white;
      text-transform: uppercase;
      font-size: 12px;
      outline: none;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 60px;
      left: 0;
      right: 0;
      margin: auto;
    }

    h5 {
      position: absolute;
      left: 0;
      font-size: 2em;
      bottom: 50px;
      width: 100%;
      color: black;
    }
  }
}
</style>
