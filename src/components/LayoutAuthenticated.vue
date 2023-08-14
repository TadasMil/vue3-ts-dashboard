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
    <SidebarNavigation
      class="sidebarArea"
      :sidebarVisible="sidebarVisible"
      @setSidebarVisible="setSidebarVisible"
    />
    <Toolbar class="toolbarArea" @setSidebarVisible="setSidebarVisible" />

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

  grid-template-areas:
    'sidebar toolbar'
    'sidebar content';
}

.sidebarArea {
  grid-area: sidebar;
  width: 250px;
}

.toolbarArea {
  grid-area: toolbar;
  z-index: 1;
}

@media (max-width: 834px) {
  .base-layout {
    gap: 20px 0;
  }

  .sidebarArea {
    height: 100vh;
    width: 90px;
    transition: width 0.3s ease;
    z-index: 9;
  }
}

@media (max-width: 390px) {
  .base-layout {
    gap: 20px 0;
    grid-template-columns: 1fr;
    grid-template-areas:
      'toolbar'
      'content';
  }

  .sidebarArea {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-250px);
    z-index: 10;
    transition: transform 0.3s ease;
  }

  .sidebarArea[sidebar-visible='true'] {
    transform: translateX(0);
  }
}
</style>
