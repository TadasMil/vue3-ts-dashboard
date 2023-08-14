<script setup lang="ts" name="Toolbar">
import HamburgerMenu from 'virtual:icons/mdi/hamburger-menu'

import BaseButton from '@/components/base/BaseButton.vue'
import ToolbarBell from '@/components/ToolbarBell.vue'
import ToolbarProfileMenu from '@/components/ToolbarProfileMenu.vue'
import ToolbarSearch from '@/components/ToolbarSearch.vue'

import LeftDotsMessage from '~icons/custom/chat-left'

const emit = defineEmits<{ setSidebarVisible: [] }>()
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-left">
      <BaseButton
        class="toolbar-hamburger-menu"
        density="none"
        color="tertiary"
        :icon="HamburgerMenu"
        :size="24"
        @click="emit('setSidebarVisible')"
      />
      <ToolbarSearch />
    </div>

    <div class="toolbar-actions">
      <ToolbarBell />
      <BaseButton :icon="LeftDotsMessage" :size="24" density="none" color="tertiary" />
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
  padding: 24px 50px 24px 0;
  gap: 0 24px;
}

.toolbar-left {
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 0 12px;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0 30px;
}

.toolbar-hamburger-menu {
  display: none;
}

@media (max-width: 834px) {
  .toolbar {
    padding: 12px 20px 12px 12px;
  }

  .toolbar-hamburger-menu {
    display: block;
  }

  .toolbar-actions {
    gap: 0 20px;
  }
}
</style>
