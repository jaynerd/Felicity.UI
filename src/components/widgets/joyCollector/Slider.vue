
<template>
  <div>
    <VueSlideBar
      v-model="value2"
      :min="1"
      :max="10"
      :processStyle="slider.processStyle"
      :lineHeight="slider.lineHeight"
      :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }">
    </VueSlideBar>
    <h2>Value: {{value2}}</h2>
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  data () {
    return {
      value2: 8,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: 'red'
        }
      }
    }
  },
  components: {
    VueSlideBar
  }
}
</script>