import axios from 'axios'
import config from '@/config'

const development = config.isDev
const baseURL = development ? `${config.getBaseUrl()}/api` : config.getBaseUrl()
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// response interceptor
service.interceptors.response.use(
response => {
  const res = response.data
  //状态逻辑

  return res;
  
},
error => {
  console.log('err' + error) // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)

export default service
