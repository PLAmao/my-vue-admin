<template>
  <el-menu theme="dark"  :collapse="asidebarOpen" unique-opened>
      <asidebar-item :routes="routes"></asidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import AsidebarItem from './asidebarItem'
import { constantRouterMap } from '../../router/index'

export default {
  data() {
    return {
      routes: constantRouterMap
    }
  },
  computed: {
    ...mapGetters(['asidebarOpen'])
  },
  components: {
    AsidebarItem
  }
}
</script>
