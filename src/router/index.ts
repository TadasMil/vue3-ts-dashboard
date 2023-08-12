import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import { userRoutes } from './userRoutes'

const routes: Readonly<RouteRecordRaw[]> = [...userRoutes]

export default createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0 }
  }
})
