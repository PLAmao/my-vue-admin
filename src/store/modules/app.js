// import Cookie from 'js-cookie'

const app = {
  state: {
    asidebarOpen: false
  },
  mutations: {
    SET_SLIDEBAR_OPEN(state) {
      state.asidebarOpen = !state.asidebarOpen
    }
  },
  actions: {
    ToggleSideBar({ commit }) {
      commit('SET_SLIDEBAR_OPEN')
    }
  }
}
export default app
