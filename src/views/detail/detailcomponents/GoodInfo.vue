<template>
  <div v-if="Object.keys(goodInfo)" class="goodInfo">
    <p>{{goodInfo.goodTitle}}</p>
    <div>
       <span class="new-price">￥{{goodInfo.newPrice}}</span>
       <span class="old-price"><strike>￥{{goodInfo.oldPrice}}</strike></span>
       <span class="discount">{{goodInfo.discount}}</span>
    </div>
    <div class="bottom">
      <span>{{goodInfo.sellCount}}</span>
      <span>{{goodInfo.collect}}</span>
      <span>{{goodInfo.send}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodInfo",
  props:{
    goodInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goodInfo{
  margin: 10px 8px;
  border-bottom: 1px solid #ddd;
}
.goodInfo p{
  margin: 0 10px;
  font-size: 20px;
  color: #333;
  padding: 5px 0;
}
.new-price{
  margin-left: 10px;
  color: var(--color-tint);
  font-size: 25px;
}
.old-price{
  margin-left: 5px;
  font-size: 4px;
  color: var(--color-text);
}
.discount{
  color: white;
  background: var(--color-height-text);
  padding: 3px;
  font-size: 2px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 10px;
  position: relative;
  top:-8px;
}
.bottom{
  display: flex;
  margin: 15px 10px;
  justify-content: space-between;
}
.bottom span{
  /*flex: 1;*/
  text-align: center;
}
</style>
