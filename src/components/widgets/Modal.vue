<template>
    <div id="modal" class="modal-mask">
        <div class="modal-dialog">
            <div class="modal-header">
                <h3><slot name="title" /></h3>
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
            <div class="modal-footer">
                <button @click="btn1Click">{{btn1Text}}</button>
                <button v-if="btn2Text" @click="btn2Click">{{btn2Text}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
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

<style lang="scss" scoped>
@import "../../assets/scripts/css/styles.scss";

$light-text: #f5f5f5;
$dark-background: rgb(17, 76, 110);

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-dialog {
  width: 500px;
  height: 200px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  //   margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  //   left: 0;
  //   right: 0;
  //   margin-top: 10em; /* Negative half of height. */
  //   margin-left: 10em; /* Negative half of width. */
  border: 1px solid black;
  background-color: white;
  //   margin-left: 38%;
  //   margin-top: 50px;
}

button {
  margin: 0.3em;
  border: none;
  font-size: 15px;
  padding: 8px 12px;

  background-color: $dark-background;
  color: $light-text;
}

.modal-header {
  padding: 8px;
  background-color: $dark-background;
  color: $light-text;

  h3 {
    margin: 5px 5px 5px 20px;
  }
}

.modal-body {
}

.modal-footer {
  flex-flow: row-reverse;
  padding: 4px;
}
</style>
