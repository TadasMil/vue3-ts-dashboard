<script setup lang="ts" name="ToolbarSearch">
import BaseButton from '@/components/base/BaseButton.vue'

import Search from '~icons/custom/search'
</script>

<template>
  <div class="toolbar-search-container">
    <input class="search-input" placeholder="Search" />
    <BaseButton class="search-icon" density="none" color="highlight" :icon="Search" :size="24" />
  </div>
</template>

<style scoped>
.toolbar-search-container {
  display: flex;
  width: 30%;
  max-width: 343px;
  padding: 10px 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  height: 44px;
  border: 1px solid var(--color-light-gray);
  background: var(--color-off-white);
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  padding-right: 10px;
  width: 50%;
}

.search-input::placeholder {
  color: var(--color-quaternary);
  opacity: 1;
}

.search-input:-ms-input-placeholder {
  color: var(--color-quaternary);
}

.search-input::-ms-input-placeholder {
  color: var(--color-quaternary);
}

.search-input:focus::placeholder {
  color: transparent;
}

.search-input::placeholder {
  font-size: 16px;
}

.search-icon {
  color: #b2b2b2;
  width: 24px;
  height: 24px;
}

@media (max-width: 834px) {
  .toolbar-search-container {
    max-width: 245px;
    height: 36px;
  }
}

@media (max-width: 450px) {
  .toolbar-search-container {
    justify-content: center;
    padding: 0px;
    border: none;
    flex-grow: 0;
    background: transparent;
  }

  .search-input {
    display: none;
  }
}
</style>
