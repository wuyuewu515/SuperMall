<!--商品的参数信息-->
<template>
    <div class="params">
        <span v-for="item in 10">这个是评价信息</span>
    </div>
</template>

<script>
export default {
  name: "GoodEvaluation"
}
</script>

<style scoped>
    .params{
      height: 100vh;
      margin: 10px;
      background: purple;
    }
</style>
