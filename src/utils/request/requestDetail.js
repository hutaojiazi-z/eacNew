import {deRequest} from "./comRequest"

export default {
  //GET是默认的请求方法
  cloudMusicLogin(params) {
    return deRequest({
      url: '/login/cellphone',
      params
    })
  },
}