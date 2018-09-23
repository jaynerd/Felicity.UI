<template>
    <div id='modal' class='view-max'>
        <div id='box' class='flex-column content-center'>
            <div id='header' class='flex-1 self-center'> 
                <h3><slot name='title'/></h3>
            </div>
            <div id='body' class='flex-4 self-center'>
                <slot name='body'/>
                <div class="flex-column">
                    <h3>Q: Are you happy today?</h3>
                    <input type="text"/>
                    <app-slider class=""/>
                </div>
            </div>
            <div id='footer' class='flex-1 self-center'>
                <button @click='btn1Click'>{{btn1Text}}</button>
                <button v-if='btn2Text' @click='btn2Click'>{{btn2Text}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
  name: "Modal",
  components: {
    "app-slider": Slider
  },
  data() {
    return {
      btn1Text: "",
      btn1Callback: null,
      btn2Text: "",
      btn2Callback: null
    };
  },
  methods: {
    btn1Click() {
      if (this.btn1Callback) this.btn1Callback();
      this.$el.remove();
    },
    btn2Click() {
      if (this.btn2Callback) this.btn2Callback();
      this.$el.remove();
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#modal {
  top: 0;
  left: 0;
  margin: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);

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

    #header {
      color: $app-main;
      background-color: $app-dark;

      h3 {
        margin: 0;
      }
    }

    #body {
      width: 100%;
      border: 2px solid gray;
    }

    #footer {
      button {
        margin: 0.3em;
        font-size: 15px;
        padding: 8px 12px;
        color: $app-main;
        background-color: $app-dark;
      }
    }
  }
}
</style>
