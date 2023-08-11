<script setup lang="ts" name="NavigationSideMenu">
import type { ISideMenuLink } from '@/types/sideMenu'

const navigationLinks: ISideMenuLink[] = [
  {
    label: 'Dashboard',
    to: { name: 'UserDashboard' }
  },
  {
    label: 'Recruitment',
    to: { name: 'UserDashboard' }
  }
]
</script>

<template>
  <nav>
    <router-link v-for="link in navigationLinks" :key="link.to.name" :to="link.to" class="nav-link">
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
