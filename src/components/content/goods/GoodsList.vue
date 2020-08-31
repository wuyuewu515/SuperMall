<template >
  <div class="good-list">
    <goods-list-item v-for="item in list" :goods-item="item"/>
  </div>
</template>

<script>

import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .good-list{
    display: flex;
    flex-wrap: wrap;
  }
</style>
