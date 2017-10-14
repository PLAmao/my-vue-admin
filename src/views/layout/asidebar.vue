<template>
  <el-menu theme="dark"  :collapse="asidebarOpen" unique-opened>
      <icon-font @click.native="ToggleSideBar" name="caidan" class="collapse-btn"></icon-font>
      <asidebar-item :routes="routes"></asidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['ToggleSideBar'])
  },
  components: {
    AsidebarItem
  }
}
</script>
