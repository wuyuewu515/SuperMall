<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background: #F6F6F6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*设置阴影 x轴偏移量 y轴偏移量 高度  颜色值*/
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }


</style>