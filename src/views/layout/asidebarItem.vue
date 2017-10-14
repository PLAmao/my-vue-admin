<template>
  <div class='menu-wrapper'>
    <template v-for="(item,index) in routes">
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="getPath(item.path, item.children[0].path)" :key="index">
        <el-menu-item :index="getPath(item.path, item.children[0].path)" class='submenu-title-noDropdown'>
          <icon-font v-if="item.icon" :name="item.icon"></icon-font>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden" :key="index">
        <template slot="title">
          <icon-font v-if='item.icon' :name="item.icon"></icon-font><span>{{item.name}}</span>
        </template>
        <template v-for="(child,index) in item.children" v-if='!child.hidden'>

          <asidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]' :key="index"></asidebar-item>

          <router-link v-else :to="getPath(item.path, child.path)" :key="index">
            <el-menu-item :index="item.path+'/'+child.path">
              <icon-font v-if='child.icon' :name="child.icon"></icon-font>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>

        </template>

      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  // 组件的递归调用必须要有name
  name: 'asidebarItem',
  methods: {
    // 计算出路由的路径
    getPath(...args) {
      let path = ''
      for (const val of args) {
        if (val !== '/') {
          path += `/${val}`
        }
      }
      return path
    }
  },
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>
