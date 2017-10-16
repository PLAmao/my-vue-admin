<template>
  <footer class="app-footer">
    <h1 class="footer-left">
      SMAMS 2.0
    </h1>
    <icon-font name="dingbu" @click.native="toTop" class="footer-right"></icon-font>
  </footer>
</template>

<script>
export default {
  methods: {
    // 回到顶部
    toTop() {
      (function fun() {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop
        const step = Math.ceil(curHeight / 10)
        curHeight = curHeight - step <= 50 ? 0 : curHeight - step
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = curHeight
        } else {
          document.body.scrollTop = curHeight
        }
        if (curHeight > 0) {
          requestAnimationFrame(fun)
        }
      })()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.app-footer {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 0 20px;
  line-height: 54px;
  height: 54px;
  background-color: #fff;
}

.footer-left {
  float: left;
  color: $color-pl;
}

.footer-right {
  float: right;
  font-size: 20px;
  cursor: pointer;
}
</style>

