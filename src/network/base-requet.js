import Axios from "axios";

const instance = new Axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5 * 1000,
})
//请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, err => {

})
//响应拦截器
instance.interceptors.response.use(result => {
    return result.data;
  }
  , error => {
  })

export function AxiosInstance(config) {
  return instance(config);
}
