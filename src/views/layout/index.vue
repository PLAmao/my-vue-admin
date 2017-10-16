<template>
  <div class="app-wrapper" :class="{hideAsidebar: asidebarOpen,showPerf: perfDataShow}">
    <asidebar class="asidebar-container"></asidebar>
    <app-header class="header-container"></app-header>
    <app-main class="main-container"></app-main>
    <app-footer class="footer-container"></app-footer>
  </div>
</template>

<script>
import Asidebar from './asidebar'
import AppHeader from './appHeader'
import AppMain from './appMain'
import AppFooter from './appFooter'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['asidebarOpen', 'perfDataShow'])
  },
  components: {
    Asidebar,
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables.scss';
$asidebar-width: 220px;
$asidebar-width-min: 60px;
$header-height-min: 60px;
$header-height: 180px;
.app-wrapper {
		position: relative;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding-top: $header-height-min;
    transition: padding-top .28s ease-out;
    &.hideAsidebar {
      .asidebar-container{
				width:$asidebar-width-min;
        overflow: inherit;
			}
			.main-container {
				margin-left: $asidebar-width-min;
      }
      .header-container {
        margin-left: $asidebar-width-min;
      }
      .footer-container {
        margin-left: $asidebar-width-min;
      }
    }
    .asidebar-container {
      width: $asidebar-width;
      padding-top: 60px;
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
    .header-container {
      position: fixed;
      height: $header-height-min;
      margin-left: $asidebar-width;
      transition: margin-left .28s ease-out,
                  height .28s ease-out;
      top: 0;
      left: 0;
      right: 0;
      
    }
    .footer-container {
      margin-left: $asidebar-width;
      transition: margin-left .28s ease-out;
    }
    &.showPerf {
      padding-top: $header-height;
      .header-container{
        height: $header-height;
      }
    }
    .collapse-btn {
      position: absolute;
      font-size: 24px;
      color: $color-pl;
      right: 20px;
      top: 10px;
      left: auto;
      cursor: pointer;
    } 
}
</style>
