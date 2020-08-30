<template>
  <div class="recommend">
      <div v-for="item in recommends">
        <a href="item.link" class="recommendItem">
          <img :src="item.image" alt="">
          <div>
            {{item.title}}
          </div>
        </a>
      </div>
  </div>

</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    margin: 8px 0 15px;
    padding: 10px 0;
    border-bottom: #eee solid 15px;
  }
  .recommendItem{
    flex: 1;
  }
  .recommendItem img{
    width: 85%;
    margin-bottom: 10px;
  }

</style>
