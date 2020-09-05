<template>
  <div id="detail">
    <detail-nav class="detai-nav" @navClick="navClick" ref="detailNav"/>

    <scroll-view class="content" ref="srcollView" :probe-type="3" @scroll="scroll">
      <good-info :good-info="goodInfo" ref="goodInfo"></good-info>
      <good-img :good-img-info="goodImgs"></good-img>
      <good-params ref="goodParams"></good-params>
      <good-evaluation ref="goodEvaluation"></good-evaluation>
      <goods-list :list="this.goodRecommond" ref="goodRecommond"></goods-list>
    </scroll-view>
    <detail-bottom-bar class="bottom-bar" @addCart="addCart"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <toast message="加载中..."/>
  </div>
</template>

<script>
import {getGoodDetailImg, getGoodInfo} from "@/network/detail-requet";
import {getHomeGoodsData} from "@/network/home-requet";
import {mapActions} from "vuex"

import DetailNav from "@/views/detail/detailcomponents/DetailNav";
import GoodInfo from "@/views/detail/detailcomponents/GoodInfo";
import ScrollView from "@/components/common/scroll/ScrollView";
import GoodImg from "@/views/detail/detailcomponents/GoodImg";
import GoodParams from "@/views/detail/detailcomponents/GoodParams";
import GoodEvaluation from "@/views/detail/detailcomponents/GoodEvaluation";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";
import DetailBottomBar from "@/views/detail/detailcomponents/DetailBottomBar";
import Toast from "@/components/common/toast/Toast";

export default {
  name: "Detail",
  components: {
    Toast,
    DetailBottomBar, BackTop, GoodsList, GoodEvaluation, GoodParams, GoodImg, ScrollView, GoodInfo, DetailNav},
  data() {
    return {
      iid: null,
      goodInfo: {},
      goodImgs: {},
      goodRecommond: [],
      isShowBackTop: false,
      offsetYs: [],
      currentIndex: 0,
    }
  },
  updated() {
    this.offsetYs = [];
    this.offsetYs.push(0);
    this.offsetYs.push(this.$refs.goodParams.$el.offsetTop);
    this.offsetYs.push(this.$refs.goodEvaluation.$el.offsetTop);
    this.offsetYs.push(this.$refs.goodRecommond.$el.offsetTop);
    this.offsetYs.push(Number.MAX_VALUE);
  },
  methods: {

    ...mapActions({
      addToCar:'addCar',
    }),
    addCart() {
      let product = {
        iid: this.iid,
        price: this.goodInfo.newPrice,
        title: this.goodInfo.goodTitle,
        count: 1,
      }
     // this.$store.commit('addCar', product);
     //  this.$store.dispatch('addCar',product).then(result=>{
     //    console.log(result);
     //  })
      this.addToCar(product).then(result=>{
        console.log(result);
      })

    },
    backTop() {
      this.$refs.srcollView.scrollTo(0, 0);
    },
    scroll(position) {
      for (let i = 0; i < this.offsetYs.length - 1; i++) {
        if (this.currentIndex !== i && (-position) >= this.offsetYs[i] && (-position) < this.offsetYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = i;
        }
      }
      this.isShowBackTop = position < -1000;
    },
    navClick(position) {

      this.$refs.srcollView.scrollTo(0, -this.offsetYs[position]);
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

    })
  },

}
</script>

<style scoped>

#detail {
  height: 100vh;
  /*position: relative;*/
  /*z-index: 9;*/
  background: white;
}

.detai-nav {
  position: relative;
  z-index: 9;
  background: white;
}

.content {
  /*height: calc(100vh - 93px);*/
  overflow: hidden;
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
