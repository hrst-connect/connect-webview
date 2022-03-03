import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/directory',
    name: 'directory',
    component: () => import('../views/directory')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/business')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
