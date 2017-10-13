<template>
  <div class="login-container">
    <el-form ref="form" class="login-form" :rules="rules" :model="formData">
      <h3 class="tc f24 wh mb20">系统登录</h3>
      <el-form-item class="rel" prop="username">
        <icon-svg icon-class="yonghuming" class="svg-icon"/>
        <el-input v-model="formData.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <icon-svg icon-class="mima"  class="svg-icon"/>
        <el-input v-model="formData.password" :type="pwdType" placeholder="密码"></el-input>
        <icon-svg icon-class="yanjing"  class="svg-icon svg-icon-after" @click.native="showPwd"/>
      </el-form-item>
      <el-form-item >
        <el-button class="pct100" :loading="loading" type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    const validataUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不小于6位'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        username: 'admin',
        password: '111111'
      },
      pwdType: 'password',
      rules: {
        username: [{ required: true, trigger: 'blur', validator: validataUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  methods: {
    ...mapActions(['login']),
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.login(this.formData).then(data => {
            this.$router.push({ path: '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
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
    }
  }
}
</script>

<style lang="scss">
$bg: #2d3a4b;

.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $bg;
  input {
    padding: 0 35px;
  }
  .login-form {
    padding: 35px 35px 15px 35px;
    width: 400px;
    margin: 120px auto;
  }
  .svg-icon {
    position: absolute;
    left: 10px;
    z-index: 1;
    top: 50%;
    margin-top: -8px;
  }
  .svg-icon-after {
    left: auto;
    right: 10px;
    cursor: pointer;
  }
}
</style>
