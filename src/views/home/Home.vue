<template>
  <div id="home" class="wrapper">

    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>

    <scroll-view class="content"
                 ref="scrollView"
                 :probe-type="3"
                 :pull-up-load="true"
                 @loadMore="loadMore"
                 @scroll="contentScroll">
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tabcontrol class="tab-control"
                  @tabClick="tabClick"
                  :titles="['流行','新款','精选']"></tabcontrol>
      <goods-list :list="goods[currentType].list"></goods-list>
    </scroll-view>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Tabcontrol from "@/components/common/tabcontrol/Tabcontrol";

import ScrollView from "@/components/common/scroll/ScrollView";
import RecommendView from "@/views/home/homecompoents/RecommendView";
import FeatureView from "@/views/home/homecompoents/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

import {getHomeGoodsData, getHomeMultiData} from "@/network/home-requet";

export default {
  name: "Home",
  data() {
    return {
      data: null,
      recommends: [],
      goods: {
        pop: {indexPage: 0, list: []},
        news: {indexPage: 0, list: []},
        sell: {indexPage: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false,
    }
  },
  components: {
    NavBar, Tabcontrol, ScrollView, RecommendView, FeatureView,
    GoodsList, BackTop
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('news');
    this.getHomeGoodsData('sell');
  },
  mounted() {
    //$bus使用
    // this.$bus.$on('itemImgLoad',()=>{
    //   this.$refs.scrollView.reflushSroll();
    // })
  },
  methods: {
    tabClick(position){
      switch (position) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'news';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.scrollView.reflushSroll();
    },
    backTopClick() {
      this.$refs.scrollView.scrollTo(0, 0);
    },
    contentScroll(offsetY) {
      this.isShowBackTop = offsetY < (-1000);
    },
    loadMore() {
      console.log('加载更多数据');
      this.getHomeGoodsData(this.currentType)
    },
    //获取首页推荐数据
    getHomeMultiData() {
      getHomeMultiData().then(result => {
        this.data = result.data;
        this.recommends = result.data.recommend.list;
        console.log(this.data);
      })
    },
    //获取首页商品数据
    getHomeGoodsData(type) {
      let pageIndex = this.goods[type].indexPage
      getHomeGoodsData(type, pageIndex).then(result => {
        this.goods[type].list.push(...result)
        this.goods[type].indexPage += 1
        //结束加载更多
        this.$refs.scrollView.finishPullUp();
      })
    }
  }

}
</script>

<!--scoped 只针对当前页面起作用-->
<style scoped>
#home{
  height: 100vh;
  position: relative;
}

.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: var(--color-tint);
  color: white;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}


.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
