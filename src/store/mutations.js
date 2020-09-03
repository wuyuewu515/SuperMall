import {ADD_COUNTER, ADD_TO_CAR} from "@/store/mutation-types";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count +=1;
  },
  [ADD_TO_CAR](state, payload) {
    state.carList.push(payload);
  },
}
