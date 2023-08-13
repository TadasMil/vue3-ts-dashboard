<script setup lang="ts" name="ToolbarProfileMenu">
import ArrowDown from 'virtual:icons/mdi/chevron-down'
</script>

<template>
  <div class="profile-menu">
    <img src="https://via.placeholder.com/24" alt="Profile Avatar" class="profile-avatar" />

    <div class="profile-dropdown">
      <span class="profile-name">Amirra John</span>
      <ArrowDown class="dropdown-arrow" />
    </div>
  </div>
</template>

<style scoped>
.profile-menu {
  display: flex;
  align-items: center;
  gap: 12px;
}
.profile-dropdown {
  display: flex;
  align-items: center;
  gap: 0 4px;
}

.profile-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.profile-name {
  font-size: 16px;
  color: #161e54;
}

.dropdown-arrow {
  font-size: 24px;
  color: var(--color-tertiary);
}
</style>
