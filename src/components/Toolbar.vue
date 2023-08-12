<script setup lang="ts" name="Toolbar">
import ToolbarBell from '@/components/ToolbarBell.vue'
import ToolbarSearch from '@/components/ToolbarSearch.vue'

import LeftDotsMessage from '~icons/custom/chat-left'
</script>

<template>
  <div class="toolbar">
    <ToolbarSearch />

    <div class="toolbar-actions">
      <ToolbarBell />
      <LeftDotsMessage class="toolbar-notification-icon" />
    </div>
  </div>
</template>

<style>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 24px 0;
  padding-right: 50px;
}

.toolbar-actions {
  display: flex;
  gap: 0 30px;
}

.toolbar-notification-icon {
  width: 28px;
  height: 28px;
  color: var(--color-tertiary);
}
</style>
