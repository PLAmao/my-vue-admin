const getters = {
  asidebarOpen: state => state.app.asidebarOpen,
  perfDataShow: state => state.app.perfDataShow,
  name: state => state.user.name,
  relation_account: state => state.user.relation_account,
  role: state => state.user.role
}
export default getters
