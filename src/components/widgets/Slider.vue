<template>
    <div id='slider'>
        <input type='range' min='1' max='100' value='50'/>
    </div>
</template>

<script>
export default {
  name: "Slider"
};
</script>

<style lang='scss' scoped>
@import "../../assets/scripts/css/styles.scss";

#slider {
  width: 100%;

  input {
    width: 100%;
    height: 1em;
    border-radius: 10px;
    background: red;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  input:hover {
    opacity: 1;
  }
}
</style>
