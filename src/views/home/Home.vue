<template>
  <div id="home">

    <NavBar class="home-nav">
      <div slot="center">购物中心</div>
    </NavBar>
  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home-requet";

export default {
  name: "Home",
  data() {
    return {
      data: null,
    }
  },
  components: {
    NavBar
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
