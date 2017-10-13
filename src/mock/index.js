import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '300-600'
})

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)

export default Mock
