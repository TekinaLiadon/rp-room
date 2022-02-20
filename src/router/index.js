import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/combat',
    name: 'Combat',
    component: () => import('../views/Combat')
  },
  {
    path: '/ethics',
    name: 'Ethics',
    component: () => import('../views/Ethics')
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../views/Rule.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
