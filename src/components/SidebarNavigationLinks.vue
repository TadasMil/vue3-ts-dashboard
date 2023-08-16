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
  <div class="sidebar-links" :class="{ 'sidebar-links--tablet-hidden': !sidebarVisible }">
    <p class="sidebar-links__title">{{ title }}</p>

    <router-link
      v-for="link in links"
      :key="link.to.name"
      :to="link.to"
      class="sidebar-links__link"
      v-slot="{ isActive }"
    >
      <BaseIcon
        :icon="link.icon"
        :class="['sidebar-links__icon', isActive ? 'sidebar-links__icon--active' : '']"
      />
      <p
        :class="[
          'sidebar-links__text',
          isActive ? 'sidebar-links__text--active' : '',
          !sidebarVisible ? 'sidebar-links__text--hidden' : ''
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

.sidebar-links__title {
  color: var(--color-secondary);
  text-transform: uppercase;
  margin-left: 30px;
  padding: 10px 0;
  opacity: 0.5;
  font-size: 12px;
}

.sidebar-links__link {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  transition: background-color 0.3s;
}

.sidebar-links__link:hover {
  background-color: var(--color-secondary-light);
}

.sidebar-links__icon {
  margin-left: 30px;
  color: var(--color-highlight);
}

.sidebar-links__text {
  color: var(--subtitle-color);
  line-height: 24px;
}

.sidebar-links__icon--active,
.sidebar-links__link:hover .sidebar-links__icon {
  color: var(--color-primary);
}

.sidebar-links__text--active,
.sidebar-links__link:hover .sidebar-links__text {
  color: var(--color-primary);
}

@media (max-width: 834px) {
  .sidebar-links--tablet-hidden .sidebar-links__text {
    display: none;
  }

  .sidebar-links--tablet-hidden .sidebar-links__title {
    font-size: 10px;
    margin: 0;
    text-align: center;
  }

  .sidebar-links--tablet-hidden .sidebar-links__link {
    justify-content: center;
  }

  .sidebar-links--tablet-hidden .sidebar-links__icon {
    margin-left: 0;
  }
}
</style>
