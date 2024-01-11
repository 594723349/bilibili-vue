/** 普通数据响应 */
export interface ResDataStruct<T> {
  /** 响应内容体 */
  data: T
  /** api响应信息 */
  message: string
  /** api响应编码 */
  code: number
  /** api接口返回是否成功 */
  success: boolean
  /** api接口查询数据库总数 */
  total: number | string | null
}
