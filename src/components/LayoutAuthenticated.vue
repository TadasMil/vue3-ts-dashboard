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
  <div
    class="layout-authenticated"
    :class="{ 'layout-authenticated--sidebar-active': sidebarVisible }"
  >
    <SidebarNavigation :sidebarVisible="sidebarVisible" @setSidebarVisible="setSidebarVisible" />
    <Toolbar @setSidebarVisible="setSidebarVisible" />

    <slot />
  </div>
</template>

<style scoped>
.layout-authenticated {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  margin-left: calc(50px + var(--sidebar-desktop-size));
}

@media (max-width: 834px) {
  .layout-authenticated {
    margin-left: calc(var(--sidebar-mobile-size));
  }
}

@media (max-width: 390px) {
  .layout-authenticated {
    gap: 0;
    margin-left: 0;
  }
}
</style>
