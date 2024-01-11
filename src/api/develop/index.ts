/*
 * @Description:封装axios请求
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\api\develop\index.ts
 */
import { ResDataStruct } from '@/interface/request'
import service from '@/utils/request'
export const httpApi = new (class {
  loginApi: string
  constructor() {
    // 请求接口路径
    this.loginApi = '/login/login' // 登录
  }
  /**
   * @description:
   * @param {unknown} data
   * @return {*}
   * @author: QAQshift
   */
  Login(data: unknown) {
    console.log(service)
    return service<ResDataStruct<object>>({
      url: this.loginApi,
      method: 'post',
      data
    })
  }
})()
