<script setup lang="ts" name="ToolbarProfileMenu">
import ArrowDown from 'virtual:icons/mdi/chevron-down'
</script>

<template>
  <div class="toolbar-profile-menu">
    <img
      src="https://via.placeholder.com/24"
      alt="Profile Avatar"
      class="toolbar-profile-menu__avatar"
    />

    <div class="toolbar-profile-menu__dropdown">
      <span class="toolbar-profile-menu__name">Amirra John</span>
      <ArrowDown class="toolbar-profile-menu__arrow" />
    </div>
  </div>
</template>

<style scoped>
.toolbar-profile-menu {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-profile-menu__dropdown {
  display: flex;
  align-items: center;
}

.toolbar-profile-menu__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.toolbar-profile-menu__name {
  font-size: 16px;
  color: #161e54;
  text-align: center;
}

.toolbar-profile-menu__arrow {
  font-size: 24px;
  color: var(--color-highlight);
}

@media (max-width: 834px) {
  .toolbar-profile-menu {
    gap: 4px;
  }

  .toolbar-profile-menu__name {
    display: none;
  }
}
</style>
