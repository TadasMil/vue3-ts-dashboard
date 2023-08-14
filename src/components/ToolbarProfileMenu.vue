<script setup lang="ts" name="ToolbarProfileMenu">
import ArrowDown from 'virtual:icons/mdi/chevron-down'
</script>

<template>
  <div class="toolbar-profile-menu">
    <img src="https://via.placeholder.com/24" alt="Profile Avatar" class="toolbar-profile-avatar" />

    <div class="toolbar-profile-dropdown">
      <span class="toolbar-profile-name">Amirra John</span>
      <ArrowDown class="toolbar-arrow" />
    </div>
  </div>
</template>

<style scoped>
.toolbar-profile-menu {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-profile-dropdown {
  display: flex;
  align-items: center;
}

.toolbar-profile-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.toolbar-profile-name {
  font-size: 16px;
  color: #161e54;
  text-align: center;
}

.toolbar-arrow {
  font-size: 24px;
  color: var(--color-tertiary);
}

@media (max-width: 834px) {
  .toolbar-profile-menu {
    gap: 4px;
  }

  .toolbar-profile-name {
    display: none;
  }
}
</style>
