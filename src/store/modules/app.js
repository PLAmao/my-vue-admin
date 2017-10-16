import Cookies from 'js-cookie'

const app = {
  state: {
    asidebarOpen: !+Cookies.get('asidebarOpen'), // 侧边栏是否展开
    perfDataShow: false // 顶部业绩数据是否显示
  },
  mutations: {
    SET_SLIDEBAR_OPEN(state) {
      // 用cookie记录侧边栏的状态
      if (state.asidebarOpen) {
        Cookies.set('asidebarOpen', 1)
      } else {
        Cookies.set('asidebarOpen', 0)
      }
      state.asidebarOpen = !state.asidebarOpen
    },
    SET_PERF_DATA_SHOW(state) {
      state.perfDataShow = !state.perfDataShow
    }
  },
  actions: {
    ToggleSideBar({ commit }) {
      commit('SET_SLIDEBAR_OPEN')
    },
    TogglePerfData({ commit }) {
      commit('SET_PERF_DATA_SHOW')
    }
  }
}
export default app
