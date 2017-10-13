import { param2Obj } from '@/utils'

const userMap = new Map()
userMap.set('admin', {
  role: ['admin'],
  token: 'admin',
  introduction: '我是超级管理员',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Super Admin'
})
userMap.set('editor', {
  role: ['editor'],
  token: 'editor',
  introduction: '我是编辑',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Normal Editor'
})
userMap.set('developer', {
  role: ['develop'],
  token: 'develop',
  introduction: '我是开发',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: '工程师小王'
})

export default {
  loginByUsername: config => {
    const {
      username
    } = JSON.parse(config.body)
    return userMap.get(username)
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap.get(token)) {
      return userMap.get(token)
    } else {
      return Promise.reject('error')
    }
  }
}
