<script setup lang="ts" name="StateCard"></script>

<template>
  <div class="state-container">
    <slot />
  </div>
</template>

<style scoped>
.state-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
