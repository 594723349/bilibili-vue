// 请求头-内容类型
export const ContentType = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
  UPLOAD: 'multipart/form-data'
}

// 请求 mapping
export const RequestMapping = {
  SLIPPER: '/',
  API: '/api'
}

// 本地存储类型
export const StorageType = {
  COOKIE: 'cookie',
  SESSION: 'sessionStorage',
  LOCAL: 'localStorage'
}

// 请求成功状态码
export const SuccessCode = {
  ZERO: 0,
  TWO_HUNDRED: 200
}
