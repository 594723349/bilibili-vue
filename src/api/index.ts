/*
 * @Description:封装axios请求
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\api\index.ts
 */
// import { IResponseData } from '@/api/interface'

import service from '@/utils/request/index'
export const httpApi = new class {
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
  Login() {
    console.log(service)
    // return service()
  }
}
