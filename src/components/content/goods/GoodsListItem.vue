<template >
  <div class="good-list-item">
    <img :src="goodsItem.imga" @load="imgaLoad">
    <p>{{goodsItem.title}}</p>
    <div class="goods-info">
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.collect}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goodsItem: {
      type: Object,
      required:true,
      default() {
        return {}
      }
    }
  },
  methods:{
    imgaLoad(){
     // this.$bus.$emit('itemImgLoad');
    }
  }
}
</script>

<style scoped>
  .good-list-item{
    width: 50%;
    margin: 5px 0;
    font-size: 15px;
  }
  .good-list-item img{
    width: 96%;
    margin: 0 2%;
    border-radius: 6px;
    height: 220px;
  }
  .good-list-item p{
    margin: 0 2%;
  }
  .goods-info{
    margin-top: 5px;
    display: flex;
    text-align: center;
    width: 100%;
  }
  .price{
    flex:1;
    width: 40%;
    color: var(--color-height-text);
  }
  .collect{
    width: 40%;
    flex:1;
  }
</style>
