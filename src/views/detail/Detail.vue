<template>
  <div id="detail">
    <detail-nav class="detai-nav"/>

    <scroll-view class="content" ref="srcollView" :probe-type="3" @scroll="scroll">
      <good-info :good-info="goodInfo" ref="goodInfo"></good-info>
      <good-img :good-img-info="goodImgs" ref="goodImg"></good-img>
      <good-params ref="goodParams"></good-params>
      <good-evaluation></good-evaluation>
      <goods-list :list="this.goodRecommond"></goods-list>
    </scroll-view>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import {getGoodDetailImg, getGoodInfo} from "@/network/detail-requet";
import {getHomeGoodsData} from "@/network/home-requet";

import DetailNav from "@/views/detail/detailcomponents/DetailNav";
import GoodInfo from "@/views/detail/detailcomponents/GoodInfo";
import ScrollView from "@/components/common/scroll/ScrollView";
import GoodImg from "@/views/detail/detailcomponents/GoodImg";
import GoodParams from "@/views/detail/detailcomponents/GoodParams";
import GoodEvaluation from "@/views/detail/detailcomponents/GoodEvaluation";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

export default {
  name: "Detail",
  components: {BackTop, GoodsList, GoodEvaluation, GoodParams, GoodImg, ScrollView, GoodInfo, DetailNav},
  data() {
    return {
      iid: null,
      goodInfo: {},
      goodImgs: {},
      goodRecommond: [],
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.srcollView.scrollTo(0, 0);
    },
    scroll(position) {
      this.isShowBackTop = position < -1000;
    }
  },
  activated() {
    this.$refs.srcollView.scrollTo(0, 0, 0)
    this.iid = this.$route.params.id;
    //获取商品信息
    Promise.all([getGoodInfo(this.iid),
      getGoodDetailImg(this.iid), getHomeGoodsData('news', 1)]).then(result => {
      //获取选中的商品信息
      this.goodInfo = result[0]
      //获取商品照片的信息
      this.goodImgs = result[1]
      //获取详情的推荐信息
      this.goodRecommond = result[2]
      console.log(this.$refs.goodInfo.$el.scrollTop);
      console.log(this.$refs.goodImg.$el.scrollTop);
      console.log(this.$refs.goodParams.$el.scrollTop);
    })
  },

}
</script>

<style scoped>

#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background: white;
}

.detai-nav {
  position: relative;
  z-index: 9;
  background: white;
}

.content {
  height: calc(100% - 44px);
}
</style>
