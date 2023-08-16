<script setup lang="ts" name="BasePage">
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="base-page">
    <h2 class="base-page-title">{{ title }}</h2>

    <slot />
  </div>
</template>

<style scoped>
.base-page {
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  padding: 21px 0px;
}

.base-page-title {
  color: var(--color-tertiary);
}

@media (max-width: 834px) {
  .base-page {
    padding: 20px 50px;
  }
}

@media (max-width: 500px) {
  .base-page {
    padding: 20px;
  }
}
</style>
