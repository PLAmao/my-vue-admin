import Vue from 'vue'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import IconFont from './components/Icon-font'
import './permission'
import './mock'

import 'normalize.css/normalize.css'
import './assets/styles/index.scss'

Vue.config.productionTip = false

// 全局注册图标字体组件
Vue.component('icon-font', IconFont)
Vue.use(ElementUI)

// 统一的网络请求处理
Object.defineProperty(Vue.prototype, '$http', {
  value: function(requestPromise, successCallback, errorCallback) {
    requestPromise.then(res => {
      if (!res) return
      // 针对有status属性的情况
      if (res.status && res.status === 1) {
        successCallback && successCallback(res)
      } else if (res.data) {
        // 针对没有status的情况
        successCallback && successCallback(res)
      } else {
        // 其他情况，当成错误信息显示
        throw new Error(res.msg || '')
      }
    }).catch(err => {
      // 显示错误信息
      Message({
        message: err.message,
        type: 'error',
        duration: 5 * 1000
      })
      errorCallback && errorCallback(err)
    })
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
