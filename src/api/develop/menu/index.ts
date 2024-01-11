/*
 * @Description:菜单接口
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\api\develop\menu\index.ts
 */
import service from '@/utils/request'
/**
 * @description: 下拉列表
 * @param {*}
 * @return {*}
 * @author: QAQshift
 */
export function selectListApi() {
  return service({
    url: '',
    method: 'get'
  })
}
