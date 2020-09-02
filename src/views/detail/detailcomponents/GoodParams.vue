<!--商品的参数信息-->
<template>
    <div class="params">
        <span v-for="item in 10">这个是参数信息啊</span>
    </div>
</template>

<script>
export default {
  name: "GoodParams"
}
</script>

<style scoped>
    .params{
      height: 100vh;
      margin: 10px;
      background: gold;
    }
</style>
