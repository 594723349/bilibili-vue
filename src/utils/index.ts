import { VITE_ENV } from '@/utils/request/constant'

/**
 * @description: 获取Api BaseUrl
 * @param {*} key
 * @return {*}
 * @author: QAQshift
 */
export function getApiBaseUrl() {
  const baseUrl =
    import.meta.env.VITE_NODE_ENV === 'development'
      ? VITE_ENV.VITE_PROXY[VITE_ENV.VITE_API_URL]
      : VITE_ENV.VITE_API_URL+VITE_ENV.VITE_API_PORT
  return baseUrl
}
