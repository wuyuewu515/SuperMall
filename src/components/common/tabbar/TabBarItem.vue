<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
      required: true,//必须要传递
    },
    activeColor:{
      type:String,
      default:'#0f5ffc'
    }
  },
  data() {
    return {
     // isActive: false,
    }
  },
  computed:{
    isActive(){
      //使用indexof的原因是，后续/home/xxx,就不会相等 (===)
      return this.$route.path.indexOf(this.path) !==-1;
    },
    //动态绑定属性
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    },

  },
  methods:{
    itemClick(){
      if (this.$route.path===this.path)
        return ;
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
  width: 24px;
}

</style>