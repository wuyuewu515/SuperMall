<template>
  <div id="category" class="wrapper">
    <scroll-view class="content" >
      <ul >
        <li v-for="item in 100">
          占位{{ item }}
        </li>
      </ul>
    </scroll-view>

  </div>

</template>

<script>
import ScrollView from "@/components/common/scroll/ScrollView";


export default {
  name: "Category",

 components:{
   ScrollView,
 }
}
</script>

<style scoped>
  .wrapper{
   height: 100vh;
    position: relative;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
