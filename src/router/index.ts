/*
 * @Description:  路由
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/* 通用 */
const global: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/global/401.vue'),
    meta: { title_cn: '401', title_en: '401' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/global/404.vue'),
    meta: { title_cn: '404', title_en: '404' }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/global/500.vue'),
    meta: { title_cn: '500', title_en: '500' }
  }
]

let routes: Array<RouteRecordRaw> = [
  // ...global,
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title_cn: '404', title_en: '404' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title_cn: '404', title_en: '404' }
  }
]

routes = global.concat(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach(() => {
})

export default router
