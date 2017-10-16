<template>
  <header class="app-header">
    <icon-font name="zuozuo" class="header-left" @click.native="goBack"></icon-font>
    <div class="header-middle" @click="TogglePerfData">
      <div class="rect-group1"></div>
      <div class="rect-group2"></div>
    </div>
    <div class="header-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="dropdown-title">
          下拉菜单
          <icon-font name="xia"></icon-font>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">修改密码</el-dropdown-item>
          <el-dropdown-item command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="header-hide flex flex-align-center flex-pack-justify">
      <div class="perf-item">
        <div class="perf-icon"></div>
        <div class="perf-title">本月收入</div>
        <div class="perf-data">26.329.134.00</div>
      </div>
      <div class="perf-item">
        <div class="perf-icon"></div>
        <div class="perf-title">本月成本</div>
        <div class="perf-data">26.329.134.00</div>
      </div>
      <div class="perf-item">
        <div class="perf-icon"></div>
        <div class="perf-title">本月成本</div>
        <div class="perf-data">26.329.134.00</div>
      </div>
      <div class="perf-item">
        <div class="perf-icon"></div>
        <div class="perf-title">本月垫款</div>
        <div class="perf-data">26.329.134.00</div>
      </div>
      <div class="perf-item">
        <div class="perf-icon"></div>
        <div class="perf-title">本月毛利率</div>
        <div class="perf-data">26.329.134.00</div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import { logout } from '@/api/login/index'

export default {
  methods: {
    ...mapActions(['TogglePerfData']),
    // 下拉菜单的点击处理
    handleCommand(command) {
      switch (command) {
        case 'a':
          this.changePwd()
          break
        case 'b':
          this.logout()
          break
      }
    },
    // 后退
    goBack() {
      this.$router.go(-1)
    },
    // 修改密码
    changePwd() {
      console.log(111)
    },
    // 退出登录
    logout() {
      this.$http(logout(), (res) => {
        this.$message({
          message: res.msg,
          type: 'success'
        })
        // 返回登录页
        this.$router.push('/login')
      })
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.app-header {
  background-color: #fff;
  padding-left: 20px;
  padding-right: 30px;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
}

.header-left {
  float: left;
  cursor: pointer;
  font-size: 24px;
  color: $color-icon;
}

.header-right {
  width: 100px;
  float: right;
  .dropdown-title {
    cursor: pointer;
    line-height: inherit;
  }
}
.header-middle {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -60px;
  width: 60px;
  height: 59px;
  line-height: 1px;
  cursor: pointer;
  transition: background-color .28s ease-out;
}
.showPerf .header-middle {
  background-color: $color-bg;
}
.rect-group1,
.rect-group2 {
  text-align: center;
  &::before, &::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
  }
  &::before {
    margin-right: 2px;
  }
}
.rect-group1 {
  margin-top: 25px;
  margin-bottom: 2px;
  &::before {
    background-color: $color-primary1;
  }
  &::after {
    background-color: $color-success;
  }
}
.rect-group2 {
  &::before {
    background-color: $color-danger;
  }
  &::after {
    background-color: $color-info;
  }
}
.header-hide {
  border-top: 1px solid $color-line;
  clear: both;
  background-color: #fff;
  position: relative;
  top: -1px;
  height: 120px;
  margin-left: -20px;
  margin-right: -30px;
  padding-left: 25px;
  padding-right: 88px;
}
.perf-item {
  position: relative;
  padding-left: 58px;
  line-height: 1.5;
  text-align: left;
  .perf-icon {
    position: absolute;
    left: 0;
    width: 48px;
    height: 48px;
    background-color: aqua;
  }
  .perf-title {
    color: $color-title;
  }
  .perf-data {
    font-size: 20px;
    color: $color-title;
    font-weight: bold;
  }
}
</style>
