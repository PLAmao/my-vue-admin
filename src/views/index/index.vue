<template>
  <div>
    <h1>我是首页
    </h1>
    <form-slide style="width: 300px; margin-left:100px;" :min="0" :max="1000" title="阅读数" v-model="value"></form-slide>
    {{value}}
  </div>
</template>

<script>
import FormSlide from '../../components/FormSlide'

export default {
  data() {
    return {
      value: [20, 311]
    }
  },
  components: {
    FormSlide
  }
}
</script>

<style lang="scss" scoped>

</style>
