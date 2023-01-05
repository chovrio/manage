import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes // 路由配置
})
export default router
