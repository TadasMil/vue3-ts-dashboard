<script setup lang="ts" name="DashboardProduct">
const { title, description, rating, price } = defineProps<{
  title: string
  description: string
  rating: number
  price: number
}>()
</script>

<template>
  <div class="product-box">
    <div class="product-box__title-description">
      <span>{{ title }}</span>
      <span>{{ description }}</span>
    </div>

    <span>{{ rating }}</span>
    <span>{{ price }}$</span>
  </div>
</template>

<style scoped>
.product-box {
  border-radius: 6px;
  border: 0.5px solid #e0e0e0;
  background: var(--background-color, #fafafa);
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  background-color: var(--color-off-white);
  justify-content: space-between;
}

.product-box__title-description {
  display: flex;
  gap: 5px 0;
  flex-direction: column;
  flex: 1;
}
</style>
