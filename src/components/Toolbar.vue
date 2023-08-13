<script setup lang="ts" name="Toolbar">
import BaseIcon from '@/components/base/BaseIcon.vue'
import ToolbarBell from '@/components/ToolbarBell.vue'
import ToolbarProfileMenu from '@/components/ToolbarProfileMenu.vue'
import ToolbarSearch from '@/components/ToolbarSearch.vue'

import LeftDotsMessage from '~icons/custom/chat-left'
</script>

<template>
  <div class="toolbar">
    <ToolbarSearch />

    <div class="toolbar-actions">
      <ToolbarBell />
      <BaseIcon :icon="LeftDotsMessage" :size="28" />
      <ToolbarProfileMenu />
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
  align-items: center;
  gap: 0 30px;
}
</style>
