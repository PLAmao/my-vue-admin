<template>
  <i class="iconfont" :class="iconName">
  </i>
</template>

<script>
export default {
  name: 'icon-font',
  props: {
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

