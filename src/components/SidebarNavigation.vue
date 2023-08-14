<script setup lang="ts" name="SidebarNavigation">
import BaselineClose from 'virtual:icons/ic/baseline-close'
import RoundSettings from 'virtual:icons/ic/round-settings'
import SharpDashboard from 'virtual:icons/ic/sharp-dashboard'

import pageNames from '@/constants/pageNames'

import BaseButton from '@/components/base/BaseButton.vue'
import SidebarNavigationLinks from '@/components/SidebarNavigationLinks.vue'

import { ISidebarMenu } from '@/types/sideMenu'

import CalendarEvent from '~icons/custom/calendar-event'
import Department from '~icons/custom/department'
import Employee from '~icons/custom/employee'
import Recruitment from '~icons/custom/recruitment'
import Support from '~icons/custom/support'

const { sidebarVisible } = defineProps<{
  sidebarVisible: boolean
}>()

const emit = defineEmits<{ setSidebarVisible: [] }>()

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
  <nav class="sidebar" :class="{ 'sidebar-visible': sidebarVisible }">
    <div v-if="sidebarVisible" class="close-btn-wrapper">
      <BaseButton
        color="highlight"
        density="none"
        :icon="BaselineClose"
        :size="24"
        @click="emit('setSidebarVisible')"
      />
    </div>

    <h1 class="sidebar-title">WeHR</h1>

    <SidebarNavigationLinks v-bind="mainLinks" :sidebarVisible="sidebarVisible" />
    <SidebarNavigationLinks v-bind="otherLinks" :sidebarVisible="sidebarVisible" />
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  background-color: var(--sidebar-background-color);
  border-right: 1px solid var(--color-secondary-light);
  padding: 30px 0;
  width: 250px;
  display: flex;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  gap: 39px 0;

  transition:
    width 0.3s ease,
    transform 0.3s ease;
}

.sidebar-title {
  font-size: 36px;
  font-weight: 600;
}

.close-btn-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media (max-width: 834px) {
  .sidebar {
    width: 90px;
    padding: 40px 0;
    gap: 25px 0;
  }

  .sidebar.sidebar-visible {
    transform: translateX(0);
    width: 250px;
  }

  .sidebar-title {
    font-size: 20px;
  }
}

@media (max-width: 390px) {
  .sidebar {
    transform: translateX(-250px);
  }

  .sidebar.sidebar-visible {
    transform: translateX(0);
  }
}
</style>
