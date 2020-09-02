//首页模块的所有请求
import {AxiosInstance} from "@/network/base-requet";
import {getGoodDetail} from "@/common/buildData";

/**
 * 获取商品详情信息
 * @param iid 商品的id
 */
export function getGoodInfo(iid) {

  // return AxiosInstance({
  //   path:'',
  //   param:{
  //     iid
  //   }
  // })
  return getGoodDetail(iid);
}
