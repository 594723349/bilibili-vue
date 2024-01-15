import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

import { getApiBaseUrl } from '@/utils'
import { CONTENT_TYPE, SUCCESS_CODE, TIME_OUT } from '@/utils/request/constant'
import {codeHandle,errorHandle} from '@/utils/request/utils'
import { IResponseData } from '@/api/interface'


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
    errorHandle(error)
    
  }
)

export default <T = any>(config: InternalAxiosRequestConfig) => {
  return service(config).then((res) => {
    return (res.data as IResponseData<T>)
  })
}
