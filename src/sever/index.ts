import axios from 'axios'
import { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

const baseUrl = 'http://admin'
export const $axios: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

$axios.interceptors.request.use(config => {
  var xtoken: any = localStorage.getItem('token')
  if (xtoken) {
    xtoken = 'Bearer' + xtoken
    // console.log(xtoken)
    config.headers['Authorization'] = xtoken
  }
  return config
})
$axios.interceptors.response.use(
  (res: any) => {
    if (res.code === 200) {
      return res
    } else {
      ElMessage.error(res.massage)
      return Promise.reject(new Error(res.message))
    }
  },
  (err: any) => {
    console.error(err)
    const { message } = err.response.data
    ElMessage.error(err.massage)
    return Promise.reject(new Error(err.message))
  }
)