<template>
  <div id="app">
    <Flipbook
      class="flipbook"
      :pages="pages"
      v-slot="flipbook"
      ref="flipbook"
    ></Flipbook>
  </div>
</template>

<script>
import Flipbook from 'flipbook-vue'
export default {
  components: {
    Flipbook,
  },
  data() {
    return {
      pages: [
        require('@/assets/img/1.jpeg'),
        require('@/assets/img/2.jpg'),
        require('@/assets/img/3.jpeg'),
        require('@/assets/img/4.jpeg'),
        require('@/assets/img/5.jpeg'),
      ],
      pagesHiRes: [
        require('@/assets/img/1.jpeg'),
        require('@/assets/img/2.jpg'),
        require('@/assets/img/3.jpeg'),
        require('@/assets/img/4.jpeg'),
        require('@/assets/img/5.jpeg'),
      ],
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}
.flipbook {
  width: 60vw;
  height: calc(100vh - 50px - 40px);
}
.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
</style>
