import Vue from 'vue'
import ElementUI from 'element-ui'
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

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
