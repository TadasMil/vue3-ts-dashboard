import { RouteRecordRaw } from 'vue-router'
import UserDashboard from '@/views/UserDashboard.vue'
import UserDepartment from '@/views/UserDepartment.vue'
import UserEmployee from '@/views/UserEmployee.vue'
import UserRecruitment from '@/views/UserRecruitment.vue'
import UserSchedule from '@/views/UserSchedule.vue'
import UserSettings from '@/views/UserSettings.vue'
import UserSupport from '@/views/UserSupport.vue'

import pageNames from '@/constants/pageNames'

export const userRoutes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: pageNames.UserDashboard,
    component: UserDashboard
  },
  {
    path: '/recruitment',
    name: pageNames.UserRecruitment,
    component: UserRecruitment
  },
  {
    path: '/schedule',
    name: pageNames.UserSchedule,
    component: UserSchedule
  },
  {
    path: '/settings',
    name: pageNames.UserSettings,
    component: UserSettings
  },
  {
    path: '/support',
    name: pageNames.UserSupport,
    component: UserSupport
  },
  {
    path: '/employee',
    name: pageNames.UserEmployee,
    component: UserEmployee
  },
  {
    path: '/department',
    name: pageNames.UserDepartment,
    component: UserDepartment
  }
]
