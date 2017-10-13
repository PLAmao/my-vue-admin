<template>
  <div class="app-wrapper" :class="{hideAsidebar: asidebarOpen}">
    <asidebar class="asidebar-container"></asidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import Asidebar from './asidebar'
import Navbar from './navbar'
import AppMain from './appMain'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['asidebarOpen'])
  },
  components: {
    Asidebar,
    Navbar,
    AppMain
  }
}
</script>

<style lang="scss">
$asidebar-width: 180px;
.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
    &.hideAsidebar {
      .asidebar-container{
				width:36px;
				overflow: hidden;
			}
			.main-container {
				margin-left: 36px;
			}
    }
    .asidebar-container {
      width: $asidebar-width;
      transition: width 0.28s ease-out;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
    }
    .main-container {
      margin-left: $asidebar-width;
      height: 100%;
      transition: margin-left .28s ease-out;
    }
}
</style>
