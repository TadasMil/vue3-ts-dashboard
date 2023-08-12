<script setup lang="ts" name="LayoutAuthenticated">
import SidebarNavigation from '@/components/SidebarNavigation.vue'
import Toolbar from '@/components/Toolbar.vue'
</script>

<template>
  <div class="base-layout">
    <SidebarNavigation class="sidebarArea" />
    <Toolbar class="toolbarArea" />

    <slot />
  </div>
</template>

<style scoped>
.base-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  gap: 20px 50px;

  /* Grid areas */
  grid-template-areas:
    'sidebar toolbar'
    'sidebar content';
}

.sidebarArea {
  grid-area: sidebar;
}

.toolbarArea {
  grid-area: toolbar;
}
</style>
