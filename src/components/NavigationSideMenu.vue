<script setup lang="ts" name="NavigationSideMenu">
import SharpDashboard from 'virtual:icons/ic/sharp-dashboard'

import BaseIcon from '@/components/base/BaseIcon.vue'

import type { ISideMenuLink } from '@/types/sideMenu'

import CalendarEvent from '~icons/custom/calendar-event'
import Recruitment from '~icons/custom/recruitment'

const navigationLinks: ISideMenuLink[] = [
  {
    label: 'Dashboard',
    icon: SharpDashboard,
    to: { name: 'UserDashboard' }
  },
  {
    label: 'Recruitment',
    icon: Recruitment,
    to: { name: 'UserDashboard' }
  },
  {
    label: 'Schedule',
    icon: CalendarEvent,
    to: { name: 'UserDashboard' }
  }
]
</script>

<template>
  <nav>
    <router-link v-for="link in navigationLinks" :key="link.to.name" :to="link.to" class="nav-link">
      <BaseIcon :icon="link.icon" />
      {{ link.label }}
    </router-link>
  </nav>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #333;
  padding: 10px;
  display: block;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #f5f5f5;
}
</style>
