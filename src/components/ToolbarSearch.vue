<script setup lang="ts" name="ToolbarSearch">
import BaseButton from '@/components/base/BaseButton.vue'

import Search from '~icons/custom/search'
</script>

<template>
  <div class="toolbar-search">
    <input class="toolbar-search__input" placeholder="Search" />
    <BaseButton
      class="toolbar-search__icon"
      density="none"
      color="highlight"
      :icon="Search"
      :size="24"
    />
  </div>
</template>

<style scoped>
.toolbar-search {
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

.toolbar-search__input {
  border: none;
  background: transparent;
  outline: none;
  padding-right: 10px;
  width: 50%;
  color: var(--color-quaternary);
  font-size: 16px;
}

.toolbar-search__input::placeholder {
  opacity: 1;
}

.toolbar-search__input:focus::placeholder {
  color: transparent;
}

.toolbar-search__icon {
  color: #b2b2b2;
  width: 24px;
  height: 24px;
}

@media (max-width: 834px) {
  .toolbar-search {
    max-width: 245px;
    height: 36px;
  }
}

@media (max-width: 450px) {
  .toolbar-search {
    justify-content: center;
    padding: 0px;
    border: none;
    flex-grow: 0;
    background: transparent;
  }

  .toolbar-search__input {
    display: none;
  }
}
</style>
