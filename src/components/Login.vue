<template>
  <div id="login">
    <el-card class="box-card">
      <el-divider content-position="center">系统登录</el-divider>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名:">
          <el-input placeholder="请输入..." v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input placeholder="请输入..." v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    password: String
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "Home" });
    }
  }
})
export default class Login extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #272822;
  .box-card {
    width: 480px;
    background: #202120;
  }
}
</style>
