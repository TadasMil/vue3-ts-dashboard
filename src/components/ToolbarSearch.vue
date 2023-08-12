<script setup lang="ts" name="ToolbarSearch">
import Search from '~icons/custom/search'
</script>

<template>
  <div class="search-container">
    <input class="search-input" placeholder="Search" />
    <Search class="search-icon" />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  width: 343px;
  padding: 10px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid var(--color-light-gray);
  background: var(--color-off-white);
}

.search-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  outline: none;
  padding-right: 10px;
  height: 24px;
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
  font-size: 24px;
}
</style>
