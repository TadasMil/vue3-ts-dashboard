<script setup lang="ts" name="Toolbar">
import ToolbarBell from '@/components/ToolbarBell.vue'
import ToolbarSearch from '@/components/ToolbarSearch.vue'
</script>

<template>
  <div class="toolbar">
    <ToolbarSearch />

    <div>
      <ToolbarBell />
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 24px 0;
  padding-right: 50px;
}
</style>
