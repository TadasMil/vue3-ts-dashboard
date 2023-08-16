<script setup lang="ts" name="StateCardError">
import StateCard from '@/components/StateCard.vue'

const { subtitle, title, message } = defineProps<{
  title?: string
  subtitle?: string
  message?: string
}>()
</script>

<template>
  <StateCard>
    <div class="error-card">
      <p v-if="title" class="error-card__title">{{ title }}</p>
      <p v-if="subtitle" class="error-card__subtitle">{{ subtitle }}</p>
      <p v-if="message" class="error-card__message">{{ message }}</p>
    </div>
  </StateCard>
</template>

<style scoped>
.error-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
}

.error-card__title {
  color: var(--color-primary);
  font-size: 40px;
}

.error-card__subtitle {
  color: var(--color-secondary);
  font-size: 18px;
}

.error-card__message {
  font-size: 12px;
}
</style>
