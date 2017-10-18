<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :rules="rules" :model="formData">
      <h1 class="tc f18 mb20">SIG - 社媒广告管理系统</h1>
      <el-form-item class="rel" prop="username">
        <icon-font name="yonghu" class="svg-icon"/>
        <el-input v-model="formData.username" auto-complete="on" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <icon-font name="quanxian"  class="svg-icon"/>
        <el-input v-model="formData.password" :type="pwdType" placeholder="密码" auto-complete="on"></el-input>
        <icon-font name="chakan"  class="svg-icon svg-icon-after" @click.native="showPwd"/>
      </el-form-item>
      <el-form-item prop="verify_code">
        <div class="flex">
          <el-input v-model="formData.verify_code"  placeholder="验证码" :maxlength="4"></el-input>
          <img class="code-img" ref="codeImg" :src="codeImgUrl" alt="" @click="changeImg">
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="pct100" :loading="loading" type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { codeImgUrl, login } from '@/api/login/index'

export default {
  name: 'login',
  data() {
    return {
      formData: {
        username: '',
        password: '',
        verify_code: ''
      },
      codeImgUrl,
      pwdType: 'password',
      rules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        verify_code: [{ required: true, trigger: 'blur', message: '验证码不能为空' }]
      },
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$http(login(this.formData), res => {
            // 登录成功，跳转到主页
            this.loading = false
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.$router.push({ path: '/index' })
          }, () => {
            // 登录失败，更换验证码
            this.loading = false
            this.changeImg()
          })
        } else {
          return false
        }
      })
    },
    // 显示密码
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    // 改变验证码
    changeImg() {
      this.$refs.codeImg.src = `${codeImgUrl}?v=${+new Date()}`
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables.scss';
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  input {
    padding: 0 35px;
  }
  .login-form {
    background-color: #fff;
    padding: 48px 24px;
    width: 368px;
    margin: 120px auto;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
  }
  .svg-icon {
    position: absolute;
    left: 10px;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }
  .svg-icon-after {
    left: auto;
    right: 10px;
    cursor: pointer;
  }
  .code-img {
    height: 36px;
    margin-left: 20px;
  }
}
</style>
