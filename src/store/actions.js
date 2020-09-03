import {ADD_COUNTER, ADD_TO_CAR} from "@/store/mutation-types";

export default {
  addCar(context, payload) {
    let tempProduct = context.state.carList.find(item => {
      return item.iid === payload.iid
    })

    if (tempProduct === undefined) {
      context.commit(ADD_TO_CAR, payload)
    } else {
      context.commit(ADD_COUNTER, tempProduct)

    }
  }
}
