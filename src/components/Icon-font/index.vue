<template>
  <i class="iconfont" :class="iconName">
  </i>
</template>

<script>
export default {
  name: 'icon-font',
  props: {
    // 图标字体的类名的后半部分，如icon-shang，输入shang即可
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `icon-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.iconfont {
  color: $color-icon;
}
</style>

