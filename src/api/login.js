import fetch from '@/utils/fetch'

// 登录
export const login = ({
  username,
  password
}) => fetch('/login/login', {
  username,
  password
})

// 获取用户信息
export const getUserInfo = (token) => fetch('/user/info', {
  token
}, 'get')
