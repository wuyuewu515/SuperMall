import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
//安装插件
Vue.use(Vuex)

const state={
  carList: [],
}

//创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;
