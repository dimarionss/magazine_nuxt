<template>
  <div class="autorization">
    <form @submit.prevent="authSubmit">
      <div class="autorization-controls">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="dataForm.email" required />
      </div>
      <div class="autorization-controls">
        <label for="password">Password</label>
        <input id="password" type="text" v-model="dataForm.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dataForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async authSubmit(e) {
      if (
        this.dataForm.email === 'test@gmail.com' &&
        this.dataForm.password === '123'
      ) {
        this.$store.commit('magazine/stateAuth', true)
      } else {
        // const response = await this.$store.dispatch(
        //   'magazine/authAdmin',
        //   this.dataForm
        // )
        console.log(this.dataForm)
      }
    },
  },
}
</script>

<style lang="scss">
.autorization {
  width: 100%;
  max-width: 550px;
  background: #333;
  padding: 35px;
  border-radius: 20px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    margin-bottom: 20px;
  }
  label {
    color: #fff;
  }
}
</style>

