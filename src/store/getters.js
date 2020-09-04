export default {
  /**
   * 获取购物车里面的数据长度
   * @param state
   * @returns {number}
   */
  getCarLength(state){
    return state.carList.length;
  },
  /**
   * 获取购物车里面的所有数据
   * @param state
   * @returns {[]}
   */
  getCarList(state){
    return state.carList;
  }

}
