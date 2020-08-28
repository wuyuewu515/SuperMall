<template>
  <TabBar>
    <TabBarItem path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home_unselect.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_select.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category_unselect.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_select.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopCart">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcat_unselect.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcat_select.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile_unselect.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_select.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>

</template>

<script>

import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBarItem,TabBar
  }
}
</script>

<style scoped>

</style>
