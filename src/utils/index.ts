import { MAPPING } from '@/utils/constant'

/**
 * @description: 获取Api BaseUrl
 * @param {*} key
 * @return {*}
 * @author: QAQshift
 */
export function getApiBaseUrl() {
  const baseUrl =
    process.env.VUE_APP_PROXY === 'true'
      ? `/proxy${MAPPING}`
      : process.env.VUE_APP_BASE_API + MAPPING
  return baseUrl
}
