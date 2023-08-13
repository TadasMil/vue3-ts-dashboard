<script setup lang="ts" name="ToolbarBell">
import RoundNotifications from 'virtual:icons/ic/round-notifications'

import BaseIcon from '@/components/base/BaseIcon.vue'
</script>

<template>
  <div class="toolbar-bell-container">
    <BaseIcon :icon="RoundNotifications" :size="28" />

    <div class="toolbar-notification-dot"></div>
  </div>
</template>

<style scoped>
.toolbar-bell-container {
  position: relative;
  display: inline-block;
}

.toolbar-notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: var(--color-primary);
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-30%, 30%);
}
</style>
