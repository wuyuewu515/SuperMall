<template>
  <div class="bottom-bar">
    <div class="customer flexStyle">
      <img src="@/assets/img/detail/icon_detail_customer.png">
      <span>客服</span>
    </div>
    <div class="store flexStyle">
      <img src="@/assets/img/detail/icon_detail_store.png">

      <span>商家</span>
    </div>
    <div class="collect flexStyle">
      <img src="@/assets/img/detail/icon_detail_collect.png">

      <span>收藏</span>
    </div>

    <div class="shop-car flexStyle" @click="addCart">
      <span>加入购物车</span>
    </div>
    <div class="buy flexStyle">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addCart(){
      this.$emit('addCart')
    },
  }
}
</script>

<style scoped>

  .bottom-bar{
    /*position: relative;*/
    height: 49px;
    background: white;
    z-index: 9;
    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .bottom-bar img{
    height: 25px;
    padding: 2px;
    width: 25px;
  }
  .customer{
    flex: 1.2;
    font-size: 13px;
  }
  .store{
    flex: 1.2;
    font-size: 13px;
  }
  .collect{
    flex: 1.2;
    font-size: 13px;
  }
  .shop-car{
    flex: 3;
    background: goldenrod;
  }

  .buy{
    flex: 1.8;
    text-align: center;
    background: var(--color-tint);
    color: white;
  }
  .flexStyle{
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }


</style>
