import { $axios } from './index.ts'
import { InterfaceLoginTimeReq } from '../type'

// 储存登录信息
export const setLoginTimeApi = (params: InterfaceLoginTimeReq) => {
  return $axios.post('/login/time', params)
}
