//首页模块的所有请求
import {AxiosInstance} from "@/network/base-requet";
import {homeGoodsData} from "@/common/buildData";

export function getHomeMultiData(){
  return AxiosInstance({
    url:'home/multidata'
  })
}


export function getHomeGoodsData(type,pageIndex){

  // return AxiosInstance({
  //   url:'home/multidata',
  //   param:{
  //     type,pageIndex,
  //   }
  // })

  return homeGoodsData(type,pageIndex);

}
