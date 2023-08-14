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
  padding-top: 21px;
}

.base-page-title {
  color: var(--color-tertiary);
}
</style>
