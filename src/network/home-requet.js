//首页模块的所有请求
import {AxiosInstance} from "@/network/base-requet";

export function getHomeMultiData(){
  return AxiosInstance({
    url:'home/multidata'
  })
}
