import axios from 'axios'
import querystring from 'querystring'
import { baseUrl } from './env.js'

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
    config.data = querystring.stringify(config.data)
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

export default (url = '', data = {}, type = 'POST') => {
  return new Promise((resolve, reject) => {
    let httpPromise = null
    if (type.toUpperCase() === 'GET') {
      httpPromise = instance({
        method: type,
        url: url,
        params: data
      })
    } else {
      httpPromise = instance({
        method: type,
        url: url,
        data: data
      })
    }
    httpPromise.then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.code === 'ECONNABORTED' ? new Error('请求超时') : new Error('请求失败'))
    })
  })
}
