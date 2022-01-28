<template>
  <div class="autorization">
    <el-form>
      <el-form-item label="Email">
        <el-input v-model="email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input placeholder="password" v-model="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="authSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    authSubmit() {
      console.log('hello')
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
  label {
    color: #fff;
  }
}
</style>

