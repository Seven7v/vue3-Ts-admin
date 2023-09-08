import { $axios } from './index.ts'
import { InterfaceLoginReq } from '../type'

export const loginApi = (params: InterfaceLoginReq) => {
  return $axios.post('/login', params)
}
