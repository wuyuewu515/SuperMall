//首页模块的所有请求
import {AxiosInstance} from "@/network/base-requet";
import {homeGoodsData} from "@/common/buildData";

/**
 * 获取首页数据
 * @returns {AxiosPromise}
 */
export function getHomeMultiData(){
  return AxiosInstance({
    url:'home/multidata'
  })
}

/**
 * 获取首页列表数据
 * @param type 类型
 * @param pageIndex 页码
 * @returns {Promise<unknown>}
 */
export function getHomeGoodsData(type,pageIndex){

  // return AxiosInstance({
  //   url:'home/multidata',
  //   param:{
  //     type,pageIndex,
  //   }
  // })

  return homeGoodsData(type,pageIndex);

}
