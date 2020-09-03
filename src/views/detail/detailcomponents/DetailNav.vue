<template>
  <div class="titlebar">
    <nav-bar>
      <div slot="left" @click="backClick" class="back">
        <img src="@/assets/img/common/back.png">
      </div>
      <div slot="center" class="title">
        <span v-for="(item,index) in titles"
              @click="titleClick(index)"
              :class="{active:currentIndex=== index}"
              class="title-item">{{ item }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    titleClick(position) {
      if (this.currentIndex === position)
        return
      this.currentIndex = position

      this.$emit("navClick",position);
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 15px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-height-text);
}

.back img {
  height: 40px;
  width: 40px;
  padding: 5px;
}
</style>
