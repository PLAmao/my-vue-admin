import { getUserInfo } from '../../api/login'

const user = {
  state: {
    name: '',
    relation_account: '',
    role: ''
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name
    },
    SET_RELATION_ACCOUNT(state, relation_account) {
      state.relation_account = relation_account
    },
    SET_ROLE(state, role) {
      state.role = role
    }
  },
  actions: {
    async GetUserInfo({ commit, state }) {
      try {
        const data = await getUserInfo()
        if (data && data.status === 1) {
          const loginInfo = data.data.login_info
          commit('SET_NAME', loginInfo.name)
          commit('SET_RELATION_ACCOUNT', loginInfo.relation_account)
          commit('SET_ROLE', loginInfo.role)
          return Promise.resolve(data)
        } else {
          return Promise.reject('获取用户信息失败')
        }
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}

export default user
