import axios from 'axios'
// import querystring from 'querystring'
import { baseUrl } from './env.js'
import store from '../store'

// 添加请求头
const instance = axios.create({
  baseURL: baseUrl, // 请求地址的基础路径
  timeout: 10000 // 请求超时时间
})

// 通过拦截器格式化参数
instance.interceptors.request.use(config => {
  // post请求就格式化数据
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // config.data = querystring.stringify(config.data)
  }
  // 让每个请求携带token
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

export default (url = '', data = {}, type = 'POST') => {
  return new Promise((resolve, reject) => {
    let httpPromist = null
    if (type.toUpperCase() === 'GET') {
      httpPromist = instance({
        method: type,
        url: url,
        params: data
      })
    } else {
      httpPromist = instance({
        method: type,
        url: url,
        data: data
      })
    }
    httpPromist.then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.code === 'ECONNABORTED' ? new Error('请求超时') : new Error('请求失败'))
    })
  })
}
