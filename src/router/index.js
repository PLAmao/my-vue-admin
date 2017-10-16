import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout'
import { routeMode } from '../utils/env'
// 开发环境不使用异步加载模块提高热加载速度，生产环境使用
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

 /**
  * icon : 侧边栏显示的图标
  * hidden : 如果为true，就不会显示在侧边栏
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : 如果为true，在侧边栏就不会有子菜单
  * meta : `{ role: ['admin'] }` 控制页面的权限
  **/
export const constantRouterMap = [
  {
    path: '/login',
    name: '登录页',
    hidden: true,
    component: _import('login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'index',
    icon: 'shouye',
    noDropdown: true,
    children: [{ path: 'index', component: _import('index/index'), name: '首页' }]
  },
  {
    path: '/',
    component: Layout,
    name: '会员管理',
    icon: 'huiyuan',
    children: [
      { path: 'AdvCustomer', redirect: 'AdvCustomer/index', hidden: true },
      { path: 'AdvCustomer/index', component: _import('advCustomer/index'), name: '广告客户管理' },
      { path: 'AdvUsers', redirect: 'AdvUsers/index', hidden: true },
      { path: 'AdvUsers/index', component: _import('advUsers/index'), name: '广告主账号管理' }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '平台账号管理',
    icon: 'pingtai',
    children: [
      {
        path: '/',
        component: _import('layout/routerView'),
        name: '批量导入管理',
        children: [
          { path: 'AccountBimport', redirect: 'AccountBimport/index', hidden: true },
          { path: 'AccountBimport/index', component: _import('accountBimport/index'), name: '账号批量导入' },
          { path: 'AccountLog', redirect: 'AccountLog/index', hidden: true },
          { path: 'AccountLog/index', component: _import('accountLog/index'), name: '导入日志管理' }
        ]
      }
    ]
  }
]

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    name: '会员管理',
    icon: 'huiyuan',
    children: [
      { path: 'AdvCustomer', redirect: 'AdvCustomer/index', hidden: true },
      { path: 'AdvCustomer/index', component: _import('advCustomer/index'), name: '广告客户管理' },
      { path: 'AdvUsers', redirect: 'AdvUsers/index', hidden: true },
      { path: 'AdvUsers/index', component: _import('advUsers/index'), name: '广告主账号管理' }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '平台账号管理',
    icon: 'pingtai',
    children: [
      {
        path: '/',
        component: _import('layout/routerView'),
        name: '批量导入管理',
        children: [
          { path: 'AccountBimport', redirect: 'AccountBimport/index', hidden: true },
          { path: 'AccountBimport/index', component: _import('accountBimport/index'), name: '账号批量导入' },
          { path: 'AccountLog', redirect: 'AccountLog/index', hidden: true },
          { path: 'AccountLog/index', component: _import('accountLog/index'), name: '导入日志管理' }
        ]
      }
    ]
  }
]

export default new Router({
  mode: routeMode,
  routes: constantRouterMap
})
