<script setup lang="ts" name="LayoutAuthenticated">
import { ref } from 'vue'

import SidebarNavigation from '@/components/SidebarNavigation.vue'
import Toolbar from '@/components/Toolbar.vue'

const sidebarVisible = ref(false)

const setSidebarVisible = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<template>
  <div class="base-layout" :class="{ 'sidebar-active': sidebarVisible }">
    <SidebarNavigation :sidebarVisible="sidebarVisible" @setSidebarVisible="setSidebarVisible" />
    <Toolbar @setSidebarVisible="setSidebarVisible" />

    <slot />
  </div>
</template>

<style scoped>
.base-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  gap: 20px 50px;
  margin-left: calc(50px + var(--sidebar-desktop-size));
}

@media (max-width: 834px) {
  .base-layout {
    gap: 20px 0;
    margin-left: calc(var(--sidebar-mobile-size));
  }
}

@media (max-width: 390px) {
  .base-layout {
    gap: 20px 0;
    margin-left: 0;
  }
}
</style>
