<template>
  <div class="magazine-wrap">
    <div class="container">
      <h1>ADMIN PAGE</h1>
      <!-- <Autorization /> -->
      <AdminPage />
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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,900');
.admin {
  body {
    font-family: Raleway, sans-serif;
  }
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
