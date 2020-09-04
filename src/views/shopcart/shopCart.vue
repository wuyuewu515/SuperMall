<template>
  <div class="shop-car">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ getCarLength }})</div>
    </nav-bar>
    <scroll-view class="content" ref="srcollView">
      <car-list></car-list>
    </scroll-view>

  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
import CarList from "@/views/shopcart/cartcomponents/CarList";
import ScrollView from "@/components/common/scroll/ScrollView";

export default {
  name: "shopCar",
  components: {ScrollView, CarList, NavBar},
  computed: {
    ...mapGetters(['getCarLength', 'getCarList'])
  },updated() {
    this.$refs.srcollView.reflushSroll();
  }
}
</script>

<style scoped>
.shop-car {
  height: 100vh;
  /*position: relative;*/
}
.content{
  height: calc(100vh - 93px);
  overflow: hidden;
  /*position: absolute;*/
  /*top: 44px;*/
  /*bottom: 49px;*/
  /*left: 0;*/
  /*right: 0;*/
}

.nav-bar {
  background: var(--color-tint);
  color: white;

}
</style>
