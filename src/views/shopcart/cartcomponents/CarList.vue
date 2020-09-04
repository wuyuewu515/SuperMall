<template>
  <div class="cart-list">
    <car-list-item v-for="(item,index) in getCarList" :product="item"></car-list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CarListItem from "@/views/shopcart/cartcomponents/CarListItem";

export default {
  name: "CarList",
  components: {CarListItem},
  computed: {
    ...mapGetters([
      'getCarList'
    ])
  }
}
</script>

<style scoped>
  .cart-list{
  background: white;
    height: 100%;
  }

</style>
