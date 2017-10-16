import fetch from '@/utils/fetch'
import { baseUrl } from '../../utils/env'

/**
 * 验证码图片地址
 */
export const codeImgUrl = `${baseUrl}/User/captcha/type/login`

/**
 * 用户登录
 */
export const login = ({ username, password, verify_code }) => fetch('/User/login', {
  username,
  password,
  verify_code
})

/**
 * 获取用户信息
 */
export const getUserInfo = () => fetch('/Index/get_user_mobile_info', {})

/**
 * 退出登录
 */
export const logout = () => fetch('/User/logout', {})

