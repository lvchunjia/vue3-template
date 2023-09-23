import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/:currentPath(.*)*',
    redirect: () => {
      return { path: '/404' }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
