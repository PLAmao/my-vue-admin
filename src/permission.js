import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'

const whiteList = ['/login'] // 不重定向的白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启nprogress

  if (getToken()) {
    if (to.path === '/login') { // 登录过就不能进入登录页，进入首页
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('getUserInfo', getToken()).then(res => {
          console.log(res)
          next()
        }).catch(() => {
          next({ path: '/login' })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向登录页
      NProgress.done() // 在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
