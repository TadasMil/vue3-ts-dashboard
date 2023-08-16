<script setup lang="ts" name="StateCardLoading">
import Loading from 'virtual:icons/mdi/Loading'

import StateCard from '@/components/StateCard.vue'
</script>

<template>
  <StateCard>
    <Loading class="loading-spinner" />
  </StateCard>
</template>

<style scoped>
.loading-spinner {
  animation: spin 1s linear infinite;
  height: 40px;
  width: 40px;
  color: var(--color-primary);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
