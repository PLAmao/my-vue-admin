import Vue from 'vue'
import Router from 'vue-router'
// 开发环境不使用异步加载模块提高热加载速度，生产环境使用
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: '登录页',
    component: _import('login/index')
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: '首页',
    component: _import('dashboard/index')
  }]
})
