<template>
  <div id="home">

    <NavBar class="home-nav">
      <div slot="center">购物中心</div>
    </NavBar>
    <recommend-view :recommends="data.recommend.list"></recommend-view>
  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import RecommendView from "@/views/home/homecompoents/RecommendView";
import {getHomeMultiData} from "@/network/home-requet";

export default {
  name: "Home",
  data() {
    return {
      data: null,
    }
  },
  components: {
    NavBar,RecommendView,
  },
  created() {
    getHomeMultiData().then(result => {
      this.data = result.data;
      console.log(this.data);
    })
  }
}
</script>

<style scoped>
.home-nav {
  background: var(--color-tint);
  color: white;
}
</style>
