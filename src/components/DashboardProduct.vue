<script setup lang="ts" name="DashboardProduct">
const { title, description, rating, price } = defineProps<{
  title: string
  description: string
  rating: number
  price: number
}>()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="product-box gray-box">
    <div class="product-box__title-description">
      <span class="title">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </div>

    <span>{{ rating }}</span>
    <span>{{ price }}$</span>
  </div>
</template>

<style scoped>
.product-box {
  gap: 16px;
  display: grid;
  border-radius: 6px;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  justify-content: space-between;
}

.product-box__title-description {
  display: flex;
  gap: 5px 0;
  flex-direction: column;
  flex: 1;
}

.title {
  color: var(--secondary-title-color);
}

.description {
  font-size: 12px;
  color: var(--color-secondary);
}
</style>
