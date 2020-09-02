<template>
  <div class="good-img">
     <p>
       {{goodImgInfo.descr}}
     </p>
    <img v-for="item in goodImgInfo.list"
      :src="item" alt="">
  </div>
</template>

<script>
export default {
  name: "GoodImg",
  props:{
    goodImgInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

.good-img{
  text-align: center;
  margin: 5px 10px;
  font-size: 15px;
}
.good-img p{
  margin: 15px;
  color: #3A3A3A;
}
.good-img img{
  width: 100%;
}
</style>
