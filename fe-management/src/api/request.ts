import axios, { AxiosHeaders } from 'axios'
import Cookie from 'js-cookie'
const baseURL = process.env.NODE_ENV === 'development' ? '/api' : ''
console.log(baseURL)

const instance = axios.create({
  baseURL,
  timeout: 10000
})

// 拦截器
instance.interceptors.request.use(
  config => {
    (config.headers as AxiosHeaders).set(
      'Authorization',
      Cookie.get('token') ? Cookie.get('token') : ''
    )
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  result => {
    return result.data
  },
  err => Promise.reject(err)
)

export default instance
