<template>
  <div class="form-slide">
    <div class="top">
      <div class="title">{{title}}</div>
      <div class="data">
        <input type="text" v-model.number="options.value[0]">
        <span></span>
        <input type="text" v-model.number="options.value[1]">
      </div>
    </div>
    <vue-slider class="slide" v-model="options.value" v-bind="options"></vue-slider>
    <div class="bottom">
      <div class="min">{{min}}</div>
      <div class="max">{{max}}</div>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'

export default {
  data() {
    return {
      options: {
        value: [this.$props.value[0] || this.$props.min, this.$props.value[1] || this.$props.max],
        width: 'auto',
        height: 4,
        dotSize: 16,
        tooltip: 'hover',
        min: this.$props.min,
        max: this.$props.max,
        disabled: this.$props.disabled,
        bgStyle: {
          backgroundColor: '#DAE0E6',
          boxShadow: 'none'
        },
        tooltipStyle: {
          backgroundColor: '#273A4D',
          borderColor: '#273A4D'
        },
        processStyle: {
          backgroundColor: '#00B8A8'
        }
      }
    }
  },
  components: {
    vueSlider
  },
  props: {
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 双向绑定的值
    value: {
      type: Array,
      default: []
    }
  },
  watch: {
    'value': {
      handler(val, oldVal) {
        this.options.value[0] = val[0] || 0
        this.options.value[1] = val[1] || 0
      },
      deep: true
    },
    'options.value': {
      handler(val, oldVal) {
        this.$emit('input', val)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
  .form-slide {
    .vue-slider-disabled .vue-slider-process{
      background-color: #B3BFCC!important;
    }
    .top {
      overflow: hidden;
    }
    .title {
      color: #53708C;
      font-weight: bold;
      float: left;
      line-height: 28px;
    }
    .slide {
      clear: both;
      margin-top: 10px;
      padding: 8px 0!important;
    }
    .data {
      float: right;
      input {
        width: 84px;
        height: 28px;
        line-height: 26px;
        font-size: 14px;
        color: #666;
        padding: 0 14px;
        border: 1px solid #DAE0E6;
        &:hover {
          border-color:  #B3BFCC;
        }
        &:focus {
          border-color:  #00B8A8;
          outline: none;
        }
      }
      span {
        display: inline-block;
        vertical-align: middle;
        width: 8px;
        border-top: 2px solid #7A90A6;
      }
    }
    .bottom {
      margin-top: 2px;
      overflow: hidden;
      font-size: 12px;
      color: #8DA0B3;
      line-height: 1;
      .min {
        float: left;
      }
      .max {
        float: right;
      }
    }
  }
</style>
