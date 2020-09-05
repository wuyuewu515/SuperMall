import {ADD_COUNTER, ADD_TO_CAR} from "@/store/mutation-types";

export default {
  addCar(context, payload) {
    return new Promise(resolve => {
      let tempProduct = context.state.carList.find(item => {
        return item.iid === payload.iid
      })

      if (tempProduct === undefined) {
        context.commit(ADD_TO_CAR, payload)
        resolve('添加购物车成功');
      } else {
        context.commit(ADD_COUNTER, tempProduct)

      }
    })
  }
}
