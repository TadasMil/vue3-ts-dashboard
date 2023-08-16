<script setup lang="ts" name="ToolbarBell">
import RoundNotifications from 'virtual:icons/ic/round-notifications'

import BaseButton from '@/components/base/BaseButton.vue'
</script>

<template>
  <div class="toolbar-bell">
    <BaseButton :icon="RoundNotifications" :size="24" density="none" color="highlight" />

    <div class="toolbar-bell__notification-dot"></div>
  </div>
</template>

<style scoped>
.toolbar-bell {
  position: relative;
  display: inline-block;
}

.toolbar-bell__notification-dot {
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
