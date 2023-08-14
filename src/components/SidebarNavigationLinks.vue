<script setup lang="ts" name="SidebarNavigationLinks">
import BaseIcon from '@/components/base/BaseIcon.vue'

import { ISidebarMenuLink } from '@/types/sideMenu'

const { links, title, sidebarVisible } = defineProps<{
  title: string
  links: ISidebarMenuLink[]
  sidebarVisible: boolean
}>()
</script>

<template>
  <div class="sidebar-links" :class="{ 'tablet-sidebar-hidden': !sidebarVisible }">
    <p class="sidebar-links-title">{{ title }}</p>

    <router-link
      v-for="link in links"
      :key="link.to.name"
      :to="link.to"
      class="sidebar-link"
      v-slot="{ isActive }"
    >
      <BaseIcon :icon="link.icon" :class="['sidebar-link-icon', isActive ? 'active-icon' : '']" />
      <p
        :class="[
          'sidebar-link-text',
          isActive ? 'active-text' : '',
          !sidebarVisible ? 'text-hidden' : ''
        ]"
      >
        {{ link.label }}
      </p>
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
  color: var(--color-highlight);
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
  .tablet-sidebar-hidden .sidebar-link-text {
    display: none;
  }

  .tablet-sidebar-hidden .sidebar-links-title {
    font-size: 10px;
    margin: 0;
    text-align: center;
  }

  .tablet-sidebar-hidden .sidebar-link {
    justify-content: center;
  }

  .tablet-sidebar-hidden .sidebar-link-icon {
    margin-left: 0;
  }
}
</style>
