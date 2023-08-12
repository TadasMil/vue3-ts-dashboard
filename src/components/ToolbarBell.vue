<script setup lang="ts" name="ToolbarBell">
import RoundNotifications from 'virtual:icons/ic/round-notifications'
</script>

<template>
  <div class="bell-container">
    <RoundNotifications class="notification-icon" />
    <div class="notification-dot"></div>
  </div>
</template>

<style scoped>
.bell-container {
  position: relative;
  display: inline-block;
}

.notification-icon {
  width: 28px;
  height: 28px;
  color: var(--color-tertiary);
}

.notification-dot {
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
