<template>
  <div class="cart-list-item">
      <div class="title">
        <span>{{product.title}}</span>
        <span class="priceStyle">价格：{{product.price}}</span>
      </div>

    <div class="idd">
        <span>{{product.iid}}</span>
        <span class="countStyle">数量：{{product.count}}</span>
      </div>

  </div>
</template>

<script>
export default {
  name: "CarListItem",
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.cart-list-item{
  padding: 5px 10px;
  margin: 5px 8px;
  background: whitesmoke;
  border-radius: 5px;
}
.cart-list-item span{
  min-width: 30%;
}

.priceStyle,.countStyle{
  text-align: center;
}

.title, .idd{
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
