<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 15px;
    bottom: 60px;
    background: #F6F6F6;
    height: 45px;
    width: 45px;
    text-align: center;
    border-radius: 25px;
  }
  .back-top img{
    height: 90%;
    padding: 5px;
  }
</style>
