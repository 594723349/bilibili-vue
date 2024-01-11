/*
 * @Description:全局状态入口
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\store\index.ts
 */
import { createStore } from 'vuex'

const requireModules = require.context('./modules', true, /index\.(ts|js)$/iu)

const modules: Record<string, object> = {}

requireModules.keys().forEach((filePath) => {
  const modular = requireModules(filePath) //获取当前路径下的模块
  const name = filePath.split('/')[1] //通过路径分割出模块名

  // store生成模块对象
  modules[name] = {
    namespaced: true,
    ...modular.default
  }
})

const store = createStore({
  modules: {
    ...modules
  }
})

export default store
