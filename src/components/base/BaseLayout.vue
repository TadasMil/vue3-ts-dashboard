<script setup lang="ts" name="BaseLayout"></script>

<template>
  <div class="base-layout">
    <slot />
  </div>
</template>

<style scoped>
.base-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  height: 100vh;
}
</style>
