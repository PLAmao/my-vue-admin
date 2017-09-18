import axios from 'axios'
import querystring from 'querystring'
import { baseUrl } from './env.js'
import Vue from 'vue'
import store from '../store'

//添加请求头
const instance = axios.create({
  baseURL: baseUrl, //请求地址的基础路径
  timeout: 10000,   //请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})
//通过拦截器格式化参数
instance.interceptors.request.use(config => {
  //post请求就格式化数据
  config.method === 'post' && (config.data = querystring.stringify(config.data))
  return config
}, function (error) {
  return Promise.reject(error)
})
export default (url = '', data = {}, type = "POST") => {
  return new Promise((resolve, reject) => {
    store.commit('FETCH_COUNT', {
      count: store.state.fetchCount + 1
    })
    instance({
      method: type,
      url: url,
      data: data
    }).then(res => {
      store.commit('FETCH_COUNT', {
        count: store.state.fetchCount - 1
      })
      resolve(res.data)
    }).catch(err => {
      store.commit('FETCH_COUNT', {
        count: store.state.fetchCount - 1
      })
      reject(err.code == 'ECONNABORTED' ? new Error('请求超时') : new Error('请求失败'))
    })
  })
}
