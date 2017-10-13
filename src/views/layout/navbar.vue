<template>
  <el-menu class="navbar" mode="horizontal">
  </el-menu>
</template>
  
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['ToggleSideBar'])
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
			height: 50px;
			line-height: 50px;
			border-radius: 0px !important;
      .hamburger-container {
					line-height: 58px;
					height: 50px;
					float: left;
					padding: 0 10px;
			}
  }
</style>
