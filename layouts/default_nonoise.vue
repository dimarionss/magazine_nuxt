<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    if (localStorage.user === 'true') {
      this.$store.commit('magazine/stateAuth', true)
    }
  },
}
</script>
<style lang="scss">
</style>
