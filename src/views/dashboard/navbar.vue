<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" @click="ToggleSideBar"></hamburger>
  </el-menu>
</template>
  
<script>
import Hamburger from '../../components/Hamburger'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['ToggleSideBar'])
  },
  components: {
    Hamburger
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
