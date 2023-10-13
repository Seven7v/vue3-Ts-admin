import { $axios } from './index.ts'
import { InterfaceLoginTimeReq, SendMessageReq } from '../type'

// 储存登录信息
export const setLoginTimeApi = (params: InterfaceLoginTimeReq) => {
  return $axios.post('/login/time', params)
}

// 留言
export const sendMessage = (params: SendMessageReq) => {
  return $axios.post('/send-message', params)
}
