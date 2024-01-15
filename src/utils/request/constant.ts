import { ContentType, SuccessCode, RequestMapping } from '@/utils/request/dictionary'

export const VITE_ENV = import.meta.env
// request Mapping
export const MAPPING = RequestMapping.SLIPPER
// 请求数据类型
export const CONTENT_TYPE = ContentType.JSON
// 请求超时时长
export const TIME_OUT = 10000

// 请求成功响应code
export const SUCCESS_CODE = [SuccessCode.ZERO, SuccessCode.TWO_HUNDRED]
