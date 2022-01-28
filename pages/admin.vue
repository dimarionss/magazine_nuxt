<template>
  <div class="magazine-wrap">
    <div class="container">
      <h1>ADMIN PAGE</h1>
      <Autorization />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default_nonoise',
  data() {
    return {}
  },
  head() {
    return {
      script: [
        {
          src: '/js/via.js',
          async: 'true',
        },
      ],
      htmlAttrs: {
        class: 'admin',
      },
    }
  },
  methods: {},
}
</script>
<style lang="scss">
.admin {
}
</style>
