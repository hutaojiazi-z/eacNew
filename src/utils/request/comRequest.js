import axios from 'axios'

// cloudMusic请求实例
export function deRequest(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: "182.151.14.132:9000/",
    timeout: 5000,
  })

  instance.defaults.withCredentials = true

  // 2. axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 发送真正的网络请求
  return instance(config)
}