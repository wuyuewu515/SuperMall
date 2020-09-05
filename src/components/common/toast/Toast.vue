<template>
  <div class="toast" v-if="isShow">
    <span class="mssage-style">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // message: {
    //   type: String,
    //   default:'',
    // }
  },
  data() {
    return {
      message: '',
      isShow: false,
      timeOut:null,
    }
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;
       setTimeout(()=>{
        this.isShow = false;
      }, duration);

    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 10%;
  border-radius: 8px;
  background: rgba(0, 0, 0, .75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mssage-style {
  color: white;
  padding: 8px 10px;
}

</style>
