<template>
  <div class="tab-control">
    <div v-for="(item,position) in titles"
         :class="{active:currentIndex === position}"
         @click="tablClik(position)"
         class="tab-control-item">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tablClik(position) {
      if (this.currentIndex === position)
        return;
      this.currentIndex = position;
      this.$emit('tabClick',position);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  background: #ffffff;
}

.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-height-text);
}

.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 3px;
}
</style>
