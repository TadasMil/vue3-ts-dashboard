import { RouteRecordRaw } from 'vue-router'
import { createPrivateRoute } from '@/utilities/routeMeta'
import UserDashboard from '@/views/UserDashboard.vue'
import UserDepartment from '@/views/UserDepartment.vue'
import UserEmployee from '@/views/UserEmployee.vue'
import UserRecruitment from '@/views/UserRecruitment.vue'
import UserSchedule from '@/views/UserSchedule.vue'
import UserSettings from '@/views/UserSettings.vue'
import UserSupport from '@/views/UserSupport.vue'

import pageNames from '@/constants/pageNames'

export const userRoutes: Readonly<RouteRecordRaw[]> = [
  createPrivateRoute({
    path: '/',
    name: pageNames.UserDashboard,
    component: UserDashboard
  }),
  createPrivateRoute({
    path: '/recruitment',
    name: pageNames.UserRecruitment,
    component: UserRecruitment
  }),
  createPrivateRoute({
    path: '/schedule',
    name: pageNames.UserSchedule,
    component: UserSchedule
  }),
  createPrivateRoute({
    path: '/settings',
    name: pageNames.UserSettings,
    component: UserSettings
  }),
  createPrivateRoute({
    path: '/support',
    name: pageNames.UserSupport,
    component: UserSupport
  }),
  createPrivateRoute({
    path: '/employee',
    name: pageNames.UserEmployee,
    component: UserEmployee
  }),
  createPrivateRoute({
    path: '/department',
    name: pageNames.UserDepartment,
    component: UserDepartment
  })
]
