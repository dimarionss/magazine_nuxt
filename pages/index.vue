<template>
  <div>
    <Flip />
  </div>
</template>

<script>
export default {
  layout: 'default_nonoise',
  head() {
    return {
      script: [
        {
          src: '/js/via.js',
          async: 'true',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.geekoutevent {
  overflow-x: hidden;
  min-height: 100vh;

  &.no-scroll {
    height: 100% !important;
    overflow-y: scroll !important;

    body {
      height: 100% !important;
      overflow: hidden !important;
    }
  }
}
</style>
