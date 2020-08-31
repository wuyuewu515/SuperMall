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
  props: {},
  data() {
    return {
      scroll: null,
    }
  },
  computed: {},
  components: {
    BScroll
  },
  methods: {
    //数据变动，重新计算高度，防止滚动失效
    reflushSroll() {
      this.scroll.refresh()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true
    });
  },

}
</script>

<style scoped>

</style>
