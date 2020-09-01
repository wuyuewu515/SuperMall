<!--
  需要安装better-scroll插件
  执行  npm install better-scroll -S
  # install 2.x，with full-featured plugin.

  注意，需要在网络请求，等其他异步操作之后，通知scrollView进行刷新，重新计算高度，防止页面不滚动
-->

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: "ScrollView",
  props: {
    probeType: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true,
      probeType: this.probeType,
    });

    this.scroll.on('scroll', position => {
      //修复切换页面还是一直监听问题
      if (isNaN(position.x))
        this.scroll.off('scroll')
      this.$emit('scroll', position.y)
    })
  },
  computed: {},
  components: {
    BScroll
  },
  methods: {
    //数据变动，重新计算高度，防止滚动失效
    reflushSroll() {
      this.scroll.refresh()
    },
    /**
     * 滚动到指定位置
     * @param x x轴
     * @param y y轴
     * @param time 执行时间
     */
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  },


}
</script>

<style scoped>

</style>
