import { $axios } from './index.ts'
import { InterfaceLoginReq } from '../type'

export const login = (params: InterfaceLoginReq) => {
  return $axios.post('/api/login', params)
}
