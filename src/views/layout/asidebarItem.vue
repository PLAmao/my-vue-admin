<template>
  <div class='menu-wrapper'>
    <template v-for="(item,index) in routes">
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="getPath(item.path, item.children[0].path)" :key="index">
        <el-menu-item :index="getPath(item.path, item.children[0].path)" class='submenu-title-noDropdown'>
          <icon-font v-if="item.icon" :name="item.icon"></icon-font>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>

    </template>
  </div>
</template>
<script>
export default {
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
