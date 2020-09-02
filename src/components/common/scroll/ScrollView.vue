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
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup);

export default {
  name: "ScrollView",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      scroll: null,
      timer: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      //1.初始化scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,
        bounce:false,//当滚动超过边缘的时候无回弹动画
        probeType: this.probeType, //监听滚动
        pullUpLoad: this.pullUpLoad, //是否监听上拉加载更多
      });

      //2.监听滚动事件
      this.scroll.on('scroll', position => {
        //修复切换页面还是一直监听问题
        if (isNaN(position.x))
          this.scroll.off('scroll')
        this.$emit('scroll', position.y)
      })
      if (this.pullUpLoad) {
        //3.监听上拉加载更多
        this.scroll.on('pullingUp', () => {
          this.$emit('loadMore')
        })
      }
    })
  },
  computed: {},
  updated() {
    if (this.timer)
      clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.reflushSroll()
    }, 800)
  },
  components: {
    BScroll
  },
  methods: {
    //数据变动，重新计算高度，防止滚动失效
    reflushSroll() {
      this.$nextTick(() => {
        this.scroll && this.scroll.refresh()
      })
    },
    /**
     * 滚动到指定位置
     * @param x x轴
     * @param y y轴
     * @param time 执行时间
     */
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //本次上拉加载完成，还能执行下次加载操作
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //关闭上拉加载功能---全部数据加载完毕后可以调用
    closePullUp() {
      this.scroll && this.scroll.closePullUp();
    },
    //获取当前滚动的距离
    getSrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },


}
</script>

<style scoped>

</style>
