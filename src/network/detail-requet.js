//首页模块的所有请求
import {getGoodDetail, getGoodDetailImgs} from "@/common/buildData";

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

//获取商品详情的图片信息
export function getGoodDetailImg(iid) {
  return getGoodDetailImgs(iid)
}
