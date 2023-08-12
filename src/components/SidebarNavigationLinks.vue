<script setup lang="ts" name="SidebarNavigationLinks">
import BaseIcon from '@/components/base/BaseIcon.vue'

import { ISidebarMenuLink } from '@/types/sideMenu'

const { links, title } = defineProps<{
  title: string
  links: ISidebarMenuLink[]
}>()
</script>

<template>
  <div class="sidebar-links">
    <p class="sidebar-links-title">{{ title }}</p>

    <router-link
      v-for="link in links"
      :key="link.to.name"
      :to="link.to"
      class="sidebar-link"
      v-slot="{ isActive }"
    >
      <BaseIcon :icon="link.icon" :class="['sidebar-link-icon', isActive ? 'active-icon' : '']" />
      <p :class="['sidebar-link-text', isActive ? 'active-text' : '']">{{ link.label }}</p>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar-links {
  width: 100%;
}

.sidebar-links-title {
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-left: 30px;
  padding: 10px 0;
  opacity: 0.5;
  font-size: 12px;
}

.sidebar-link {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  transition: background-color 0.3s;
}

.sidebar-link:hover {
  background-color: var(--color-secondary-light);
}

.sidebar-link-icon {
  margin-left: 30px;
  color: var(--color-tertiary);
}

.sidebar-link-text {
  color: var(--subtitle-color);
  line-height: 24px;
}

.active-icon,
.sidebar-link:hover .sidebar-link-icon {
  color: var(--color-primary);
}

.active-text,
.sidebar-link:hover .sidebar-link-text {
  color: var(--color-primary);
}

@media (max-width: 834px) {
  .sidebar-link-text {
    display: none; /* Hide the title and link text */
  }

  .sidebar-links-title {
    font-size: 10px;
    margin: 0;
    text-align: center;
  }

  .sidebar-link {
    justify-content: center;
  }

  .sidebar-link-icon {
    margin-left: 0;
  }
}
</style>
