<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import Noise from '@/assets/js/noise.js'
export default {
  data() {
    return {
      myNoise: '',
    }
  },
  mounted() {
    this.myNoise = new Noise('#__layout', {
      tileSize: 100,
      classList: ['noise'],
    })
  },
}
</script>
<style lang="scss">
.noise {
  display: block;
  position: fixed;
  // z-index: -1;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
