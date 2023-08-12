<script setup lang="ts" name="SidebarNavigation">
import RoundSettings from 'virtual:icons/ic/round-settings'
import SharpDashboard from 'virtual:icons/ic/sharp-dashboard'

import pageNames from '@/constants/pageNames'

import SidebarNavigationLinks from '@/components/SidebarNavigationLinks.vue'

import type { ISidebarMenu } from '@/types/sideMenu'

import CalendarEvent from '~icons/custom/calendar-event'
import Department from '~icons/custom/department'
import Employee from '~icons/custom/employee'
import Recruitment from '~icons/custom/recruitment'
import Support from '~icons/custom/support'

const mainLinks: ISidebarMenu = {
  title: 'Main menu',
  links: [
    {
      label: 'Dashboard',
      icon: SharpDashboard,
      to: { name: pageNames.UserDashboard }
    },
    {
      label: 'Recruitment',
      icon: Recruitment,
      to: { name: pageNames.UserRecruitment }
    },
    {
      label: 'Schedule',
      icon: CalendarEvent,
      to: { name: pageNames.UserSchedule }
    },
    {
      label: 'Employee',
      icon: Employee,
      to: { name: pageNames.UserEmployee }
    },
    {
      label: 'Department',
      icon: Department,
      to: { name: pageNames.UserDepartment }
    }
  ]
}

const otherLinks: ISidebarMenu = {
  title: 'Other',
  links: [
    {
      label: 'Support',
      icon: Support,
      to: { name: pageNames.UserSupport }
    },
    {
      label: 'Settings',
      icon: RoundSettings,
      to: { name: pageNames.UserSettings }
    }
  ]
}
</script>

<template>
  <nav class="sidebar">
    <h1 class="sidebar-title">WeHR</h1>

    <SidebarNavigationLinks v-bind="mainLinks" />
    <SidebarNavigationLinks v-bind="otherLinks" />
  </nav>
</template>

<style scoped>
.sidebar {
  background-color: var(--sidebar-background-color);
  border-right: 1px solid var(--color-secondary-light);
  padding: 30px 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px 0;
}

.sidebar-title {
  font-size: 36px;
  font-weight: 600;
}

@media (max-width: 834px) {
  .sidebar {
    width: 90px;
    padding: 40px 0;
    gap: 25px 0;
  }

  .sidebar-title {
    font-size: 20px;
  }
}
</style>
