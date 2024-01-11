import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { getApiBaseUrl } from '@/utils'
import { CONTENT_TYPE, SUCCESS_CODE, TIME_OUT } from '@/utils/constant'

/**
 * @description: 异常消息提示
 * @param {string} string
 * @return {*}
 * @author: QAQshift
 */
const prompt = (message: string) => {
  ElMessage({
    message: message,
    type: 'warning',
    duration: 3000
  })
}

/**
 * @description: code处理
 * @param {number} code
 * @param {string} msg
 * @return {*}
 * @author: QAQshift
 */
const codeHandle = (code: number, message: string) => {
  switch (code) {
    case 401:
      router.replace({
        name: '401'
      })
      break
    case 404:
      router.replace({
        name: '404'
      })
      break
    default:
      prompt(message)
      break
  }
}

// 设置获取 baseURL
const baseURL = getApiBaseUrl()

/**
 * @description: axios创建
 * @param {*}
 * @return {*}
 * @author: QAQshift
 */
const service = axios.create({
  baseURL,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': CONTENT_TYPE
  }
})

/**
 * @description: axios请求拦截器
 * @param {*}
 * @return {*}
 * @author: QAQshift
 */
service.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  return request
})

/**
 * @description: axios响应拦截器
 * @param {*}
 * @return {*}
 * @author: QAQshift
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.headers['content-type'] === 'application/json;charset=UTF-8') {
      return response.data || null
    }
    const { code, message } = response.data
    if (!SUCCESS_CODE.includes(code)) {
      codeHandle(code, message)
      return null
    }
    return response.data || null
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log('错误请求')
          break
        case 401:
          console.log('未授权，请重新登录')
          break
        case 403:
          console.log('拒绝访问')
          break
        case 404:
          console.log('请求错误,未找到该资源')
          break
        case 405:
          console.log('请求方法未允许')
          break
        case 408:
          console.log('请求超时')
          break
        case 411:
          console.log('需要知道长度')
          break
        case 413:
          console.log('请求的实体太大')
          break
        case 414:
          console.log('请求的URL太长')
          break
        case 415:
          console.log('不支持的媒体类型')
          break
        case 500:
          console.log('服务器端出错')
          break
        case 501:
          console.log('网络未实现')
          break
        case 502:
          console.log('网络错误')
          break
        case 503:
          console.log('服务不可用')
          break
        case 504:
          console.log('网络超时')
          break
        case 505:
          console.log('http版本不支持该请求')
          break
        default:
          console.log(`连接错误${error.response.status}`)
      }
    } else {
      console.log('连接到服务器失败')
      router.replace({
        name: '500'
      })
    }
    return Promise.reject(error)
  }
)

export default service
