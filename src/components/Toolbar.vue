<script setup lang="ts" name="Toolbar">
import ToolbarSearch from '@/components/ToolbarSearch.vue'
</script>

<template>
  <div class="toolbar">
    <ToolbarSearch />
  </div>
</template>

<style scoped>
.toolbar {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 24px 0;
}
</style>
