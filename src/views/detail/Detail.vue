<template>
  <div>
    <detail-nav></detail-nav>
    <good-info :good-info="goodInfo"></good-info>
  </div>
</template>

<script>

import DetailNav from "@/views/detail/detailcomponents/DetailNav";
import GoodInfo from "@/views/detail/detailcomponents/GoodInfo";
import {getGoodInfo} from "@/network/detail-requet";

export default {
  name: "Detail",
  components: {GoodInfo, DetailNav},
  data() {
    return {
      iid: null,
      goodInfo:{},
    }
  },
  created() {
  }, activated() {
    console.log(this.$route.params);
    this.iid = this.$route.params.id;
    getGoodInfo(this.iid).then(result=>{
      this.goodInfo = result
    })
  }
}
</script>

<style scoped>

</style>
