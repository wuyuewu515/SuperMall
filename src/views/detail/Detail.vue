<template>
  <div id="detail">
    <detail-nav class="detai-nav"/>

    <scroll-view class="content">
      <good-info :good-info="goodInfo"></good-info>
      <good-img :good-img-info="goodImgs"></good-img>
    </scroll-view>

  </div>
</template>

<script>

import DetailNav from "@/views/detail/detailcomponents/DetailNav";
import GoodInfo from "@/views/detail/detailcomponents/GoodInfo";
import ScrollView from "@/components/common/scroll/ScrollView";
import GoodImg from "@/views/detail/detailcomponents/GoodImg";

import {getGoodDetailImg, getGoodInfo} from "@/network/detail-requet";

export default {
  name: "Detail",
  components: {GoodImg, ScrollView, GoodInfo, DetailNav},
  data() {
    return {
      iid: null,
      goodInfo: {},
      goodImgs: {}
    }
  },
  created() {
  }, activated() {
    this.iid = this.$route.params.id;
    //获取商品信息
    Promise.all([getGoodInfo(this.iid),
      getGoodDetailImg(this.iid)]).then(result => {
      //获取选中的商品信息
      this.goodInfo = result[0]
      //获取推荐商品的信息
      this.goodImgs = result[1]
    })
  }
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
