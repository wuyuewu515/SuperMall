<template>

  <div class="nav-bar">
    <nav-bar>
      <div slot="center">购物车({{getCarLength}})</div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import { mapGetters } from 'vuex'
export default {
  name: "shopCar",
  components: {NavBar},
  computed:{
    ...mapGetters(['getCarLength','getCarList'])
  }
}
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color: white;
  }
</style>
