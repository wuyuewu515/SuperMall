<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import RecommendView from "@/views/home/homecompoents/RecommendView";
import FeatureView from "@/views/home/homecompoents/FeatureView";
import {getHomeMultiData} from "@/network/home-requet";

export default {
  name: "Home",
  data() {
    return {
      data: null,
      recommends:[]
    }
  },
  components: {
    NavBar,RecommendView,FeatureView
  },
  created() {
    getHomeMultiData().then(result => {
      this.data = result.data;
      this.recommends = result.data.recommend.list;
      console.log(this.data);
    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  padding-bottom: 49px;
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
</style>
