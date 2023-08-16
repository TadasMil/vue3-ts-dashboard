<script setup lang="ts" name="DashboardEmploymentSummary">
import BaseCard from '@/components/base/BaseCard.vue'

const cards = [
  {
    title: 'Available Positions',
    count: 21,
    footer: '4 Urgently needed',
    bgColor: '#FFEFE7',
    footerColor: '#FF5151'
  },
  {
    title: 'Job Open',
    count: 10,
    footer: '10 Active Hiring',
    bgColor: '#E8F0FB',
    footerColor: '#3786F1'
  },
  {
    title: 'New Employees',
    count: 8,
    footer: '3 Department',
    bgColor: '#FDEBF9',
    footerColor: '#EE61CF'
  }
]
</script>

<template>
  <div class="employment-summary">
    <BaseCard
      v-for="(card, index) in cards"
      :key="index"
      :pt="{
        root: {
          class: 'employment-summary__card',
          style: `background-color: ${card.bgColor};`
        },
        body: {
          class: 'employment-summary__card-body'
        },
        content: {
          class: 'employment-summary__card-content'
        },
        footer: {
          style: `color: ${card.footerColor};`
        }
      }"
    >
      <template #title> {{ card.title }} </template>
      <template #content> {{ card.count }} </template>
      <template #footer> {{ card.footer }} </template>
    </BaseCard>
  </div>
</template>

<style>
.employment-summary {
  display: flex;
  gap: 20px;
}

.employment-summary__card {
  flex: 1;
  min-width: 200px;
  border: none;
}

.employment-summary__card-body {
  padding: 12px 12px 12px 20px;
}

.employment-summary__card-content {
  font-size: 36px;
  color: var(--color-tertiary);
}

@media (max-width: 1000px) {
  .employment-summary {
    display: flex;
    gap: 10px;
  }
}

@media (max-width: 930px) {
  .employment-summary {
    flex-direction: column;
  }
}

@media (max-width: 834px) {
  .employment-summary {
    flex-direction: row;
  }
}

@media (max-width: 800px) {
  .employment-summary {
    flex-direction: column;
  }
}
</style>
