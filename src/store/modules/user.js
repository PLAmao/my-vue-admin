import { login, getUserInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_CODE(state, code) {
      state.code = code
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction
    },
    SET_SETTING(state, setting) {
      state.setting = setting
    },
    SET_STATUS(state, status) {
      state.status = status
    },
    SET_NAME(state, name) {
      state.name = name
    },
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_ROLES(state, roles) {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    async login({ commit }, userInfo) {
      try {
        const data = await login(userInfo)
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }, token) {
      try {
        const data = await getUserInfo(token)
        commit('SET_ROLES', data.role)
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_INTRODUCTION', data.introduction)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

export default user
