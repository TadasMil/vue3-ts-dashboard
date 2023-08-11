import { createRouter, createWebHistory } from 'vue-router'
import UserDashboard from '@/views/UserDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserDashboard',
      component: UserDashboard
    }
  ]
})

export default router
