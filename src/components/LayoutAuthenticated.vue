<script setup lang="ts" name="LayoutAuthenticated">
import SidebarNavigation from '@/components/SidebarNavigation.vue'
</script>

<template>
  <div class="base-layout">
    <SidebarNavigation />

    <slot />
  </div>
</template>

<style scoped>
.base-layout {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  gap: 50px;
}
</style>
